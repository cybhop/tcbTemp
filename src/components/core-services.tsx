"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, CreditCard, Banknote, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-2 border-[#e5e7eb] bg-white transition-all duration-300 hover:border-[#d4af37] hover:shadow-lg hover:shadow-[#d4af37]/10 hover:-translate-y-1 h-full">
      <CardHeader className="pb-4">
        <div className="w-12 h-12 rounded-lg bg-[#e5e7eb] flex items-center justify-center text-[#1a1f36] group-hover:bg-[#d4af37] group-hover:text-white transition-colors duration-300 mb-4">
          {icon}
        </div>
        <CardTitle className="text-lg font-semibold text-[#1a1f36] group-hover:text-[#1a1f36]/90 transition-colors duration-300 leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col justify-between h-full">
        <CardDescription className="text-[#6b7280] leading-relaxed mb-6">
          {description}
        </CardDescription>
        <Link href={link} className="learn-more mt-auto">
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </CardContent>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
};

export const CoreServices = () => {
  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Letters of Credit & Standby Letters of Credit (SBLC)",
      description: "Secure payment instruments that guarantee payment obligations in international trade, providing financial assurance to both buyers and sellers in commercial transactions.",
      link: "/trade-finance/letters-of-credit"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bank & Performance Guarantees",
      description: "Comprehensive guarantee solutions that ensure contract performance and financial obligations are met, protecting your business interests across various commercial arrangements.",
      link: "/trade-finance/bank-guarantees"
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Advance Payment Guarantees & Proof of Funds (POF)",
      description: "Financial instruments that protect advance payments and provide verified proof of available funds, enabling secure business transactions and contract negotiations.",
      link: "/trade-finance/proof-of-funds"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Corporate Expense Cards & Business IBANs",
      description: "Modern financial tools including corporate payment cards and international banking account numbers, streamlining business expenses and global banking operations.",
      link: "/banking-solutions/business-ibans"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a1f36] mb-4">
            Core Services
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            Comprehensive financial solutions designed to support your business growth and international trade operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};