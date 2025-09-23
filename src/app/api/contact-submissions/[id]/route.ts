import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Valid ID is required", code: "INVALID_ID" },
        { status: 400 }
      );
    }
    
    const submission = await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.id, id))
      .limit(1);
    
    if (submission.length === 0) {
      return NextResponse.json(
        { error: "Contact submission not found", code: "NOT_FOUND" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(submission[0]);
  } catch (error) {
    console.error('GET contact submission error:', error);
    return NextResponse.json(
      { error: "Internal server error", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Valid ID is required", code: "INVALID_ID" },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    
    const updates: any = {};
    
    if ('companyName' in body) updates.companyName = body.companyName.trim();
    if ('contactPerson' in body) updates.contactPerson = body.contactPerson.trim();
    if ('email' in body) updates.email = body.email.toLowerCase().trim();
    if ('phone' in body) updates.phone = body.phone.trim();
    if ('country' in body) updates.country = body.country.trim();
    if ('serviceInterest' in body) updates.serviceInterest = body.serviceInterest;
    if ('message' in body) updates.message = body.message.trim();
    if ('complianceConsent' in body) updates.complianceConsent = Boolean(body.complianceConsent);
    
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: "No valid fields to update", code: "NO_UPDATES" },
        { status: 400 }
      );
    }
    
    updates.updatedAt = Date.now();
    
    const existingSubmission = await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.id, id))
      .limit(1);
    
    if (existingSubmission.length === 0) {
      return NextResponse.json(
        { error: "Contact submission not found", code: "NOT_FOUND" },
        { status: 404 }
      );
    }
    
    const updatedSubmission = await db
      .update(contactSubmissions)
      .set(updates)
      .where(eq(contactSubmissions.id, id))
      .returning();
    
    return NextResponse.json(updatedSubmission[0]);
  } catch (error) {
    console.error('PUT contact submission error:', error);
    return NextResponse.json(
      { error: "Internal server error", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Valid ID is required", code: "INVALID_ID" },
        { status: 400 }
      );
    }
    
    const existingSubmission = await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.id, id))
      .limit(1);
    
    if (existingSubmission.length === 0) {
      return NextResponse.json(
        { error: "Contact submission not found", code: "NOT_FOUND" },
        { status: 404 }
      );
    }
    
    const deletedSubmission = await db
      .delete(contactSubmissions)
      .where(eq(contactSubmissions.id, id))
      .returning();
    
    return NextResponse.json({
      message: "Contact submission deleted successfully",
      submission: deletedSubmission[0]
    });
  } catch (error) {
    console.error('DELETE contact submission error:', error);
    return NextResponse.json(
      { error: "Internal server error", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}