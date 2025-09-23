"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  CheckCircle, 
  FileCheck, 
  Clock, 
  Globe, 
  Users,
  TrendingUp,
  Lock,
  Award,
  ArrowRight,
  Building,
  CreditCard,
  DollarSign,
  Zap,
  AlertCircle,
  Phone,
  Mail,
  Calendar,
  Download
} from 'lucide-react';

export default function ProofOfFundsPage() {
  const [selectedFeature, setSelectedFeature] = useState('verification');

  const features = [
    {
      id: 'verification',
      icon: <Shield className="w-6 h-6" />,
      title: 'Instant Verification',
      description: 'Real-time validation of financial standing with bank-grade security'
    },
    {
      id: 'compliance',
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Full Compliance',
      description: 'Meet all regulatory requirements across multiple jurisdictions'
    },
    {
      id: 'global',
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach',
      description: 'Accepted by banks and institutions worldwide'
    },
    {
      id: 'support',
      icon: <Users className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Expert assistance throughout the verification process'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Complete our secure online application with required documentation',
      icon: <FileCheck className="w-8 h-8" />
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Our experts review and verify all submitted documents',
      icon: <Shield className="w-8 h-8" />
    },
    {
      step: 3,
      title: 'Bank Confirmation',
      description: 'Direct verification with your banking institution',
      icon: <Building className="w-8 h-8" />
    },
    {
      step: 4,
      title: 'Certificate Issuance',
      description: 'Receive your authenticated proof of funds certificate',
      icon: <Award className="w-8 h-8" />
    }
  ];

  const useCases = [
    {
      title: 'Real Estate Transactions',
      description: 'Verify buyer capacity for large property purchases',
      icon: <Building className="w-6 h-6" />
    },
    {
      title: 'International Trade',
      description: 'Establish credibility for import/export transactions',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Investment Opportunities',
      description: 'Qualify for exclusive investment programs',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Business Partnerships',
      description: 'Demonstrate financial stability to potential partners',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Government Contracts',
      description: 'Meet financial requirements for public sector bids',
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: 'Bank Negotiations',
      description: 'Strengthen your position in loan negotiations',
      icon: <CreditCard className="w-6 h-6" />
    }
  ];

  const complianceStandards = [
    'ISO 27001 Information Security',
    'SOC 2 Type II Compliance',
    'Basel III Banking Regulations',
    'Anti-Money Laundering (AML)',
    'Know Your Customer (KYC)',
    'GDPR Data Protection',
    'PCI DSS Security Standards',
    'SWIFT Banking Network'
  ];

  const documentTypes = [
    {
      type: 'Bank Comfort Letter',
      description: 'Official letter from your bank confirming account status and available funds',
      turnaround: '3-5 business days',
      validity: '30 days'
    },
    {
      type: 'Proof of Funds Certificate',
      description: 'Authenticated document verifying liquid assets and financial capacity',
      turnaround: '2-3 business days',
      validity: '90 days'
    },
    {
      type: 'Bank Reference Letter',
      description: 'Character reference from your banking institution',
      turnaround: '1-2 business days',
      validity: '60 days'
    },
    {
      type: 'Financial Statement Verification',
      description: 'Third-party verification of audited financial statements',
      turnaround: '5-7 business days',
      validity: '12 months'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-highlight text-primary">
                <Award className="w-4 h-4 mr-2" />
                Trusted by 10,000+ Businesses
              </Badge>
              <h1 className="text-5xl font-bold mb-6 text-white">
                Professional Proof of Funds Services
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get bank-verified proof of funds documentation that's accepted worldwide. 
                Fast, secure, and compliant with international banking standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-primary font-semibold">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Speak to Expert
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <Card key={feature.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="text-highlight mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-white text-lg mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Complete Proof of Funds Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of financial verification services, 
              each designed to meet specific business requirements and regulatory standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentTypes.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{doc.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Turnaround:</span>
                      <span className="text-sm">{doc.turnaround}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Validity:</span>
                      <span className="text-sm">{doc.validity}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-secondary/30 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Simple 4-Step Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures fast, secure, and compliant proof of funds verification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-highlight rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Common Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proof of funds services support a wide range of business and investment scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <div className="text-primary">
                        {useCase.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-secondary/30 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Regulatory Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our services meet the highest international standards for financial verification and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <p className="font-semibold text-sm">{standard}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get your proof of funds documentation today and unlock new business opportunities 
            with verified financial credibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-primary font-semibold">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}