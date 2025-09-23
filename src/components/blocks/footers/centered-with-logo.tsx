import { cn } from "@/lib/utils";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export function CenteredWithLogo() {
  const pages = [
    {
      title: "Banking Solutions",
      href: "/banking-solutions",
    },
    {
      title: "Trade Finance", 
      href: "/trade-finance",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Partnerships",
      href: "/partnerships",
    },
    {
      title: "Support Center",
      href: "/support",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const legalPages = [
    {
      title: "Terms of Service",
      href: "/terms-of-service",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Cookie Policy",
      href: "/cookie-policy",
    },
  ];

  return (
    <footer className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-[#1a1f36] dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-300 justify-between items-start md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-4 md:flex mb-8">
            <Logo />
          </div>

          <ul className="transition-colors flex sm:flex-row flex-col hover:text-text-neutral-200 text-neutral-300 list-none gap-4 mb-4">
            {pages.map((page, idx) => (
              <li key={"pages" + idx} className="list-none">
                <Link
                  className="transition-colors hover:text-[#d4af37] text-center block"
                  href={page.href}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="transition-colors flex sm:flex-row flex-col hover:text-text-neutral-200 text-neutral-300 list-none gap-4 mb-8">
            {legalPages.map((page, idx) => (
              <li key={"legal" + idx} className="list-none">
                <Link
                  className="transition-colors hover:text-[#d4af37] text-center block text-sm"
                  href={page.href}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>
        
        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-0">
            <p className="text-neutral-300 text-center sm:text-left">
              &copy; 2024 Trade Credit Bancorp. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <IconMail className="h-4 w-4" />
                <span>contact@tradecreditbancorp.com</span>
              </div>
              <div className="flex items-center gap-2">
                <IconPhone className="h-4 w-4" />
                <span>+1 (302) 635-4375</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Link href="#" className="text-neutral-400 hover:text-[#d4af37] transition-colors">
              <IconBrandTwitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-neutral-400 hover:text-[#d4af37] transition-colors">
              <IconBrandLinkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-neutral-400 hover:text-[#d4af37] transition-colors">
              <IconBrandFacebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#1a1f36",
          "--color": "rgba(255, 255, 255, 0.1)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.1)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "w-[calc(100%+var(--offset))] h-[var(--height)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-white px-2 py-1 relative z-20"
    >
      <div className="h-10 w-10 bg-[#d4af37] rounded-lg flex items-center justify-center">
        <img 
          src="https://v3.fal.media/files/koala/SQ7UnPu6w5E-rS6-lhapj_output.png" 
          alt="TCB Logo" 
          className="w-8 h-8 rounded-md object-contain"
        />
      </div>
      <span className="font-bold text-white text-lg">Trade Credit Bancorp</span>
    </Link>
  );
};