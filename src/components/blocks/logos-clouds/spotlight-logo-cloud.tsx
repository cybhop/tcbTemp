"use client";
import React from "react";
import { Building2, CheckCircle, Globe, ShieldCheck, Users, Award, Scale, FileText } from "lucide-react";

export function SpotlightLogoCloud() {
  const partnershipLogos = [
    {
      name: "SWIFT Network",
      icon: Globe,
      category: "International Banking",
    },
    {
      name: "ICC Banking",
      icon: Building2,
      category: "Trade Finance",
    },
    {
      name: "AML Compliance",
      icon: ShieldCheck,
      category: "Regulatory",
    },
    {
      name: "KYC Certified",
      icon: CheckCircle,
      category: "Regulatory",
    },
    {
      name: "BAFT Member",
      icon: Users,
      category: "Industry Association",
    },
    {
      name: "ISO 27001",
      icon: Award,
      category: "Security Standard",
    },
    {
      name: "Basel III",
      icon: Scale,
      category: "Regulatory Framework",
    },
    {
      name: "Trade Finance",
      icon: FileText,
      category: "Regional Trade",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden py-40 bg-white">
      <AmbientColor />
      <h2 className="text-[#1a1f36] pb-4 text-center font-[var(--font-inter)] text-2xl font-bold md:text-5xl">
        Trusted Partnerships & Regulatory Compliance
      </h2>
      <p className="text-[#737373] mb-10 mt-4 text-center font-[var(--font-inter)] text-base max-w-2xl mx-auto">
        TCB's commitment to regulatory excellence and global network strength through strategic partnerships with leading international banks, regulatory bodies, and industry associations.
      </p>
      <div className="relative mx-auto grid w-full max-w-4xl grid-cols-4 gap-10">
        {partnershipLogos.map((partner, idx) => (
          <div
            key={partner.name + idx + "partner-spotlight"}
            className="flex flex-col items-center justify-center p-6 rounded-lg bg-white border border-[#e5e7eb] hover:shadow-lg transition-shadow duration-200"
          >
            <div className="mb-3 p-3 rounded-full bg-[#e5e7eb]">
              <partner.icon className="w-8 h-8 text-[#1a1f36]" />
            </div>
            <h3 className="text-[#1a1f36] font-[var(--font-inter)] font-semibold text-sm text-center mb-1">
              {partner.name}
            </h3>
            <p className="text-[#737373] font-[var(--font-inter)] text-xs text-center">
              {partner.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const AmbientColor = () => {
  return (
    <div className="pointer-events-none absolute left-40 top-0 z-40 h-screen w-screen">
      <div
        style={{
          transform: "translateY(-350px) rotate(-45deg)",
          width: "560px",
          height: "1380px",
          background:
            "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(26, 55%, 28%, .2) 0, hsla(26, 55%, 28%, .1) 50%, hsla(26, 55%, 28%, .05) 80%)",
          filter: "blur(20px)",
          borderRadius: "50%",
        }}
        className="absolute left-0 top-0"
      />

      <div
        style={{
          transform: "rotate(-45deg) translate(5%, -50%)",
          transformOrigin: "top left",
          width: "240px",
          height: "1380px",
          background:
            "radial-gradient(50% 50% at 50% 50%, hsla(26, 55%, 28%, .15) 0, hsla(26, 55%, 28%, .1) 80%, transparent 100%)",
          filter: "blur(20px)",
          borderRadius: "50%",
        }}
        className="absolute left-0 top-0"
      />

      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          transform: "rotate(-45deg) translate(-180%, -70%)",
          transformOrigin: "top left",
          top: 0,
          left: 0,
          width: "240px",
          height: "1380px",
          background:
            "radial-gradient(50% 50% at 50% 50%, hsla(26, 55%, 28%, .1) 0, hsla(26, 55%, 28%, .05) 80%, transparent 100%)",
          filter: "blur(20px)",
        }}
        className="absolute left-0 top-0"
      />
    </div>
  );
};