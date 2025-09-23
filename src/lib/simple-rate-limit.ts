import { Clock, Shield, X } from 'lucide-react'

export interface RateLimitConfig {
  windowMs: number
  maxRequests: number
}

export interface RateLimitEntry {
  count: number
  windowStart: number
  resetTime: number
}

export interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetTime: number
  retryAfter?: number
}

export interface RateLimitStatus {
  identifier: string
  requests: number
  limit: number
  windowStart: number
  resetTime: number
  blocked: boolean
}

export class SimpleRateLimiter {
  private storage: Map<string, RateLimitEntry> = new Map()
  private cleanupInterval: NodeJS.Timeout | null = null
  private config: RateLimitConfig

  constructor(config: RateLimitConfig) {
    this.config = config
    this.startCleanup()
  }

  /**
   * Check if a request should be allowed for the given identifier
   */
  checkLimit(identifier: string): RateLimitResult {
    const now = Date.now()
    const entry = this.storage.get(identifier)

    // If no entry exists or window has expired, create new entry
    if (!entry || now >= entry.resetTime) {
      const newEntry: RateLimitEntry = {
        count: 1,
        windowStart: now,
        resetTime: now + this.config.windowMs
      }
      this.storage.set(identifier, newEntry)
      
      return {
        allowed: true,
        remaining: this.config.maxRequests - 1,
        resetTime: newEntry.resetTime
      }
    }

    // Check if limit exceeded
    if (entry.count >= this.config.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: entry.resetTime,
        retryAfter: Math.ceil((entry.resetTime - now) / 1000)
      }
    }

    // Increment count
    entry.count++
    this.storage.set(identifier, entry)

    return {
      allowed: true,
      remaining: this.config.maxRequests - entry.count,
      resetTime: entry.resetTime
    }
  }

  /**
   * Get current rate limit status for identifier
   */
  getStatus(identifier: string): RateLimitStatus | null {
    const entry = this.storage.get(identifier)
    if (!entry) return null

    const now = Date.now()
    const isExpired = now >= entry.resetTime

    return {
      identifier,
      requests: isExpired ? 0 : entry.count,
      limit: this.config.maxRequests,
      windowStart: entry.windowStart,
      resetTime: entry.resetTime,
      blocked: !isExpired && entry.count >= this.config.maxRequests
    }
  }

  /**
   * Reset rate limit for specific identifier
   */
  reset(identifier: string): void {
    this.storage.delete(identifier)
  }

  /**
   * Clear all rate limit entries
   */
  clearAll(): void {
    this.storage.clear()
  }

  /**
   * Get all current rate limit statuses
   */
  getAllStatuses(): RateLimitStatus[] {
    const statuses: RateLimitStatus[] = []
    const now = Date.now()

    for (const [identifier, entry] of this.storage.entries()) {
      const isExpired = now >= entry.resetTime
      statuses.push({
        identifier,
        requests: isExpired ? 0 : entry.count,
        limit: this.config.maxRequests,
        windowStart: entry.windowStart,
        resetTime: entry.resetTime,
        blocked: !isExpired && entry.count >= this.config.maxRequests
      })
    }

    return statuses
  }

  /**
   * Get configuration
   */
  getConfig(): RateLimitConfig {
    return { ...this.config }
  }

  /**
   * Update configuration
   */
  updateConfig(config: Partial<RateLimitConfig>): void {
    this.config = { ...this.config, ...config }
  }

  /**
   * Get storage size
   */
  getStorageSize(): number {
    return this.storage.size
  }

  /**
   * Start automatic cleanup of expired entries
   */
  private startCleanup(): void {
    // Clean up every minute
    this.cleanupInterval = setInterval(() => {
      this.cleanupExpired()
    }, 60000)
  }

  /**
   * Clean up expired entries
   */
  private cleanupExpired(): void {
    const now = Date.now()
    for (const [identifier, entry] of this.storage.entries()) {
      if (now >= entry.resetTime) {
        this.storage.delete(identifier)
      }
    }
  }

  /**
   * Stop the rate limiter and cleanup
   */
  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval)
      this.cleanupInterval = null
    }
    this.storage.clear()
  }
}

// Utility functions for common rate limiting scenarios

/**
 * Create a rate limiter for OTP verification
 */
export function createOTPRateLimiter(): SimpleRateLimiter {
  return new SimpleRateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5 // 5 attempts per 15 minutes
  })
}

/**
 * Create a rate limiter for login attempts
 */
export function createLoginRateLimiter(): SimpleRateLimiter {
  return new SimpleRateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 10 // 10 attempts per 15 minutes
  })
}

/**
 * Create a rate limiter for API requests
 */
export function createAPIRateLimiter(): SimpleRateLimiter {
  return new SimpleRateLimiter({
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 60 // 60 requests per minute
  })
}

/**
 * Create a rate limiter for password reset
 */
export function createPasswordResetRateLimiter(): SimpleRateLimiter {
  return new SimpleRateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 3 // 3 attempts per hour
  })
}

/**
 * Format remaining time until reset
 */
export function formatResetTime(resetTime: number): string {
  const now = Date.now()
  const remaining = Math.max(0, resetTime - now)
  
  if (remaining === 0) return 'Now'
  
  const minutes = Math.floor(remaining / (60 * 1000))
  const seconds = Math.floor((remaining % (60 * 1000)) / 1000)
  
  if (minutes > 0) {
    return `${minutes}m ${seconds}s`
  }
  
  return `${seconds}s`
}

/**
 * Format time duration
 */
export function formatDuration(ms: number): string {
  const minutes = Math.floor(ms / (60 * 1000))
  const seconds = Math.floor((ms % (60 * 1000)) / 1000)
  
  if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`
  }
  
  return `${seconds} second${seconds !== 1 ? 's' : ''}`
}

/**
 * Get IP address from request headers (for use in Next.js API routes)
 */
export function getClientIP(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for')
  const realIP = headers.get('x-real-ip')
  const cfIP = headers.get('cf-connecting-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP.trim()
  }
  
  if (cfIP) {
    return cfIP.trim()
  }
  
  return 'unknown'
}

/**
 * Express/Next.js middleware helper
 */
export function createRateLimitMiddleware(rateLimiter: SimpleRateLimiter) {
  return (getIdentifier: (req: any) => string) => {
    return (req: any, res: any, next: any) => {
      const identifier = getIdentifier(req)
      const result = rateLimiter.checkLimit(identifier)
      
      // Set rate limit headers
      res.setHeader('X-RateLimit-Limit', rateLimiter.getConfig().maxRequests)
      res.setHeader('X-RateLimit-Remaining', result.remaining)
      res.setHeader('X-RateLimit-Reset', Math.ceil(result.resetTime / 1000))
      
      if (!result.allowed) {
        res.setHeader('Retry-After', result.retryAfter || 0)
        return res.status(429).json({
          error: 'Too Many Requests',
          message: 'Rate limit exceeded',
          retryAfter: result.retryAfter
        })
      }
      
      next()
    }
  }
}