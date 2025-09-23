import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Shield, DollarSign, Users, ArrowRight, CheckCircle, Building2, CreditCard, TrendingUp, Clock, MapPin, Star, Phone, Mail } from "lucide-react"

export default function BusinessIBANsPage() {
  const features = [
    {
      icon: Globe,
      title: "SEPA and SWIFT Enabled",
      description: "Seamless international payments with full SEPA and SWIFT network access"
    },
    {
      icon: MapPin,
      title: "Local Settlement",
      description: "Accept payments in USD, EUR, and GBP with local settlement capabilities"
    },
    {
      icon: Shield,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees or surprise charges"
    },
    {
      icon: Clock,
      title: "24/7 Processing",
      description: "Round-the-clock transaction processing for global business operations"
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Expand Your Global Reach",
      description: "Access new markets and customers worldwide with seamless international payment acceptance",
      details: ["Accept payments from 200+ countries", "Multi-currency support", "Local payment methods"]
    },
    {
      icon: CreditCard,
      title: "Streamlined Cash Flow",
      description: "Optimize your working capital with faster settlement times and predictable payment processing",
      details: ["Same-day settlement options", "Automated reconciliation", "Real-time payment tracking"]
    },
    {
      icon: Building2,
      title: "Enterprise-Grade Security",
      description: "Bank-level security and compliance to protect your business and customer data",
      details: ["ISO 27001 certified", "PCI DSS compliant", "Advanced fraud protection"]
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Expert support team available to help you maximize your international payment capabilities",
      details: ["Dedicated account manager", "24/7 technical support", "Implementation assistance"]
    }
  ]

  const steps = [
    {
      step: "01",
      title: "Application & Setup",
      description: "Complete our streamlined application process and get your Business IBAN account configured within 48 hours"
    },
    {
      step: "02",
      title: "Integration & Testing",
      description: "Our technical team assists with API integration and thorough testing to ensure seamless payment processing"
    },
    {
      step: "03",
      title: "Go Live & Scale",
      description: "Launch your international payment capabilities and scale your business with confidence"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
                Business IBAN Accounts
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Your Business, Connected Worldwide
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Unlock global payment capabilities with our comprehensive Business IBAN solutions. 
                Accept international payments seamlessly while maintaining full control over your cash flow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="cta-primary">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="cta-light text-[#f7f7f7]">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Description */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Comprehensive Business IBAN Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our Business IBAN accounts provide your company with the infrastructure needed to accept 
                international payments efficiently and cost-effectively. With full SEPA and SWIFT connectivity, 
                you can process payments from customers worldwide while maintaining the highest standards of 
                security and compliance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're expanding into new markets or optimizing existing international payment processes, 
                our Business IBAN solutions offer the flexibility and reliability your business needs to thrive globally.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful Features for Global Business
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to accept international payments and grow your business worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose TCB Business IBANs?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the advantages that set our Business IBAN solutions apart
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                        <CardDescription className="text-base">{benefit.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#d4af37]" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get started with Business IBANs in three simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 transform translate-x-8 w-full">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Countries Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">48h</div>
                <div className="text-muted-foreground">Setup Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Go Global?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Join thousands of businesses already using TCB Business IBANs to expand their international reach
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="cta-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
                <Button size="lg" variant="outline" className="cta-light">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Star className="h-12 w-12 text-[#d4af37] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experience the TCB Difference
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our commitment to excellence and innovation makes us the preferred choice for businesses 
                seeking reliable international payment solutions.
              </p>
              <Button size="lg" className="cta-primary">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}