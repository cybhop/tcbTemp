"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Settings, Shield, TrendingUp } from "lucide-react";

interface ValuePillar {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const valuePillars: ValuePillar[] = [
  {
    icon: Globe,
    title: "Global Reach, Local Understanding",
    description: "TCB operates worldwide, offering services designed for global trade—but what sets them apart is their deep understanding of local markets. They don't just provide generic solutions; they tailor their approach to fit regional business practices, ensuring their clients get the best of both worlds: international expertise with local relevance."
  },
  {
    icon: Settings,
    title: "Financial Solutions Built for You",
    description: "Every business has unique needs, and TCB gets that. Instead of a one-size-fits-all approach, they customise financial tools like Letters of Credit, Standby Letters of Credit, and Bank Guarantees to match the unique demands of importers, exporters, and contractors. The goal? Flexible, secure, and perfectly aligned support for your trade operations."
  },
  {
    icon: Shield,
    title: "Security & Compliance You Can Trust",
    description: "In international trade, cutting corners is not an option. TCB takes security and compliance seriously, using strong risk management practices and adhering to global banking standards. Clients trust them because they prioritise safety and reliability at every step."
  },
  {
    icon: TrendingUp,
    title: "Deep Trade Finance Expertise",
    description: "Navigating international trade can be complex—but TCB's team makes it easier. With years of experience in banking, global commerce, and financial structuring, they don't just follow industry trends; they help shape smarter trade strategies for their clients."
  }
];

export const WhyTCBSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">Why TCB?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePillars.map((pillar, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-accent hover:border-[#d4af37] cursor-pointer"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:bg-[#d4af37] transition-colors duration-300">
                  <pillar.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg font-semibold text-primary group-hover:text-[#d4af37] transition-colors duration-300">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};