"use client";

import { CheckCircle, Clock, FileText, MessageSquare, Phone, Mail, ArrowRight, Download, ExternalLink, User, Building2, CreditCard, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function SignupSuccess() {
  const timelineSteps = [
    {
      step: 1,
      title: "Application Submitted",
      description: "Your application has been received and is being reviewed",
      status: "completed",
      timeframe: "Today"
    },
    {
      step: 2,
      title: "Document Verification",
      description: "We'll review your submitted documents and may request additional information",
      status: "current",
      timeframe: "1-2 business days"
    },
    {
      step: 3,
      title: "Account Setup",
      description: "Your account will be activated and access credentials will be provided",
      status: "upcoming",
      timeframe: "3-5 business days"
    },
    {
      step: 4,
      title: "Welcome Call",
      description: "A dedicated relationship manager will contact you to complete onboarding",
      status: "upcoming",
      timeframe: "5-7 business days"
    }
  ];

  const requiredDocuments = [
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Business Registration",
      description: "Certificate of incorporation or business license",
      priority: "Required"
    },
    {
      icon: <User className="h-5 w-5" />,
      title: "Identity Verification",
      description: "Government-issued ID for all authorized signatories",
      priority: "Required"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Financial Statements",
      description: "Last 3 months of business bank statements",
      priority: "Required"
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Tax Documentation",
      description: "Business tax returns and VAT registration (if applicable)",
      priority: "Optional"
    }
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Complete walkthrough of our platform features",
      link: "/resources/getting-started",
      external: false
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers",
      link: "/docs/api",
      external: false
    },
    {
      title: "Compliance Center",
      description: "Regulatory information and compliance resources",
      link: "/compliance",
      external: false
    },
    {
      title: "Support Portal",
      description: "Help articles and troubleshooting guides",
      link: "https://support.tcb.com",
      external: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Welcome to TCB!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thank you for choosing TCB as your trusted banking partner. Your application has been successfully submitted and is now being processed.
          </p>
        </div>

        {/* Progress Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Your Onboarding Timeline
            </CardTitle>
            <CardDescription>
              Track your progress through our streamlined onboarding process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {timelineSteps.map((step, index) => (
                <div key={step.step} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step.status === 'completed' 
                        ? 'bg-green-100 text-green-700' 
                        : step.status === 'current'
                        ? 'bg-highlight text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {step.status === 'completed' ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        step.step
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-primary">{step.title}</h3>
                      <Badge variant={step.status === 'completed' ? 'default' : step.status === 'current' ? 'secondary' : 'outline'}>
                        {step.timeframe}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className="absolute left-4 mt-8 w-px h-6 bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Required Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Document Requirements
              </CardTitle>
              <CardDescription>
                Documents we may request during verification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <div className="text-primary mt-1">
                      {doc.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-primary">{doc.title}</h4>
                        <Badge variant={doc.priority === 'Required' ? 'destructive' : 'secondary'} className="text-xs">
                          {doc.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Support Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Need Help?
              </CardTitle>
              <CardDescription>
                Our support team is here to assist you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-primary">Phone Support</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-primary">Email Support</p>
                    <p className="text-sm text-muted-foreground">onboarding@tcb.com</p>
                    <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-primary">Live Chat</p>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resources Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Helpful Resources</CardTitle>
            <CardDescription>
              Get familiar with our platform while you wait
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {resources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-highlight transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium text-primary mb-1">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-4">
                    {resource.external ? (
                      <ExternalLink className="h-4 w-4" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="cta-primary">
            <Download className="h-5 w-5 mr-2" />
            Download Getting Started Guide
          </Button>
          <Button variant="outline" size="lg" className="cta-secondary">
            <Shield className="h-5 w-5 mr-2" />
            View Security Features
          </Button>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-primary mb-2">What's Next?</h3>
          <p className="text-muted-foreground">
            We'll send you email updates at each stage of the process. Keep an eye on your inbox, and don't hesitate to reach out if you have any questions.
          </p>
        </div>
      </div>
    </div>
  );
}