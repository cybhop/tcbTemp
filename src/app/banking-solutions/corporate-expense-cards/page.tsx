"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { 
  CreditCard, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Zap, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Calculator, 
  FileText, 
  PieChart, 
  Settings, 
  Smartphone, 
  Globe, 
  Lock, 
  DollarSign,
  Target,
  Briefcase,
  Eye,
  Database,
  Workflow,
  AlertCircle,
  Calendar,
  Receipt,
  Building,
  CreditCard as CardIcon,
  Wallet,
  LineChart,
  FileBarChart,
  Banknote,
  UserCheck,
  Gauge,
  Star
} from 'lucide-react';

export default function CorporateExpenseCards() {
  const [roiInputs, setRoiInputs] = useState({
    employees: 50,
    monthlyExpenses: 25000,
    processingTime: 4
  });

  const [calculatedROI, setCalculatedROI] = useState({
    timeSaved: 0,
    costSaved: 0,
    annualSavings: 0
  });

  const [selectedTier, setSelectedTier] = useState('professional');

  React.useEffect(() => {
    const timeSavedPerMonth = (roiInputs.processingTime * roiInputs.employees * 4) * 0.8;
    const costPerHour = 35;
    const monthlySavings = timeSavedPerMonth * costPerHour;
    const annualSavings = monthlySavings * 12;
    const costSaved = monthlySavings + (roiInputs.monthlyExpenses * 0.02);

    setCalculatedROI({
      timeSaved: timeSavedPerMonth,
      costSaved: costSaved,
      annualSavings: annualSavings
    });
  }, [roiInputs]);

  const features = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Smart Card Management",
      description: "Issue unlimited virtual and physical cards with instant activation and real-time controls"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Real-Time Visibility",
      description: "Track every transaction as it happens with detailed categorization and merchant data"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Automated Workflows",
      description: "Streamline approval processes with customizable spending policies and routing"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Gain insights with comprehensive reporting and spending pattern analysis"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Seamless Integration",
      description: "Connect with your existing accounting systems and ERP platforms"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade security with fraud detection and compliance monitoring"
    }
  ];

  const enterpriseFeatures = [
    {
      category: "Card Management",
      items: [
        "Unlimited virtual and physical cards",
        "Instant card issuance and activation",
        "Custom spending limits and controls",
        "Multi-currency support",
        "Temporary card freezing",
        "Automated card renewals"
      ]
    },
    {
      category: "Expense Tracking",
      items: [
        "Real-time transaction monitoring",
        "Automated receipt capture",
        "Smart expense categorization",
        "Mileage tracking integration",
        "Project-based expense allocation",
        "Tax-compliant reporting"
      ]
    },
    {
      category: "Approval Workflows",
      items: [
        "Configurable approval chains",
        "Automated policy enforcement",
        "Exception handling rules",
        "Mobile approval capabilities",
        "Audit trail maintenance",
        "Compliance monitoring"
      ]
    },
    {
      category: "Reporting & Analytics",
      items: [
        "Real-time dashboard insights",
        "Custom report generation",
        "Spending trend analysis",
        "Budget variance reporting",
        "Merchant category insights",
        "Executive summary reports"
      ]
    }
  ];

  const integrations = [
    { name: "QuickBooks", logo: "QB" },
    { name: "Xero", logo: "X" },
    { name: "SAP", logo: "SAP" },
    { name: "Oracle", logo: "O" },
    { name: "NetSuite", logo: "NS" },
    { name: "Sage", logo: "S" }
  ];

  const pricingTiers = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$5',
      period: 'per card/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 25 cards',
        'Basic reporting',
        'Mobile app access',
        'Email support',
        'Standard integrations'
      ],
      highlight: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$8',
      period: 'per card/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100 cards',
        'Advanced analytics',
        'Custom workflows',
        'Priority support',
        'Premium integrations',
        'Multi-entity support'
      ],
      highlight: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Unlimited cards',
        'White-label options',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantees'
      ],
      highlight: false
    }
  ];

  const testimonials = [
    {
      company: "TechCorp Industries",
      name: "Sarah Johnson",
      role: "CFO",
      content: "TCB's expense cards have transformed our financial operations. We've reduced processing time by 75% and gained unprecedented visibility into our spending.",
      rating: 5
    },
    {
      company: "Global Manufacturing",
      name: "Michael Chen",
      role: "Finance Director",
      content: "The integration with our ERP system was seamless. Real-time expense tracking has helped us maintain better budget control across all departments.",
      rating: 5
    },
    {
      company: "Digital Solutions Ltd",
      name: "Emily Rodriguez",
      role: "Operations Manager",
      content: "The automated workflows and approval processes have eliminated manual bottlenecks. Our team can focus on strategic tasks instead of expense paperwork.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1a1f36] to-[#2a3447] text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#d4af37] text-[#1a1f36] mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Enterprise-Grade Solution
              </Badge>
              <h1 className="text-5xl font-bold mb-6 text-white">
                Corporate Expense Cards
                <span className="text-[#d4af37]"> Reimagined</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolutionize your expense management with intelligent corporate cards, 
                real-time tracking, and automated workflows that scale with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8941f] text-[#1a1f36] font-semibold">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-300 hover:bg-gray-800">
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#d4af37] mb-2">75%</div>
                    <div className="text-sm text-gray-300">Time Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#d4af37] mb-2">$2.5M</div>
                    <div className="text-sm text-gray-300">Avg. Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#d4af37] mb-2">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#d4af37] mb-2">24/7</div>
                    <div className="text-sm text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a1f36] mb-4">
              Everything You Need for Modern Expense Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your corporate spending with our comprehensive suite of features 
              designed for today's dynamic business environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#d4af37]/10 rounded-lg text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-[#1a1f36]">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a1f36] mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-600">
              See how much you could save with our expense management solution
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center text-[#1a1f36]">
                <Calculator className="w-6 h-6 mr-3" />
                ROI Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="employees" className="text-sm font-medium text-gray-700">
                      Number of Employees
                    </Label>
                    <Slider
                      value={[roiInputs.employees]}
                      onValueChange={(value) => setRoiInputs({...roiInputs, employees: value[0]})}
                      max={500}
                      min={10}
                      step={10}
                      className="mt-2"
                    />
                    <div className="text-sm text-gray-500 mt-1">{roiInputs.employees} employees</div>
                  </div>

                  <div>
                    <Label htmlFor="expenses" className="text-sm font-medium text-gray-700">
                      Monthly Expenses ($)
                    </Label>
                    <Slider
                      value={[roiInputs.monthlyExpenses]}
                      onValueChange={(value) => setRoiInputs({...roiInputs, monthlyExpenses: value[0]})}
                      max={100000}
                      min={5000}
                      step={1000}
                      className="mt-2"
                    />
                    <div className="text-sm text-gray-500 mt-1">${roiInputs.monthlyExpenses.toLocaleString()}</div>
                  </div>

                  <div>
                    <Label htmlFor="time" className="text-sm font-medium text-gray-700">
                      Hours Spent on Expense Processing (per employee/month)
                    </Label>
                    <Slider
                      value={[roiInputs.processingTime]}
                      onValueChange={(value) => setRoiInputs({...roiInputs, processingTime: value[0]})}
                      max={20}
                      min={1}
                      step={1}
                      className="mt-2"
                    />
                    <div className="text-sm text-gray-500 mt-1">{roiInputs.processingTime} hours</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#1a1f36]/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#1a1f36] mb-4">Your Potential Savings</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Time Saved (hours/month)</span>
                        <span className="font-semibold text-[#d4af37]">{calculatedROI.timeSaved.toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Monthly Cost Savings</span>
                        <span className="font-semibold text-[#d4af37]">${calculatedROI.costSaved.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center border-t pt-4">
                        <span className="text-lg font-semibold text-[#1a1f36]">Annual Savings</span>
                        <span className="text-2xl font-bold text-[#d4af37]">${calculatedROI.annualSavings.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-[#1a1f36]">
                    Get Detailed ROI Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a1f36] mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive capabilities built for large-scale operations
            </p>
          </div>

          <Tabs defaultValue="management" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-[#e1e1e1]">
              <TabsTrigger value="management">Card Management</TabsTrigger>
              <TabsTrigger value="tracking">Expense Tracking</TabsTrigger>
              <TabsTrigger value="workflows">Workflows</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {enterpriseFeatures.map((category) => (
              <TabsContent key={category.category.toLowerCase().replace(' ', '')} value={category.category.toLowerCase().replace(' ', '')}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, index) => (
                    <Card key={index} className="border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a1f36] mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your existing systems for a unified financial workflow
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration) => (
              <Card key={integration.name} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#d4af37]/10 rounded-lg flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-white transition-colors">
                    <span className="text-2xl font-bold">{integration.logo}</span>
                  </div>
                  <h3 className="font-semibold text-[#1a1f36]">{integration.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white">
              View All Integrations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a1f36] mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card 
                key={tier.id} 
                className={`relative ${tier.highlight ? 'border-[#d4af37] shadow-lg scale-105' : 'border-gray-200'}`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#d4af37] text-[#1a1f36]">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-[#1a1f36]">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-[#d4af37] mt-4">
                    {tier.price}
                    <span className="text-lg text-gray-600 font-normal">/{tier.period}</span>
                  </div>
                  <CardDescription className="text-gray-600 mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.highlight ? 'bg-[#d4af37] hover:bg-[#b8941f] text-[#1a1f36]' : 'bg-[#1a1f36] hover:bg-[#2a3447] text-white'}`}
                  >
                    {tier.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a1f36] mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers are saying about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#d4af37] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-[#1a1f36]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-[#d4af37] font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a1f36] to-[#2a3447] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-yellow-500">
            Ready to Transform Your Expense Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have streamlined their expense processes with 
            TCB's corporate expense cards. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8941f] text-[#1a1f36] font-semibold">
              Start Free 30-Day Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-300 hover:bg-gray-800">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            No credit card required • Setup in minutes • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}