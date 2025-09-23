import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { lcApplications } from '@/db/schema';
import { eq, like, and, desc, asc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const email = searchParams.get('email');
    const lcType = searchParams.get('lc_type');

    let query = db.select().from(lcApplications);

    let conditions: any[] = [];

    if (email) {
      conditions.push(like(lcApplications.email, `%${email}%`));
    }

    if (lcType) {
      conditions.push(eq(lcApplications.lcType, lcType));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const results = await query
      .orderBy(desc(lcApplications.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      'companyName', 'contactName', 'email', 'phone', 'country',
      'lcType', 'amount', 'currency', 'goodsDescription',
      'expiryDate', 'incoterms', 'shipmentMode', 'consent'
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ 
          error: `Missing required field: ${field}`,
          code: 'MISSING_REQUIRED_FIELD'
        }, { status: 400 });
      }
    }

    // Email validation
    if (!body.email.includes('@') || !body.email.includes('.')) {
      return NextResponse.json({ 
        error: 'Invalid email format',
        code: 'INVALID_EMAIL'
      }, { status: 400 });
    }

    // Consent validation
    if (body.consent !== true && body.consent !== 1 && body.consent !== '1') {
      return NextResponse.json({ 
        error: 'Consent must be true',
        code: 'INVALID_CONSENT'
      }, { status: 400 });
    }

    // Prepare data with field mapping
    const timestamp = Date.now();
    
    const applicationData = {
      companyName: String(body.companyName).trim(),
      contactName: String(body.contactName).trim(),
      email: String(body.email).toLowerCase().trim(),
      phone: String(body.phone).trim(),
      country: String(body.country).trim(),
      lcType: String(body.lcType).trim(),
      amount: String(body.amount).trim(),
      currency: String(body.currency).trim(),
      incoterms: String(body.incoterms).trim(),
      goodsDescription: String(body.goodsDescription).trim(),
      expiryDate: String(body.expiryDate).trim(),
      shipmentMode: String(body.shipmentMode).trim(),
      consent: body.consent === true || body.consent === 'true' || body.consent === 1 ? 1 : 0,
      createdAt: timestamp,
      updatedAt: timestamp,
      
      // Optional fields
      beneficiaryName: body.beneficiaryName ? String(body.beneficiaryName) : null,
      issuingBank: body.issuingBank ? String(body.issuingBank) : null,
      expectedShipmentDate: body.expectedShipmentDate ? String(body.expectedShipmentDate) : null,
      message: body.message ? String(body.message) : null,
      applicantAddress: body.applicantAddress ? String(body.applicantAddress) : null,
      registrationNumber: body.registrationNumber ? String(body.registrationNumber) : null,
      quantity: body.quantity ? String(body.quantity) : null,
      unit: body.unit ? String(body.unit) : null,
      portOfLoading: body.portOfLoading ? String(body.portOfLoading) : null,
      portOfDischarge: body.portOfDischarge ? String(body.portOfDischarge) : null,
      latestShipmentDate: body.latestShipmentDate ? String(body.latestShipmentDate) : null,
      lcRules: body.lcRules ? String(body.lcRules) : null,
      confirmationRequired: body.confirmationRequired === true ? 1 : body.confirmationRequired === false ? 0 : null,
      partialShipmentAllowed: body.partialShipmentAllowed === true ? 1 : body.partialShipmentAllowed === false ? 0 : null,
      transshipmentAllowed: body.transshipmentAllowed === true ? 1 : body.transshipmentAllowed === false ? 0 : null,
      tenorDays: body.tenorDays ? parseInt(String(body.tenorDays)) : null,
      docCommercialInvoice: body.docCommercialInvoice === true ? 1 : body.docCommercialInvoice === false ? 0 : null,
      docPackingList: body.docPackingList === true ? 1 : body.docPackingList === false ? 0 : null,
      docTransportDocument: body.docTransportDocument === true ? 1 : body.docTransportDocument === false ? 0 : null,
      docInsurance: body.docInsurance === true ? 1 : body.docInsurance === false ? 0 : null,
      docCertificateOfOrigin: body.docCertificateOfOrigin === true ? 1 : body.docCertificateOfOrigin === false ? 0 : null,
      docInspectionCertificate: body.docInspectionCertificate === true ? 1 : body.docInspectionCertificate === false ? 0 : null,
      taxId: body.taxId ? String(body.taxId) : null,
      website: body.website ? String(body.website) : null,
      placeOfDelivery: body.placeOfDelivery ? String(body.placeOfDelivery) : null,
      advisingBankName: body.advisingBankName ? String(body.advisingBankName) : null,
      advisingBankSwift: body.advisingBankSwift ? String(body.advisingBankSwift) : null,
      beneficiaryBankName: body.beneficiaryBankName ? String(body.beneficiaryBankName) : null,
      beneficiaryBankSwift: body.beneficiaryBankSwift ? String(body.beneficiaryBankSwift) : null,
      beneficiaryAddress: body.beneficiaryAddress ? String(body.beneficiaryAddress) : null,
      tolerancePercent: body.tolerancePercent ? parseInt(String(body.tolerancePercent)) : null,
      presentationPeriodDays: body.presentationPeriodDays ? parseInt(String(body.presentationPeriodDays)) : null,
      additionalConditions: body.additionalConditions ? String(body.additionalConditions) : null,
      contractNumber: body.contractNumber ? String(body.contractNumber) : null,
      contractDate: body.contractDate ? String(body.contractDate) : null,
      proformaInvoiceNumber: body.proformaInvoiceNumber ? String(body.proformaInvoiceNumber) : null,
      proformaInvoiceDate: body.proformaInvoiceDate ? String(body.proformaInvoiceDate) : null,
      hsCode: body.hsCode ? String(body.hsCode) : null,
      countryOfOrigin: body.countryOfOrigin ? String(body.countryOfOrigin) : null,
      priceTerms: body.priceTerms ? String(body.priceTerms) : null,
      confirmingBankName: body.confirmingBankName ? String(body.confirmingBankName) : null,
      confirmingBankSwift: body.confirmingBankSwift ? String(body.confirmingBankSwift) : null,
      consigneeName: body.consigneeName ? String(body.consigneeName) : null,
      notifyParty: body.notifyParty ? String(body.notifyParty) : null,
      transportDocType: body.transportDocType ? String(body.transportDocType) : null,
      insuranceCoveragePercent: body.insuranceCoveragePercent ? parseInt(String(body.insuranceCoveragePercent)) : null,
      portOfFinalDestination: body.portOfFinalDestination ? String(body.portOfFinalDestination) : null,
      chargesBorneBy: body.chargesBorneBy ? String(body.chargesBorneBy) : null,
      availability: body.availability ? String(body.availability) : null,
      availableWith: body.availableWith ? String(body.availableWith) : null,
      placeOfExpiry: body.placeOfExpiry ? String(body.placeOfExpiry) : null,
      sblcType: body.sblcType ? String(body.sblcType) : null,
      sblcEvergreen: body.sblcEvergreen === true ? 1 : body.sblcEvergreen === false ? 0 : null,
      sblcEvergreenNoticeDays: body.sblcEvergreenNoticeDays ? parseInt(String(body.sblcEvergreenNoticeDays)) : null,
      sblcGoverningLaw: body.sblcGoverningLaw ? String(body.sblcGoverningLaw) : null,
      sblcClaimDocuments: body.sblcClaimDocuments ? String(body.sblcClaimDocuments) : null
    };

    const newApplication = await db.insert(lcApplications)
      .values(applicationData)
      .returning();

    return NextResponse.json(newApplication[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: 'Valid ID is required',
        code: 'INVALID_ID'
      }, { status: 400 });
    }

    const body = await request.json();
    
    // Verify application exists
    const existing = await db.select()
      .from(lcApplications)
      .where(eq(lcApplications.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Application not found',
        code: 'NOT_FOUND'
      }, { status: 404 });
    }

    // Prepare update data
    const updateData: any = {
      updatedAt: Date.now()
    };

    // Map fields
    const fieldMapping: any = {
      'companyName': 'companyName',
      'contactName': 'contactName',
      'email': 'email',
      'phone': 'phone',
      'country': 'country',
      'lcType': 'lcType',
      'amount': 'amount',
      'currency': 'currency',
      'incoterms': 'incoterms',
      'beneficiaryName': 'beneficiaryName',
      'issuingBank': 'issuingBank',
      'expectedShipmentDate': 'expectedShipmentDate',
      'message': 'message',
      'applicantAddress': 'applicantAddress',
      'registrationNumber': 'registrationNumber',
      'goodsDescription': 'goodsDescription',
      'quantity': 'quantity',
      'unit': 'unit',
      'portOfLoading': 'portOfLoading',
      'portOfDischarge': 'portOfDischarge',
      'latestShipmentDate': 'latestShipmentDate',
      'lcRules': 'lcRules',
      'tenorDays': 'tenorDays',
      'taxId': 'taxId',
      'website': 'website',
      'shipmentMode': 'shipmentMode',
      'placeOfDelivery': 'placeOfDelivery',
      'advisingBankName': 'advisingBankName',
      'advisingBankSwift': 'advisingBankSwift',
      'beneficiaryBankName': 'beneficiaryBankName',
      'beneficiaryBankSwift': 'beneficiaryBankSwift',
      'beneficiaryAddress': 'beneficiaryAddress',
      'tolerancePercent': 'tolerancePercent',
      'presentationPeriodDays': 'presentationPeriodDays',
      'additionalConditions': 'additionalConditions',
      'contractNumber': 'contractNumber',
      'contractDate': 'contractDate',
      'proformaInvoiceNumber': 'proformaInvoiceNumber',
      'proformaInvoiceDate': 'proformaInvoiceDate',
      'hsCode': 'hsCode',
      'countryOfOrigin': 'countryOfOrigin',
      'priceTerms': 'priceTerms',
      'confirmingBankName': 'confirmingBankName',
      'confirmingBankSwift': 'confirmingBankSwift',
      'consigneeName': 'consigneeName',
      'notifyParty': 'notifyParty',
      'transportDocType': 'transportDocType',
      'insuranceCoveragePercent': 'insuranceCoveragePercent',
      'portOfFinalDestination': 'portOfFinalDestination',
      'chargesBorneBy': 'chargesBorneBy',
      'availability': 'availability',
      'availableWith': 'availableWith',
      'placeOfExpiry': 'placeOfExpiry',
      'sblcType': 'sblcType',
      'sblcEvergreenNoticeDays': 'sblcEvergreenNoticeDays',
      'sblcGoverningLaw': 'sblcGoverningLaw',
      'sblcClaimDocuments': 'sblcClaimDocuments',
      'expiryDate': 'expiryDate'
    };

    const booleanFields: any = {
      'confirmationRequired': 'confirmationRequired',
      'partialShipmentAllowed': 'partialShipmentAllowed',
      'transshipmentAllowed': 'transshipmentAllowed',
      'docCommercialInvoice': 'docCommercialInvoice',
      'docPackingList': 'docPackingList',
      'docTransportDocument': 'docTransportDocument',
      'docInsurance': 'docInsurance',
      'docCertificateOfOrigin': 'docCertificateOfOrigin',
      'docInspectionCertificate': 'docInspectionCertificate',
      'consent': 'consent',
      'sblcEvergreen': 'sblcEvergreen'
    };

    // Process regular fields
    for (const [key, dbField] of Object.entries(fieldMapping)) {
      if (body[key] !== undefined) {
        updateData[dbField] = key === 'email' 
          ? String(body[key]).toLowerCase().trim() 
          : String(body[key]).trim();
      }
    }

    // Process boolean fields
    for (const [key, dbField] of Object.entries(booleanFields)) {
      if (body[key] !== undefined) {
        updateData[dbField] = body[key] === true || body[key] === 'true' || body[key] === 1 ? 1 : 0;
      }
    }

    // Process numeric fields
    if (body.tenorDays !== undefined) {
      updateData.tenorDays = parseInt(String(body.tenorDays));
    }
    if (body.tolerancePercent !== undefined) {
      updateData.tolerancePercent = parseInt(String(body.tolerancePercent));
    }
    if (body.presentationPeriodDays !== undefined) {
      updateData.presentationPeriodDays = parseInt(String(body.presentationPeriodDays));
    }
    if (body.insuranceCoveragePercent !== undefined) {
      updateData.insuranceCoveragePercent = parseInt(String(body.insuranceCoveragePercent));
    }
    if (body.sblcEvergreenNoticeDays !== undefined) {
      updateData.sblcEvergreenNoticeDays = parseInt(String(body.sblcEvergreenNoticeDays));
    }

    const updated = await db.update(lcApplications)
      .set(updateData)
      .where(eq(lcApplications.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0]);
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: 'Valid ID is required',
        code: 'INVALID_ID'
      }, { status: 400 });
    }

    // Verify application exists
    const existing = await db.select()
      .from(lcApplications)
      .where(eq(lcApplications.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Application not found',
        code: 'NOT_FOUND'
      }, { status: 404 });
    }

    const deleted = await db.delete(lcApplications)
      .where(eq(lcApplications.id, parseInt(id)))
      .returning();

    return NextResponse.json({ 
      message: 'Application deleted successfully',
      deleted: deleted[0]
    });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}