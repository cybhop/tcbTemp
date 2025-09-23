import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, Globe, Users, CheckCircle, Award, FileText, Lock, Handshake, DollarSign, Building, Zap } from "lucide-react";

export default function TradeFinanceServices() {
  const services = [
    {
      title: "Letters of Credit",
      description: "Secure payment instruments that guarantee payment to sellers upon presentation of compliant documents, eliminating payment risk in international trade transactions.",
      icon: FileText,
      features: ["Import/Export LCs", "Standby Letters of Credit", "Confirmed LCs", "Revolving Credit Facilities"]
    },
    {
      title: "Standby Letters of Credit (SBLCs)",
      description: "Financial guarantees providing backup payment assurance, commonly used for performance bonds, payment guarantees, and contract security.",
      icon: Shield,
      features: ["Performance SBLCs", "Payment Guarantees", "Contract Security", "Bid Bonds"]
    },
    {
      title: "Bank Guarantees",
      description: "Irrevocable commitments by banks to pay specified amounts if clients fail to meet contractual obligations, providing security for business transactions.",
      icon: Award,
      features: ["Performance Guarantees", "Payment Guarantees", "Bid Guarantees", "Advance Payment Guarantees"]
    },
    {
      title: "Proof of Funds",
      description: "Official documentation verifying the availability of funds for large transactions, investments, or business ventures, providing credibility and trust.",
      icon: DollarSign,
      features: ["Asset Verification", "Bank Statements", "Investment Documentation", "Liquidity Confirmation"]
    },
    {
      title: "Escrow Services",
      description: "Neutral third-party services that hold funds or documents until all transaction conditions are met, ensuring security for all parties involved.",
      icon: Lock,
      features: ["Transaction Security", "Document Custody", "Milestone Payments", "Dispute Resolution"]
    }
  ]

  const benefits = [
    {
      title: "Risk Mitigation",
      description: "Comprehensive protection against payment defaults, performance failures, and counterparty risks in international trade.",
      icon: Shield,
      stats: "99.8% Success Rate"
    },
    {
      title: "Trust Building",
      description: "Establish credibility and confidence with trading partners through internationally recognized financial instruments.",
      icon: Handshake,
      stats: "150+ Countries"
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure adherence to international trade regulations, AML requirements, and banking standards across jurisdictions.",
      icon: CheckCircle,
      stats: "100% Compliant"
    },
    {
      title: "Global Reach",
      description: "Access to extensive network of correspondent banks and financial institutions worldwide for seamless transactions.",
      icon: Globe,
      stats: "500+ Bank Partners"
    }
  ]

  const stats = [
    { value: "$2.5B+", label: "Trade Volume Facilitated" },
    { value: "1,200+", label: "Successful Transactions" },
    { value: "45+", label: "Countries Served" },
    { value: "15+ Years", label: "Industry Experience" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                    Trade Finance Solutions
                  </Badge>
                  <h1 className="text-display font-bold leading-tight text-yellow-500">
                    Empowering Global Trade with Trusted Financial Instruments
                  </h1>
                  <p className="text-xl text-white/90 leading-relaxed">
                    Trade Credit Bancorp provides comprehensive trade finance services designed to facilitate international commerce, 
                    mitigate risks, and build trust between trading partners worldwide. Our expert team delivers tailored solutions 
                    that meet the unique needs of businesses engaged in global trade.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                    Get Started Today
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Comprehensive Trade Finance Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our suite of trade finance instruments provides the security, credibility, and peace of mind 
                necessary for successful international business transactions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Trade Credit Bancorp
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our trade finance solutions deliver measurable value through enhanced security, 
                regulatory compliance, and global accessibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <Badge variant="outline" className="mx-auto mt-2 border-primary/20 text-primary">
                      {benefit.stats}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Building className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">Bank Grade Security</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Institutional-level security protocols and compliance standards
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">Rapid Processing</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Streamlined processes for faster transaction completion
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">Expert Support</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dedicated specialists with deep trade finance expertise
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  Ready to Secure Your International Trade?
                </h2>
                <p className="text-xl text-white/90">
                  Contact our trade finance specialists today to discuss your requirements and discover 
                  how our solutions can protect and enhance your global business transactions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Get Quote Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="text-sm">Same-Day Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="text-sm">Competitive Rates</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
     
    </div>
  )
}