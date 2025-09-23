import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');

    const submissions = await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(submissions);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      code: 'INTERNAL_ERROR'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { companyName, contactPerson, email, phone, country, serviceInterest, message, complianceConsent } = body;

    // Validate required fields
    if (!contactPerson || typeof contactPerson !== 'string' || contactPerson.trim() === '') {
      return NextResponse.json({ 
        error: 'Contact person is required',
        code: 'MISSING_CONTACT_PERSON'
      }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json({ 
        error: 'Email is required',
        code: 'MISSING_EMAIL'
      }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ 
        error: 'Please provide a valid email address',
        code: 'INVALID_EMAIL'
      }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return NextResponse.json({ 
        error: 'Message is required',
        code: 'MISSING_MESSAGE'
      }, { status: 400 });
    }

    if (complianceConsent === undefined || complianceConsent === null) {
      return NextResponse.json({ 
        error: 'Compliance consent is required',
        code: 'MISSING_COMPLIANCE_CONSENT'
      }, { status: 400 });
    }

    if (complianceConsent !== true) {
      return NextResponse.json({ 
        error: 'Compliance consent must be accepted',
        code: 'INVALID_COMPLIANCE_CONSENT'
      }, { status: 400 });
    }

    const now = Date.now();

    const newSubmission = await db
      .insert(contactSubmissions)
      .values({
        companyName: companyName ? companyName.trim() : null,
        contactPerson: contactPerson.trim(),
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : null,
        country: country ? country.trim() : null,
        serviceInterest: serviceInterest ? serviceInterest.trim() : null,
        message: message.trim(),
        complianceConsent: 1,
        createdAt: now,
        updatedAt: now
      })
      .returning();

    return NextResponse.json(newSubmission[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      code: 'INTERNAL_ERROR'
    }, { status: 500 });
  }
}