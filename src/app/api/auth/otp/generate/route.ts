import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { otpService } from '@/lib/otp-service';
import { EmailService } from '@/services/EmailService';

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { attempts: number; lastAttempt: number }>();

// Zod schema for request validation
const OTPRequestSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  type: z.enum(['login', 'signup'], { required_error: 'Type must be either login or signup' })
});

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_ATTEMPTS_PER_WINDOW = 3;
const COOLDOWN_PERIOD = 5 * 60 * 1000; // 5 minutes

function checkRateLimit(key: string): { allowed: boolean; remainingTime?: number } {
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record) {
    rateLimitStore.set(key, { attempts: 1, lastAttempt: now });
    return { allowed: true };
  }

  const timeSinceLastAttempt = now - record.lastAttempt;

  // Reset if window has passed
  if (timeSinceLastAttempt >= RATE_LIMIT_WINDOW) {
    rateLimitStore.set(key, { attempts: 1, lastAttempt: now });
    return { allowed: true };
  }

  // Check if still in cooldown period
  if (record.attempts >= MAX_ATTEMPTS_PER_WINDOW) {
    const remainingCooldown = COOLDOWN_PERIOD - timeSinceLastAttempt;
    if (remainingCooldown > 0) {
      return { allowed: false, remainingTime: remainingCooldown };
    }
    // Reset after cooldown
    rateLimitStore.set(key, { attempts: 1, lastAttempt: now });
    return { allowed: true };
  }

  // Increment attempts
  record.attempts++;
  record.lastAttempt = now;
  rateLimitStore.set(key, record);

  return { allowed: true };
}

function sanitizeInput(input: string): string {
  return input.trim().toLowerCase();
}

function logSecurityEvent(email: string, event: string, details?: string) {
  const timestamp = new Date().toISOString();
  console.log(`[SECURITY] ${timestamp} - ${event} for ${email}${details ? `: ${details}` : ''}`);
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request data
    const validationResult = OTPRequestSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || 'Invalid request data';
      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 400 }
      );
    }

    const { email, type } = validationResult.data;
    const sanitizedEmail = sanitizeInput(email);

    // Check rate limiting
    const rateLimitKey = `${sanitizedEmail}:${type}`;
    const rateLimitResult = checkRateLimit(rateLimitKey);

    if (!rateLimitResult.allowed) {
      logSecurityEvent(sanitizedEmail, 'Rate limit exceeded', `Type: ${type}`);
      const remainingMinutes = Math.ceil((rateLimitResult.remainingTime || 0) / 60000);
      return NextResponse.json(
        { 
          success: false, 
          message: `Too many attempts. Please try again in ${remainingMinutes} minute(s).` 
        },
        { status: 429 }
      );
    }

    // Generate OTP
    const otpResult = otpService.generateOTP(sanitizedEmail, type);

    if (!otpResult.success) {
      return NextResponse.json(
        { success: false, message: otpResult.error },
        { status: 400 }
      );
    }

    // Initialize email service
    const emailService = new EmailService();

    // Send email with OTP
    const emailResult = await emailService.sendOtpEmail({
      to: sanitizedEmail,
      subject: type === 'login' ? 'Your Login Code - Trade Credit Bancorp' : 'Your Verification Code - Trade Credit Bancorp',
      otp: otpResult.otp!,
      type: type,
      expiresAt: otpResult.expiresAt!
    });

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, message: 'Failed to send OTP email. Please try again.' },
        { status: 500 }
      );
    }

    // Log successful OTP generation
    logSecurityEvent(sanitizedEmail, 'OTP generated successfully', `Type: ${type}`);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'OTP sent successfully',
        expiresAt: otpResult.expiresAt
      },
      { status: 200 }
    );

  } catch (error) {
    // Log error without exposing system details
    console.error('[OTP API Error]', error);
    
    // Check if it's a known service error
    if (error instanceof Error) {
      if (error.message.includes('Email service unavailable')) {
        return NextResponse.json(
          { success: false, message: 'Unable to send verification code. Please try again later.' },
          { status: 503 }
        );
      }
      
      if (error.message.includes('OTP service unavailable')) {
        return NextResponse.json(
          { success: false, message: 'Verification service temporarily unavailable. Please try again.' },
          { status: 503 }
        );
      }
    }

    // Generic error response
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
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

// CORS configuration for production
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  
  // Define allowed origins for production
  const allowedOrigins = [
    'https://tradecreditbancorp.com',
    'https://www.tradecreditbancorp.com',
    'https://app.tradecreditbancorp.com'
  ];
  
  const isOriginAllowed = allowedOrigins.includes(origin || '');
  
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': isOriginAllowed ? origin || '' : 'https://tradecreditbancorp.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}