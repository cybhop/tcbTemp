"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Cookie, Settings, Shield, AlertTriangle, ExternalLink, Eye, Target, Zap } from 'lucide-react';

export default function CookiePolicy() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const cookieCategories = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      icon: Shield,
      color: 'bg-red-500',
      examples: ['Session management', 'Security authentication', 'Form data storage', 'Load balancing']
    },
    {
      id: 'performance',
      name: 'Performance Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      icon: Zap,
      color: 'bg-blue-500',
      examples: ['Google Analytics', 'Page load times', 'Error tracking', 'Usage statistics']
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      icon: Settings,
      color: 'bg-green-500',
      examples: ['Language preferences', 'Region settings', 'Accessibility features', 'Chat functionality']
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      icon: Target,
      color: 'bg-purple-500',
      examples: ['Advertising targeting', 'Social media pixels', 'Retargeting', 'Campaign tracking']
    }
  ];

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-are-cookies', title: 'What Are Cookies?' },
    { id: 'cookie-categories', title: 'Cookie Categories' },
    { id: 'third-party-cookies', title: 'Third-Party Cookies' },
    { id: 'managing-cookies', title: 'Managing Your Cookie Preferences' },
    { id: 'gdpr-compliance', title: 'GDPR Compliance' },
    { id: 'updates', title: 'Policy Updates' },
    { id: 'contact', title: 'Contact Information' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-[#1a1f36] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="h-8 w-8 text-[#d4af37]" />
            <h1 className="text-4xl font-bold">Cookie Policy</h1>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl">
            This Cookie Policy explains how Trade Credit Bancorp uses cookies and similar technologies to recognize you when you visit our website.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
            <span>Last Updated: December 2024</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Effective Date: December 2024</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left p-2 rounded-md hover:bg-gray-100 transition-colors text-sm"
                  >
                    {item.title}
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction */}
            <section id="introduction">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Introduction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Trade Credit Bancorp ("TCB", "we", "us", or "our") is committed to protecting your privacy and ensuring transparency about how we collect and use information. This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.
                  </p>
                  <p className="text-gray-700">
                    By using our website, you consent to the use of cookies in accordance with this policy. If you do not agree to our use of cookies, you should set your browser settings accordingly or not use our website.
                  </p>
                  <div className="bg-[#d4af37] bg-opacity-10 border border-[#d4af37] rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-[#d4af37] mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#1a1f36]">Important Notice</p>
                        <p className="text-sm text-gray-700">
                          As a financial services provider, TCB is subject to strict regulatory requirements regarding data protection and privacy. This policy ensures compliance with applicable laws including GDPR, CCPA, and financial services regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* What Are Cookies */}
            <section id="what-are-cookies">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What Are Cookies?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#1a1f36] mb-2">Session Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Temporary cookies that expire when you close your browser. They help maintain your session and remember your preferences during your visit.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#1a1f36] mb-2">Persistent Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Cookies that remain on your device for a set period or until you delete them. They remember your preferences across multiple visits.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Cookie Categories */}
            <section id="cookie-categories">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Cookie Categories</CardTitle>
                  <p className="text-gray-600">
                    We use different types of cookies for various purposes. Below are the categories of cookies we use:
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cookieCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <div
                          key={category.id}
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${category.color}`}>
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-[#1a1f36] mb-2">{category.name}</h4>
                              <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                              <div className="space-y-1">
                                <p className="text-xs font-medium text-gray-500">Examples:</p>
                                <div className="flex flex-wrap gap-1">
                                  {category.examples.map((example, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      {example}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Third-Party Cookies */}
            <section id="third-party-cookies">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Third-Party Cookies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    We also use cookies provided by trusted third parties to enhance our services and provide you with relevant content and advertisements.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-3 text-left font-semibold">Service Provider</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Purpose</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Cookie Type</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Google Analytics</td>
                          <td className="border border-gray-300 p-3">Website analytics and performance tracking</td>
                          <td className="border border-gray-300 p-3">Performance</td>
                          <td className="border border-gray-300 p-3">24 months</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Google Ads</td>
                          <td className="border border-gray-300 p-3">Advertising and remarketing</td>
                          <td className="border border-gray-300 p-3">Marketing</td>
                          <td className="border border-gray-300 p-3">90 days</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">LinkedIn Insight</td>
                          <td className="border border-gray-300 p-3">Professional network advertising</td>
                          <td className="border border-gray-300 p-3">Marketing</td>
                          <td className="border border-gray-300 p-3">180 days</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Hotjar</td>
                          <td className="border border-gray-300 p-3">User experience analysis</td>
                          <td className="border border-gray-300 p-3">Performance</td>
                          <td className="border border-gray-300 p-3">365 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <ExternalLink className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-blue-900">Third-Party Privacy Policies</p>
                        <p className="text-sm text-blue-800">
                          We recommend reviewing the privacy policies of our third-party partners to understand how they handle your data.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Managing Cookies */}
            <section id="managing-cookies">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Managing Your Cookie Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-[#d4af37] bg-opacity-10 border border-[#d4af37] rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="h-5 w-5 text-[#d4af37]" />
                      <h4 className="font-semibold text-[#1a1f36]">Cookie Consent Manager</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      You can manage your cookie preferences at any time using our cookie consent manager.
                    </p>
                    <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-white">
                      Open Cookie Settings
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-[#1a1f36]">Browser Settings</h4>
                    <p className="text-gray-700">
                      You can also control cookies through your browser settings. Here are instructions for popular browsers:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-semibold text-[#1a1f36] mb-2">Chrome</h5>
                        <p className="text-sm text-gray-600">
                          Settings → Privacy and Security → Cookies and other site data
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-semibold text-[#1a1f36] mb-2">Firefox</h5>
                        <p className="text-sm text-gray-600">
                          Options → Privacy & Security → Cookies and Site Data
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-semibold text-[#1a1f36] mb-2">Safari</h5>
                        <p className="text-sm text-gray-600">
                          Preferences → Privacy → Cookies and website data
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-semibold text-[#1a1f36] mb-2">Edge</h5>
                        <p className="text-sm text-gray-600">
                          Settings → Cookies and site permissions → Cookies and site data
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-900">Impact of Disabling Cookies</p>
                        <p className="text-sm text-yellow-800">
                          Disabling certain cookies may affect the functionality of our website and your user experience. Some features may not work properly without cookies.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* GDPR Compliance */}
            <section id="gdpr-compliance">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Shield className="h-6 w-6 text-[#d4af37]" />
                    GDPR Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    We are committed to compliance with the General Data Protection Regulation (GDPR) and other applicable privacy laws. Under GDPR, you have the following rights regarding cookies:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-[#1a1f36]">Right to Consent</h5>
                        <p className="text-sm text-gray-600">
                          You have the right to give or withdraw consent for non-essential cookies.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-[#1a1f36]">Right to Access</h5>
                        <p className="text-sm text-gray-600">
                          You can request information about the cookies we use and the data we collect.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-[#1a1f36]">Right to Deletion</h5>
                        <p className="text-sm text-gray-600">
                          You can request deletion of your personal data collected through cookies.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-[#1a1f36]">Right to Portability</h5>
                        <p className="text-sm text-gray-600">
                          You can request a copy of your personal data in a structured format.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-[#1a1f36] mb-2">Legal Basis for Processing</h5>
                    <p className="text-sm text-gray-600">
                      We process personal data through cookies based on: (1) Your consent for non-essential cookies, (2) Legitimate interest for essential website functionality, and (3) Legal obligations for compliance and security purposes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Updates */}
            <section id="updates">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Policy Updates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-900 mb-2">How We Notify You</h5>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Updates will be posted on this page with a new "Last Updated" date</li>
                      <li>• Material changes will be communicated via email to registered users</li>
                      <li>• We may display a notice on our website for significant policy changes</li>
                    </ul>
                  </div>
                  <p className="text-gray-700">
                    We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Contact */}
            <section id="contact">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    If you have any questions about this Cookie Policy or our privacy practices, please contact us:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-[#1a1f36] mb-3">General Inquiries</h5>
                      <div className="space-y-2 text-sm">
                        <p><strong>Email:</strong> privacy@tradecreditbancorp.com</p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>Address:</strong> 123 Financial District, New York, NY 10005</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-[#1a1f36] mb-3">Data Protection Officer</h5>
                      <div className="space-y-2 text-sm">
                        <p><strong>Email:</strong> dpo@tradecreditbancorp.com</p>
                        <p><strong>Phone:</strong> +1 (555) 123-4568</p>
                        <p><strong>Response Time:</strong> Within 30 days</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1a1f36] text-white rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Regulatory Information</h5>
                    <p className="text-sm text-gray-300">
                      Trade Credit Bancorp is regulated by the Federal Reserve Bank and is committed to maintaining the highest standards of data protection and privacy in accordance with applicable financial services regulations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}