import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { lcApplications } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }
    
    const record = await db.select()
      .from(lcApplications)
      .where(eq(lcApplications.id, parseInt(id)))
      .limit(1);
    
    if (record.length === 0) {
      return NextResponse.json({ error: 'LC application not found' }, { status: 404 });
    }
    
    return NextResponse.json(record[0]);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }
    
    const updates = await request.json();
    
    // Remove id from updates if present to prevent id modification
    const { id: _, ...updateData } = updates;
    
    // Auto-update timestamp
    const updatedRecord = {
      ...updateData,
      updatedAt: Date.now()
    };
    
    const result = await db.update(lcApplications)
      .set(updatedRecord)
      .where(eq(lcApplications.id, parseInt(id)))
      .returning();
    
    if (result.length === 0) {
      return NextResponse.json({ error: 'LC application not found' }, { status: 404 });
    }
    
    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }
    
    const deleted = await db.delete(lcApplications)
      .where(eq(lcApplications.id, parseInt(id)))
      .returning();
    
    if (deleted.length === 0) {
      return NextResponse.json({ error: 'LC application not found' }, { status: 404 });
    }
    
    return NextResponse.json({ 
      message: 'LC application deleted successfully',
      deleted: deleted[0]
    });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}