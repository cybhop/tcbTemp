import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  FileText, 
  TrendingUp, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Building2, 
  Banknote, 
  FileCheck, 
  AlertTriangle,
  Award,
  Scale,
  Target,
  Handshake,
  Lock,
  Zap
} from 'lucide-react';
import { contactInfo } from "@/lib/contact-config";
import { LcApplicationForm } from "@/components/forms/LcApplicationForm";

export default function SBLCServicePage() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-highlight" />,
      title: "Performance Assurance",
      description: "Guarantee contract performance and build trust with counterparties through irrevocable bank commitments."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-highlight" />,
      title: "Enhanced Credit Standing", 
      description: "Strengthen your business credibility and unlock new opportunities with bank-backed guarantees."
    },
    {
      icon: <Globe className="w-6 h-6 text-highlight" />,
      title: "International Compliance",
      description: "Full compliance with ISP98 rules and international banking standards for global acceptance."
    },
    {
      icon: <Zap className="w-6 h-6 text-highlight" />,
      title: "Rapid Processing",
      description: "Streamlined application process with fast turnaround times to meet urgent business needs."
    }
  ];

  const useCases = [
    {
      title: "Construction & Infrastructure",
      description: "Performance bonds, advance payment guarantees, and warranty bonds for construction projects.",
      icon: <Building2 className="w-8 h-8 text-highlight" />
    },
    {
      title: "International Trade",
      description: "Trade finance guarantees, customs bonds, and payment security for import/export operations.",
      icon: <Globe className="w-8 h-8 text-highlight" />
    },
    {
      title: "Government Contracts",
      description: "Bid bonds, performance guarantees, and contract security for public sector projects.",
      icon: <Award className="w-8 h-8 text-highlight" />
    },
    {
      title: "Financial Services",
      description: "Bank guarantees, credit enhancements, and financial backing for various transactions.",
      icon: <Banknote className="w-8 h-8 text-highlight" />
    }
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Discuss your SBLC requirements with our specialized team to determine the best solution."
    },
    {
      step: "2", 
      title: "Documentation Review",
      description: "Submit required documentation including financial statements, business licenses, and project details."
    },
    {
      step: "3",
      title: "Credit Assessment",
      description: "Our underwriting team evaluates your creditworthiness and project viability."
    },
    {
      step: "4",
      title: "Terms Negotiation",
      description: "Finalize SBLC terms and conditions based on your specific requirements."
    },
    {
      step: "5",
      title: "Issuance & Delivery",
      description: "SBLC is issued and delivered through secure channels to the designated beneficiary."
    }
  ];

  const documentationRequirements = [
    "Completed SBLC application form",
    "Audited financial statements (3 years)",
    "Business registration and licenses",
    "Board resolution authorizing SBLC request",
    "Project contracts and specifications",
    "Insurance certificates and bonds",
    "Bank statements and credit references",
    "Corporate structure and ownership details"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-500">
              Standby Letters of Credit (SBLCs)
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Secure your business transactions with bank-backed guarantees. Our SBLCs provide 
              performance assurance, credit enhancement, and risk mitigation for domestic and 
              international operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-primary">
                Get SBLC Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 w-4 h-4" />
                Speak with Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Our SBLC Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trade Credit Bancorp offers comprehensive SBLC solutions backed by our expertise 
              in international banking and trade finance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SBLC Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Types of SBLCs We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive SBLC solutions tailored to your specific business needs and industry requirements.
            </p>
          </div>

          <Tabs defaultValue="performance" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-[#e1e1e1]">
              <TabsTrigger value="performance">Performance SBLCs</TabsTrigger>
              <TabsTrigger value="financial">Financial SBLCs</TabsTrigger>
              <TabsTrigger value="commercial">Commercial SBLCs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-highlight" />
                    Performance Standby Letters of Credit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Performance SBLCs guarantee the completion of contractual obligations and are 
                    commonly used in construction, infrastructure, and service contracts.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Contract performance guarantee
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Advance payment protection
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Warranty and maintenance bonds
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Bid bond alternatives
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Common Applications:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Construction projects</li>
                        <li>• Government contracts</li>
                        <li>• Infrastructure development</li>
                        <li>• Service agreements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="financial" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Banknote className="w-5 h-5 text-highlight" />
                    Financial Standby Letters of Credit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Financial SBLCs serve as payment guarantees and credit enhancements, providing 
                    assurance for monetary obligations and debt service requirements.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Payment guarantee
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Credit enhancement
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Debt service backup
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Working capital support
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Common Applications:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Loan guarantees</li>
                        <li>• Bond issuances</li>
                        <li>• Trade financing</li>
                        <li>• Real estate transactions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="commercial" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Handshake className="w-5 h-5 text-highlight" />
                    Commercial Standby Letters of Credit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Commercial SBLCs facilitate international trade and business transactions, 
                    providing security for commercial operations and trade agreements.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Trade transaction security
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Import/export facilitation
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Customs bond alternative
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Commercial risk mitigation
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Common Applications:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• International trade</li>
                        <li>• Supply chain financing</li>
                        <li>• Commercial contracts</li>
                        <li>• Joint ventures</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Industry Applications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our SBLC services support diverse industries with specialized guarantee solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-lg text-center">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ISP98 Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-highlight/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Scale className="w-6 h-6 text-highlight" />
                  ISP98 Rules Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  All our Standby Letters of Credit are issued in full compliance with the International 
                  Standby Practices (ISP98) as published by the International Chamber of Commerce, ensuring 
                  global acceptance and enforceability.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">ISP98 Benefits:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Internationally recognized standards
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Clear rules and procedures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Reduced disputes and ambiguity
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Enhanced legal enforceability
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Regulatory Compliance:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Federal banking regulations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        International banking standards
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Anti-money laundering (AML) compliance
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Know Your Customer (KYC) requirements
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures quick and efficient SBLC issuance while maintaining 
              the highest standards of due diligence.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-highlight text-primary rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-6 h-6 text-highlight" />
                  Documentation Requirements
                </CardTitle>
                <CardDescription>
                  Required documents for SBLC application processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Essential Documents:</h4>
                    <ul className="space-y-2">
                      {documentationRequirements.slice(0, 4).map((doc, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Additional Requirements:</h4>
                    <ul className="space-y-2">
                      {documentationRequirements.slice(4).map((doc, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Important Note:</h4>
                      <p className="text-yellow-700 text-sm mt-1">
                        Document requirements may vary based on SBLC type, amount, and specific transaction details. 
                        Our team will provide a customized checklist during the initial consultation.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SBLC Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">Apply for a Standby Letter of Credit</h2>
            <p className="text-gray-600">Fill out the application below and our team will contact you shortly.</p>
          </div>
          <LcApplicationForm title="Standby Letter of Credit Application" defaultLcType="Standby" />
        </div>
      </section>

      {/* Why Choose TCB */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Trade Credit Bancorp?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Users className="w-12 h-12 text-highlight mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-white/90">
                  Experienced professionals with deep knowledge of international banking and trade finance.
                </p>
              </div>
              
              <div className="text-center">
                <Lock className="w-12 h-12 text-highlight mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Solutions</h3>
                <p className="text-white/90">
                  Bank-grade security and compliance with international banking standards and regulations.
                </p>
              </div>
              
              <div className="text-center">
                <Clock className="w-12 h-12 text-highlight mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                <p className="text-white/90">
                  Streamlined processes and dedicated support to meet your urgent business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Ready to Secure Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get started with our SBLC services and protect your business interests with 
              professional-grade financial guarantees.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-primary">
                <FileText className="mr-2 w-4 h-4" />
                Request Quote
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Phone className="mr-2 w-4 h-4" />
                {contactInfo.phone}
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Mail className="mr-2 w-4 h-4" />
                {contactInfo.email}
              </Button>
            </div>
            
            <div className="mt-8 text-center">
              <Badge variant="outline" className="text-sm">
                <Clock className="mr-1 w-3 h-3" />
                24/7 Support Available
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}