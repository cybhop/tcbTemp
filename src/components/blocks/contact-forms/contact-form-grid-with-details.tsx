"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { useId } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import { contactInfo } from "@/lib/contact-config";

export function ContactFormGridWithDetails() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2">
        <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
          <div className="flex items-start justify-start">
            <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
              <contactInfo.icons.phone className="h-6 w-6 text-primary" />
            </FeatureIconContainer>
          </div>
          <h2 className="mt-9 text-left text-xl font-bold text-primary md:text-3xl lg:text-5xl">
            Connect with Our Trade Finance Experts
          </h2>
          <p className="mt-8 max-w-lg text-center text-base text-muted-foreground md:text-left">
            Get expert guidance on trade finance solutions, letters of credit, and international trade services. Our specialists are ready to help you navigate global commerce.
          </p>

          <div className="mt-10 space-y-6 w-full max-w-lg">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Headquarters</h3>
              <div className="flex items-start gap-3">
                <contactInfo.icons.address className="h-5 w-5 text-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground">{contactInfo.address.street}</p>
                  <p className="text-sm text-foreground">{contactInfo.address.city}, {contactInfo.address.postalCode}</p>
                  <p className="text-sm text-foreground">{contactInfo.address.country}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <contactInfo.icons.phone className="h-5 w-5 text-highlight flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone: {contactInfo.phone}</p>
                    <p className="text-sm text-muted-foreground">WhatsApp: {contactInfo.whatsapp}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <contactInfo.icons.email className="h-5 w-5 text-highlight mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email: {contactInfo.email}</p>
                    <p className="text-sm text-muted-foreground">Response time: 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <contactInfo.icons.hours className="h-5 w-5 text-highlight mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">{contactInfo.businessHours.full}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32">
            <Pin className="top-0 right-1" />
            <Image
              src="/world.svg"
              width={500}
              height={500}
              alt="world map"
              className="[transform:rotateX(45deg)_translateZ(0px)]"
            />
          </div>
        </div>
        
        <div className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-accent to-accent/80 p-4 sm:p-10">
          <Grid size={20} />
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-primary"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="Your Company Ltd."
              className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary focus:outline-none active:outline-none"
            />
          </div>
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-primary"
              htmlFor="contactPerson"
            >
              Contact Person
            </label>
            <input
              id="contactPerson"
              type="text"
              placeholder="John Smith"
              className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary focus:outline-none active:outline-none"
            />
          </div>
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-primary"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@company.com"
              className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary focus:outline-none active:outline-none"
            />
          </div>
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-primary"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary focus:outline-none active:outline-none"
            />
          </div>
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-primary"
              htmlFor="country"
            >
              Country
            </label>
            <input
              id="country"
              type="text"
              placeholder="United States"
              className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary focus:outline-none active:outline-none"
            />
          </div>
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-primary"
              htmlFor="serviceInterest"
            >
              Service Interest
            </label>
            <div className="relative">
              <select
                id="serviceInterest"
                className="shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 pr-10 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary focus:outline-none active:outline-none appearance-none"
              >
                <option value="">Select a service</option>
                <option value="letters-of-credit">Letters of Credit</option>
                <option value="trade-financing">Trade Financing</option>
                <option value="documentary-collections">Documentary Collections</option>
                <option value="bank-guarantees">Bank Guarantees</option>
                <option value="export-financing">Export Financing</option>
                <option value="import-financing">Import Financing</option>
                <option value="supply-chain-financing">Supply Chain Financing</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <div className="relative z-20 mb-4 w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-primary"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your trade finance requirements..."
              className="shadow-input w-full rounded-md border border-transparent bg-white pt-4 pl-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary focus:outline-none active:outline-none"
            />
          </div>
          
          <div className="relative z-20 mb-4 w-full space-y-3">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-accent text-highlight focus:ring-primary"
              />
              <span className="text-sm text-muted-foreground">
                I consent to processing of my personal data in accordance with KYC/AML regulations and privacy policy. Required for regulatory compliance.
              </span>
            </label>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-accent text-highlight focus:ring-primary"
              />
              <span className="text-sm text-muted-foreground">
                Subscribe to our newsletter for trade finance insights and regulatory updates.
              </span>
            </label>
          </div>

          <button className="relative z-10 flex items-center justify-center rounded-md border border-transparent bg-highlight px-6 py-3 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200 hover:bg-highlight/90 md:text-sm">
            Submit Request
          </button>
          
          <p className="relative z-20 text-xs text-muted-foreground mt-2">
            * All communications are subject to KYC/AML verification procedures. Response time: 24-48 hours during business days.
          </p>
        </div>
      </div>
    </div>
  );
}

const Pin = ({ className }: { className?: string }) => {
  return (
    <motion.div
      style={{ transform: "translateZ(1px)" }}
      className={cn(
        "pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500",
        className
      )}
    >
      <div className="h-full w-full">
        <div className="absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg bg-neutral-200 px-2 py-1 text-xs font-normal text-neutral-700 dark:bg-neutral-800 dark:text-white">
          We are here
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-500"></span>
        </div>

        <div
          style={{
            perspective: "800px",
            transform: "rotateX(70deg) translateZ(0px)",
          }}
          className="absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 0 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 4 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-blue-500 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-blue-500" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-blue-600 blur-[3px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-blue-300" />
        </>
      </div>
    </motion.div>
  );
};

export const FeatureIconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-14 w-14 rounded-md bg-gradient-to-b from-gray-50 to-neutral-200 p-[4px] dark:from-neutral-800 dark:to-neutral-950",
        className
      )}
    >
      <div
        className={cn(
          "relative z-20 h-full w-full rounded-[5px] bg-gray-50 dark:bg-neutral-800",
          className
        )}
      >
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-600 to-transparent dark:h-[8px] dark:blur-sm"></div>
    </div>
  );
};

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 opacity-10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-black/100 stroke-black/100 mix-blend-overlay dark:fill-white/100 dark:stroke-white/100"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, idx: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${idx}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}