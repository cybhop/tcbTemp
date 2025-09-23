import React from 'react';
import { ScrollText, Shield, AlertTriangle, Building, Scale, FileText, Users, CreditCard, Gavel, Globe } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-[#1a1f36] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <ScrollText className="w-12 h-12 text-[#d4af37]" />
            <div>
              <h1 className="text-4xl font-bold">Terms of Service</h1>
              <p className="text-lg text-gray-300 mt-2">Trade Credit Bancorp Financial Services</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-lg leading-relaxed">
              These Terms of Service govern your use of Trade Credit Bancorp's trade finance services and digital platforms. Please read these terms carefully before accessing or using our services.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-300">
              <AlertTriangle className="w-4 h-4" />
              <span>Last Updated: January 1, 2024 | Effective Date: January 1, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-2xl font-bold text-[#1a1f36] mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#d4af37]" />
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a href="#section-1" className="block text-[#1a1f36] hover:text-[#d4af37] transition-colors">1. Service Agreement</a>
              <a href="#section-2" className="block text-[#1a1f36] hover:text-[#d4af37] transition-colors">2. Account Terms</a>
              <a href="#section-3" className="block text-[#1a1f36] hover:text-[#d4af37] transition-colors">3. Trade Finance Instruments</a>
              <a href="#section-4" className="block text-[#1a1f36] hover:text-[#d4af37] transition-colors">4. KYC/AML Compliance</a>
              <a href="#section-5" className="block text-[#1a1f36] hover:text-[#d4af37] transition-colors">5. Fees and Charges</a>
            </div>
            <div className="space-y-2">
              <a href="#section-6" className="block text-[#1a1f36] hover:text-[#d4af37] transition-colors">6. Liability Limitations</a>
              <a href="#section-7" className="block text-[#1a1f36] hover:text-[#d4af37] transition-colors">7. Dispute Resolution</a>
              <a href="#section-8" className="block text-[#1a1f36] hover:text-[#d4af37] transition-colors">8. Termination</a>
              <a href="#section-9" className="block text-[#1a1f36] hover:text-[#d4af37] transition-colors">9. Governing Law</a>
              <a href="#section-10" className="block text-[#1a1f36] hover:text-[#d4af37] transition-colors">10. Force Majeure</a>
            </div>
          </div>
        </div>

        {/* Section 1: Service Agreement */}
        <section id="section-1" className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a1f36] mb-6 flex items-center gap-3">
            <Building className="w-7 h-7 text-[#d4af37]" />
            1. Service Agreement
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">1.1 Agreement Formation</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "Customer," or "you") and Trade Credit Bancorp ("TCB," "we," "us," or "our"), a financial institution duly incorporated and licensed to provide trade finance services. By accessing our services, creating an account, or executing any transaction, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This Agreement becomes effective upon your first use of our services and remains in effect until terminated in accordance with the provisions set forth herein. Your continued use of our services constitutes ongoing acceptance of these Terms and any amendments thereto.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">1.2 Service Scope</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  TCB provides comprehensive trade finance services including, but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Letters of Credit (Documentary and Standby)</li>
                  <li>Trade Finance Facilities and Credit Lines</li>
                  <li>Import and Export Documentation Services</li>
                  <li>Foreign Exchange Services</li>
                  <li>Supply Chain Finance Solutions</li>
                  <li>Bank Guarantees and Performance Bonds</li>
                  <li>Digital Trade Finance Platform Access</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">1.3 Amendment Rights</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  TCB reserves the right to modify these Terms at any time. Material changes will be communicated to you via email or through our digital platform with thirty (30) days' advance notice. Your continued use of our services after the effective date of any amendments constitutes acceptance of the revised Terms. If you do not agree to the amendments, you may terminate your account in accordance with Section 8.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Account Terms */}
        <section id="section-2" className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a1f36] mb-6 flex items-center gap-3">
            <Users className="w-7 h-7 text-[#d4af37]" />
            2. Account Terms
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">2.1 Account Opening Requirements</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  To open an account with TCB, you must:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Be a legal entity duly incorporated and in good standing</li>
                  <li>Provide complete and accurate documentation as required by our onboarding process</li>
                  <li>Meet our minimum creditworthiness and financial stability criteria</li>
                  <li>Comply with all applicable regulatory requirements</li>
                  <li>Designate authorized signatories with proper corporate resolutions</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">2.2 Account Maintenance</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  You are responsible for maintaining the accuracy and completeness of your account information. You must promptly notify TCB of any changes to your corporate structure, financial condition, authorized signatories, or contact information. Failure to maintain current information may result in service restrictions or account suspension.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Account access credentials must be kept confidential and secure. You are liable for all activities conducted using your account credentials, whether authorized or unauthorized, until you notify TCB of any security breach.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">2.3 Credit Facilities</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  Credit facilities are subject to separate credit agreements and are granted at TCB's sole discretion based on creditworthiness assessment. Credit limits may be modified, suspended, or revoked at any time based on changes in your financial condition, payment history, or market conditions. All credit facilities are secured by collateral as specified in the applicable security agreements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Trade Finance Instruments */}
        <section id="section-3" className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a1f36] mb-6 flex items-center gap-3">
            <CreditCard className="w-7 h-7 text-[#d4af37]" />
            3. Trade Finance Instruments
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">3.1 Letters of Credit</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  All Letters of Credit issued by TCB are governed by the Uniform Customs and Practice for Documentary Credits (UCP 600) as published by the International Chamber of Commerce, unless otherwise specified. Electronic presentations are subject to the eUCP (Version 2.0) supplement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Documentary requirements must be strictly complied with. TCB reserves the right to reject presentations that do not conform to the credit terms. Discrepancies in documentation may result in additional fees and delays in processing.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">3.2 Bank Guarantees</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  Bank guarantees are governed by the Uniform Rules for Demand Guarantees (URDG 758) unless otherwise specified. All guarantees are issued subject to adequate collateral and credit approval. TCB's liability under any guarantee is limited to the face amount of the guarantee and applicable interest as specified in the guarantee terms.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">3.3 Collection Services</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  Documentary collections are handled in accordance with the Uniform Rules for Collections (URC 522). TCB acts solely as a collecting agent and assumes no responsibility for the financial condition of the drawee or the authenticity of documents. Collection proceeds are subject to final payment and clearing before credit to your account.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: KYC/AML Compliance */}
        <section id="section-4" className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a1f36] mb-6 flex items-center gap-3">
            <Shield className="w-7 h-7 text-[#d4af37]" />
            4. KYC/AML Compliance
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">4.1 Know Your Customer Requirements</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  TCB is required to comply with all applicable Know Your Customer (KYC) regulations. You must provide complete and accurate information regarding:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Corporate structure and beneficial ownership</li>
                  <li>Business activities and trade patterns</li>
                  <li>Source of funds and wealth</li>
                  <li>Politically Exposed Persons (PEP) status</li>
                  <li>Sanctions screening and compliance certifications</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">4.2 Anti-Money Laundering</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  TCB maintains strict Anti-Money Laundering (AML) policies in compliance with applicable laws and regulations. All transactions are subject to monitoring and reporting requirements. You warrant that:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>All funds and transactions are for legitimate business purposes</li>
                  <li>No transactions involve proceeds from illegal activities</li>
                  <li>You will cooperate fully with AML investigations</li>
                  <li>You will promptly report any suspicious activities</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">4.3 Sanctions Compliance</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  All transactions are screened against applicable sanctions lists including OFAC, EU, UN, and other relevant jurisdictions. TCB reserves the right to reject, freeze, or reverse any transaction that may violate sanctions regulations. You are responsible for ensuring your transactions comply with all applicable sanctions laws.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Fees and Charges */}
        <section id="section-5" className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a1f36] mb-6 flex items-center gap-3">
            <CreditCard className="w-7 h-7 text-[#d4af37]" />
            5. Fees and Charges
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">5.1 Fee Structure</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  TCB's fees are detailed in our Fee Schedule, which forms part of these Terms. Fees may include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Account maintenance and service fees</li>
                  <li>Letter of Credit issuance, amendment, and negotiation fees</li>
                  <li>Guarantee commission and management fees</li>
                  <li>Foreign exchange spreads and handling charges</li>
                  <li>Documentary processing and courier fees</li>
                  <li>Late payment penalties and interest charges</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">5.2 Payment Terms</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  All fees are due and payable upon invoice unless otherwise specified. TCB may debit your account for any fees, charges, or expenses incurred. Overdue amounts accrue interest at the rate specified in your credit agreement or as permitted by law. TCB reserves the right to modify fees with thirty (30) days' advance notice.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">5.3 Currency and Exchange Rates</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  Foreign exchange transactions are executed at prevailing market rates plus TCB's spread. Exchange rates are subject to market fluctuations and may change without notice. TCB is not liable for any losses arising from currency fluctuations or rate changes between the time of transaction authorization and execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Liability Limitations */}
        <section id="section-6" className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a1f36] mb-6 flex items-center gap-3">
            <AlertTriangle className="w-7 h-7 text-[#d4af37]" />
            6. Liability Limitations
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">6.1 General Limitations</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  TCB's liability is limited to direct damages actually incurred by you, not to exceed the amount of fees paid to TCB in connection with the specific transaction giving rise to the claim. TCB shall not be liable for:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Indirect, consequential, or punitive damages</li>
                  <li>Loss of profits, business opportunities, or goodwill</li>
                  <li>Delays in processing due to incomplete documentation</li>
                  <li>Acts or omissions of third parties</li>
                  <li>Market fluctuations or force majeure events</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">6.2 Documentary Credits</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  TCB's liability for Letters of Credit is limited to the face amount of the credit. TCB is not responsible for the performance of underlying contracts, the authenticity of documents (except for forgery apparent on the face of documents), or the condition of goods. TCB's examination of documents is limited to determining apparent compliance with credit terms.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">6.3 System Availability</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  While TCB strives to maintain system availability, we do not guarantee uninterrupted access to our digital platforms. TCB shall not be liable for any losses arising from system downtime, maintenance, or technical issues beyond our reasonable control. You are advised to maintain alternative communication channels for urgent matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Dispute Resolution */}
        <section id="section-7" className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a1f36] mb-6 flex items-center gap-3">
            <Gavel className="w-7 h-7 text-[#d4af37]" />
            7. Dispute Resolution
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">7.1 Internal Resolution</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  All disputes should first be addressed through TCB's internal complaint resolution process. Written complaints must be submitted within thirty (30) days of the event giving rise to the dispute. TCB will investigate and respond to complaints within a reasonable timeframe, typically within fifteen (15) business days.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">7.2 Mediation</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  If internal resolution is unsuccessful, disputes shall be submitted to mediation before a mutually agreed mediator. Mediation proceedings shall be conducted in accordance with the Commercial Mediation Rules of the International Chamber of Commerce. The costs of mediation shall be shared equally between the parties.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">7.3 Arbitration</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  Any dispute not resolved through mediation shall be finally settled by arbitration under the ICC Rules of Arbitration. The arbitration shall be conducted by a single arbitrator appointed by mutual agreement or, failing agreement, by the ICC Court. The seat of arbitration shall be London, England, and the language of proceedings shall be English.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Termination */}
        <section id="section-8" className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a1f36] mb-6 flex items-center gap-3">
            <AlertTriangle className="w-7 h-7 text-[#d4af37]" />
            8. Termination
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">8.1 Termination by Customer</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  You may terminate your account at any time by providing thirty (30) days' written notice to TCB. Upon termination, all outstanding obligations must be satisfied, including repayment of credit facilities and settlement of pending transactions. TCB will cooperate in the orderly wind-down of services and transfer of documents as appropriate.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">8.2 Termination by TCB</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  TCB may terminate your account immediately upon:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Material breach of these Terms</li>
                  <li>Insolvency or bankruptcy proceedings</li>
                  <li>Regulatory non-compliance</li>
                  <li>Suspected fraudulent activities</li>
                  <li>Failure to meet creditworthiness criteria</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">8.3 Survival</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  Termination does not affect outstanding obligations, contingent liabilities, or accrued fees. Provisions relating to confidentiality, liability limitations, dispute resolution, and governing law survive termination. All Letters of Credit and guarantees remain in effect until their natural expiry or cancellation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Governing Law */}
        <section id="section-9" className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a1f36] mb-6 flex items-center gap-3">
            <Scale className="w-7 h-7 text-[#d4af37]" />
            9. Governing Law
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">9.1 Applicable Law</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">9.2 Jurisdiction</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  Subject to the arbitration provisions in Section 7, the courts of England and Wales shall have exclusive jurisdiction over any legal proceedings arising from or relating to these Terms. Each party irrevocably submits to the jurisdiction of such courts and waives any objection to proceedings in such courts.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">9.3 Regulatory Compliance</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  TCB operates under the supervision of relevant financial authorities. In the event of conflict between these Terms and applicable regulations, the regulatory requirements shall prevail. TCB reserves the right to modify these Terms to ensure continued regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Force Majeure */}
        <section id="section-10" className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a1f36] mb-6 flex items-center gap-3">
            <Globe className="w-7 h-7 text-[#d4af37]" />
            10. Force Majeure
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">10.1 Definition</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Force Majeure" means any event beyond the reasonable control of TCB, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Acts of God, natural disasters, and extreme weather conditions</li>
                  <li>War, terrorism, civil unrest, and political instability</li>
                  <li>Government actions, sanctions, and regulatory changes</li>
                  <li>Cyber attacks, system failures, and infrastructure disruptions</li>
                  <li>Pandemics and public health emergencies</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">10.2 Effect</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  TCB shall not be liable for any failure or delay in performance of its obligations under these Terms if such failure or delay results from a Force Majeure event. TCB will use reasonable efforts to mitigate the effects of such events and resume normal operations as soon as practicable.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">10.3 Notification</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  TCB will promptly notify affected customers of any Force Majeure event that materially impacts service delivery. Such notification will include the nature of the event, expected duration, and steps being taken to resume normal operations. If a Force Majeure event continues for more than ninety (90) days, either party may terminate the affected services upon written notice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <div className="bg-[#1a1f36] text-white rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-[#d4af37]" />
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[#d4af37]">Legal Department</h3>
              <p className="text-gray-300 mb-2">Trade Credit Bancorp</p>
              <p className="text-gray-300 mb-2">25 Old Broad Street</p>
              <p className="text-gray-300 mb-2">London EC2N 1HQ, United Kingdom</p>
              <p className="text-gray-300">Email: legal@tradecreditbancorp.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[#d4af37]">Client Services</h3>
              <p className="text-gray-300 mb-2">Phone: +44 20 7123 4567</p>
              <p className="text-gray-300 mb-2">Email: support@tradecreditbancorp.com</p>
              <p className="text-gray-300 mb-2">Hours: 9:00 AM - 6:00 PM GMT</p>
              <p className="text-gray-300">Monday through Friday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}