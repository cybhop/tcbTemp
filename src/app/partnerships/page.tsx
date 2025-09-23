"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Handshake, 
  Building2, 
  Cpu, 
  Target, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  Globe, 
  TrendingUp, 
  Shield, 
  Zap, 
  Calendar,
  FileText,
  User,
  Building
} from "lucide-react";

export default function PartnershipsPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership inquiry submitted:", formData);
    // Handle form submission here
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-highlight" />,
      title: "Revenue Growth",
      description: "Unlock new revenue streams through our comprehensive trade finance solutions and competitive commission structures."
    },
    {
      icon: <Shield className="w-8 h-8 text-highlight" />,
      title: "Risk Mitigation",
      description: "Leverage our expertise in credit assessment and risk management to protect your business interests."
    },
    {
      icon: <Globe className="w-8 h-8 text-highlight" />,
      title: "Global Reach",
      description: "Access our extensive network of international partners and expand your market presence worldwide."
    },
    {
      icon: <Zap className="w-8 h-8 text-highlight" />,
      title: "Innovation Access",
      description: "Stay ahead with cutting-edge fintech solutions and advanced trade finance technologies."
    },
    {
      icon: <Users className="w-8 h-8 text-highlight" />,
      title: "Dedicated Support",
      description: "Receive comprehensive training, marketing support, and dedicated account management."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-highlight" />,
      title: "Proven Track Record",
      description: "Partner with a trusted leader in trade finance with over $2 billion in transactions processed."
    }
  ];

  const partnershipTypes = [
    {
      icon: <Building2 className="w-12 h-12 text-highlight" />,
      title: "Financial Institution Partners",
      description: "Banks, credit unions, and financial institutions looking to expand their trade finance offerings.",
      features: ["Co-branded solutions", "White-label platforms", "Risk sharing agreements", "Correspondent banking"],
      requirements: ["Licensed financial institution", "Minimum $50M in assets", "Regulatory compliance", "Trade finance experience"]
    },
    {
      icon: <Cpu className="w-12 h-12 text-highlight" />,
      title: "Technology Partners",
      description: "Fintech companies and software providers enhancing trade finance infrastructure.",
      features: ["API integration", "Platform connectivity", "Data analytics", "Process automation"],
      requirements: ["Proven technology stack", "Security certifications", "Scalable architecture", "Development expertise"]
    },
    {
      icon: <Target className="w-12 h-12 text-highlight" />,
      title: "Strategic Alliances",
      description: "Long-term partnerships with industry leaders for mutual growth and market expansion.",
      features: ["Joint ventures", "Market development", "Resource sharing", "Co-innovation"],
      requirements: ["Strategic alignment", "Market leadership", "Resource commitment", "Long-term vision"]
    },
    {
      icon: <Handshake className="w-12 h-12 text-highlight" />,
      title: "Channel Partners",
      description: "Referral partners and intermediaries connecting TCB with potential clients.",
      features: ["Referral commissions", "Marketing support", "Training programs", "Lead management"],
      requirements: ["Industry expertise", "Client network", "Sales capability", "Professional credentials"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Handshake className="w-16 h-16 text-highlight mr-4" />
              <h1 className="text-5xl font-bold text-white">Partnership Opportunities</h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Join forces with Trade Credit Bancorp to unlock new growth opportunities, expand your market reach, 
              and deliver exceptional trade finance solutions to your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-highlight hover:bg-highlight/90 text-primary px-8 py-4 text-lg">
                Explore Partnerships
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg" variant="outline">
                Schedule Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Why Partner with TCB?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of joining our global partnership network and how we can drive mutual success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 border-accent">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-primary">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Partnership Types</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership model that best aligns with your business objectives and capabilities.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-accent hover:border-highlight">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      {type.icon}
                      <CardTitle className="text-2xl font-semibold text-primary ml-4">{type.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {type.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-highlight mr-2" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {type.requirements.map((req, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-highlight text-primary">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Partnership Application Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined process ensures a thorough evaluation and smooth onboarding experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Initial Inquiry", description: "Submit your partnership application with company details and partnership interests." },
                { step: "2", title: "Evaluation", description: "Our team reviews your application and conducts initial due diligence." },
                { step: "3", title: "Discussion", description: "In-depth meetings to align on partnership structure and mutual benefits." },
                { step: "4", title: "Onboarding", description: "Formal agreement execution and comprehensive partner onboarding process." }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Start Your Partnership Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to explore partnership opportunities? Get in touch with our team to discuss how we can work together.
              </p>
            </div>
            
            <Card className="border-2 border-accent hover:border-highlight transition-colors duration-300">
              <CardHeader className="bg-gradient-to-r from-primary to-blue-900 text-white">
                <CardTitle className="text-2xl font-semibold text-center text-white">Partnership Inquiry Form</CardTitle>
                <CardDescription className="text-center text-gray-200">
                  Complete the form below and our partnership team will contact you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        <Building className="inline w-4 h-4 mr-2" />
                        Company Name *
                      </label>
                      <Input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        <User className="inline w-4 h-4 mr-2" />
                        Contact Name *
                      </label>
                      <Input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        <Mail className="inline w-4 h-4 mr-2" />
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        <Phone className="inline w-4 h-4 mr-2" />
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <Target className="inline w-4 h-4 mr-2" />
                      Partnership Type of Interest
                    </label>
                    <Input
                      type="text"
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      placeholder="e.g., Financial Institution, Technology Partner, etc."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <FileText className="inline w-4 h-4 mr-2" />
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your company, partnership interests, and how we can work together..."
                      rows={6}
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <Button type="submit" className="bg-highlight hover:bg-highlight/90 text-primary px-8 py-4 text-lg">
                      Submit Partnership Inquiry
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join our network of successful partners and unlock new opportunities in global trade finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-highlight hover:bg-highlight/90 text-primary px-8 py-4 text-lg">
                Download Partnership Guide
                <FileText className="ml-2 w-5 h-5" />
              </Button>
              <Button className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg" variant="outline">
                Schedule a Call
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}