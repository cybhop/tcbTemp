import React from "react";
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  CreditCard, 
  Building2, 
  Gift, 
  Wallet, 
  PiggyBank, 
  Bitcoin, 
  Receipt,
  ArrowRight,
  CheckCircle,
  UserCheck,
  FileText,
  Banknote
} from 'lucide-react'

export default function BankingSolutions() {
  const services = [
    {
      icon: Building2,
      title: "Business IBANs",
      description: "Streamline your international transactions with dedicated European business bank accounts and IBANs.",
      link: "/banking-solutions/business-ibans"
    },
    {
      icon: CreditCard,
      title: "Card Issuing",
      description: "White-label card issuing solutions for businesses looking to offer branded payment cards to their customers.",
      link: "/banking-solutions/card-issuing"
    },
    {
      icon: PiggyBank,
      title: "Prepaid Cards",
      description: "Flexible prepaid card solutions for expense management, employee benefits, and customer rewards.",
      link: "/banking-solutions/prepaid-cards"
    },
    {
      icon: Wallet,
      title: "Debit/Credit Cards",
      description: "Traditional banking cards with modern features, perfect for everyday business and personal use.",
      link: "/banking-solutions/debit-credit-cards"
    },
    {
      icon: Receipt,
      title: "Corporate Expense Cards",
      description: "Sophisticated expense management solutions with real-time tracking and automated reporting.",
      link: "/banking-solutions/corporate-expense-cards"
    },
    {
      icon: Bitcoin,
      title: "Crypto Cards",
      description: "Bridge the gap between digital assets and traditional payments with our cryptocurrency-enabled cards.",
      link: "/banking-solutions/crypto-cards"
    },
    {
      icon: Gift,
      title: "Gift Cards",
      description: "Custom gift card programs to boost customer loyalty and create new revenue streams for your business.",
      link: "/banking-solutions/gift-cards"
    }
  ]

  const steps = [
    {
      icon: UserCheck,
      title: "Initial Consultation",
      description: "We assess your business needs and recommend the most suitable banking solutions for your requirements."
    },
    {
      icon: FileText,
      title: "Documentation & Compliance",
      description: "Our team guides you through the necessary documentation and ensures full regulatory compliance."
    },
    {
      icon: CheckCircle,
      title: "Account Setup",
      description: "Quick and efficient account setup with dedicated support throughout the entire process."
    },
    {
      icon: Banknote,
      title: "Go Live",
      description: "Start using your new banking solutions immediately with ongoing support and account management."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-500">Banking Solutions</h1>
              <p className="text-xl leading-relaxed mb-8">
                Trade Credit Bancorp provides comprehensive banking solutions designed to meet the diverse needs of modern businesses. 
                From traditional banking services to innovative fintech solutions, we offer a complete suite of financial products 
                that enable businesses to operate efficiently in today's global marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Banking Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive financial solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-highlight group-hover:text-white transition-colors">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white">
                      <Link href={service.link}>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">Get Started with Ease</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our streamlined onboarding process ensures you can start using our banking solutions quickly and efficiently
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-highlight group-hover:text-white transition-colors">
                    <step.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <div className="text-sm font-medium text-highlight mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Banking Experience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of businesses that trust Trade Credit Bancorp for their banking needs. 
              Get started today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Start Your Application</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
  
    </div>
  )
}