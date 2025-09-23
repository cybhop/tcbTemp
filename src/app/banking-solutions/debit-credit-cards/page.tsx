"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard, 
  Shield, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Lock,
  Smartphone,
  TrendingUp,
  DollarSign,
  Award,
  ChevronRight,
  Star,
  Building,
  User,
  Settings,
  BarChart3,
  Clock,
  FileText,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function DebitCreditCardsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const cardTypes = [
    {
      type: "Business Debit Card",
      icon: <Building className="w-6 h-6" />,
      features: [
        "No monthly fees",
        "ATM fee reimbursement",
        "Real-time expense tracking",
        "Employee spending controls",
        "Mobile app integration"
      ],
      benefits: "Perfect for day-to-day business expenses",
      color: "bg-gradient-to-br from-blue-50 to-indigo-50"
    },
    {
      type: "Business Credit Card",
      icon: <TrendingUp className="w-6 h-6" />,
      features: [
        "Flexible credit limits",
        "Rewards program",
        "Detailed reporting",
        "Travel insurance",
        "Extended warranty protection"
      ],
      benefits: "Build business credit while earning rewards",
      color: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      type: "Personal Debit Card",
      icon: <User className="w-6 h-6" />,
      features: [
        "Zero foreign transaction fees",
        "Contactless payments",
        "24/7 fraud monitoring",
        "Instant transaction alerts",
        "Digital wallet compatibility"
      ],
      benefits: "Secure and convenient personal banking",
      color: "bg-gradient-to-br from-purple-50 to-violet-50"
    },
    {
      type: "Personal Credit Card",
      icon: <Award className="w-6 h-6" />,
      features: [
        "Competitive interest rates",
        "Cashback rewards",
        "Credit score monitoring",
        "Purchase protection",
        "Travel benefits"
      ],
      benefits: "Build credit while earning rewards",
      color: "bg-gradient-to-br from-amber-50 to-orange-50"
    }
  ];

  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-[#d4af37]" />,
      title: "Advanced Fraud Protection",
      description: "AI-powered fraud detection monitors transactions 24/7 to protect your accounts"
    },
    {
      icon: <Lock className="w-8 h-8 text-[#d4af37]" />,
      title: "EMV Chip Technology",
      description: "Enhanced security with encrypted chip technology for in-person transactions"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#d4af37]" />,
      title: "Mobile Security",
      description: "Biometric authentication and instant transaction alerts on your mobile device"
    },
    {
      icon: <Globe className="w-8 h-8 text-[#d4af37]" />,
      title: "Global Acceptance",
      description: "Accepted worldwide at millions of locations with secure international processing"
    }
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Choose Your Card",
      description: "Select the card type that best fits your needs"
    },
    {
      step: "2",
      title: "Complete Application",
      description: "Fill out our secure online application form"
    },
    {
      step: "3",
      title: "Verification Process",
      description: "Quick verification of your information and credit check"
    },
    {
      step: "4",
      title: "Receive Your Card",
      description: "Get your card delivered within 5-7 business days"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprise charges"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Detailed Reporting",
      description: "Comprehensive transaction reporting and analytics"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service and technical support"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customizable Controls",
      description: "Set spending limits, merchant restrictions, and more"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1a1f36] to-[#2a3155] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#d4af37] text-black">
                Payment Solutions
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Debit & Credit Cards
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Secure, reliable, and feature-rich payment cards designed for modern businesses and individuals. Experience the perfect blend of traditional banking with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#c19b26] text-black">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a1f36]">
                  Compare Cards
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <CreditCard className="w-8 h-8 text-[#d4af37]" />
                  <span className="text-sm font-medium">TCB PREMIUM</span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-[#d4af37] rounded-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Available Credit</span>
                    <span>$75,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Rewards Earned</span>
                    <span>2,456 pts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Types Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Perfect Card</h2>
          <p className="text-gray-600 text-lg">
            Whether you're a business owner or individual, we have the right card for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardTypes.map((card, index) => (
            <Card key={index} className={`${card.color} border-none hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  {card.icon}
                  <CardTitle className="text-lg">{card.type}</CardTitle>
                </div>
                <p className="text-sm text-gray-600">{card.benefits}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#1a1f36] hover:bg-[#2a3155]">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Security Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bank-Level Security</h2>
            <p className="text-gray-600 text-lg">
              Your financial security is our top priority with industry-leading protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features & Benefits Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[#e1e1e1]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="business">Business Features</TabsTrigger>
            <TabsTrigger value="personal">Personal Features</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#d4af37]" />
                    Why Choose TCB Cards?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-[#d4af37]/10 p-2 rounded-lg">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#d4af37]" />
                    Global Acceptance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Worldwide ATMs</span>
                      <span className="font-semibold">2M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Merchant Locations</span>
                      <span className="font-semibold">40M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Countries Accepted</span>
                      <span className="font-semibold">200+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Zero Foreign Transaction Fees</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="business" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Expense Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Real-time expense tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Automated categorization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Receipt capture
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Integration with accounting software
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Employee Controls</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Individual spending limits
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Merchant category restrictions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Time-based controls
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Instant card freezing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reporting & Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Detailed transaction reports
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Spend analysis dashboard
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Custom report generation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Export capabilities
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="personal" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Rewards & Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Cashback on purchases</span>
                      <span className="font-semibold">Up to 2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bonus categories</span>
                      <span className="font-semibold">5% rotating</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Welcome bonus</span>
                      <span className="font-semibold">$200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Travel insurance</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Digital Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Mobile app with Touch ID
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Contactless payments
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Digital wallet integration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Instant notifications
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Application Process */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple Application Process</h2>
            <p className="text-gray-600 text-lg">
              Get your TCB card in just a few easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#d4af37] text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < applicationSteps.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-gray-400 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1a1f36] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who trust TCB for their payment needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#d4af37] hover:bg-[#c19b26] text-black">
              Apply for Business Card
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a1f36]">
              Apply for Personal Card
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-[#d4af37] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-2">Available 24/7</p>
                <p className="font-semibold">1-800-TCB-CARD</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-[#d4af37] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-2">Get help via email</p>
                <p className="font-semibold">cards@tcb.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-[#d4af37] mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">Find a branch near you</p>
                <p className="font-semibold">Branch Locator</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}