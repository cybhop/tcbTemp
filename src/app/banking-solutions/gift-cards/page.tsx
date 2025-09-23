"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Gift, 
  TrendingUp, 
  Users, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Palette, 
  Target, 
  Zap,
  ArrowRight,
  Star,
  CheckCircle,
  DollarSign,
  RefreshCw,
  Sparkles,
  Award,
  Heart,
  Globe,
  Settings,
  PieChart,
  Lock,
  Rocket,
  Building2,
  ShoppingBag,
  Coffee,
  Utensils,
  Shirt,
  Gem
} from 'lucide-react';

const GiftCardsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Branded Designs",
      description: "Create gift cards that reflect your brand identity with custom designs, logos, and colors"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Digital & Physical Cards",
      description: "Offer both digital e-gift cards and physical gift cards to meet all customer preferences"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Track sales, redemption rates, and customer behavior with comprehensive reporting"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud Protection",
      description: "Advanced security features to protect against fraudulent transactions and chargebacks"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Automated Reloading",
      description: "Enable customers to automatically reload cards and set up recurring gift purchases"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-location Support",
      description: "Manage gift card programs across multiple locations and sales channels"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-highlight" />,
      title: "Increase Revenue",
      description: "Gift cards typically drive 20-30% higher sales as recipients often spend more than the card value",
      stat: "↑ 25% Average Revenue Increase"
    },
    {
      icon: <Users className="w-8 h-8 text-highlight" />,
      title: "Customer Retention",
      description: "Build lasting relationships with customers through loyalty programs and repeat purchases",
      stat: "78% Customer Retention Rate"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-highlight" />,
      title: "Cash Flow Boost",
      description: "Improve cash flow with upfront payments and reduce dependency on credit transactions",
      stat: "Immediate Cash Flow Impact"
    },
    {
      icon: <Heart className="w-8 h-8 text-highlight" />,
      title: "Customer Acquisition",
      description: "Attract new customers through gift recipients who become regular patrons",
      stat: "40% New Customer Acquisition"
    }
  ];

  const successStories = [
    {
      company: "Café Deluxe Chain",
      industry: "Food & Beverage",
      icon: <Coffee className="w-8 h-8" />,
      result: "300% increase in gift card sales",
      description: "Implemented branded digital gift cards with loyalty integration, resulting in significant revenue growth and customer retention."
    },
    {
      company: "Boutique Fashion Group",
      industry: "Retail",
      icon: <Shirt className="w-8 h-8" />,
      result: "45% higher average transaction",
      description: "Custom gift card program drove higher spending per transaction and improved customer lifetime value."
    },
    {
      company: "Premium Spa Network",
      industry: "Wellness",
      icon: <Gem className="w-8 h-8" />,
      result: "60% customer retention boost",
      description: "Loyalty-integrated gift cards created a comprehensive customer engagement platform."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 500 gift cards/month",
        "Basic branded design",
        "Digital cards only",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 2,000 gift cards/month",
        "Custom branded designs",
        "Digital & physical cards",
        "Advanced analytics",
        "Priority support",
        "Multi-location support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited gift cards",
        "Full brand customization",
        "All card types",
        "Custom integrations",
        "Dedicated account manager",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Gift className="w-16 h-16 text-highlight mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Gift Cards & Loyalty Solutions
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Boost revenue, retain customers, and grow your business with custom gift card programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-primary font-semibold">
                Start Your Program
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-[#e1e1e1]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-12">
              {/* Key Features Grid */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-12">
                  Complete Gift Card Solutions
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <Card key={index} className="border-2 hover:border-highlight transition-colors">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-highlight/10 rounded-lg text-highlight">
                            {feature.icon}
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Program Types */}
              <div className="bg-accent/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">Gift Card Program Types</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <CreditCard className="w-12 h-12 text-highlight mx-auto mb-4" />
                      <h4 className="text-lg font-semibold mb-2">Traditional Gift Cards</h4>
                      <p className="text-sm text-muted-foreground">
                        Classic prepaid cards for retail purchases and services
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Target className="w-12 h-12 text-highlight mx-auto mb-4" />
                      <h4 className="text-lg font-semibold mb-2">Loyalty Programs</h4>
                      <p className="text-sm text-muted-foreground">
                        Reward programs with points, tiers, and exclusive benefits
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Sparkles className="w-12 h-12 text-highlight mx-auto mb-4" />
                      <h4 className="text-lg font-semibold mb-2">Promotional Cards</h4>
                      <p className="text-sm text-muted-foreground">
                        Marketing campaigns and special event promotions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-12">
              {/* Platform Features */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-12">
                  Powerful Management Platform
                </h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-highlight/10 rounded-lg">
                        <Settings className="w-6 h-6 text-highlight" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Easy Management Dashboard</h3>
                        <p className="text-muted-foreground">
                          Intuitive interface to manage all aspects of your gift card program
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-highlight/10 rounded-lg">
                        <PieChart className="w-6 h-6 text-highlight" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Comprehensive Analytics</h3>
                        <p className="text-muted-foreground">
                          Track performance, identify trends, and optimize your program
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-highlight/10 rounded-lg">
                        <Lock className="w-6 h-6 text-highlight" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
                        <p className="text-muted-foreground">
                          Bank-level security with fraud detection and prevention
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                        <span className="font-medium">Active Gift Cards</span>
                        <Badge variant="secondary">2,847</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                        <span className="font-medium">Monthly Revenue</span>
                        <Badge className="bg-green-100 text-green-800">$45,230</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                        <span className="font-medium">Redemption Rate</span>
                        <Badge className="bg-blue-100 text-blue-800">89%</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integration Options */}
              <div className="bg-accent/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">Seamless Integrations</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-white rounded-lg">
                    <Building2 className="w-10 h-10 text-highlight mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">POS Systems</h4>
                    <p className="text-sm text-muted-foreground">Direct integration with major POS platforms</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg">
                    <ShoppingBag className="w-10 h-10 text-highlight mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">E-commerce</h4>
                    <p className="text-sm text-muted-foreground">Online store and marketplace integration</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg">
                    <Smartphone className="w-10 h-10 text-highlight mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Mobile Apps</h4>
                    <p className="text-sm text-muted-foreground">Native mobile app integration</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg">
                    <Globe className="w-10 h-10 text-highlight mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">APIs</h4>
                    <p className="text-sm text-muted-foreground">Custom API integration options</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-12">
              {/* Business Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-12">
                  Transform Your Business
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="border-2 hover:border-highlight transition-colors">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          {benefit.icon}
                          <div>
                            <CardTitle className="text-xl">{benefit.title}</CardTitle>
                            <Badge variant="outline" className="mt-2 border-highlight text-highlight">
                              {benefit.stat}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Success Stories */}
              <div className="bg-accent/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">Success Stories</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {successStories.map((story, index) => (
                    <Card key={index} className="bg-white">
                      <CardHeader className="text-center">
                        <div className="flex justify-center mb-4 text-highlight">
                          {story.icon}
                        </div>
                        <CardTitle className="text-lg">{story.company}</CardTitle>
                        <CardDescription>{story.industry}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-2xl font-bold text-highlight mb-2">{story.result}</div>
                        <p className="text-sm text-muted-foreground">{story.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* ROI Calculator */}
              <div className="bg-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Calculate Your ROI</h3>
                <div className="max-w-2xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="text-center p-6 bg-white rounded-lg">
                      <div className="text-3xl font-bold text-highlight mb-2">15%</div>
                      <div className="text-sm text-muted-foreground">Average Revenue Increase</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg">
                      <div className="text-3xl font-bold text-highlight mb-2">6 months</div>
                      <div className="text-sm text-muted-foreground">Typical ROI Timeline</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button className="bg-highlight hover:bg-highlight/90 text-primary">
                      Get Custom ROI Analysis
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-12">
              {/* Pricing Plans */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-12">
                  Choose Your Plan
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <Card key={index} className={`relative ${plan.popular ? 'border-2 border-highlight' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-highlight text-primary">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <div className="flex items-baseline justify-center space-x-1">
                          <span className="text-3xl font-bold text-highlight">{plan.price}</span>
                          <span className="text-muted-foreground">{plan.period}</span>
                        </div>
                        <CardDescription>{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className={`w-full mt-6 ${plan.popular ? 'bg-highlight hover:bg-highlight/90 text-primary' : ''}`}
                          variant={plan.popular ? 'default' : 'outline'}
                        >
                          {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Additional Services */}
              <div className="bg-accent/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Additional Services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <Rocket className="w-8 h-8 text-highlight mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Program Launch Support</h4>
                      <p className="text-muted-foreground">
                        Dedicated support team to help launch your gift card program successfully
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Award className="w-8 h-8 text-highlight mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Custom Design Services</h4>
                      <p className="text-muted-foreground">
                        Professional design team to create stunning branded gift cards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">
            Ready to Launch Your Gift Card Program?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of businesses already growing with TCB gift card solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-primary font-semibold">
              Start Free Trial
              <Zap className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftCardsPage;