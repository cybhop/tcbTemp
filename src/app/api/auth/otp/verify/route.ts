import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createOTPRateLimiter, getClientIP } from '@/lib/simple-rate-limit';
import { otpService } from '@/lib/otp-service';
import { logger } from '@/lib/logger';

// Validation schema for OTP verification request
const verifyOtpSchema = z.object({
  email: z.string().email('Invalid email address').trim().toLowerCase(),
  otp: z.string().length(6, 'OTP must be exactly 6 digits').regex(/^\d+$/, 'OTP must contain only digits'),
  type: z.enum(['login', 'signup'], { required_error: 'Type must be either login or signup' })
});

// Create rate limiter instance
const rateLimiter = createOTPRateLimiter();

// Maximum attempts per email/type combination
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION = 30 * 60 * 1000; // 30 minutes

// In-memory store for tracking attempts (in production, use Redis or database)
const attemptStore = new Map<string, { attempts: number; firstAttempt: number; lockedUntil?: number }>();

export async function POST(request: NextRequest) {
  const clientIp = getClientIP(request.headers);
  
  try {
    // Rate limiting check
    const rateLimitResult = rateLimiter.checkLimit(clientIp);
    
    if (!rateLimitResult.allowed) {
      logger.warn('Rate limit exceeded for OTP verification', {
        ip: clientIp,
        userAgent: request.headers.get('user-agent'),
        timestamp: new Date().toISOString()
      });
      
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many verification attempts. Please try again later.',
          retryAfter: rateLimitResult.retryAfter
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimiter.getConfig().maxRequests.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': Math.ceil(rateLimitResult.resetTime / 1000).toString(),
            'Retry-After': (rateLimitResult.retryAfter || 0).toString()
          }
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = verifyOtpSchema.safeParse(body);

    if (!validationResult.success) {
      logger.warn('Invalid OTP verification request', {
        ip: clientIp,
        errors: validationResult.error.errors,
        timestamp: new Date().toISOString()
      });

      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid request data',
          errors: validationResult.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    const { email, otp, type } = validationResult.data;
    const attemptKey = `${email}:${type}`;

    // Check for account lockout
    const attemptData = attemptStore.get(attemptKey);
    const now = Date.now();

    if (attemptData?.lockedUntil && now < attemptData.lockedUntil) {
      logger.warn('Account locked due to too many failed attempts', {
        email,
        type,
        ip: clientIp,
        lockedUntil: new Date(attemptData.lockedUntil).toISOString(),
        timestamp: new Date().toISOString()
      });

      return NextResponse.json(
        { 
          success: false, 
          message: 'Account temporarily locked due to too many failed attempts. Please try again later.',
          lockedUntil: attemptData.lockedUntil
        },
        { status: 423 }
      );
    }

    // Initialize or update attempt tracking
    if (!attemptData || (now - attemptData.firstAttempt) > LOCKOUT_DURATION) {
      attemptStore.set(attemptKey, {
        attempts: 1,
        firstAttempt: now
      });
    } else {
      attemptData.attempts++;
      attemptStore.set(attemptKey, attemptData);
    }

    const currentAttempts = attemptStore.get(attemptKey)!.attempts;

    try {
      // Verify OTP using the OTP service
      const verificationResult = otpService.validateOTP(email, otp, type);

      if (verificationResult.isValid) {
        // Clear attempt tracking on successful verification
        attemptStore.delete(attemptKey);

        logger.info('OTP verification successful', {
          email,
          type,
          ip: clientIp,
          timestamp: new Date().toISOString()
        });

        return NextResponse.json(
          { 
            success: true, 
            message: 'OTP verified successfully'
          },
          { 
            status: 200,
            headers: {
              'X-RateLimit-Limit': rateLimiter.getConfig().maxRequests.toString(),
              'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
              'X-RateLimit-Reset': Math.ceil(rateLimitResult.resetTime / 1000).toString()
            }
          }
        );
      } else {
        // Handle failed verification
        const attemptsRemaining = MAX_ATTEMPTS - currentAttempts;

        // Lock account if max attempts reached
        if (currentAttempts >= MAX_ATTEMPTS) {
          const lockoutUntil = now + LOCKOUT_DURATION;
          attemptStore.set(attemptKey, {
            ...attemptStore.get(attemptKey)!,
            lockedUntil: lockoutUntil
          });

          logger.warn('Account locked after max failed attempts', {
            email,
            type,
            ip: clientIp,
            attempts: currentAttempts,
            lockedUntil: new Date(lockoutUntil).toISOString(),
            timestamp: new Date().toISOString()
          });

          return NextResponse.json(
            { 
              success: false, 
              message: 'Account temporarily locked due to too many failed attempts. Please try again later.',
              lockedUntil: lockoutUntil
            },
            { status: 423 }
          );
        }

        logger.warn('OTP verification failed', {
          email,
          type,
          ip: clientIp,
          attempts: currentAttempts,
          attemptsRemaining,
          reason: verificationResult.error,
          timestamp: new Date().toISOString()
        });

        return NextResponse.json(
          { 
            success: false, 
            message: verificationResult.error || 'Invalid OTP. Please try again.',
            attemptsRemaining
          },
          { 
            status: 400,
            headers: {
              'X-RateLimit-Limit': rateLimiter.getConfig().maxRequests.toString(),
              'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
              'X-RateLimit-Reset': Math.ceil(rateLimitResult.resetTime / 1000).toString()
            }
          }
        );
      }
    } catch (serviceError) {
      logger.error('OTP service error', serviceError as Error, {
        email,
        type,
        ip: clientIp,
        timestamp: new Date().toISOString()
      });

      return NextResponse.json(
        { 
          success: false, 
          message: 'Verification service temporarily unavailable. Please try again later.'
        },
        { status: 503 }
      );
    }

  } catch (error) {
    logger.error('Unexpected error in OTP verification', error as Error, {
      ip: clientIp,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.'
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PATCH() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}