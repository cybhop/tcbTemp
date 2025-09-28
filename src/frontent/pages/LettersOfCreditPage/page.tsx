




import React, { useState } from "react";


const LettersOfCreditPage = () => {
  const title = "Letter of Credit Application";
  const subtitle = "Please complete this form to initiate your Letter of Credit application. All fields marked with * are required.";
  const defaultLcType = "Sight";

  const [formData, setFormData] = useState<any>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    lcType: defaultLcType,
    amount: "",
    currency: "USD",
    incoterms: "",
    beneficiaryName: "",
    issuingBank: "",
    expectedShipmentDate: "",
    message: "",
    consent: false,
    // Additional details
    applicantAddress: "",
    registrationNumber: "",
    goodsDescription: "",
    quantity: "",
    unit: "Units",
    portOfLoading: "",
    portOfDischarge: "",
    latestShipmentDate: "",
    expiryDate: "",
    lcRules: "UCP 600",
    confirmationRequired: false,
    partialShipmentAllowed: true,
    transshipmentAllowed: false,
    tenorDays: "",
    documents: {
      commercialInvoice: true,
      packingList: true,
      transportDocument: true,
      insurance: false,
      certificateOfOrigin: false,
      inspectionCertificate: false,
    },
    taxId: "",
    website: "",
    shipmentMode: "Sea",
    placeOfDelivery: "",
    advisingBankName: "",
    advisingBankSwift: "",
    beneficiaryBankName: "",
    beneficiaryBankSwift: "",
    // NEW FIELDS
    beneficiaryAddress: "",
    tolerancePercent: "",
    presentationPeriodDays: "",
    additionalConditions: "",
    // NEW: commercial details
    contractNumber: "",
    contractDate: "",
    proformaInvoiceNumber: "",
    proformaInvoiceDate: "",
    hsCode: "",
    countryOfOrigin: "",
    priceTerms: "",
    // NEW: further shipping/banking details
    confirmingBankName: "",
    confirmingBankSwift: "",
    consigneeName: "",
    notifyParty: "",
    transportDocType: "Bill of Lading",
    insuranceCoveragePercent: "",
    portOfFinalDestination: "",
    // NEW: commercial/charges meta
    chargesBorneBy: "Applicant",
    availability: "By Payment",
    availableWith: "Any Bank",
    placeOfExpiry: "",
    // NEW: SBLC specifics
    sblcType: "Performance", // Performance | Financial
    sblcEvergreen: false,
    sblcEvergreenNoticeDays: "",
    sblcGoverningLaw: "",
    sblcClaimDocuments: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (_field: string, _value: string | boolean) => {
    // setFormData(prev => ({ ...prev, [field]: value }));
    // if (errors[field]) {
    //   setErrors(prev => ({ ...prev, [field]: "" }));
    // }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.amount) newErrors.amount = "Amount is required";
    else if (isNaN(parseFloat(formData.amount)) || parseFloat(formData.amount) <= 0) newErrors.amount = "Valid amount is required";
    if (!formData.goodsDescription?.trim()) newErrors.goodsDescription = "Goods description is required";
    if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required";
    if (!formData.incoterms) newErrors.incoterms = "Select Incoterms";
    if (!formData.shipmentMode) newErrors.shipmentMode = "Select shipment mode";
    if (!formData.consent) newErrors.consent = "You must accept compliance requirements";

    if (formData.lcType === "Usance" && (!formData.tenorDays || Number(formData.tenorDays) <= 0)) {
      newErrors.tenorDays = "Tenor is required for Usance";
    }
    // NEW: basic SBLC validations
    if (formData.lcType === "Standby") {
      if (formData.sblcEvergreen && (!formData.sblcEvergreenNoticeDays || Number(formData.sblcEvergreenNoticeDays) <= 0)) {
        newErrors.sblcEvergreenNoticeDays = "Notice days required for evergreen";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setServerError("");
    setSuccess(false);
    setLoading(true);

    try {
      const res = await fetch("/api/lc-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        let message = "Submission failed. Please try again.";
        try {
          const data = await res.json();
          if (data?.error) message = data.error;
        } catch {}
        setServerError(message);
        setLoading(false);
        return;
      }

      setSuccess(true);
      // Reset form data
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        country: "",
        lcType: defaultLcType,
        amount: "",
        currency: "USD",
        incoterms: "",
        beneficiaryName: "",
        issuingBank: "",
        expectedShipmentDate: "",
        message: "",
        consent: false,
        applicantAddress: "",
        registrationNumber: "",
        goodsDescription: "",
        quantity: "",
        unit: "Units",
        portOfLoading: "",
        portOfDischarge: "",
        latestShipmentDate: "",
        expiryDate: "",
        lcRules: "UCP 600",
        confirmationRequired: false,
        partialShipmentAllowed: true,
        transshipmentAllowed: false,
        tenorDays: "",
        documents: {
          commercialInvoice: true,
          packingList: true,
          transportDocument: true,
          insurance: false,
          certificateOfOrigin: false,
          inspectionCertificate: false,
        },
        taxId: "",
        website: "",
        shipmentMode: "Sea",
        placeOfDelivery: "",
        advisingBankName: "",
        advisingBankSwift: "",
        beneficiaryBankName: "",
        beneficiaryBankSwift: "",
        beneficiaryAddress: "",
        tolerancePercent: "",
        presentationPeriodDays: "",
        additionalConditions: "",
        contractNumber: "",
        contractDate: "",
        proformaInvoiceNumber: "",
        proformaInvoiceDate: "",
        hsCode: "",
        countryOfOrigin: "",
        priceTerms: "",
        confirmingBankName: "",
        confirmingBankSwift: "",
        consigneeName: "",
        notifyParty: "",
        transportDocType: "Bill of Lading",
        insuranceCoveragePercent: "",
        portOfFinalDestination: "",
        chargesBorneBy: "Applicant",
        availability: "By Payment",
        availableWith: "Any Bank",
        placeOfExpiry: "",
        sblcType: "Performance",
        sblcEvergreen: false,
        sblcEvergreenNoticeDays: "",
        sblcGoverningLaw: "",
        sblcClaimDocuments: "",
      });
      setLoading(false);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setServerError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  };

  const lcTypes = ["Sight", "Usance", "Transferable", "Back-to-Back", "Revolving", "Red Clause", "Standby"];
  const units = ["Units", "KG", "MT", "L", "CBM", "Packages"];
  const lcRuleOptions = ["UCP 600", "ISP98"];
  const incotermsOptions = ["EXW","FCA","FAS","FOB","CFR","CIF","CPT","CIP","DAP","DPU","DDP"];
  const shipmentModes = ["Sea","Air","Road","Rail","Courier"];
  const transportDocTypes = ["Bill of Lading","Air Waybill","CMR","Railway Consignment Note","Courier Receipt"];
  const currencyOptions = ["USD","EUR","GBP","CNY","JPY","AED"];
  const chargesOptions = ["Applicant","Beneficiary","Shared"];
  const availabilityOptions = ["By Payment","By Acceptance","By Negotiation","By Deferred Payment"];
  const availableWithOptions = ["Any Bank","Issuing Bank","Advising Bank","Nominated/Negotiating Bank"];
  const sblcTypes = ["Performance", "Financial"];

  return (
    <div className="pt-40 pb-20 px-2"> 
    <div className="bg-card  border rounded-lg px-6 md:p-8 max-w-4xl mx-auto p-3">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-foreground/80 tracking-wide">Company & Contact</h4>
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-1">
              Company Name *
            </label>
            <input
              id="companyName"
              type="text"
              value={formData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
                focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none
                disabled:opacity-50 transition-colors`}
              aria-invalid={!!errors.companyName}
              disabled={loading}
            />
            {errors.companyName && (
              <p id="error-companyName" className="text-xs text-destructive mt-1">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-1">
              Contact Name *
            </label>
            <input
              id="contactName"
              type="text"
              value={formData.contactName}
              onChange={(e) => handleChange("contactName", e.target.value)}
              className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
                focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none
                disabled:opacity-50 transition-colors`}
              aria-invalid={!!errors.contactName}
              disabled={loading}
            />
            {errors.contactName && (
              <p id="error-contactName" className="text-xs text-destructive mt-1">{errors.contactName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
                focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none
                disabled:opacity-50 transition-colors`}
              aria-invalid={!!errors.email}
              disabled={loading}
            />
            {errors.email && (
              <p id="error-email" className="text-xs text-destructive mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
              Phone *
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
                focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none
                disabled:opacity-50 transition-colors`}
              aria-invalid={!!errors.phone}
              disabled={loading}
            />
            {errors.phone && (
              <p id="error-phone" className="text-xs text-destructive mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-foreground mb-1">
              Country *
            </label>
            <input
              id="country"
              type="text"
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value)}
              className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
                focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none
                disabled:opacity-50 transition-colors`}
              aria-invalid={!!errors.country}
              disabled={loading}
            />
            {errors.country && (
              <p id="error-country" className="text-xs text-destructive mt-1">{errors.country}</p>
            )}
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-foreground mb-1">
              Amount *
            </label>
            <input
              id="amount"
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={(e) => handleChange("amount", e.target.value)}
              className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
                focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none
                disabled:opacity-50 transition-colors`}
              aria-invalid={!!errors.amount}
              disabled={loading}
            />
            {errors.amount && (
              <p id="error-amount" className="text-xs text-destructive mt-1">{errors.amount}</p>
            )}
          </div>

          <div>
            <label htmlFor="currency" className="block text-sm font-medium text-foreground mb-1">
              Currency
            </label>
            <select
              id="currency"
              value={formData.currency}
              onChange={(e) => handleChange("currency", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
              disabled={loading}
            >
              {currencyOptions.map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2 pt-2">
            <h4 className="text-sm font-semibold text-foreground/80 tracking-wide">Transaction Basics</h4>
          </div>
          <div>
            <label htmlFor="lcType" className="block text-sm font-medium text-foreground mb-1">
              LC Type
            </label>
            <select
              id="lcType"
              value={formData.lcType}
              onChange={(e) => handleChange("lcType", e.target.value)}
              className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
                focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none
                disabled:opacity-50 transition-colors`}
              disabled={loading}
            >
              {lcTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="incoterms" className="block text-sm font-medium text-foreground mb-1">
              Incoterms *
            </label>
            <select
              id="incoterms"
              value={formData.incoterms}
              onChange={(e) => handleChange("incoterms", e.target.value)}
              className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
                focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none
                disabled:opacity-50 transition-colors`}
              aria-invalid={!!errors.incoterms}
              disabled={loading}
            >
              <option value="">Select Incoterms</option>
              {incotermsOptions.map(term => (
                <option key={term} value={term}>{term}</option>
              ))}
            </select>
            {errors.incoterms && (
              <p id="error-incoterms" className="text-xs text-destructive mt-1">{errors.incoterms}</p>
            )}
          </div>

          <div className="md:col-span-2 pt-2">
            <h4 className="text-sm font-semibold text-foreground/80 tracking-wide">Beneficiary Details</h4>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="beneficiaryName" className="block text-sm font-medium text-foreground mb-1">
              Beneficiary Name
            </label>
            <input
              id="beneficiaryName"
              type="text"
              value={formData.beneficiaryName}
              onChange={(e) => handleChange("beneficiaryName", e.target.value)}
              className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
                focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none
                disabled:opacity-50 transition-colors`}
              disabled={loading}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="beneficiaryAddress" className="block text-sm font-medium text-foreground mb-1">
              Beneficiary Address
            </label>
            <input
              id="beneficiaryAddress"
              type="text"
              value={formData.beneficiaryAddress}
              onChange={(e) => handleChange("beneficiaryAddress", e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
              disabled={loading}
            />
          </div>

          <div className="md:col-span-2 pt-2">
            <h4 className="text-sm font-semibold text-foreground/80 tracking-wide">Applicant & Communication</h4>
          </div>
          <div>
            <label htmlFor="issuingBank" className="block text-sm font-medium text-foreground mb-1">
              Issuing Bank
            </label>
            <input
              id="issuingBank"
              type="text"
              value={formData.issuingBank}
              onChange={(e) => handleChange("issuingBank", e.target.value)}
              className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
                focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none
                disabled:opacity-50 transition-colors`}
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="expectedShipmentDate" className="block text-sm font-medium text-foreground mb-1">
              Expected Shipment Date
            </label>
            <input
              id="expectedShipmentDate"
              type="date"
              value={formData.expectedShipmentDate}
              onChange={(e) => handleChange("expectedShipmentDate", e.target.value)}
              className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
                focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none
                disabled:opacity-50 transition-colors`}
              disabled={loading}
            />
          </div>

          {/* SBLC Specifics */}
          {formData.lcType === "Standby" && (
            <>
              <div className="md:col-span-2 pt-2">
                <h4 className="text-sm font-semibold text-foreground/80 tracking-wide">Standby LC Details</h4>
              </div>
              <div>
                <label htmlFor="sblcType" className="block text-sm font-medium text-foreground mb-1">SBLC Type</label>
                <select
                  id="sblcType"
                  value={formData.sblcType}
                  onChange={(e) => handleChange("sblcType", e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                  disabled={loading}
                >
                  {sblcTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <label className="flex items-start gap-2 text-sm">
                <input
                  id="sblcEvergreen"
                  type="checkbox"
                  checked={!!formData.sblcEvergreen}
                  onChange={(e) => handleChange("sblcEvergreen", e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border"
                  disabled={loading}
                />
                Evergreen (auto-renew)
              </label>

              {formData.sblcEvergreen && (
                <div>
                  <label htmlFor="sblcEvergreenNoticeDays" className="block text-sm font-medium text-foreground mb-1">Evergreen Non-Renewal Notice (days)</label>
                  <input
                    id="sblcEvergreenNoticeDays"
                    type="number"
                    min="1"
                    value={formData.sblcEvergreenNoticeDays}
                    onChange={(e) => handleChange("sblcEvergreenNoticeDays", e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                    aria-invalid={!!errors.sblcEvergreenNoticeDays}
                    disabled={loading}
                  />
                  {errors.sblcEvergreenNoticeDays && <p className="text-xs text-destructive mt-1">{errors.sblcEvergreenNoticeDays}</p>}
                </div>
              )}

              <div>
                <label htmlFor="sblcGoverningLaw" className="block text-sm font-medium text-foreground mb-1">Governing Law (optional)</label>
                <input
                  id="sblcGoverningLaw"
                  type="text"
                  value={formData.sblcGoverningLaw}
                  onChange={(e) => handleChange("sblcGoverningLaw", e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                  disabled={loading}
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="sblcClaimDocuments" className="block text-sm font-medium text-foreground mb-1">Claim Documents Required (optional)</label>
                <textarea
                  id="sblcClaimDocuments"
                  rows={3}
                  value={formData.sblcClaimDocuments}
                  onChange={(e) => handleChange("sblcClaimDocuments", e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none resize-none disabled:opacity-50 transition-colors"
                  placeholder="E.g., signed statement of default, demand letter, supporting contract references"
                  disabled={loading}
                />
              </div>
            </>
          )}
        </div>

        {/* Additional Details */}
        <div className="space-y-4 border-t border-border pt-6 mt-6">
          <h3 className="text-xl font-semibold text-foreground">Additional Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <h4 className="text-sm font-semibold text-foreground/80 tracking-wide">Commercial Info</h4>
            </div>
            <div>
              <label htmlFor="applicantAddress" className="block text-sm font-medium text-foreground mb-1">Applicant Address</label>
              <input
                id="applicantAddress"
                type="text"
                value={formData.applicantAddress}
                onChange={(e) => handleChange("applicantAddress", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="registrationNumber" className="block text-sm font-medium text-foreground mb-1">Company Registration No.</label>
              <input
                id="registrationNumber"
                type="text"
                value={formData.registrationNumber}
                onChange={(e) => handleChange("registrationNumber", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            {/* NEW: Contract / Proforma details */}
            <div>
              <label htmlFor="contractNumber" className="block text-sm font-medium text-foreground mb-1">Sales Contract No.</label>
              <input
                id="contractNumber"
                type="text"
                value={formData.contractNumber}
                onChange={(e) => handleChange("contractNumber", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="contractDate" className="block text-sm font-medium text-foreground mb-1">Contract Date</label>
              <input
                id="contractDate"
                type="date"
                value={formData.contractDate}
                onChange={(e) => handleChange("contractDate", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="proformaInvoiceNumber" className="block text-sm font-medium text-foreground mb-1">Proforma Invoice No.</label>
              <input
                id="proformaInvoiceNumber"
                type="text"
                value={formData.proformaInvoiceNumber}
                onChange={(e) => handleChange("proformaInvoiceNumber", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="proformaInvoiceDate" className="block text-sm font-medium text-foreground mb-1">Proforma Invoice Date</label>
              <input
                id="proformaInvoiceDate"
                type="date"
                value={formData.proformaInvoiceDate}
                onChange={(e) => handleChange("proformaInvoiceDate", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="hsCode" className="block text-sm font-medium text-foreground mb-1">HS Code</label>
              <input
                id="hsCode"
                type="text"
                value={formData.hsCode}
                onChange={(e) => handleChange("hsCode", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                placeholder="e.g., 840733"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="countryOfOrigin" className="block text-sm font-medium text-foreground mb-1">Country of Origin</label>
              <input
                id="countryOfOrigin"
                type="text"
                value={formData.countryOfOrigin}
                onChange={(e) => handleChange("countryOfOrigin", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="priceTerms" className="block text-sm font-medium text-foreground mb-1">Commercial Terms</label>
              <input
                id="priceTerms"
                type="text"
                value={formData.priceTerms}
                onChange={(e) => handleChange("priceTerms", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                placeholder="e.g., CIF Hamburg as per contract"
                disabled={loading}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="goodsDescription" className="block text-sm font-medium text-foreground mb-1">Goods Description *</label>
              <textarea
                id="goodsDescription"
                rows={3}
                value={formData.goodsDescription}
                onChange={(e) => handleChange("goodsDescription", e.target.value)}
                className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none resize-none disabled:opacity-50 transition-colors`}
                placeholder="Describe goods, HS codes (if known), quality/specs"
                disabled={loading}
                aria-invalid={!!errors.goodsDescription}
              />
              {errors.goodsDescription && <p className="text-xs text-destructive mt-1">{errors.goodsDescription}</p>}
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-foreground mb-1">Quantity</label>
              <input
                id="quantity"
                type="number"
                min="0"
                value={formData.quantity}
                onChange={(e) => handleChange("quantity", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="unit" className="block text-sm font-medium text-foreground mb-1">Unit</label>
              <select
                id="unit"
                value={formData.unit}
                onChange={(e) => handleChange("unit", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              >
                {units.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="portOfLoading" className="block text-sm font-medium text-foreground mb-1">Port/Airport of Loading</label>
              <input
                id="portOfLoading"
                type="text"
                value={formData.portOfLoading}
                onChange={(e) => handleChange("portOfLoading", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="portOfDischarge" className="block text-sm font-medium text-foreground mb-1">Port/Airport of Discharge</label>
              <input
                id="portOfDischarge"
                type="text"
                value={formData.portOfDischarge}
                onChange={(e) => handleChange("portOfDischarge", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="latestShipmentDate" className="block text-sm font-medium text-foreground mb-1">Latest Shipment Date</label>
              <input
                id="latestShipmentDate"
                type="date"
                value={formData.latestShipmentDate}
                onChange={(e) => handleChange("latestShipmentDate", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-foreground mb-1">LC Expiry Date *</label>
              <input
                id="expiryDate"
                type="date"
                value={formData.expiryDate}
                onChange={(e) => handleChange("expiryDate", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                aria-invalid={!!errors.expiryDate}
                disabled={loading}
              />
              {errors.expiryDate && <p className="text-xs text-destructive mt-1">{errors.expiryDate}</p>}
            </div>

            <div>
              <label htmlFor="lcRules" className="block text-sm font-medium text-foreground mb-1">Applicable Rules</label>
              <select
                id="lcRules"
                value={formData.lcRules}
                onChange={(e) => handleChange("lcRules", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              >
                {lcRuleOptions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            {/* NEW: Charges & Availability */}
            <div>
              <label htmlFor="chargesBorneBy" className="block text-sm font-medium text-foreground mb-1">Responsibilities Allocation</label>
              <select
                id="chargesBorneBy"
                value={formData.chargesBorneBy}
                onChange={(e) => handleChange("chargesBorneBy", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              >
                {chargesOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-foreground mb-1">LC Availability</label>
              <select
                id="availability"
                value={formData.availability}
                onChange={(e) => handleChange("availability", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              >
                {availabilityOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="availableWith" className="block text-sm font-medium text-foreground mb-1">Available With</label>
              <select
                id="availableWith"
                value={formData.availableWith}
                onChange={(e) => handleChange("availableWith", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              >
                {availableWithOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="placeOfExpiry" className="block text-sm font-medium text-foreground mb-1">Place of Expiry</label>
              <input
                id="placeOfExpiry"
                type="text"
                value={formData.placeOfExpiry}
                onChange={(e) => handleChange("placeOfExpiry", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="tenorDays" className="block text-sm font-medium text-foreground mb-1">Tenor (days, for Usance)</label>
              <input
                id="tenorDays"
                type="number"
                min="0"
                value={formData.tenorDays}
                onChange={(e) => handleChange("tenorDays", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            {/* NEW: Tolerance % */}
            <div>
              <label htmlFor="tolerancePercent" className="block text-sm font-medium text-foreground mb-1">Quantity/Amount Tolerance (%)</label>
              <input
                id="tolerancePercent"
                type="number"
                min="0"
                max="100"
                value={formData.tolerancePercent}
                onChange={(e) => handleChange("tolerancePercent", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                placeholder="e.g., 10"
                disabled={loading}
              />
            </div>

            {/* NEW: Presentation Period */}
            <div>
              <label htmlFor="presentationPeriodDays" className="block text-sm font-medium text-foreground mb-1">Presentation Period (days)</label>
              <input
                id="presentationPeriodDays"
                type="number"
                min="0"
                value={formData.presentationPeriodDays}
                onChange={(e) => handleChange("presentationPeriodDays", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                placeholder="e.g., 21"
                disabled={loading}
              />
            </div>

            {/* NEW: Shipment Mode */}
            <div>
              <label htmlFor="shipmentMode" className="block text-sm font-medium text-foreground mb-1">Shipment Mode *</label>
              <select
                id="shipmentMode"
                value={formData.shipmentMode}
                onChange={(e) => handleChange("shipmentMode", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              >
                {shipmentModes.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
              {errors.shipmentMode && <p className="text-xs text-destructive mt-1">{errors.shipmentMode}</p>}
            </div>

            {/* NEW: Place of Delivery */}
            <div>
              <label htmlFor="placeOfDelivery" className="block text-sm font-medium text-foreground mb-1">Place of Delivery</label>
              <input
                id="placeOfDelivery"
                type="text"
                value={formData.placeOfDelivery}
                onChange={(e) => handleChange("placeOfDelivery", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            {/* NEW: Advising bank */}
            <div>
              <label htmlFor="advisingBankName" className="block text-sm font-medium text-foreground mb-1">Advising Bank Name</label>
              <input
                id="advisingBankName"
                type="text"
                value={formData.advisingBankName}
                onChange={(e) => handleChange("advisingBankName", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="advisingBankSwift" className="block text-sm font-medium text-foreground mb-1">Advising Bank SWIFT</label>
              <input
                id="advisingBankSwift"
                type="text"
                value={formData.advisingBankSwift}
                onChange={(e) => handleChange("advisingBankSwift", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                placeholder="8 or 11 characters"
                disabled={loading}
              />
            </div>

            {/* NEW: Beneficiary bank */}
            <div>
              <label htmlFor="beneficiaryBankName" className="block text-sm font-medium text-foreground mb-1">Beneficiary Bank Name</label>
              <input
                id="beneficiaryBankName"
                type="text"
                value={formData.beneficiaryBankName}
                onChange={(e) => handleChange("beneficiaryBankName", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="beneficiaryBankSwift" className="block text-sm font-medium text-foreground mb-1">Beneficiary Bank SWIFT</label>
              <input
                id="beneficiaryBankSwift"
                type="text"
                value={formData.beneficiaryBankSwift}
                onChange={(e) => handleChange("beneficiaryBankSwift", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                placeholder="8 or 11 characters"
                disabled={loading}
              />
            </div>

            {/* NEW: Confirming bank */}
            <div>
              <label htmlFor="confirmingBankName" className="block text-sm font-medium text-foreground mb-1">Confirming Bank Name</label>
              <input
                id="confirmingBankName"
                type="text"
                value={formData.confirmingBankName}
                onChange={(e) => handleChange("confirmingBankName", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="confirmingBankSwift" className="block text-sm font-medium text-foreground mb-1">Confirming Bank SWIFT</label>
              <input
                id="confirmingBankSwift"
                type="text"
                value={formData.confirmingBankSwift}
                onChange={(e) => handleChange("confirmingBankSwift", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                placeholder="8 or 11 characters"
                disabled={loading}
              />
            </div>

            {/* NEW: Consignee / Notify */}
            <div>
              <label htmlFor="consigneeName" className="block text-sm font-medium text-foreground mb-1">Consignee Name</label>
              <input
                id="consigneeName"
                type="text"
                value={formData.consigneeName}
                onChange={(e) => handleChange("consigneeName", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="notifyParty" className="block text-sm font-medium text-foreground mb-1">Notify Party</label>
              <input
                id="notifyParty"
                type="text"
                value={formData.notifyParty}
                onChange={(e) => handleChange("notifyParty", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>

            {/* NEW: Transport document type */}
            <div>
              <label htmlFor="transportDocType" className="block text-sm font-medium text-foreground mb-1">Transport Document Type</label>
              <select
                id="transportDocType"
                value={formData.transportDocType}
                onChange={(e) => handleChange("transportDocType", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              >
                {transportDocTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* NEW: Insurance coverage and final destination */}
            <div>
              <label htmlFor="insuranceCoveragePercent" className="block text-sm font-medium text-foreground mb-1">Insurance Coverage (%)</label>
              <input
                id="insuranceCoveragePercent"
                type="number"
                min="0"
                max="100"
                value={formData.insuranceCoveragePercent}
                onChange={(e) => handleChange("insuranceCoveragePercent", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                placeholder="e.g., 110"
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="portOfFinalDestination" className="block text-sm font-medium text-foreground mb-1">Final Destination (Port/City)</label>
              <input
                id="portOfFinalDestination"
                type="text"
                value={formData.portOfFinalDestination}
                onChange={(e) => handleChange("portOfFinalDestination", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none disabled:opacity-50 transition-colors"
                disabled={loading}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={!!formData.confirmationRequired}
                onChange={(e) => handleChange("confirmationRequired", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border"
                disabled={loading}
              />
              Confirmation Required
            </label>
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={!!formData.partialShipmentAllowed}
                onChange={(e) => handleChange("partialShipmentAllowed", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border"
                disabled={loading}
              />
              Partial Shipment Allowed
            </label>
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={!!formData.transshipmentAllowed}
                onChange={(e) => handleChange("transshipmentAllowed", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border"
                disabled={loading}
              />
              Transshipment Allowed
            </label>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-foreground/80 tracking-wide">Documents</h4>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-2">Documents Required</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { key: "commercialInvoice", label: "Commercial Invoice" },
                { key: "packingList", label: "Packing List" },
                { key: "transportDocument", label: "Transport Document (B/L/AWB)" },
                { key: "insurance", label: "Insurance Policy/Certificate" },
                { key: "certificateOfOrigin", label: "Certificate of Origin" },
                { key: "inspectionCertificate", label: "Inspection Certificate" },
              ].map((doc) => (
                <label key={doc.key} className="flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={!!formData.documents?.[doc.key]}
                    onChange={(e) => handleChange("documents", { ...formData.documents, [doc.key]: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-border"
                    disabled={loading}
                  />
                  {doc.label}
                </label>
              ))}
            </div>
          </div>

          {/* NEW: Additional Conditions */}
          <div>
            <label htmlFor="additionalConditions" className="block text-sm font-medium text-foreground mb-1">
              Additional Conditions / Special Instructions
            </label>
            <textarea
              id="additionalConditions"
              rows={4}
              value={formData.additionalConditions}
              onChange={(e) => handleChange("additionalConditions", e.target.value)}
              className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
                focus:ring-2 focus:ring-[var(--color-ring)] focus:border-[var(--color-ring)] outline-none
                resize-none disabled:opacity-50 transition-colors`}
              placeholder="e.g., latest date for shipment, specific documents wording, confirmation instructions, etc."
              disabled={loading}
            />
          </div>

          {/* NEW: Supporting documents upload (optional) */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Supporting Documents (optional)</label>
            <input
              id="supportingFiles"
              type="file"
              multiple
              className="block w-full text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-border file:bg-accent file:text-accent-foreground hover:file:bg-accent/80"
              disabled={loading}
            />
            <p className="text-xs text-muted-foreground mt-1">Upload contracts, proforma invoices, specifications, etc. (uploads not sent yet)</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input
            id="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => handleChange("consent", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-border text-[var(--color-highlight)] 
              focus:ring-2 focus:ring-[var(--color-ring)] outline-none disabled:opacity-50"
            aria-invalid={!!errors.consent}
            disabled={loading}
          />
          <div>
            <label htmlFor="consent" className="text-sm text-foreground">
              I confirm the information provided is accurate and accept KYC/AML compliance requirements. *
            </label>
            {errors.consent && <p className="text-xs text-destructive mt-1">{errors.consent}</p>}
          </div>
        </div>

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md text-sm">
            Your Letter of Credit application has been successfully submitted. We will contact you shortly.
          </div>
        )}

        {serverError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
            {serverError}
          </div>
        )}

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={loading}
            className="cta-primary px-6 py-2.5 rounded-md text-sm font-medium 
              disabled:opacity-50 disabled:cursor-not-allowed transition-all
              hover:transform hover:translate-y-px"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Submitting...
              </span>
            ) : (
              "Submit Application"
            )}
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};
export default LettersOfCreditPage;