"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Building2, Phone, Mail, MapPin, Shield, Award } from "lucide-react";
import { contactInfo } from "@/lib/contact-config";

export function FooterWithGrid() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="border-b border-white/20 pb-8 md:pb-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company Info Column */}
            <div className="md:col-span-1">
              <Logo className="justify-start mb-4" />
              <p className="mb-4 text-sm text-white/80">
                Leading provider of comprehensive trade finance and banking solutions, 
                serving businesses worldwide with innovative financial services and 
                regulatory compliance excellence.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full">
                  <Shield className="h-3 w-3 text-[#d4af37]" />
                  <span className="text-xs text-white">FDIC Insured</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full">
                  <Award className="h-3 w-3 text-[#d4af37]" />
                  <span className="text-xs text-white">ISO 27001</span>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className="md:col-span-1">
              <h3 className="mb-4 text-sm font-bold text-white">Services</h3>
              <ul className="space-y-2 text-sm">
                {SERVICES.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-[#d4af37] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="md:col-span-1">
              <h3 className="mb-4 text-sm font-bold text-white">Resources</h3>
              <ul className="space-y-2 text-sm">
                {RESOURCES.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-[#d4af37] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="md:col-span-1">
              <h3 className="mb-4 text-sm font-bold text-white">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Building2 className="h-4 w-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">New York HQ</p>
                    <p className="text-white/80">123 Financial District</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Cyprus Office</p>
                    <p className="text-white/80">45 Canary Wharf</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#d4af37]" />
                  <Link href={`tel:${contactInfo.phone}`} className="text-white/80 hover:text-[#d4af37] transition-colors">
                    {contactInfo.phone}
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#d4af37]" />
                  <Link href={`mailto:${contactInfo.email}`} className="text-white/80 hover:text-[#d4af37] transition-colors">
                    {contactInfo.email}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-sm text-white/80">
              <p>&copy; {new Date().getFullYear()} Trade & Commerce Bank. All Rights Reserved.</p>
              <p className="mt-1">Member FDIC. Equal Housing Lender. NMLS ID: 123456</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              {LEGAL_LINKS.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-white/80 hover:text-[#d4af37] transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-xs text-white/60">
              Banking services are subject to approval. Investment products are not FDIC insured, 
              not bank guaranteed, and may lose value. All loan applications are subject to credit approval. 
              Trade finance services are provided subject to applicable regulations and compliance requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const SERVICES = [
  { title: "Trade Finance", href: "/services/trade-finance" },
  { title: "Letters of Credit", href: "/services/letters-of-credit" },
  { title: "Documentary Collections", href: "/services/documentary-collections" },
  { title: "Supply Chain Finance", href: "/services/supply-chain-finance" },
  { title: "Export Finance", href: "/services/export-finance" },
  { title: "Import Finance", href: "/services/import-finance" },
  { title: "Foreign Exchange", href: "/services/foreign-exchange" },
  { title: "Treasury Services", href: "/services/treasury" },
  { title: "Commercial Banking", href: "/services/commercial-banking" },
  { title: "Cash Management", href: "/services/cash-management" },
];

const RESOURCES = [
  { title: "FAQ", href: "/resources/faq" },
  { title: "Trade Finance Glossary", href: "/resources/glossary" },
  { title: "Legal Information", href: "/legal" },
  { title: "Compliance Center", href: "/compliance" },
  { title: "Documentation", href: "/resources/documentation" },
  { title: "Forms & Applications", href: "/resources/forms" },
  { title: "Market Insights", href: "/resources/insights" },
  { title: "Regulatory Updates", href: "/resources/regulatory" },
];

const LEGAL_LINKS = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
  { title: "Cookie Policy", href: "/cookies" },
  { title: "AML/KYC Policy", href: "/aml-kyc" },
  { title: "Accessibility", href: "/accessibility" },
];

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-shrink-0 items-center space-x-2 text-2xl font-bold text-white",
        className
      )}
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-md bg-[#d4af37] text-sm antialiased">
        <div className="absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/[0.1] blur-xl" />
        <div className="relative z-20 text-lg font-bold text-primary">
          TCB
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white">Trade & Commerce Bank</span>
        <span className="text-xs text-white/80">Your Global Trade Partner</span>
      </div>
    </Link>
  );
};