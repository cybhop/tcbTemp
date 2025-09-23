import { NextRequest, NextResponse } from 'next/server';

// Storage interface for different backends
export interface RateLimitStore {
  get(key: string): Promise<RateLimitEntry | null>;
  set(key: string, value: RateLimitEntry): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
  cleanup(): Promise<void>;
}

// Rate limit entry structure
export interface RateLimitEntry {
  count: number;
  resetTime: number;
  createdAt: number;
}

// Rate limit configuration
export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  keyGenerator?: (req: NextRequest) => string;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
  message?: string;
  statusCode?: number;
  headers?: Record<string, string>;
  onLimitReached?: (req: NextRequest, key: string) => void;
}

// Default configuration
const defaultConfig: RateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100,
  keyGenerator: (req: NextRequest) => {
    return req.ip || req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  },
  skipSuccessfulRequests: false,
  skipFailedRequests: false,
  message: 'Too many requests from this IP, please try again later.',
  statusCode: 429,
  headers: {
    'Retry-After': '900', // 15 minutes
  },
};

// In-memory storage implementation
class MemoryStore implements RateLimitStore {
  private store = new Map<string, RateLimitEntry>();
  private cleanupInterval: NodeJS.Timeout | null = null;

  constructor(cleanupIntervalMs: number = 5 * 60 * 1000) {
    this.startCleanup(cleanupIntervalMs);
  }

  async get(key: string): Promise<RateLimitEntry | null> {
    const entry = this.store.get(key);
    if (!entry) return null;

    // Check if entry has expired
    if (Date.now() > entry.resetTime) {
      this.store.delete(key);
      return null;
    }

    return entry;
  }

  async set(key: string, value: RateLimitEntry): Promise<void> {
    this.store.set(key, value);
  }

  async delete(key: string): Promise<void> {
    this.store.delete(key);
  }

  async clear(): Promise<void> {
    this.store.clear();
  }

  async cleanup(): Promise<void> {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, entry] of this.store.entries()) {
      if (now > entry.resetTime) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.store.delete(key));
  }

  private startCleanup(intervalMs: number): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }

    this.cleanupInterval = setInterval(() => {
      this.cleanup().catch(console.error);
    }, intervalMs);
  }

  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
    this.store.clear();
  }
}

// Rate limit result
export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
  retryAfter?: number;
}

// Main rate limiter class
export class RateLimiter {
  private store: RateLimitStore;
  private config: RateLimitConfig;

  constructor(config: Partial<RateLimitConfig> = {}, store?: RateLimitStore) {
    this.config = { ...defaultConfig, ...config };
    this.store = store || new MemoryStore();
  }

  async check(req: NextRequest): Promise<RateLimitResult> {
    try {
      const key = this.config.keyGenerator!(req);
      const now = Date.now();
      const resetTime = now + this.config.windowMs;

      let entry = await this.store.get(key);

      if (!entry) {
        // First request
        entry = {
          count: 1,
          resetTime,
          createdAt: now,
        };
        await this.store.set(key, entry);

        return {
          success: true,
          limit: this.config.maxRequests,
          remaining: this.config.maxRequests - 1,
          resetTime,
        };
      }

      // Check if window has expired
      if (now > entry.resetTime) {
        // Reset the window
        entry = {
          count: 1,
          resetTime,
          createdAt: now,
        };
        await this.store.set(key, entry);

        return {
          success: true,
          limit: this.config.maxRequests,
          remaining: this.config.maxRequests - 1,
          resetTime,
        };
      }

      // Increment count
      entry.count++;
      await this.store.set(key, entry);

      // Check if limit exceeded
      if (entry.count > this.config.maxRequests) {
        if (this.config.onLimitReached) {
          this.config.onLimitReached(req, key);
        }

        return {
          success: false,
          limit: this.config.maxRequests,
          remaining: 0,
          resetTime: entry.resetTime,
          retryAfter: Math.ceil((entry.resetTime - now) / 1000),
        };
      }

      return {
        success: true,
        limit: this.config.maxRequests,
        remaining: this.config.maxRequests - entry.count,
        resetTime: entry.resetTime,
      };
    } catch (error) {
      console.error('Rate limiter error:', error);
      // Graceful degradation - allow request if rate limiter fails
      return {
        success: true,
        limit: this.config.maxRequests,
        remaining: this.config.maxRequests,
        resetTime: Date.now() + this.config.windowMs,
      };
    }
  }

  async reset(req: NextRequest): Promise<void> {
    const key = this.config.keyGenerator!(req);
    await this.store.delete(key);
  }

  async cleanup(): Promise<void> {
    await this.store.cleanup();
  }
}

// Middleware function for easy integration
export function createRateLimitMiddleware(config: Partial<RateLimitConfig> = {}, store?: RateLimitStore) {
  const limiter = new RateLimiter(config, store);

  return async (req: NextRequest): Promise<NextResponse | null> => {
    const result = await limiter.check(req);

    if (!result.success) {
      const headers = new Headers(config.headers || defaultConfig.headers);
      headers.set('X-RateLimit-Limit', result.limit.toString());
      headers.set('X-RateLimit-Remaining', result.remaining.toString());
      headers.set('X-RateLimit-Reset', result.resetTime.toString());

      if (result.retryAfter) {
        headers.set('Retry-After', result.retryAfter.toString());
      }

      return new NextResponse(
        JSON.stringify({
          error: config.message || defaultConfig.message,
          limit: result.limit,
          remaining: result.remaining,
          resetTime: result.resetTime,
          retryAfter: result.retryAfter,
        }),
        {
          status: config.statusCode || defaultConfig.statusCode,
          headers,
        }
      );
    }

    return null;
  };
}

// Higher-order function for API route protection
export function withRateLimit(
  handler: (req: NextRequest) => Promise<NextResponse>,
  config: Partial<RateLimitConfig> = {},
  store?: RateLimitStore
) {
  const middleware = createRateLimitMiddleware(config, store);

  return async (req: NextRequest): Promise<NextResponse> => {
    const rateLimitResponse = await middleware(req);
    
    if (rateLimitResponse) {
      return rateLimitResponse;
    }

    return handler(req);
  };
}

// Predefined rate limit configurations
export const rateLimitConfigs = {
  strict: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 10,
    message: 'Rate limit exceeded. Please try again later.',
  },
  normal: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100,
    message: 'Too many requests. Please try again later.',
  },
  relaxed: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 1000,
    message: 'Rate limit exceeded. Please try again later.',
  },
  auth: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5,
    message: 'Too many authentication attempts. Please try again later.',
  },
  api: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 60,
    message: 'API rate limit exceeded. Please try again later.',
  },
};

// Global rate limiter instance
export const globalRateLimiter = new RateLimiter();

// Utility function to get client IP
export function getClientIP(req: NextRequest): string {
  return (
    req.ip ||
    req.headers.get('x-forwarded-for')?.split(',')[0] ||
    req.headers.get('x-real-ip') ||
    req.headers.get('cf-connecting-ip') ||
    req.headers.get('x-client-ip') ||
    'unknown'
  );
}

// Custom key generators
export const keyGenerators = {
  ip: (req: NextRequest) => getClientIP(req),
  userAgent: (req: NextRequest) => `${getClientIP(req)}-${req.headers.get('user-agent') || 'unknown'}`,
  endpoint: (endpoint: string) => (req: NextRequest) => `${endpoint}-${getClientIP(req)}`,
  user: (getUserId: (req: NextRequest) => string) => (req: NextRequest) => `user-${getUserId(req)}`,
};

// Export the memory store for testing
export { MemoryStore };