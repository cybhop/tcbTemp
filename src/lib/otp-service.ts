import crypto from 'crypto';

// Types
interface OTPRecord {
  code: string;
  email: string;
  type: 'login' | 'signup';
  createdAt: number;
  attempts: number;
  isExpired: boolean;
  isBlocked: boolean;
}

interface OTPGeneration {
  email: string;
  type: 'login' | 'signup';
  lastGeneratedAt: number;
  count: number;
}

interface OTPValidation {
  isValid: boolean;
  error?: string;
  attemptsRemaining?: number;
}

interface OTPGenerationResult {
  success: boolean;
  otp?: string;
  error?: string;
  expiresAt?: number;
}

// Constants
const OTP_EXPIRATION_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds
const MAX_OTP_ATTEMPTS = 3;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_OTP_GENERATIONS_PER_WINDOW = 3;

export class OTPService {
  private otpStorage: Map<string, OTPRecord> = new Map();
  private rateLimitStorage: Map<string, OTPGeneration> = new Map();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Start cleanup interval to remove expired OTPs every minute
    this.cleanupInterval = setInterval(() => {
      this.cleanupExpiredOTPs();
    }, 60000);
  }

  /**
   * Generate a cryptographically secure 6-digit OTP
   */
  private generateSecureOTP(): string {
    // Generate random bytes and convert to 6-digit number
    const randomBytes = crypto.randomBytes(4);
    const randomNumber = randomBytes.readUInt32BE(0);
    const otp = (randomNumber % 1000000).toString().padStart(6, '0');
    
    this.logOperation('OTP_GENERATED', { otpLength: otp.length });
    return otp;
  }

  /**
   * Validate and sanitize email address
   */
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.toLowerCase().trim());
  }

  /**
   * Sanitize input strings to prevent injection attacks
   */
  private sanitizeInput(input: string): string {
    return input.trim().toLowerCase().replace(/[<>'"]/g, '');
  }

  /**
   * Generate rate limit key for email and type combination
   */
  private getRateLimitKey(email: string, type: 'login' | 'signup'): string {
    return `${email}:${type}`;
  }

  /**
   * Generate OTP storage key
   */
  private getStorageKey(email: string, type: 'login' | 'signup'): string {
    return `${email}:${type}`;
  }

  /**
   * Check if rate limit is exceeded
   */
  private checkRateLimit(email: string, type: 'login' | 'signup'): boolean {
    const rateLimitKey = this.getRateLimitKey(email, type);
    const now = Date.now();
    const rateLimit = this.rateLimitStorage.get(rateLimitKey);

    if (!rateLimit) {
      this.rateLimitStorage.set(rateLimitKey, {
        email,
        type,
        lastGeneratedAt: now,
        count: 1
      });
      return false;
    }

    // Reset counter if window has passed
    if (now - rateLimit.lastGeneratedAt > RATE_LIMIT_WINDOW) {
      rateLimit.count = 1;
      rateLimit.lastGeneratedAt = now;
      return false;
    }

    // Check if limit exceeded
    if (rateLimit.count >= MAX_OTP_GENERATIONS_PER_WINDOW) {
      this.logOperation('RATE_LIMIT_EXCEEDED', { email, type });
      return true;
    }

    rateLimit.count++;
    return false;
  }

  /**
   * Clean up expired OTPs and rate limit records
   */
  private cleanupExpiredOTPs(): void {
    const now = Date.now();
    let expiredCount = 0;

    // Clean up expired OTPs
    for (const [key, record] of this.otpStorage.entries()) {
      if (now - record.createdAt > OTP_EXPIRATION_TIME) {
        this.otpStorage.delete(key);
        expiredCount++;
      }
    }

    // Clean up old rate limit records
    for (const [key, rateLimit] of this.rateLimitStorage.entries()) {
      if (now - rateLimit.lastGeneratedAt > RATE_LIMIT_WINDOW) {
        this.rateLimitStorage.delete(key);
      }
    }

    if (expiredCount > 0) {
      this.logOperation('CLEANUP_COMPLETED', { expiredCount });
    }
  }

  /**
   * Log operations for monitoring and debugging
   */
  private logOperation(operation: string, details: any = {}): void {
    const logEntry = {
      timestamp: new Date().toISOString(),
      operation,
      details,
      storageSize: this.otpStorage.size,
      rateLimitSize: this.rateLimitStorage.size
    };

    console.log('[OTP Service]', JSON.stringify(logEntry, null, 2));
  }

  /**
   * Generate OTP for email and type
   */
  public generateOTP(email: string, type: 'login' | 'signup'): OTPGenerationResult {
    try {
      // Sanitize inputs
      const sanitizedEmail = this.sanitizeInput(email);

      // Validate email
      if (!this.validateEmail(sanitizedEmail)) {
        this.logOperation('INVALID_EMAIL', { email: sanitizedEmail });
        return {
          success: false,
          error: 'Invalid email address format'
        };
      }

      // Check rate limit
      if (this.checkRateLimit(sanitizedEmail, type)) {
        return {
          success: false,
          error: 'Too many OTP requests. Please try again later.'
        };
      }

      // Generate OTP
      const otp = this.generateSecureOTP();
      const now = Date.now();
      const storageKey = this.getStorageKey(sanitizedEmail, type);
      const expiresAt = now + OTP_EXPIRATION_TIME;

      // Store OTP
      this.otpStorage.set(storageKey, {
        code: otp,
        email: sanitizedEmail,
        type,
        createdAt: now,
        attempts: 0,
        isExpired: false,
        isBlocked: false
      });

      this.logOperation('OTP_GENERATED_SUCCESS', {
        email: sanitizedEmail,
        type,
        expiresAt: new Date(expiresAt).toISOString()
      });

      return {
        success: true,
        otp,
        expiresAt
      };

    } catch (error) {
      this.logOperation('OTP_GENERATION_ERROR', { error: error.message });
      return {
        success: false,
        error: 'Failed to generate OTP. Please try again.'
      };
    }
  }

  /**
   * Validate OTP for email and type
   */
  public validateOTP(email: string, otp: string, type: 'login' | 'signup'): OTPValidation {
    try {
      // Sanitize inputs
      const sanitizedEmail = this.sanitizeInput(email);
      const sanitizedOTP = otp.trim();

      // Validate email
      if (!this.validateEmail(sanitizedEmail)) {
        this.logOperation('VALIDATION_INVALID_EMAIL', { email: sanitizedEmail });
        return {
          isValid: false,
          error: 'Invalid email address format'
        };
      }

      // Validate OTP format
      if (!/^\d{6}$/.test(sanitizedOTP)) {
        this.logOperation('VALIDATION_INVALID_OTP_FORMAT', { email: sanitizedEmail });
        return {
          isValid: false,
          error: 'OTP must be 6 digits'
        };
      }

      const storageKey = this.getStorageKey(sanitizedEmail, type);
      const record = this.otpStorage.get(storageKey);

      // Check if OTP exists
      if (!record) {
        this.logOperation('VALIDATION_OTP_NOT_FOUND', { email: sanitizedEmail, type });
        return {
          isValid: false,
          error: 'OTP not found or expired'
        };
      }

      // Check if OTP is blocked
      if (record.isBlocked) {
        this.logOperation('VALIDATION_OTP_BLOCKED', { email: sanitizedEmail, type });
        return {
          isValid: false,
          error: 'OTP is blocked due to too many failed attempts'
        };
      }

      // Check if OTP is expired
      const now = Date.now();
      if (now - record.createdAt > OTP_EXPIRATION_TIME) {
        record.isExpired = true;
        this.otpStorage.delete(storageKey);
        this.logOperation('VALIDATION_OTP_EXPIRED', { email: sanitizedEmail, type });
        return {
          isValid: false,
          error: 'OTP has expired'
        };
      }

      // Increment attempts
      record.attempts++;

      // Check if OTP is correct
      if (record.code !== sanitizedOTP) {
        const attemptsRemaining = MAX_OTP_ATTEMPTS - record.attempts;

        if (attemptsRemaining <= 0) {
          record.isBlocked = true;
          this.logOperation('VALIDATION_OTP_BLOCKED_MAX_ATTEMPTS', { email: sanitizedEmail, type });
          return {
            isValid: false,
            error: 'OTP is blocked due to too many failed attempts',
            attemptsRemaining: 0
          };
        }

        this.logOperation('VALIDATION_OTP_INCORRECT', {
          email: sanitizedEmail,
          type,
          attemptsRemaining
        });

        return {
          isValid: false,
          error: 'Incorrect OTP',
          attemptsRemaining
        };
      }

      // OTP is valid - remove from storage
      this.otpStorage.delete(storageKey);
      this.logOperation('VALIDATION_OTP_SUCCESS', { email: sanitizedEmail, type });

      return {
        isValid: true
      };

    } catch (error) {
      this.logOperation('VALIDATION_ERROR', { error: error.message });
      return {
        isValid: false,
        error: 'Failed to validate OTP. Please try again.'
      };
    }
  }

  /**
   * Get OTP status for monitoring
   */
  public getOTPStatus(email: string, type: 'login' | 'signup'): {
    exists: boolean;
    attemptsRemaining?: number;
    expiresAt?: number;
    isBlocked?: boolean;
  } {
    const sanitizedEmail = this.sanitizeInput(email);
    const storageKey = this.getStorageKey(sanitizedEmail, type);
    const record = this.otpStorage.get(storageKey);

    if (!record) {
      return { exists: false };
    }

    const now = Date.now();
    const isExpired = now - record.createdAt > OTP_EXPIRATION_TIME;

    if (isExpired) {
      this.otpStorage.delete(storageKey);
      return { exists: false };
    }

    return {
      exists: true,
      attemptsRemaining: Math.max(0, MAX_OTP_ATTEMPTS - record.attempts),
      expiresAt: record.createdAt + OTP_EXPIRATION_TIME,
      isBlocked: record.isBlocked
    };
  }

  /**
   * Clear all OTPs for an email (useful for testing or admin functions)
   */
  public clearOTPsForEmail(email: string): void {
    const sanitizedEmail = this.sanitizeInput(email);
    const loginKey = this.getStorageKey(sanitizedEmail, 'login');
    const signupKey = this.getStorageKey(sanitizedEmail, 'signup');

    this.otpStorage.delete(loginKey);
    this.otpStorage.delete(signupKey);

    this.logOperation('OTPS_CLEARED', { email: sanitizedEmail });
  }

  /**
   * Get service statistics
   */
  public getStatistics(): {
    totalOTPs: number;
    rateLimitEntries: number;
    otpsByType: { login: number; signup: number };
  } {
    const otpsByType = { login: 0, signup: 0 };

    for (const record of this.otpStorage.values()) {
      otpsByType[record.type]++;
    }

    return {
      totalOTPs: this.otpStorage.size,
      rateLimitEntries: this.rateLimitStorage.size,
      otpsByType
    };
  }

  /**
   * Cleanup and destroy the service
   */
  public destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    this.otpStorage.clear();
    this.rateLimitStorage.clear();
    this.logOperation('SERVICE_DESTROYED');
  }
}

// Export singleton instance
export const otpService = new OTPService();

// Export types for use in other modules
export type {
  OTPRecord,
  OTPValidation,
  OTPGenerationResult
};