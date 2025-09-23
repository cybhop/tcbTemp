"use client"

import { useState } from "react"
import { X, Cookie, Shield, FileText } from "lucide-react"

export default function GDPRCookieBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-lg border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Icon and Content */}
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-shrink-0 mt-1">
                <Cookie className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base text-primary-foreground leading-relaxed">
                  We use cookies to enhance your experience, analyze website traffic, and ensure compliance with regulatory requirements. By continuing to use our site, you consent to our use of cookies.
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                  <a 
                    href="/privacy-policy" 
                    className="text-primary-foreground hover:text-accent-foreground underline underline-offset-2 hover:no-underline transition-colors inline-flex items-center gap-1"
                    aria-label="Read our Privacy Policy"
                  >
                    <Shield className="h-3 w-3" aria-hidden="true" />
                    Privacy Policy
                  </a>
                  <a 
                    href="/cookie-policy" 
                    className="text-primary-foreground hover:text-accent-foreground underline underline-offset-2 hover:no-underline transition-colors inline-flex items-center gap-1"
                    aria-label="Read our Cookie Policy"
                  >
                    <FileText className="h-3 w-3" aria-hidden="true" />
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-shrink-0 lg:ml-6">
              <button
                onClick={() => setIsVisible(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-[#d4af37] hover:bg-[#c19c2f] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="Accept all cookies"
              >
                Accept All
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="px-4 py-2 text-sm font-medium text-primary-foreground bg-transparent border border-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="Manage cookie preferences"
              >
                Manage Preferences
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="px-4 py-2 text-sm font-medium text-accent-foreground bg-accent hover:bg-accent/90 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="Reject all cookies"
              >
                Reject All
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 lg:relative lg:top-0 lg:right-0 p-1 text-primary-foreground hover:text-accent-foreground rounded-full hover:bg-primary-foreground/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Close cookie banner"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}