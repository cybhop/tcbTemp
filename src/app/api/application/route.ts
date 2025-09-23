import { NextRequest, NextResponse } from 'next/server';
import { getEmailService } from '@/lib/email-service';
import { z } from 'zod';

// Validation schema for application form
const applicationFormSchema = z.object({
  // Personal Information
  personalInfo: z.object({
    name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number too short').max(20, 'Phone number too long'),
    company: z.string().min(1, 'Company name is required').max(100, 'Company name too long'),
    position: z.string().min(1, 'Position is required').max(100, 'Position too long'),
  }),
  
  // Application Information
  applicationInfo: z.object({
    type: z.enum(['loan', 'credit', 'trade_finance', 'iban', 'guarantee', 'other'], {
      required_error: 'Application type is required'
    }),
    amount: z.string().min(1, 'Amount is required'),
    purpose: z.string().min(10, 'Purpose must be at least 10 characters').max(500, 'Purpose too long'),
    timeline: z.string().min(1, 'Timeline is required'),
  }),
  
  // Business Information
  businessInfo: z.object({
    industry: z.string().min(1, 'Industry is required').max(100, 'Industry too long'),
    yearsInBusiness: z.string().min(1, 'Years in business is required'),
    annualRevenue: z.string().min(1, 'Annual revenue is required'),
    employeeCount: z.string().optional(),
    businessDescription: z.string().max(500, 'Business description too long').optional(),
  }),
  
  // Financial Information
  financialInfo: z.object({
    creditScore: z.string().optional(),
    assets: z.string().optional(),
    liabilities: z.string().optional(),
    bankingHistory: z.string().optional(),
    existingCredit: z.string().optional(),
  }),
  
  // Additional Information
  additionalInfo: z.object({
    urgency: z.enum(['low', 'medium', 'high']).optional(),
    preferredContactMethod: z.enum(['email', 'phone', 'both']).optional(),
    bestTimeToCall: z.string().optional(),
    additionalComments: z.string().max(1000, 'Additional comments too long').optional(),
  }).optional(),
});

// Helper function to format currency
function formatCurrency(amount: string): string {
  const numAmount = parseFloat(amount.replace(/[^0-9.]/g, ''));
  if (isNaN(numAmount)) return amount;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numAmount);
}

// Helper function to format application type
function formatApplicationType(type: string): string {
  const typeMap = {
    'loan': 'Business Loan',
    'credit': 'Line of Credit',
    'trade_finance': 'Trade Finance',
    'iban': 'Business IBAN',
    'guarantee': 'Bank Guarantee',
    'other': 'Other'
  };
  return typeMap[type] || type;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request data
    const validationResult = applicationFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid application data',
          details: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const { personalInfo, applicationInfo, businessInfo, financialInfo, additionalInfo } = validationResult.data;
    
    // Get email service instance
    let emailService;
    try {
      emailService = getEmailService();
    } catch (error) {
      console.warn('Email service not available:', error.message);
      
      // Log the application for manual processing
      console.log('Application submission received (email service unavailable):', {
        personalInfo,
        applicationInfo,
        businessInfo,
        financialInfo,
        additionalInfo,
        timestamp: new Date().toISOString()
      });
      
      return NextResponse.json(
        { 
          success: true,
          message: 'Your application has been submitted successfully! We will contact you within 24 hours.',
          applicationId: `app-${Date.now()}`,
          estimatedResponse: '24 hours'
        },
        { status: 200 }
      );
    }

    // Create formatted email content
    const emailContent = `
      <div style="font-family: Inter, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #1a1f36 0%, #2a3550 100%); border-radius: 8px;">
          <h1 style="color: #ffffff; font-size: 28px; margin-bottom: 10px;">New Application Submission</h1>
          <p style="color: #e5e7eb; font-size: 16px; margin: 0;">Trade Credit Bancorp</p>
        </div>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #d4af37;">
          <h2 style="color: #1a1f36; font-size: 20px; margin-bottom: 15px;">📋 Application Summary</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
              <strong style="color: #1a1f36;">Type:</strong> ${formatApplicationType(applicationInfo.type)}
            </div>
            <div>
              <strong style="color: #1a1f36;">Amount:</strong> ${formatCurrency(applicationInfo.amount)}
            </div>
            <div>
              <strong style="color: #1a1f36;">Timeline:</strong> ${applicationInfo.timeline}
            </div>
            <div>
              <strong style="color: #1a1f36;">Urgency:</strong> ${additionalInfo?.urgency || 'Standard'}
            </div>
          </div>
        </div>
        
        <div style="background: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb;">
          <h2 style="color: #1a1f36; font-size: 20px; margin-bottom: 15px;">👤 Personal Information</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
              <strong style="color: #1a1f36;">Name:</strong> ${personalInfo.name}
            </div>
            <div>
              <strong style="color: #1a1f36;">Email:</strong> ${personalInfo.email}
            </div>
            <div>
              <strong style="color: #1a1f36;">Phone:</strong> ${personalInfo.phone}
            </div>
            <div>
              <strong style="color: #1a1f36;">Position:</strong> ${personalInfo.position}
            </div>
            <div style="grid-column: 1 / -1;">
              <strong style="color: #1a1f36;">Company:</strong> ${personalInfo.company}
            </div>
          </div>
        </div>
        
        <div style="background: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb;">
          <h2 style="color: #1a1f36; font-size: 20px; margin-bottom: 15px;">🏢 Business Information</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
              <strong style="color: #1a1f36;">Industry:</strong> ${businessInfo.industry}
            </div>
            <div>
              <strong style="color: #1a1f36;">Years in Business:</strong> ${businessInfo.yearsInBusiness}
            </div>
            <div>
              <strong style="color: #1a1f36;">Annual Revenue:</strong> ${formatCurrency(businessInfo.annualRevenue)}
            </div>
            ${businessInfo.employeeCount ? `<div><strong style="color: #1a1f36;">Employee Count:</strong> ${businessInfo.employeeCount}</div>` : ''}
          </div>
          ${businessInfo.businessDescription ? `
            <div style="margin-top: 15px;">
              <strong style="color: #1a1f36;">Business Description:</strong>
              <p style="color: #6b7280; margin-top: 5px; line-height: 1.5;">${businessInfo.businessDescription}</p>
            </div>
          ` : ''}
        </div>
        
        <div style="background: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb;">
          <h2 style="color: #1a1f36; font-size: 20px; margin-bottom: 15px;">💰 Financial Information</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            ${financialInfo.creditScore ? `<div><strong style="color: #1a1f36;">Credit Score:</strong> ${financialInfo.creditScore}</div>` : ''}
            ${financialInfo.assets ? `<div><strong style="color: #1a1f36;">Assets:</strong> ${formatCurrency(financialInfo.assets)}</div>` : ''}
            ${financialInfo.liabilities ? `<div><strong style="color: #1a1f36;">Liabilities:</strong> ${formatCurrency(financialInfo.liabilities)}</div>` : ''}
            ${financialInfo.existingCredit ? `<div><strong style="color: #1a1f36;">Existing Credit:</strong> ${financialInfo.existingCredit}</div>` : ''}
          </div>
          ${financialInfo.bankingHistory ? `
            <div style="margin-top: 15px;">
              <strong style="color: #1a1f36;">Banking History:</strong>
              <p style="color: #6b7280; margin-top: 5px; line-height: 1.5;">${financialInfo.bankingHistory}</p>
            </div>
          ` : ''}
        </div>
        
        <div style="background: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb;">
          <h2 style="color: #1a1f36; font-size: 20px; margin-bottom: 15px;">📝 Application Details</h2>
          <div style="margin-bottom: 15px;">
            <strong style="color: #1a1f36;">Purpose:</strong>
            <p style="color: #6b7280; margin-top: 5px; line-height: 1.5;">${applicationInfo.purpose}</p>
          </div>
          ${additionalInfo?.additionalComments ? `
            <div>
              <strong style="color: #1a1f36;">Additional Comments:</strong>
              <p style="color: #6b7280; margin-top: 5px; line-height: 1.5;">${additionalInfo.additionalComments}</p>
            </div>
          ` : ''}
        </div>
        
        ${additionalInfo ? `
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #bfdbfe;">
            <h2 style="color: #1a1f36; font-size: 20px; margin-bottom: 15px;">📞 Contact Preferences</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              ${additionalInfo.preferredContactMethod ? `<div><strong style="color: #1a1f36;">Preferred Contact:</strong> ${additionalInfo.preferredContactMethod}</div>` : ''}
              ${additionalInfo.bestTimeToCall ? `<div><strong style="color: #1a1f36;">Best Time to Call:</strong> ${additionalInfo.bestTimeToCall}</div>` : ''}
            </div>
          </div>
        ` : ''}
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border: 1px solid #f59e0b;">
          <h2 style="color: #92400e; font-size: 18px; margin-bottom: 10px;">⚡ Next Steps</h2>
          <ul style="color: #92400e; margin: 0; padding-left: 20px;">
            <li>Review application details for completeness</li>
            <li>Contact applicant within 24 hours</li>
            <li>Request additional documentation if needed</li>
            <li>Schedule initial consultation call</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 8px;">
          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            Application submitted on: ${new Date().toLocaleString()}<br>
            <strong>Trade Credit Bancorp</strong> - Professional Financial Solutions
          </p>
        </div>
      </div>
    `;
    
    // Send application email using the lib email service
    const emailResult = await emailService.sendApplicationFormNotification({
      firstName: personalInfo.name.split(' ')[0],
      lastName: personalInfo.name.split(' ').slice(1).join(' ') || '',
      email: personalInfo.email,
      phone: personalInfo.phone,
      company: personalInfo.company,
      position: personalInfo.position,
      experience: businessInfo.yearsInBusiness,
      loanAmount: applicationInfo.amount,
      purpose: applicationInfo.purpose,
      message: additionalInfo?.additionalComments || ''
    });

    if (!emailResult.success) {
      console.error('Failed to send application email:', emailResult.error);
      
      // Log the application for manual processing even if email fails
      console.log('Application submission (email failed):', {
        personalInfo,
        applicationInfo,
        businessInfo,
        financialInfo,
        additionalInfo,
        timestamp: new Date().toISOString(),
        emailError: emailResult.error
      });
      
      return NextResponse.json(
        { 
          success: true,
          message: 'Your application has been submitted successfully! We will contact you within 24 hours.',
          applicationId: `app-${Date.now()}`,
          estimatedResponse: '24 hours',
          note: 'Application logged for manual processing'
        },
        { status: 200 }
      );
    }

    console.log('Application processed successfully:', emailResult.messageId);
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Your application has been submitted successfully! We will contact you within 24 hours.',
        applicationId: emailResult.messageId,
        estimatedResponse: '24 hours'
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Application API error:', error);
    
    // Log the application for manual processing even if there's an error
    try {
      const body = await request.json();
      console.log('Application submission (error occurred):', {
        body,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      });
    } catch (parseError) {
      console.log('Failed to parse application body for logging:', parseError);
    }
    
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