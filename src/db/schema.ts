import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// Add LC Applications table
export const lcApplications = sqliteTable('lc_applications', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  
  // Basic company and contact info
  companyName: text('company_name').notNull(),
  contactName: text('contact_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  country: text('country').notNull(),
  
  // LC specific fields
  lcType: text('lc_type').notNull(), // Sight, Usance, Transferable, Back-to-Back, Revolving, Red Clause, Standby
  amount: text('amount').notNull(),
  currency: text('currency').notNull(),
  incoterms: text('incoterms').notNull(),
  beneficiaryName: text('beneficiary_name'),
  issuingBank: text('issuing_bank'),
  expectedShipmentDate: text('expected_shipment_date'),
  message: text('message'),
  consent: integer('consent', { mode: 'boolean' }).notNull(),
  
  // Additional details
  applicantAddress: text('applicant_address'),
  registrationNumber: text('registration_number'),
  goodsDescription: text('goods_description').notNull(),
  quantity: text('quantity'),
  unit: text('unit'),
  portOfLoading: text('port_of_loading'),
  portOfDischarge: text('port_of_discharge'),
  latestShipmentDate: text('latest_shipment_date'),
  expiryDate: text('expiry_date').notNull(),
  lcRules: text('lc_rules'), // UCP 600, ISP98
  confirmationRequired: integer('confirmation_required', { mode: 'boolean' }),
  partialShipmentAllowed: integer('partial_shipment_allowed', { mode: 'boolean' }),
  transshipmentAllowed: integer('transshipment_allowed', { mode: 'boolean' }),
  tenorDays: integer('tenor_days'),
  
  // Document flags
  docCommercialInvoice: integer('doc_commercial_invoice', { mode: 'boolean' }),
  docPackingList: integer('doc_packing_list', { mode: 'boolean' }),
  docTransportDocument: integer('doc_transport_document', { mode: 'boolean' }),
  docInsurance: integer('doc_insurance', { mode: 'boolean' }),
  docCertificateOfOrigin: integer('doc_certificate_of_origin', { mode: 'boolean' }),
  docInspectionCertificate: integer('doc_inspection_certificate', { mode: 'boolean' }),
  
  // Extra meta
  taxId: text('tax_id'),
  website: text('website'),
  shipmentMode: text('shipment_mode').notNull(),
  placeOfDelivery: text('place_of_delivery'),
  
  // Advising/beneficiary banks
  advisingBankName: text('advising_bank_name'),
  advisingBankSwift: text('advising_bank_swift'),
  beneficiaryBankName: text('beneficiary_bank_name'),
  beneficiaryBankSwift: text('beneficiary_bank_swift'),
  
  // New fields
  beneficiaryAddress: text('beneficiary_address'),
  tolerancePercent: integer('tolerance_percent'),
  presentationPeriodDays: integer('presentation_period_days'),
  additionalConditions: text('additional_conditions'),
  
  // Commercial details
  contractNumber: text('contract_number'),
  contractDate: text('contract_date'),
  proformaInvoiceNumber: text('proforma_invoice_number'),
  proformaInvoiceDate: text('proforma_invoice_date'),
  hsCode: text('hs_code'),
  countryOfOrigin: text('country_of_origin'),
  priceTerms: text('price_terms'),
  
  // Further shipping/banking details
  confirmingBankName: text('confirming_bank_name'),
  confirmingBankSwift: text('confirming_bank_swift'),
  consigneeName: text('consignee_name'),
  notifyParty: text('notify_party'),
  transportDocType: text('transport_doc_type'),
  insuranceCoveragePercent: integer('insurance_coverage_percent'),
  portOfFinalDestination: text('port_of_final_destination'),
  
  // Commercial/charges meta
  chargesBorneBy: text('charges_borne_by'), // Applicant | Beneficiary | Shared
  availability: text('availability'), // By Payment | By Acceptance | By Negotiation | By Deferred Payment
  availableWith: text('available_with'), // Any Bank | Issuing Bank | Advising Bank | Nominated/Negotiating Bank
  placeOfExpiry: text('place_of_expiry'),
  
  // SBLC specifics
  sblcType: text('sblc_type'), // Performance | Financial
  sblcEvergreen: integer('sblc_evergreen', { mode: 'boolean' }),
  sblcEvergreenNoticeDays: integer('sblc_evergreen_notice_days'),
  sblcGoverningLaw: text('sblc_governing_law'),
  sblcClaimDocuments: text('sblc_claim_documents'),
  
  // Timestamps
  createdAt: integer('created_at').notNull(),
  updatedAt: integer('updated_at').notNull(),
});

// Add Contact Submissions table
export const contactSubmissions = sqliteTable('contact_submissions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  companyName: text('company_name'),
  contactPerson: text('contact_person').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  country: text('country'),
  serviceInterest: text('service_interest'),
  message: text('message').notNull(),
  complianceConsent: integer('compliance_consent', { mode: 'boolean' }).notNull(),
  createdAt: integer('created_at').notNull(),
  updatedAt: integer('updated_at').notNull(),
});


// Auth tables for better-auth
export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" })
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
});

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp",
  }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp",
  }),
  scope: text("scope"),
  password: text("password"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const verification = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
});