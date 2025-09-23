"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { CreditCard, Shield, Zap, DollarSign, Users, Settings, CheckCircle, Clock, Globe, ArrowRight, Star, TrendingUp, Lock, Code, Smartphone, Wallet, Target, HeartHandshake, FileText, PhoneCall, Calendar, Play } from 'lucide-react';

export default function CardIssuingService() {
  const [activeTab, setActiveTab] = useState("overview");

  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-highlight" />,
      title: "White-Label Card Programs",
      description: "Launch your own branded payment cards with complete customization options including design, features, and user experience."
    },
    {
      icon: <Shield className="w-8 h-8 text-highlight" />,
      title: "PCI DSS Compliance", 
      description: "Enterprise-grade security with full PCI DSS Level 1 compliance, tokenization, and advanced fraud prevention systems."
    },
    {
      icon: <Zap className="w-8 h-8 text-highlight" />,
      title: "Real-Time Processing",
      description: "Instant card issuance and activation with real-time transaction processing and settlement capabilities."
    },
    {
      icon: <Settings className="w-8 h-8 text-highlight" />,
      title: "Flexible Controls",
      description: "Advanced spending controls, transaction limits, merchant category restrictions, and geographical limitations."
    },
    {
      icon: <Globe className="w-8 h-8 text-highlight" />,
      title: "Global Acceptance",
      description: "Visa and Mastercard network compatibility with worldwide acceptance and multi-currency support."
    },
    {
      icon: <Code className="w-8 h-8 text-highlight" />,
      title: "API Integration",
      description: "Comprehensive RESTful APIs with SDK support for seamless integration into your existing systems."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-highlight text-primary px-4 py-2 text-sm font-semibold">
              Enterprise Card Issuing Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Launch Your Own Branded Payment Cards
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Comprehensive white-label card issuing platform with real-time processing, 
              advanced controls, and enterprise-grade security. Launch in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-highlight text-primary hover:bg-highlight/90 font-semibold">
                Start Your Program
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Complete Card Issuing Platform</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to launch and manage a successful card program
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Card Program?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust TCB for their card issuing needs. 
            Get started today with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-highlight text-primary hover:bg-highlight/90">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <PhoneCall className="mr-2 w-5 h-5" />
              Call Sales: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}