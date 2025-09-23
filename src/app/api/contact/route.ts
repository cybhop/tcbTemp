import { NextRequest, NextResponse } from 'next/server';
import { EmailService } from '@/services/EmailService';
import { z } from 'zod';

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100, 'Company name too long').optional(),
  phone: z.string().max(20, 'Phone number too long').optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message too long'),
  subject: z.string().max(200, 'Subject too long').optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request data
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid input data',
          details: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const { name, email, company, phone, message, subject } = validationResult.data;
    
    // Initialize email service
    const emailService = new EmailService();
    
    // Send contact form email
    const emailResult = await emailService.sendContactFormEmail({
      to: 'tradecreditbancorp@gmail.com',
      subject: subject || 'New Contact Form Submission - Trade Credit Bancorp',
      name,
      email,
      company,
      phone,
      message,
    });
    
    if (!emailResult.success) {
      console.error('Failed to send contact form email:', emailResult.error);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send your message. Please try again later.' 
        },
        { status: 500 }
      );
    }

    console.log('Contact form email sent successfully:', emailResult.messageId);
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.',
        messageId: emailResult.messageId
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
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