"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQs = [
  {
    question: "What types of trade finance instruments do you offer?",
    answer:
      "We offer a comprehensive range of trade finance instruments including Letters of Credit (LC), Bank Guarantees, Documentary Collections, Trade Loans, Supply Chain Finance, and Export Credit facilities. Each instrument is tailored to meet specific trade requirements and risk profiles.",
  },
  {
    question: "What documentation is required for trade finance applications?",
    answer:
      "Required documentation typically includes company registration certificates, financial statements (audited for the last 3 years), trade contracts, purchase orders, invoices, insurance certificates, and KYC documentation. Specific requirements may vary based on the instrument type and transaction complexity.",
  },
  {
    question: "How long does the trade finance approval process take?",
    answer:
      "Standard applications are processed within 5-7 business days for existing clients with established credit facilities. New client applications may take 10-15 business days including due diligence and compliance checks. Complex transactions may require additional time for structuring and approval.",
  },
  {
    question: "What are your typical fee structures for trade finance services?",
    answer:
      "Our fee structure includes arrangement fees (typically 0.5-2% of transaction value), commitment fees for unutilized facilities, and periodic charges based on instrument type. We also offer competitive pricing for high-volume clients and long-term partnerships. Contact us for detailed pricing based on your specific requirements.",
  },
  {
    question: "How do you manage risks in international trade transactions?",
    answer:
      "We employ comprehensive risk management including country risk assessment, counterparty due diligence, credit analysis, and insurance coverage. Our risk mitigation strategies include diversification, hedging instruments, and partnerships with export credit agencies and international insurers.",
  },
  {
    question: "Which international regulations and compliance standards do you follow?",
    answer:
      "We comply with international standards including ICC UCP 600 for Letters of Credit, SWIFT messaging standards, AML/CFT regulations, sanctions compliance (OFAC, UN, EU), and local regulatory requirements. Our compliance team ensures adherence to all applicable international trade finance regulations.",
  },
  {
    question: "What is the minimum transaction size for trade finance facilities?",
    answer:
      "We typically handle transactions starting from $100,000 for standard trade finance instruments. For specialized products or strategic partnerships, we may consider smaller transaction sizes. Our focus is on building long-term relationships rather than transaction volume alone.",
  },
  {
    question: "How do I set up a trade finance account and credit facility?",
    answer:
      "Account setup begins with an initial consultation to understand your trade finance needs, followed by submission of required documentation, credit assessment, and facility structuring. The process includes compliance verification, agreement execution, and operational setup. Our relationship managers guide you through each step.",
  },
  {
    question: "Do you provide trade finance solutions for emerging markets?",
    answer:
      "Yes, we specialize in emerging market trade finance with extensive experience in Africa, Asia, Latin America, and Eastern Europe. We understand the unique challenges and opportunities in these markets and offer tailored solutions including enhanced due diligence and risk mitigation strategies.",
  },
  {
    question: "What digital platforms and technologies do you use for trade finance?",
    answer:
      "We leverage cutting-edge digital platforms including electronic document processing, blockchain-based trade finance solutions, API integrations for real-time tracking, and secure digital communication channels. Our technology stack ensures efficiency, transparency, and reduced processing times while maintaining the highest security standards.",
  },
];

export function FrequentlyAskedQuestionsAccordion() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-20 md:grid-cols-2 md:px-8 md:py-40 bg-white">
      <h2 className="text-center text-4xl font-bold tracking-tight text-primary md:text-left md:text-6xl">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-accent">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
        <div className="pt-6 mt-6 border-t border-accent">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> For specific regulatory questions or complex compliance matters, please contact our compliance officers directly at compliance@company.com or through your dedicated relationship manager.
          </p>
        </div>
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="cursor-pointer py-6 bg-accent/20 hover:bg-accent/30 transition-colors duration-200 rounded-lg px-4 mb-2"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <Plus
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-primary transition-all duration-200",
              isOpen && "rotate-90 scale-0"
            )}
          />
          <Minus
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-primary transition-all duration-200",
              isOpen && "rotate-0 scale-100"
            )}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-primary leading-relaxed">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-muted-foreground mt-3"
              >
                <p className="text-body leading-relaxed">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};