import React from 'react';
import { Shield, Lock, User, FileText, Bell, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#1a1f36] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-8 h-8 text-[#d4af37]" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-300">
            Your privacy is our priority. Learn how Trade Credit Bancorp protects your personal information.
          </p>
          <div className="mt-6 text-sm text-gray-400">
            Last Updated: December 15, 2024
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-[#1a1f36] mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <a href="#section-1" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 py-2">
              <FileText className="w-4 h-4" />
              1. Information We Collect
            </a>
            <a href="#section-2" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 py-2">
              <User className="w-4 h-4" />
              2. How We Use Your Information
            </a>
            <a href="#section-3" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 py-2">
              <Globe className="w-4 h-4" />
              3. Information Sharing and Disclosure
            </a>
            <a href="#section-4" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 py-2">
              <Lock className="w-4 h-4" />
              4. Data Security and Protection
            </a>
            <a href="#section-5" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 py-2">
              <Shield className="w-4 h-4" />
              5. GDPR Compliance
            </a>
            <a href="#section-6" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 py-2">
              <FileText className="w-4 h-4" />
              6. Cookie Policy
            </a>
            <a href="#section-7" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 py-2">
              <User className="w-4 h-4" />
              7. Your Rights and Choices
            </a>
            <a href="#section-8" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 py-2">
              <Mail className="w-4 h-4" />
              8. Contact Information
            </a>
            <a href="#section-9" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 py-2">
              <Bell className="w-4 h-4" />
              9. Policy Updates
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              Trade Credit Bancorp ("we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any capacity. This policy applies to all personal information we collect and process in connection with our financial services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              As a financial institution, we are subject to various federal and state regulations, including the Gramm-Leach-Bliley Act (GLBA), the Fair Credit Reporting Act (FCRA), and other applicable privacy laws. We take our obligations under these laws seriously and have implemented comprehensive privacy practices to protect your information.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <section id="section-1" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1f36] mb-6">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">1.1 Personal Information</h3>
            <p className="text-gray-700 mb-4">We collect personal information that you provide to us directly, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Contact information (name, address, phone number, email address)</li>
              <li>Government-issued identification numbers (Social Security Number, Tax ID)</li>
              <li>Financial information (income, assets, liabilities, credit history)</li>
              <li>Employment information (employer, position, employment history)</li>
              <li>Business information (business structure, financial statements, tax returns)</li>
              <li>Transaction history and account activity</li>
              <li>Communications and correspondence with us</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">1.2 Information from Third Parties</h3>
            <p className="text-gray-700 mb-4">We may obtain information about you from third parties, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Credit reporting agencies and credit bureaus</li>
              <li>Financial institutions and service providers</li>
              <li>Public records and government databases</li>
              <li>Business partners and affiliates</li>
              <li>Marketing companies and data brokers (where permitted by law)</li>
              <li>Social media platforms and other online sources</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">1.3 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">When you visit our website or use our digital services, we automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, click patterns)</li>
              <li>Location data (where permitted)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Log files and server data</li>
            </ul>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section id="section-2" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1f36] mb-6">2. How We Use Your Information</h2>
            
            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">2.1 Primary Business Purposes</h3>
            <p className="text-gray-700 mb-4">We use your personal information for the following business purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Processing and underwriting loan applications</li>
              <li>Evaluating creditworthiness and financial capacity</li>
              <li>Providing and managing financial services and products</li>
              <li>Maintaining and servicing your accounts</li>
              <li>Processing transactions and payments</li>
              <li>Conducting risk assessments and portfolio management</li>
              <li>Complying with legal and regulatory requirements</li>
              <li>Preventing fraud and protecting against financial crimes</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">2.2 Customer Service and Communications</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Responding to inquiries and providing customer support</li>
              <li>Sending account statements and transaction confirmations</li>
              <li>Providing important notices and updates</li>
              <li>Conducting customer satisfaction surveys</li>
              <li>Offering relevant products and services</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">2.3 Legal and Regulatory Compliance</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Complying with Know Your Customer (KYC) requirements</li>
              <li>Meeting Anti-Money Laundering (AML) obligations</li>
              <li>Reporting to regulatory authorities as required</li>
              <li>Responding to lawful requests from government agencies</li>
              <li>Maintaining records as required by applicable laws</li>
            </ul>
          </section>

          {/* Section 3: Information Sharing and Disclosure */}
          <section id="section-3" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1f36] mb-6">3. Information Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">3.1 Permitted Disclosures</h3>
            <p className="text-gray-700 mb-4">We may share your personal information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>With your consent:</strong> When you have given us explicit permission to share your information</li>
              <li><strong>Service providers:</strong> With third-party vendors who perform services on our behalf</li>
              <li><strong>Affiliates:</strong> With our corporate affiliates and subsidiaries</li>
              <li><strong>Legal obligations:</strong> When required by law, regulation, or court order</li>
              <li><strong>Business transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Fraud prevention:</strong> To investigate or prevent fraud and other illegal activities</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">3.2 Regulatory Reporting</h3>
            <p className="text-gray-700 mb-4">We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Federal and state banking regulators</li>
              <li>Financial Crimes Enforcement Network (FinCEN)</li>
              <li>Credit reporting agencies</li>
              <li>Law enforcement agencies</li>
              <li>Other regulatory bodies as required</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">3.3 Third-Party Service Providers</h3>
            <p className="text-gray-700 mb-4">We work with trusted third-party service providers who assist us in:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Credit reporting and verification services</li>
              <li>Payment processing and banking services</li>
              <li>Technology services and data hosting</li>
              <li>Marketing and customer acquisition</li>
              <li>Legal and professional services</li>
            </ul>
          </section>

          {/* Section 4: Data Security and Protection */}
          <section id="section-4" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1f36] mb-6">4. Data Security and Protection</h2>
            
            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">4.1 Security Measures</h3>
            <p className="text-gray-700 mb-4">We implement comprehensive security measures to protect your personal information:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Encryption of data in transit and at rest using industry-standard protocols</li>
              <li>Multi-factor authentication for system access</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Secure data centers with physical access controls</li>
              <li>Employee training on data protection and privacy practices</li>
              <li>Incident response procedures for security breaches</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">4.2 Data Retention</h3>
            <p className="text-gray-700 mb-4">We retain personal information for as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Fulfill the purposes for which it was collected</li>
              <li>Comply with legal and regulatory retention requirements</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Protect against fraud and other illegal activities</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">4.3 International Data Transfers</h3>
            <p className="text-gray-700 mb-4">
              If we transfer your personal information outside the United States, we ensure appropriate safeguards are in place, including standard contractual clauses and adequacy decisions where applicable.
            </p>
          </section>

          {/* Section 5: GDPR Compliance */}
          <section id="section-5" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1f36] mb-6">5. GDPR Compliance</h2>
            
            <p className="text-gray-700 mb-4">
              For individuals in the European Union, we comply with the General Data Protection Regulation (GDPR). We process personal data based on the following legal grounds:
            </p>
            
            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">5.1 Legal Basis for Processing</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Contract:</strong> Processing necessary for the performance of a contract</li>
              <li><strong>Legal obligation:</strong> Compliance with legal requirements</li>
              <li><strong>Legitimate interests:</strong> Our legitimate business interests</li>
              <li><strong>Consent:</strong> Where you have given explicit consent</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">5.2 EU Data Subject Rights</h3>
            <p className="text-gray-700 mb-4">Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Access your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Erase your personal data (right to be forgotten)</li>
              <li>Restrict processing of your personal data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          {/* Section 6: Cookie Policy */}
          <section id="section-6" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1f36] mb-6">6. Cookie Policy</h2>
            
            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">6.1 Types of Cookies</h3>
            <p className="text-gray-700 mb-4">We use the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Essential cookies:</strong> Required for website functionality</li>
              <li><strong>Performance cookies:</strong> Help us understand website usage</li>
              <li><strong>Functional cookies:</strong> Remember your preferences</li>
              <li><strong>Marketing cookies:</strong> Deliver relevant advertisements</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">6.2 Cookie Management</h3>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. Please note that disabling certain cookies may affect website functionality.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">6.3 Third-Party Cookies</h3>
            <p className="text-gray-700 mb-4">
              We may use third-party services that place cookies on your device, including analytics providers and advertising partners.
            </p>
          </section>

          {/* Section 7: Your Rights and Choices */}
          <section id="section-7" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1f36] mb-6">7. Your Rights and Choices</h2>
            
            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">7.1 Access and Correction</h3>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information (subject to legal requirements)</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">7.2 Opt-Out Rights</h3>
            <p className="text-gray-700 mb-4">You can opt out of:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Marketing communications via email or phone</li>
              <li>Sharing of information with affiliates for marketing purposes</li>
              <li>Certain data processing activities (where legally permissible)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">7.3 State-Specific Rights</h3>
            <p className="text-gray-700 mb-4">
              Residents of certain states may have additional rights under state privacy laws, including the California Consumer Privacy Act (CCPA) and other state privacy statutes.
            </p>
          </section>

          {/* Section 8: Contact Information */}
          <section id="section-8" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1f36] mb-6">8. Contact Information</h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">Privacy Officer</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                  <div>
                    <p className="font-medium">Trade Credit Bancorp</p>
                    <p className="text-gray-600">1234 Financial District</p>
                    <p className="text-gray-600">New York, NY 10005</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                  <p className="text-gray-700">Privacy Hotline: (800) 123-PRIVACY</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                  <p className="text-gray-700">privacy@tradecreditbancorp.com</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> For privacy-related inquiries, please allow up to 30 days for a response. For urgent matters, please call our privacy hotline.
              </p>
            </div>
          </section>

          {/* Section 9: Policy Updates */}
          <section id="section-9" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1f36] mb-6">9. Policy Updates</h2>
            
            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">9.1 Notification of Changes</h3>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Posting the updated policy on our website</li>
              <li>Sending email notifications to registered users</li>
              <li>Providing notice through our mobile applications</li>
              <li>Other appropriate means as required by law</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">9.2 Effective Date</h3>
            <p className="text-gray-700 mb-4">
              This Privacy Policy is effective as of the date listed at the top of this document. Your continued use of our services after any changes indicates your acceptance of the updated policy.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1f36] mb-4">9.3 Previous Versions</h3>
            <p className="text-gray-700 mb-4">
              Previous versions of this Privacy Policy are available upon request. Please contact our Privacy Officer if you need access to earlier versions.
            </p>
          </section>

          {/* Closing Statement */}
          <div className="bg-[#1a1f36] text-white rounded-lg p-8 mt-12">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-[#d4af37]" />
              <h3 className="text-2xl font-bold">Our Commitment to Privacy</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At Trade Credit Bancorp, protecting your privacy is not just a legal obligation—it's a fundamental aspect of our commitment to you as our valued customer. We continuously invest in privacy technologies, employee training, and process improvements to ensure your personal information remains secure and private.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              If you have any questions about this Privacy Policy or our privacy practices, please don't hesitate to contact us. We're here to help and ensure you have complete confidence in how we handle your personal information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}