"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, Mail, Phone, MessageCircle, CreditCard, Shield, Users, DollarSign, Settings, HelpCircle, FileText, Building, Lock, Globe, Banknote, TrendingUp, Clock, CheckCircle, AlertCircle, Star } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const faqData = [
  {
    category: "Trade Finance",
    icon: <Building className="w-5 h-5" />,
    faqs: [
      {
        question: "What is a Letter of Credit (LC) and how does it work?",
        answer: "A Letter of Credit is a financial instrument issued by a bank on behalf of a buyer, guaranteeing payment to a seller upon presentation of compliant documents. It reduces risk for both parties by ensuring the seller receives payment and the buyer receives the goods as specified. The LC process involves the applicant (buyer), issuing bank, advising bank, and beneficiary (seller). Once all terms are met and proper documentation is provided, payment is automatically released."
      },
      {
        question: "What types of Standby Letters of Credit (SBLCs) do you offer?",
        answer: "We offer various types of SBLCs including Performance SBLCs (guaranteeing contract performance), Financial SBLCs (guaranteeing payment obligations), Advance Payment SBLCs (securing advance payments), and Warranty SBLCs (guaranteeing product quality). Each type is tailored to specific business needs and can be structured as sight or time drafts, with amounts ranging from $1M to $5B+ depending on client requirements."
      },
      {
        question: "How long does it take to issue a Bank Guarantee?",
        answer: "Standard Bank Guarantees typically take 3-5 business days to issue once all required documentation is received and approved. Complex guarantees or those requiring additional due diligence may take 7-10 business days. Rush processing is available for urgent requirements and can reduce timing to 24-48 hours for an additional fee. We recommend initiating the process well in advance of your deadline."
      },
      {
        question: "What are the key differences between confirmed and unconfirmed LCs?",
        answer: "An unconfirmed LC involves only the issuing bank's commitment to pay, while a confirmed LC adds a second bank's (confirming bank's) guarantee. Confirmed LCs provide additional security as the beneficiary has two banks liable for payment. This is particularly valuable when dealing with banks in higher-risk jurisdictions or when the beneficiary wants extra assurance. Confirmed LCs typically carry higher fees but offer superior risk mitigation."
      },
      {
        question: "Can you help with trade finance for emerging markets?",
        answer: "Yes, we specialize in trade finance solutions for emerging markets across Africa, Asia, Latin America, and Eastern Europe. Our extensive correspondent banking network and local expertise enable us to structure deals in challenging jurisdictions. We offer political risk insurance, currency hedging, and specialized documentation to mitigate risks associated with emerging market transactions."
      }
    ]
  },
  {
    category: "Banking Solutions",
    icon: <CreditCard className="w-5 h-5" />,
    faqs: [
      {
        question: "How do I obtain a Tier 1 bank IBAN?",
        answer: "To obtain a Tier 1 bank IBAN, you'll need to complete our comprehensive application process which includes KYC documentation, business registration certificates, financial statements, and proof of business activities. The process typically takes 2-3 weeks for approval. Our IBANs are issued through our partnerships with major European banks and come with full banking services including online access, debit cards, and wire transfer capabilities."
      },
      {
        question: "What types of corporate cards do you offer?",
        answer: "We offer a complete range of corporate cards including standard business cards, premium cards with enhanced limits and benefits, virtual cards for online transactions, and specialized cards for international trade. Features include real-time expense tracking, customizable spending limits, rewards programs, and integration with accounting software. Cards are available in multiple currencies and can be issued globally."
      },
      {
        question: "Do you provide multi-currency accounts?",
        answer: "Yes, we offer comprehensive multi-currency accounts supporting over 40 major currencies including USD, EUR, GBP, JPY, CHF, CAD, and emerging market currencies. Features include competitive exchange rates, same-day currency conversion, hedging facilities, and consolidated reporting. This is particularly beneficial for international trade companies managing multiple currency exposures."
      },
      {
        question: "What are the benefits of your private banking services?",
        answer: "Our private banking services offer personalized relationship management, priority processing, enhanced credit facilities, investment advisory services, and exclusive access to trade finance opportunities. Clients receive dedicated account managers, 24/7 support, preferential pricing, and access to our global network of financial institutions. Minimum relationship requirements apply."
      }
    ]
  },
  {
    category: "Account Management",
    icon: <Users className="w-5 h-5" />,
    faqs: [
      {
        question: "How do I open a corporate account?",
        answer: "Opening a corporate account requires submission of corporate documents (certificates of incorporation, articles of association, board resolutions), KYC documentation for beneficial owners and authorized signatories, business plans, financial statements, and proof of business activities. Our account opening team guides you through the entire process, which typically takes 2-4 weeks depending on jurisdiction and complexity."
      },
      {
        question: "What are the minimum balance requirements?",
        answer: "Minimum balance requirements vary by account type and jurisdiction. Standard business accounts typically require $10,000-$50,000, while premium accounts may require $100,000-$500,000. Trade finance clients often have higher requirements based on their facility limits. We offer various account tiers to accommodate different business needs and relationship sizes."
      },
      {
        question: "Can I manage multiple accounts through one platform?",
        answer: "Yes, our integrated banking platform allows you to manage multiple accounts, currencies, and banking relationships through a single dashboard. Features include real-time balance monitoring, transaction history, payment initiation, document management, and consolidated reporting. The platform is available via web and mobile applications with enterprise-grade security."
      },
      {
        question: "How do I add authorized signatories to my account?",
        answer: "Adding authorized signatories requires submission of board resolutions, updated signature cards, KYC documentation for new signatories, and completion of our authorization forms. The process typically takes 3-5 business days. We can accommodate various signing arrangements including single, joint, or multiple signature requirements based on your corporate governance needs."
      }
    ]
  },
  {
    category: "Security & Compliance",
    icon: <Shield className="w-5 h-5" />,
    faqs: [
      {
        question: "What security measures do you have in place?",
        answer: "We implement bank-grade security including 256-bit SSL encryption, multi-factor authentication, real-time fraud monitoring, secure tokenization, and regular security audits. Our systems are ISO 27001 certified and comply with international banking security standards. We also provide transaction alerts, IP whitelisting, and device authentication for enhanced security."
      },
      {
        question: "How do you ensure AML/KYC compliance?",
        answer: "Our comprehensive AML/KYC program includes enhanced due diligence procedures, ongoing monitoring of transactions, regular compliance reviews, and integration with global sanctions databases. We conduct thorough background checks, source of funds verification, and maintain detailed audit trails. Our compliance team stays current with international regulations and best practices."
      },
      {
        question: "What happens if suspicious activity is detected?",
        answer: "Upon detection of suspicious activity, we immediately freeze affected transactions, notify the account holder, and initiate our internal investigation process. We work closely with regulatory authorities as required and provide full cooperation in any investigations. Our goal is to protect both our clients and the financial system while minimizing disruption to legitimate business activities."
      },
      {
        question: "Do you provide regulatory reporting services?",
        answer: "Yes, we offer comprehensive regulatory reporting services including FATCA, CRS, and local regulatory requirements. Our automated systems generate required reports and submissions, ensuring compliance with international tax and regulatory obligations. We also provide advisory services to help clients understand their reporting obligations."
      }
    ]
  },
  {
    category: "Technical Support",
    icon: <Settings className="w-5 h-5" />,
    faqs: [
      {
        question: "How do I access the online banking platform?",
        answer: "Access our online banking platform at portal.tcb.com using your login credentials. First-time users will receive setup instructions via secure email. The platform is available 24/7 and supports multiple browsers. We recommend using updated versions of Chrome, Firefox, Safari, or Edge for optimal performance. Mobile applications are available for iOS and Android devices."
      },
      {
        question: "What should I do if I can't log into my account?",
        answer: "If you're unable to log in, first verify your credentials and check for caps lock. After three failed attempts, accounts are temporarily locked for security. You can unlock your account using the 'Forgot Password' link or contact our support team. For persistent issues, our technical support team is available 24/7 to assist with login problems."
      },
      {
        question: "How do I set up transaction alerts?",
        answer: "Transaction alerts can be configured in your account settings under 'Notifications.' You can set up alerts for various activities including incoming/outgoing transfers, low balances, large transactions, and document requirements. Alerts can be sent via email, SMS, or push notifications. Custom alert thresholds can be set based on your preferences."
      },
      {
        question: "Is there a mobile app available?",
        answer: "Yes, our mobile banking app is available for both iOS and Android devices. The app provides full account access, transaction capabilities, document upload, and real-time notifications. Features include biometric authentication, mobile check deposit, and offline access to account information. Download from the App Store or Google Play Store."
      },
      {
        question: "What are your system maintenance windows?",
        answer: "Scheduled maintenance is typically performed on weekends between 2:00 AM and 6:00 AM GMT to minimize disruption. We provide advance notice of planned maintenance via email and platform notifications. Emergency maintenance may occur outside these windows but is communicated immediately. Our systems maintain 99.9% uptime and all maintenance activities are designed to minimize service interruption."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.trim() === '') {
      setFilteredFAQs(faqData);
    } else {
      const filtered = faqData.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(value.toLowerCase()) ||
          faq.answer.toLowerCase().includes(value.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0);
      setFilteredFAQs(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <HelpCircle className="w-16 h-16 mx-auto mb-6 text-highlight" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Frequently Asked Questions
              </h1>
              <p className="text-xl mb-8 text-white opacity-90">
                Find answers to common questions about our trade finance and banking services. 
                Our comprehensive FAQ section is designed to help you understand our solutions and processes.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-highlight focus:ring-2 focus:ring-highlight/20 bg-white text-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {searchTerm && (
                <div className="mb-8">
                  <p className="text-muted-foreground text-lg">
                    {filteredFAQs.reduce((total, category) => total + category.faqs.length, 0)} results found for "{searchTerm}"
                  </p>
                </div>
              )}

              <div className="grid gap-8">
                {filteredFAQs.map((category, categoryIndex) => (
                  <Card key={categoryIndex} className="border-2 border-gray-200 hover:border-highlight transition-all duration-300">
                    <CardHeader className="bg-gray-50 border-b border-gray-200">
                      <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                        {category.icon}
                        {category.category}
                        <Badge variant="outline" className="ml-auto">
                          {category.faqs.length} questions
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, faqIndex) => (
                          <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                            <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                              <span className="font-semibold text-primary pr-4">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <AlertCircle className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-2xl font-semibold mb-2 text-primary">No Results Found</h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any FAQs matching your search. Try different keywords or contact our support team.
                  </p>
                  <Button onClick={() => handleSearch('')} className="bg-primary hover:bg-primary/90">
                    Show All FAQs
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">24/7 Support</h3>
                  <p className="text-muted-foreground">Round-the-clock assistance for all your banking needs</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Fast Processing</h3>
                  <p className="text-muted-foreground">Quick turnaround times for trade finance instruments</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Expert Guidance</h3>
                  <p className="text-muted-foreground">Professional advice from experienced trade finance specialists</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 text-white opacity-90">
                Our expert team is ready to help you with personalized solutions for your trade finance and banking needs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 mx-auto mb-4 text-highlight" />
                    <h3 className="font-semibold mb-2 text-white">Call Us</h3>
                    <p className="text-white/80">+44-7453-747965</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-highlight" />
                    <h3 className="font-semibold mb-2 text-white">Email Us</h3>
                    <p className="text-white/80">support@tradecreditbancorp.com</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="w-8 h-8 mx-auto mb-4 text-highlight" />
                    <h3 className="font-semibold mb-2 text-white">Live Chat</h3>
                    <p className="text-white/80">Available 24/7</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
                  Contact Support
                </Button>
                <Button className="bg-highlight border-highlight text-white hover:bg-highlight/90 px-8 py-4 text-lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}