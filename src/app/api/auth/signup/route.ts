import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { EmailService } from '@/services/EmailService';
import { RateLimiter, rateLimitConfigs } from '@/lib/rate-limit';
import { z } from 'zod';

// Rate limiting configuration
const limiter = new RateLimiter(rateLimitConfigs.auth);

// Validation schema
const signupSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain uppercase, lowercase, number, and special character'
    ),
  company: z.string().min(1, 'Company is required').max(100, 'Company name too long'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters').max(20, 'Phone number too long'),
});

// In-memory user storage (replace with database in production)
let users: Array<{
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  verificationToken?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}> = [];

function generateUserId(): string {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function generateVerificationToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function sanitizeInput(input: string): string {
  return input.trim();
}

function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = await limiter.check(request);
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many registration attempts. Please try again later.' 
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    
    const validationResult = signupSchema.safeParse(body);
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

    const { firstName, lastName, email, password, company, phone } = validationResult.data;
    
    // Sanitize input
    const sanitizedData = {
      firstName: sanitizeInput(firstName),
      lastName: sanitizeInput(lastName),
      email: sanitizeEmail(email),
      company: sanitizeInput(company),
      phone: sanitizeInput(phone),
    };

    // Check if user already exists
    const existingUser = users.find(user => user.email === sanitizedData.email);
    if (existingUser) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'An account with this email already exists' 
        },
        { status: 409 }
      );
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Generate verification token
    const verificationToken = generateVerificationToken();

    // Create user record
    const newUser = {
      id: generateUserId(),
      email: sanitizedData.email,
      password: hashedPassword,
      firstName: sanitizedData.firstName,
      lastName: sanitizedData.lastName,
      company: sanitizedData.company,
      phone: sanitizedData.phone,
      verificationToken,
      isVerified: !process.env.ENABLE_EMAIL_VERIFICATION || process.env.ENABLE_EMAIL_VERIFICATION !== 'true',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Store user (in production, this would be a database operation)
    users.push(newUser);

    // Initialize email service
    const emailService = new EmailService();

    try {
      // Send welcome email
      const baseUrl = process.env.NODE_ENV === 'production' 
        ? 'https://tradecreditbancorp.com'
        : 'http://localhost:3000';
      
      await emailService.sendWelcomeEmail({
        to: sanitizedData.email,
        subject: 'Welcome to Trade Credit Bancorp!',
        name: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        loginUrl: `${baseUrl}/login`,
      });

      // Send verification email (if email verification is enabled)
      const emailVerificationEnabled = process.env.ENABLE_EMAIL_VERIFICATION === 'true';
      if (emailVerificationEnabled) {
        await emailService.sendVerificationEmail({
          to: sanitizedData.email,
          subject: 'Verify Your Email Address - Trade Credit Bancorp',
          name: sanitizedData.firstName,
          verificationToken,
          verificationUrl: `${baseUrl}/verify-email?token=${verificationToken}`,
        });
      }

      // Send user onboarding notification to admin
      await emailService.sendUserOnboardingEmail({
        userName: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        userEmail: sanitizedData.email,
        userPhone: sanitizedData.phone,
        registrationData: {
          company: sanitizedData.company,
          firstName: sanitizedData.firstName,
          lastName: sanitizedData.lastName,
          phone: sanitizedData.phone,
          email: sanitizedData.email,
          registrationDate: new Date().toISOString(),
          isVerified: newUser.isVerified,
          userAgent: request.headers.get('user-agent'),
          ipAddress: request.ip || 'unknown'
        }
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue with registration even if email fails
      // In production, you might want to queue this for retry
    }

    // Return success response (excluding sensitive data)
    const responseUser = {
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      company: newUser.company,
      phone: newUser.phone,
      isVerified: newUser.isVerified,
      createdAt: newUser.createdAt,
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Account created successfully',
        user: responseUser,
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Signup error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred during registration. Please try again.',
      },
      { status: 500 }
    );
  }
}

// Handle non-POST requests
export async function GET() {
  return NextResponse.json(
    { 
      success: false, 
      message: 'Method not allowed' 
    },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { 
      success: false, 
      message: 'Method not allowed' 
    },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { 
      success: false, 
      message: 'Method not allowed' 
    },
    { status: 405 }
  );
}

// Export users array for access from other routes (for development only)
export { users };