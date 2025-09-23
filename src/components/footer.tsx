"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Send, ArrowRight, Building } from "lucide-react";
import { contactInfo } from "@/lib/contact-config";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Partnerships", href: "/partnerships" },
  ];

  const serviceLinks = [
    { label: "Trade Finance", href: "/trade-finance" },
    { label: "Banking Solutions", href: "/banking-solutions" },
    { label: "Letters of Credit", href: "/trade-finance/letters-of-credit" },
    { label: "Bank Guarantees", href: "/trade-finance/bank-guarantees" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "/faqs" },
    { label: "Submit Ticket", href: "/support" },
    { label: "Live Chat", href: "/support" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ];

  const socialLinks = [
    { icon: contactInfo.icons.linkedin, href: contactInfo.socialMedia.linkedin, label: "LinkedIn" },
    { icon: contactInfo.icons.twitter, href: contactInfo.socialMedia.twitter, label: "Twitter" },
    { icon: contactInfo.icons.facebook, href: contactInfo.socialMedia.facebook, label: "Facebook" },
  ];

  // Icon components from config (must be capitalized for JSX)
  const AddressIcon = contactInfo.icons.address;
  const PhoneIcon = contactInfo.icons.phone;
  const EmailIcon = contactInfo.icons.email;
  const HoursIcon = contactInfo.icons.hours;

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Stay Updated with Trade Credit News
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get the latest insights on trade finance, credit management, and market trends delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-highlight"
                required
              />
              <Button 
                type="submit" 
                className="bg-highlight hover:bg-highlight/90 text-primary font-semibold px-6 whitespace-nowrap"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-highlight mb-3">
                {contactInfo.company.name}
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Leading provider of trade credit solutions, helping businesses optimize their working capital and mitigate credit risk through innovative financial services.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-highlight hover:text-primary transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Company Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-highlight transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
                <ul className="space-y-3">
                  {serviceLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-highlight transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
                <ul className="space-y-3">
                  {supportLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-highlight transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
                <ul className="space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-highlight transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="border-white/10" />

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-sm">
          <div className="flex items-start space-x-3">
            <AddressIcon className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white/90 font-medium mb-1">Address</p>
              <p className="text-white/70 leading-relaxed">
                {contactInfo.address.street}<br />
                {contactInfo.address.city}<br />
                {contactInfo.address.postalCode}, {contactInfo.address.country}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <PhoneIcon className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white/90 font-medium mb-1">Phone</p>
              <Link 
                href={`tel:${contactInfo.phone}`}
                className="text-white/70 hover:text-highlight transition-colors"
              >
                {contactInfo.phone}
              </Link>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <EmailIcon className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white/90 font-medium mb-1">Email</p>
              <Link 
                href={`mailto:${contactInfo.email}`}
                className="text-white/70 hover:text-highlight transition-colors"
              >
                {contactInfo.email}
              </Link>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <HoursIcon className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white/90 font-medium mb-1">Hours</p>
              <p className="text-white/70">
                {contactInfo.businessHours.days}<br />
                {contactInfo.businessHours.hours}<br />
                ({contactInfo.businessHours.timezone})
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Building className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white/90 font-medium mb-1">Registration</p>
              <p className="text-white/70">
                Registered in the<br />
                Cyprus<br />
                No. {contactInfo.company.registrationNumber}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="border-white/10" />

      {/* Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} {contactInfo.company.name}. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Professional trade finance solutions since 2010
          </p>
        </div>
      </div>
    </footer>
  );
};