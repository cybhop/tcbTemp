"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CreditCard, 
  Shield, 
  Users, 
  Gift, 
  Settings, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Smartphone, 
  Lock, 
  BarChart3,
  Building,
  Clock,
  Zap,
  Target,
  DollarSign,
  Globe,
  PieChart,
  FileText,
  Award,
  Star,
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  Play,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

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

export default function PrepaidCardsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedUseCase, setSelectedUseCase] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  const features = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Flexible Card Solutions",
      description: "Customizable prepaid cards with varying limits and controls tailored to your business needs.",
      benefits: ["Real-time spending controls", "Multiple card types", "Instant issuance", "Custom branding options"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with fraud protection and real-time monitoring.",
      benefits: ["EMV chip technology", "Real-time alerts", "Transaction monitoring", "Fraud prevention"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Expense Management",
      description: "Comprehensive expense tracking and reporting tools for better financial control.",
      benefits: ["Automated expense tracking", "Custom reporting", "Receipt management", "Budget controls"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Employee Benefits",
      description: "Streamlined employee expense management with automated reimbursements.",
      benefits: ["Instant reimbursements", "Category restrictions", "Spending limits", "Mobile app access"]
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Customer Rewards",
      description: "Build loyalty with customizable rewards and incentive programs.",
      benefits: ["Points accumulation", "Cashback programs", "Custom rewards", "Loyalty tracking"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Technical Integration",
      description: "Seamless API integration with your existing systems and workflows.",
      benefits: ["RESTful APIs", "Real-time webhooks", "Custom integrations", "Developer support"]
    }
  ];

  const useCases = [
    {
      title: "Corporate Expense Management",
      description: "Streamline employee expenses with automated controls and real-time tracking.",
      icon: <Building className="w-8 h-8" />,
      benefits: ["Reduce expense processing time by 75%", "Eliminate manual receipt management", "Real-time budget monitoring", "Automated compliance reporting"],
      implementation: "Deploy cards to employees with preset spending limits and category restrictions. Integrate with your accounting system for automatic expense reconciliation."
    },
    {
      title: "Customer Loyalty Programs",
      description: "Enhance customer retention with reward-based prepaid card programs.",
      icon: <Award className="w-8 h-8" />,
      benefits: ["Increase customer retention by 40%", "Boost average transaction value", "Automated reward distribution", "Detailed customer analytics"],
      implementation: "Issue branded prepaid cards to customers with points-based rewards. Set up automatic reloading and loyalty tier progression."
    },
    {
      title: "Employee Benefits Distribution",
      description: "Distribute benefits, bonuses, and reimbursements efficiently.",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Instant benefit distribution", "Reduced administrative overhead", "Employee satisfaction improvement", "Compliance with benefit regulations"],
      implementation: "Load employee cards with benefits, bonuses, or reimbursements. Set up recurring distributions and spending controls."
    },
    {
      title: "Promotional Campaigns",
      description: "Execute marketing campaigns with trackable prepaid incentives.",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Measurable campaign ROI", "Targeted customer engagement", "Fraud-resistant distributions", "Real-time campaign analytics"],
      implementation: "Distribute promotional cards with specific spending parameters. Track usage patterns and measure campaign effectiveness."
    }
  ];

  const integrationSteps = [
    { step: 1, title: "API Integration", description: "Connect to our secure API endpoints", duration: "1-2 weeks" },
    { step: 2, title: "Testing", description: "Test card issuance and transaction processing", duration: "1 week" },
    { step: 3, title: "Customization", description: "Configure card designs and spending controls", duration: "2-3 days" },
    { step: 4, title: "Go Live", description: "Launch your prepaid card program", duration: "1 day" }
  ];

  const securityFeatures = [
    "PCI DSS Level 1 Compliance",
    "EMV Chip Technology",
    "Real-time Fraud Detection",
    "Tokenization",
    "Two-Factor Authentication",
    "Encryption at Rest and in Transit"
  ];

  const handlePlayDemo = () => {
    setShowDemo(true);
  };

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
                  Prepaid Card Solutions
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
              >
                Flexible Prepaid Cards for <span className="text-highlight">Modern Business</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Comprehensive prepaid card solutions with advanced expense management, employee benefits, 
                and customer rewards programs. Seamlessly integrate with your existing systems.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild size="lg" className="cta-primary">
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="cta-outline" onClick={handlePlayDemo}>
                  Schedule Demo
                  <Play className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Demo Modal */}
        {showDemo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setShowDemo(false)}
                className="absolute -top-10 right-0 text-white hover:text-highlight transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="bg-white rounded-lg p-6">
                <div className="aspect-video bg-black/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-highlight mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Prepaid Card Platform Demo</h3>
                    <p className="text-muted-foreground mb-4">
                      This demo showcases our comprehensive prepaid card management platform,
                      including card issuance, expense tracking, and integration capabilities.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Real-time card issuance and management</p>
                      <p>• Advanced expense tracking and reporting</p>
                      <p>• Customizable spending controls and limits</p>
                      <p>• API integration and developer tools</p>
                    </div>
                    <Button asChild className="mt-4 cta-primary">
                      <Link href="/contact">
                        Schedule Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Grid */}
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
                Complete Prepaid Card Solutions
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage expenses, reward customers, and streamline financial operations.
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center text-highlight mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-highlight mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-accent/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
                Proven Use Cases
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                See how businesses are transforming their operations with our prepaid card solutions.
              </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Use Case Selector */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="space-y-4"
              >
                {useCases.map((useCase, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card 
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedUseCase === index ? 'border-highlight bg-highlight/5' : 'hover:border-highlight/50'
                      }`}
                      onClick={() => setSelectedUseCase(index)}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            selectedUseCase === index ? 'bg-highlight/20 text-highlight' : 'bg-accent text-muted-foreground'
                          }`}>
                            {useCase.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{useCase.title}</CardTitle>
                            <CardDescription>{useCase.description}</CardDescription>
                          </div>
                          <ChevronRight className={`w-5 h-5 transition-transform ${
                            selectedUseCase === index ? 'text-highlight rotate-90' : 'text-muted-foreground'
                          }`} />
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Use Case Details */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:sticky lg:top-8"
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-highlight/20 rounded-lg flex items-center justify-center text-highlight">
                        {useCases[selectedUseCase].icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{useCases[selectedUseCase].title}</CardTitle>
                        <CardDescription>{useCases[selectedUseCase].description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {useCases[selectedUseCase].benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-highlight mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-3">Implementation</h4>
                      <p className="text-sm text-muted-foreground">
                        {useCases[selectedUseCase].implementation}
                      </p>
                    </div>
                    
                    <Button asChild className="w-full bg-highlight hover:bg-highlight/90 text-primary">
                      <Link href="/contact">
                        Learn More About This Solution
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Integration */}
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
                Seamless Integration
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                Quick and easy integration with comprehensive APIs and developer-friendly documentation.
              </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Integration Steps */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                <h3 className="text-2xl font-bold mb-6">Implementation Timeline</h3>
                <div className="space-y-6">
                  {integrationSteps.map((step, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex gap-4">
                      <div className="w-8 h-8 bg-highlight/20 rounded-full flex items-center justify-center text-highlight font-semibold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{step.description}</p>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* API Features */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                <h3 className="text-2xl font-bold mb-6">API Capabilities</h3>
                <Card>
                  <CardContent className="pt-6">
                    <Tabs defaultValue="endpoints" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 bg-[#e1e1e1]">
                        <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                        <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
                        <TabsTrigger value="security">Security</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="endpoints" className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Badge className="bg-green-100 text-green-700">POST</Badge>
                            <code className="text-sm">/api/v1/cards/create</code>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className="bg-blue-100 text-blue-700">GET</Badge>
                            <code className="text-sm">/api/v1/cards/[card_id]/balance</code>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className="bg-orange-100 text-orange-700">PUT</Badge>
                            <code className="text-sm">/api/v1/cards/[card_id]/controls</code>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className="bg-purple-100 text-purple-700">POST</Badge>
                            <code className="text-sm">/api/v1/transactions/authorize</code>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="webhooks" className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-highlight" />
                            <span className="text-sm">Real-time transaction notifications</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-highlight" />
                            <span className="text-sm">Card status updates</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-highlight" />
                            <span className="text-sm">Balance threshold alerts</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-highlight" />
                            <span className="text-sm">Fraud detection alerts</span>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="security" className="space-y-4">
                        <div className="grid grid-cols-1 gap-3">
                          {securityFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <Lock className="w-4 h-4 text-highlight flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4 text-yellow-500">
                Trusted by Leading Businesses
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-blue-100 max-w-2xl mx-auto">
                Our prepaid card solutions power expense management and rewards programs across industries.
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid md:grid-cols-4 gap-8"
            >
              {[
                { number: "500+", label: "Active Programs", icon: <CreditCard className="w-6 h-6" /> },
                { number: "50M+", label: "Cards Issued", icon: <TrendingUp className="w-6 h-6" /> },
                { number: "99.9%", label: "Uptime", icon: <Shield className="w-6 h-6" /> },
                { number: "24/7", label: "Support", icon: <Globe className="w-6 h-6" /> }
              ].map((stat, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-highlight mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-highlight/10 to-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6">
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-8">
                Join hundreds of businesses using our prepaid card solutions to streamline operations, 
                reduce costs, and enhance customer experiences.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mb-8">
                <Card className="border-2 border-highlight/20 hover:border-highlight/40 transition-colors">
                  <CardContent className="pt-6 text-center">
                    <Phone className="w-8 h-8 text-highlight mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Talk to Sales</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Discuss your specific requirements with our experts
                    </p>
                    <Button asChild variant="outline" className="cta-outline">
                      <Link href="/contact">
                        Schedule Call
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-highlight/20 hover:border-highlight/40 transition-colors">
                  <CardContent className="pt-6 text-center">
                    <FileText className="w-8 h-8 text-highlight mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Get Documentation</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Access comprehensive API docs and integration guides
                    </p>
                    <Button asChild variant="outline" className="cta-outline">
                      <Link href="/contact">
                        View Docs
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-highlight/20 hover:border-highlight/40 transition-colors">
                  <CardContent className="pt-6 text-center">
                    <Smartphone className="w-8 h-8 text-highlight mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Try Demo</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Experience our platform with a personalized demo
                    </p>
                    <Button variant="outline" className="cta-outline" onClick={handlePlayDemo}>
                      Book Demo
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Button asChild size="lg" className="cta-primary">
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}