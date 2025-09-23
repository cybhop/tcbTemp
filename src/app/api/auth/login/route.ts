import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { RateLimiter, rateLimitConfigs } from '@/lib/rate-limit';
import { z } from 'zod';
import { users } from '../signup/route';

// Rate limiting configuration
const limiter = new RateLimiter(rateLimitConfigs.auth);

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
});

// Login attempt logging (replace with proper logging service in production)
const loginAttempts: Array<{
  email: string;
  ip: string;
  timestamp: Date;
  success: boolean;
  userAgent?: string;
}> = [];

function logLoginAttempt(email: string, ip: string, success: boolean, userAgent?: string) {
  loginAttempts.push({
    email,
    ip,
    timestamp: new Date(),
    success,
    userAgent,
  });
  
  console.log(`Login attempt: ${email} from ${ip} - ${success ? 'SUCCESS' : 'FAILED'}`);
}

function sanitizeInput(input: string): string {
  return input.trim().toLowerCase();
}

function generateTokens(userId: string, email: string) {
  const payload = {
    userId,
    email,
    iat: Math.floor(Date.now() / 1000),
  };

  const accessToken = jwt.sign(
    payload,
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    payload,
    process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key',
    { expiresIn: '7d' }
  );

  return { accessToken, refreshToken };
}

function setAuthCookies(response: NextResponse, accessToken: string, refreshToken: string) {
  const isProduction = process.env.NODE_ENV === 'production';
  
  response.cookies.set('accessToken', accessToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'strict',
    maxAge: 15 * 60, // 15 minutes
    path: '/',
  });

  response.cookies.set('refreshToken', refreshToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: '/',
  });
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = await limiter.check(request);
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many login attempts. Please try again later.' 
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    
    const validationResult = loginSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid input data',
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email, password } = validationResult.data;
    
    // Sanitize input
    const sanitizedEmail = sanitizeInput(email);
    const ip = request.ip || 'unknown';
    const userAgent = request.headers.get('user-agent') || undefined;

    // Find user
    const user = users.find(u => u.email === sanitizedEmail);
    if (!user) {
      logLoginAttempt(sanitizedEmail, ip, false, userAgent);
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid credentials',
        },
        { status: 401 }
      );
    }

    // Check if account is verified (if email verification is enabled)
    const emailVerificationEnabled = process.env.ENABLE_EMAIL_VERIFICATION === 'true';
    if (emailVerificationEnabled && !user.isVerified) {
      logLoginAttempt(sanitizedEmail, ip, false, userAgent);
      return NextResponse.json(
        {
          success: false,
          message: 'Please verify your email address before logging in',
        },
        { status: 401 }
      );
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      logLoginAttempt(sanitizedEmail, ip, false, userAgent);
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid credentials',
        },
        { status: 401 }
      );
    }

    // Update last login
    user.updatedAt = new Date();

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens(user.id, user.email);

    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        company: user.company,
        phone: user.phone,
        isVerified: user.isVerified,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });

    // Set authentication cookies
    setAuthCookies(response, accessToken, refreshToken);

    // Log successful login
    logLoginAttempt(sanitizedEmail, ip, true, userAgent);

    return response;

  } catch (error) {
    console.error('Login error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred during login. Please try again.',
      },
      { status: 500 }
    );
  }
}

// Handle non-POST requests
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}