"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  FileText, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Building, 
  Globe, 
  Scale, 
  Award,
  Users,
  Target,
  CreditCard,
  Settings,
  AlertCircle,
  Download,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

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

export default function BankGuaranteesPage() {
  const [selectedGuarantee, setSelectedGuarantee] = useState('performance');

  const guaranteeTypes = [
    {
      id: 'performance',
      icon: <Target className="w-6 h-6" />,
      title: 'Performance Guarantees',
      description: 'Secure contract performance with comprehensive guarantees that protect beneficiaries against non-performance',
      features: [
        'Contract performance assurance',
        'Customizable terms and conditions',
        'Multi-currency support',
        'URDG 758 compliance'
      ]
    },
    {
      id: 'bid',
      icon: <FileText className="w-6 h-6" />,
      title: 'Bid Bonds',
      description: 'Demonstrate financial commitment and qualify for tender processes with our competitive bid bonds',
      features: [
        'Tender qualification support',
        'Competitive pricing',
        'Fast processing times',
        'Electronic submission options'
      ]
    },
    {
      id: 'advance',
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Advance Payment Guarantees',
      description: 'Secure advance payments with guarantees that protect against non-delivery or non-performance',
      features: [
        'Advance payment security',
        'Flexible repayment terms',
        'Risk mitigation',
        'International acceptance'
      ]
    },
    {
      id: 'warranty',
      icon: <Shield className="w-6 h-6" />,
      title: 'Warranty Guarantees',
      description: 'Provide assurance for post-delivery obligations and warranty commitments',
      features: [
        'Post-delivery coverage',
        'Defect protection',
        'Extended warranty periods',
        'Maintenance guarantees'
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Enhanced Business Opportunities',
      description: 'Access larger contracts and international markets with credible bank guarantees'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast Processing',
      description: 'Quick turnaround times with streamlined application and approval processes'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Acceptance',
      description: 'Widely recognized guarantees accepted by beneficiaries worldwide'
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'URDG 758 Compliant',
      description: 'Full compliance with ICC Uniform Rules for Demand Guarantees'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: 'Dedicated specialists providing guidance throughout the process'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Competitive Rates',
      description: 'Cost-effective solutions with transparent pricing structures'
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Discuss your guarantee requirements with our specialists',
      details: 'Our team will assess your needs and recommend the most suitable guarantee type'
    },
    {
      step: 2,
      title: 'Documentation Review',
      description: 'Submit required documents for assessment',
      details: 'We review financial statements, contracts, and supporting documentation'
    },
    {
      step: 3,
      title: 'Risk Assessment',
      description: 'Comprehensive evaluation of the guarantee request',
      details: 'Credit analysis and risk evaluation conducted by our underwriting team'
    },
    {
      step: 4,
      title: 'Approval & Issuance',
      description: 'Final approval and guarantee issuance',
      details: 'Once approved, the guarantee is issued and delivered to the beneficiary'
    }
  ];

  const requirements = [
    'Completed application form',
    'Audited financial statements (last 3 years)',
    'Bank statements (last 6 months)',
    'Contract or tender documents',
    'Corporate resolution authorizing guarantee',
    'Valid identification documents',
    'Collateral documentation (if required)',
    'Insurance certificates (where applicable)'
  ];

  const complianceFeatures = [
    {
      title: 'URDG 758 Compliance',
      description: 'Full adherence to ICC Uniform Rules for Demand Guarantees',
      icon: <Scale className="w-5 h-5" />
    },
    {
      title: 'International Standards',
      description: 'Meets global banking and trade finance standards',
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: 'Legal Framework',
      description: 'Structured within applicable legal jurisdictions',
      icon: <Building className="w-5 h-5" />
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation',
      icon: <Shield className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-highlight/5 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge className="bg-highlight/10 text-highlight border-highlight/20 mb-4">
                  Bank Guarantees
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
              >
                Bank Guarantees
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Comprehensive guarantee solutions to secure your business transactions and unlock new opportunities
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" className="cta-primary">
                  Apply for Guarantee
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="cta-outline">
                  Download Brochure
                  <Download className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Guarantee Types Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
                Types of Bank Guarantees
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive guarantee solutions tailored to your specific business needs
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <Tabs value={selectedGuarantee} onValueChange={setSelectedGuarantee} className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-[#e1e1e1]">
                  {guaranteeTypes.map((type) => (
                    <TabsTrigger key={type.id} value={type.id} className="flex items-center gap-2">
                      {type.icon}
                      <span className="hidden sm:inline">{type.title.split(' ')[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {guaranteeTypes.map((type) => (
                  <TabsContent key={type.id} value={type.id}>
                    <Card className="border-primary/20">
                      <CardHeader className="pb-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            {type.icon}
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{type.title}</CardTitle>
                            <CardDescription className="text-lg">{type.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold mb-4">Key Features</h4>
                            <ul className="space-y-2">
                              {type.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <CheckCircle className="w-5 h-5 text-highlight" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <h4 className="font-semibold">Benefits</h4>
                            <p className="text-muted-foreground text-sm">
                              Our {type.title.toLowerCase()} provide comprehensive protection and peace of mind for all parties involved in your business transactions.
                            </p>
                            <Button className="w-full sm:w-auto">
                              Learn More
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
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

        {/* Benefits Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
                Why Choose Our Bank Guarantees
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                Experience the advantages of working with a trusted trade finance partner
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-primary/20 hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="text-primary mb-4">{benefit.icon}</div>
                      <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
                Application Process
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                Simple, streamlined process to get your bank guarantee quickly and efficiently
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {applicationSteps.map((step, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-primary/20 relative h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4 mx-auto">
                        <span className="text-sm font-bold">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-center">{step.title}</h3>
                      <p className="text-muted-foreground text-center mb-4 text-sm">{step.description}</p>
                      <p className="text-xs text-muted-foreground text-center">{step.details}</p>
                    </CardContent>
                    {index < applicationSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid lg:grid-cols-2 gap-8 items-start"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold mb-6">Documentation Requirements</h2>
                <p className="text-muted-foreground mb-6">
                  To process your bank guarantee application, please ensure you have the following documents ready:
                </p>
                <div className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-highlight mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-highlight" />
                      Important Notes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-highlight/10 rounded-lg">
                      <h4 className="font-semibold text-highlight mb-2">Processing Time</h4>
                      <p className="text-sm">Standard processing time is 3-5 business days upon receipt of complete documentation.</p>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Collateral</h4>
                      <p className="text-sm">Collateral requirements may vary based on the guarantee amount and applicant's credit profile.</p>
                    </div>
                    <div className="p-4 bg-accent rounded-lg">
                      <h4 className="font-semibold mb-2">Validity Period</h4>
                      <p className="text-sm">Guarantee validity can be customized based on your contract requirements.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
                Compliance & Standards
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                Our bank guarantees are structured in full compliance with international standards and regulations
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {complianceFeatures.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-primary/20 text-center h-full">
                    <CardContent className="p-6">
                      <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
                      <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-center"
            >
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">URDG 758 Compliance</h3>
                  <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                    All our bank guarantees are issued in accordance with the ICC Uniform Rules for Demand Guarantees (URDG 758), 
                    ensuring global acceptance and standardized procedures.
                  </p>
                  <Badge variant="outline" className="text-primary border-primary">
                    ICC Certified
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
                Ready to Secure Your Business?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Get started with your bank guarantee application today and unlock new business opportunities
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="cta-primary">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="cta-light">
                  Contact Our Team
                  <Phone className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid md:grid-cols-3 gap-6"
            >
              <motion.div variants={fadeInUp}>
                <Card className="border-primary/20 h-full">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="border-primary/20 h-full">
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">guarantees@tcbancorp.com</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="border-primary/20 h-full">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Office</h3>
                    <p className="text-muted-foreground">New York, NY</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}