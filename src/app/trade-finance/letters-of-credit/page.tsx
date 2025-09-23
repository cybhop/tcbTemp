"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Building2, 
  Globe, 
  Users, 
  TrendingUp,
  Play,
  Phone,
  Mail,
  Calendar,
  CreditCard,
  Banknote,
  RefreshCw,
  FileCheck,
  Timer,
  Target,
  ArrowDownRight,
  ArrowUpRight,
  Handshake,
  DollarSign,
  Truck,
  BadgeCheck,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { LcApplicationForm } from '@/components/forms/LcApplicationForm';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LettersOfCreditPage() {
  const [activeTab, setActiveTab] = useState("sight");
  const [showVideo, setShowVideo] = useState(false);

  const lcTypes = [
    {
      id: "sight",
      title: "Sight Letter of Credit",
      description: "Payment made immediately upon presentation of compliant documents",
      icon: <FileCheck className="w-5 h-5" />,
      useCase: "Standard trade transactions requiring immediate payment",
      benefits: ["Immediate payment", "Reduced risk", "Quick processing"],
      example: "Exporter ships goods and receives payment upon document presentation to the bank"
    },
    {
      id: "usance",
      title: "Usance Letter of Credit", 
      description: "Payment made after a specified period following document presentation",
      icon: <Timer className="w-5 h-5" />,
      useCase: "Transactions where buyer needs extended payment terms",
      benefits: ["Extended payment terms", "Cash flow management", "Flexible financing"],
      example: "Payment due 90 days after document acceptance, allowing buyer time to sell goods"
    },
    {
      id: "transferable",
      title: "Transferable LC",
      description: "Can be transferred to secondary beneficiaries by the original beneficiary",
      icon: <ArrowUpRight className="w-5 h-5" />,
      useCase: "Trading companies acting as intermediaries",
      benefits: ["Supply chain financing", "Intermediary trading", "Risk distribution"],
      example: "Trading company transfers LC to manufacturer while maintaining buyer relationship"
    },
    {
      id: "back-to-back",
      title: "Back-to-Back LC",
      description: "New LC issued against the security of an existing LC",
      icon: <ArrowDownRight className="w-5 h-5" />,
      useCase: "When transferable LC is not available or suitable",
      benefits: ["Intermediary protection", "Independent transactions", "Confidentiality"],
      example: "Trader issues new LC to supplier using master LC as collateral"
    },
    {
      id: "revolving",
      title: "Revolving LC",
      description: "Automatically renews after each utilization for repeated transactions",
      icon: <RefreshCw className="w-5 h-5" />,
      useCase: "Regular shipments between established trading partners",
      benefits: ["Ongoing relationship", "Reduced documentation", "Cost efficiency"],
      example: "Monthly shipments of raw materials with automatic LC renewal"
    },
    {
      id: "red-clause",
      title: "Red Clause LC",
      description: "Allows advance payment to beneficiary before goods shipment",
      icon: <DollarSign className="w-5 h-5" />,
      useCase: "Beneficiary needs funds for production or procurement",
      benefits: ["Pre-shipment financing", "Production funding", "Competitive advantage"],
      example: "Manufacturer receives advance to purchase raw materials before production"
    },
    {
      id: "standby",
      title: "Standby LC",
      description: "Backup payment method activated only if primary payment fails",
      icon: <Shield className="w-5 h-5" />,
      useCase: "Performance guarantees and backup payment assurance",
      benefits: ["Payment security", "Performance guarantee", "Contract protection"],
      example: "Contractor provides SBLC as performance guarantee for construction project"
    }
  ];

  const processSteps = [
    { step: 1, title: "Application", description: "Buyer applies for LC with issuing bank", participant: "Applicant" },
    { step: 2, title: "Issuance", description: "Bank issues LC to advising bank", participant: "Issuing Bank" },
    { step: 3, title: "Advising", description: "Advising bank notifies beneficiary", participant: "Advising Bank" },
    { step: 4, title: "Shipment", description: "Beneficiary ships goods and presents documents", participant: "Beneficiary" },
    { step: 5, title: "Examination", description: "Bank examines documents for compliance", participant: "Advising Bank" },
    { step: 6, title: "Payment", description: "Payment made to beneficiary upon compliance", participant: "Issuing Bank" }
  ];

  const whenToUse = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "New Trading Partners",
      description: "When buyer and seller don't have established trust"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "International Trade",
      description: "Cross-border transactions with different legal systems"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Large Transactions",
      description: "High-value deals requiring payment security"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Risk Mitigation",
      description: "When payment risk needs to be minimized"
    }
  ];

  const relatedServices = [
    {
      title: "Bank Guarantees",
      description: "Performance and payment guarantees for contracts",
      link: "/trade-finance/bank-guarantees"
    },
    {
      title: "SBLCs",
      description: "Standby letters of credit for backup assurance",
      link: "/trade-finance/sblcs"
    },
    {
      title: "Escrow Services",
      description: "Secure third-party transaction management",
      link: "/trade-finance/escrow-services"
    }
  ];

  const handlePlayDemo = () => {
    setShowVideo(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-highlight/5 py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge className="bg-highlight/10 text-highlight border-highlight/20 mb-4">
                  Letters of Credit
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
              >
                Letters of Credit (LC)
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Trusted trade instruments to secure your global transactions
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild size="lg" className="cta-primary">
                  <Link href="/contact">
                    Get LC Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="cta-outline" onClick={handlePlayDemo}>
                  Watch Demo
                  <Play className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">How Letters of Credit Work</h2>
                <p className="text-muted-foreground">
                  Watch our explainer video to understand the LC process
                </p>
              </div>
              
              <div className="relative bg-gradient-to-br from-primary/10 to-highlight/10 rounded-2xl p-4 sm:p-8">
                <div 
                  className="video-container bg-black/80 rounded-lg flex items-center justify-center cursor-pointer hover:bg-black/70 transition-all duration-300 min-h-[300px] sm:min-h-[400px]"
                  onClick={handlePlayDemo}
                >
                  <div className="text-center text-white p-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-highlight/20 rounded-full flex items-center justify-center hover:bg-highlight/30 transition-colors">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-highlight ml-1" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">LC Process Explainer</h3>
                    <p className="text-white/80 text-sm sm:text-base">Click to watch how Letters of Credit secure international trade</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-10 right-0 text-white hover:text-highlight transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="bg-white rounded-lg p-6">
                <div className="aspect-video bg-black/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-highlight mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Letter of Credit Process Demo</h3>
                    <p className="text-muted-foreground mb-4">
                      This demo video would show the step-by-step process of how a Letter of Credit works,
                      from application to payment.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Application and agreement setup</p>
                      <p>• Document verification process</p>
                      <p>• Payment authorization and release</p>
                      <p>• Risk mitigation benefits</p>
                    </div>
                    <Button className="mt-4 cta-primary" onClick={() => setShowVideo(false)}>
                      Contact Us for Real Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Types of Letters of Credit */}
        <section className="py-12 sm:py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-8 sm:mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold mb-4">
                Types of Letters of Credit
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                Choose the right LC type for your specific trade requirements
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 mb-8 h-auto bg-[#e1e1e1]">
                  {lcTypes.map((type) => (
                    <TabsTrigger key={type.id} value={type.id} className="text-xs sm:text-sm p-2 sm:p-3">
                      <span className="hidden sm:inline">{type.title}</span>
                      <span className="sm:hidden">{type.title.split(' ')[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {lcTypes.map((type) => (
                  <TabsContent key={type.id} value={type.id}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-start sm:items-center gap-4 mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-highlight/20 rounded-lg flex items-center justify-center text-highlight flex-shrink-0">
                            {type.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg sm:text-xl">{type.title}</CardTitle>
                            <CardDescription className="text-sm sm:text-base">{type.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-sm sm:text-base">When to Use</h4>
                            <p className="text-sm text-muted-foreground mb-4">{type.useCase}</p>
                            
                            <h4 className="font-semibold mb-3 text-sm sm:text-base">Key Benefits</h4>
                            <ul className="space-y-2">
                              {type.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center text-sm">
                                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-highlight mr-2 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3 text-sm sm:text-base">Example Scenario</h4>
                            <div className="bg-highlight/10 p-4 rounded-lg">
                              <p className="text-sm">{type.example}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>
          </div>
        </section>

        {/* Visual Process Flow */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-8 sm:mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold mb-4">
                LC Process Flow
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Step-by-step process showing how all parties interact in a Letter of Credit transaction
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {processSteps.map((step, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="text-center hover:shadow-lg transition-shadow h-full">
                      <CardContent className="pt-4 sm:pt-6">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-highlight font-bold text-xs sm:text-sm">{step.step}</span>
                        </div>
                        <h4 className="font-semibold text-xs sm:text-sm mb-2">{step.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2 hidden sm:block">{step.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {step.participant}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Process Flow Diagram */}
              <div className="bg-gradient-to-r from-primary/5 to-highlight/5 rounded-2xl p-4 sm:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-xs sm:text-sm">Applicant</h4>
                    <p className="text-xs text-muted-foreground">Buyer</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-highlight" />
                    </div>
                    <h4 className="font-semibold text-xs sm:text-sm">Issuing Bank</h4>
                    <p className="text-xs text-muted-foreground">Buyer's Bank</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-xs sm:text-sm">Advising Bank</h4>
                    <p className="text-xs text-muted-foreground">Seller's Bank</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-highlight" />
                    </div>
                    <h4 className="font-semibold text-xs sm:text-sm">Beneficiary</h4>
                    <p className="text-xs text-muted-foreground">Seller</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-12 sm:py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Apply for a Letter of Credit</h2>
              <p className="text-muted-foreground text-sm sm:text-base">Fill out the application below and our trade finance team will contact you shortly.</p>
            </div>
            <LcApplicationForm />
          </div>
        </section>

        {/* When to Use Section */}
        <section className="py-12 sm:py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-8 sm:mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold mb-4">
                When to Use a Letter of Credit
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Letters of Credit are ideal for specific trading scenarios where trust and payment security are crucial
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
            >
              {whenToUse.map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-4 sm:pt-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-highlight/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <div className="text-highlight">
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold mb-6">
                Need a Letter of Credit?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-blue-100 text-base sm:text-lg mb-8">
                Let Trade Credit Bancorp issue the right LC for your trade needs. Request a free consultation today.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="cta-primary">
                  <Link href="/contact">
                    📩 Book a Consultation
                    <Calendar className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="cta-light text-white-200 border-gray">
                  <Link href="/contact" className='text-white'>
                    Get LC Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-highlight" />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-highlight" />
                  <span className="text-sm">Same-Day Response</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-highlight" />
                  <span className="text-sm">Competitive Rates</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-8 sm:mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold mb-4">
                Related Services
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Explore our other trade finance solutions
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
            >
              {relatedServices.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-4 sm:pt-6">
                      <h3 className="font-semibold mb-2 text-sm sm:text-base">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-4">{service.description}</p>
                      <Button asChild variant="outline" className="w-full cta-outline">
                        <Link href={service.link}>
                          Explore
                          <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}