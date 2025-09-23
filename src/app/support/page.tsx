"use client";

import React, { useState } from 'react';
import { Search, Phone, Mail, MessageCircle, FileText, AlertCircle, ChevronDown, ChevronUp, User, CreditCard, Settings, TrendingUp } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const categories = [
  {
    id: 'account',
    title: 'Account Management', 
    icon: User,
    description: 'Manage your account settings, profile, and preferences',
    color: 'bg-blue-50 text-blue-700',
    articles: 24
  },
  {
    id: 'trade',
    title: 'Trade Finance',
    icon: TrendingUp,
    description: 'Letters of credit, guarantees, and trade documentation',
    color: 'bg-green-50 text-green-700',
    articles: 18
  },
  {
    id: 'technical',
    title: 'Technical Support',
    icon: Settings,
    description: 'Platform issues, integrations, and technical queries',
    color: 'bg-purple-50 text-purple-700',
    articles: 15
  },
  {
    id: 'billing',
    title: 'Billing & Payments',
    icon: CreditCard,
    description: 'Invoices, payment methods, and billing inquiries',
    color: 'bg-amber-50 text-amber-700',
    articles: 12
  }
];

const faqs = [
  {
    id: 1,
    question: 'How do I initiate a Letter of Credit?',
    answer: 'To initiate a Letter of Credit, log into your TCB portal, navigate to Trade Finance > Letters of Credit, and click "New Application". Complete the required fields including beneficiary details, amount, and terms. Our team will review within 24 hours.',
    category: 'trade'
  },
  {
    id: 2,
    question: 'What are your platform operating hours?',
    answer: 'Our platform is available 24/7. However, our support team operates Monday-Friday 8:00 AM - 8:00 PM EST. Emergency support is available outside these hours for critical issues.',
    category: 'technical'
  },
  {
    id: 3,
    question: 'How can I update my company information?',
    answer: 'Go to Account Settings > Company Profile. You can update most information directly. Some changes may require document verification and approval from our compliance team.',
    category: 'account'
  },
  {
    id: 4,
    question: 'When are fees charged for trade finance services?',
    answer: 'Fees are typically charged upon service execution. Setup fees are charged when instruments are issued, and maintenance fees are charged monthly. Detailed fee schedules are available in your service agreement.',
    category: 'billing'
  },
  {
    id: 5,
    question: 'What documents do I need for trade finance applications?',
    answer: 'Required documents typically include: commercial invoices, packing lists, transport documents, insurance certificates, and any specific documents mentioned in your trade terms. Our document checklist is available in the Knowledge Base.',
    category: 'trade'
  },
  {
    id: 6,
    question: 'How do I reset my password?',
    answer: 'Click "Forgot Password" on the login page, enter your email address, and follow the instructions in the reset email. For security, password reset links expire after 24 hours.',
    category: 'account'
  }
];

export default function SupportCenterPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (faqId: number) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Support Center</h1>
              <p className="text-xl text-gray-200 mb-8">
                Get the help you need with Trade Credit Bancorp. Find answers, resources, and expert support.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for help topics, guides, or FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-0 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-highlight"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How can we help you today?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <Badge variant="secondary">{category.articles} articles</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about our platform and services.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="mb-2"
              >
                All Categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="mb-2"
                >
                  {category.title}
                </Button>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              {filteredFaqs.map((faq) => (
                <Card key={faq.id} className="mb-4">
                  <CardHeader 
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg pr-4">{faq.question}</CardTitle>
                      {openFaq === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </div>
                  </CardHeader>
                  {openFaq === faq.id && (
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Phone Support</CardTitle>
                  <p className="text-gray-600">Speak with our experts</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="font-semibold text-primary">+44 7453 747965</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8AM-8PM EST</p>
                    <p className="text-sm text-green-600">Response: Immediate</p>
                  </div>
                  <Button className="w-full bg-highlight hover:bg-highlight/90 text-white">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Email Support</CardTitle>
                  <p className="text-gray-600">Send us your questions</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="font-semibold text-primary">support@tradecreditbancorp.com</p>
                    <p className="text-sm text-gray-500">24/7 Submission</p>
                    <p className="text-sm text-green-600">Response: &lt; 4 hours</p>
                  </div>
                  <Button className="w-full bg-highlight hover:bg-highlight/90 text-white">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">WhatsApp</CardTitle>
                  <p className="text-gray-600">Chat with us directly</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="font-semibold text-primary">+44 7453 747965</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8AM-8PM EST</p>
                    <p className="text-sm text-green-600">Response: &lt; 2 minutes</p>
                  </div>
                  <Button className="w-full bg-highlight hover:bg-highlight/90 text-white">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Support Ticket</CardTitle>
                  <p className="text-gray-600">Submit detailed requests</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="font-semibold text-primary">Create Ticket</p>
                    <p className="text-sm text-gray-500">24/7 Submission</p>
                    <p className="text-sm text-green-600">Response: &lt; 24 hours</p>
                  </div>
                  <Button className="w-full bg-highlight hover:bg-highlight/90 text-white">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-6">
            <Card className="max-w-4xl mx-auto border-red-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl text-red-800">Emergency Support</CardTitle>
                <p className="text-red-700">For urgent issues affecting your trade transactions</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">24/7 Emergency Hotline</h3>
                    <p className="text-xl font-bold text-red-600">+44 7453 747965</p>
                    <p className="text-sm text-red-500">Available 24/7 for critical issues</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Emergency Email</h3>
                    <p className="text-xl font-bold text-red-600">emergency@tradecreditbancorp.com</p>
                    <p className="text-sm text-red-500">Response within 1 hour</p>
                  </div>
                </div>
                <p className="text-sm text-red-600">
                  Emergency support is for critical system failures, security incidents, or time-sensitive trade finance issues that require immediate attention.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}