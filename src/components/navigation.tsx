"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { TCBLogo } from '@/components/ui/logo';
import AuthPopup from './AuthPopup/auth-popup';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle scroll for sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveMobileDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Cleanup any pending close timers on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const openDropdown = (dropdown: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown);
  };

  const tradeFinanceItems = [
    { name: 'Overview', href: '/trade-finance' },
    { name: 'Letters of Credit', href: '/trade-finance/letters-of-credit' },
    { name: 'Bank Guarantees', href: '/trade-finance/bank-guarantees' },
    { name: 'SBLC', href: '/trade-finance/sblcs' },
    { name: 'Proof of Funds', href: '/trade-finance/proof-of-funds' },
   // { name: 'Escrow Services', href: '/trade-finance/escrow-services' }
  ];

  const bankingSolutionsItems = [
    { name: 'Overview', href: '/banking-solutions' },
    { name: 'Business IBANs', href: '/banking-solutions/business-ibans' },
    { name: 'Card Issuing', href: '/banking-solutions/card-issuing' },
    { name: 'Crypto Cards', href: '/banking-solutions/crypto-cards' },
    { name: 'Debit/Credit Cards', href: '/banking-solutions/debit-credit-cards' },
    { name: 'Corporate Expense Cards', href: '/banking-solutions/corporate-expense-cards' },
    { name: 'Prepaid Cards', href: '/banking-solutions/prepaid-cards' },
    { name: 'Gift Cards', href: '/banking-solutions/gift-cards' }
  ];

  return (
    <>
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg shadow-black/5' : 'shadow-sm shadow-black/5'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group transition-all duration-200 hover:opacity-90"
            aria-label="Trade Credit Bancorp - Home"
          >
            <TCBLogo 
              width={220} 
              height={50} 
              variant="compact" 
              className="transition-all duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Trade Finance Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => openDropdown('trade-finance')}
              onMouseLeave={scheduleCloseDropdown}
            >
              <div className="flex items-center space-x-1 font-medium py-2">
                <Link
                  href="/trade-finance"
                  className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                  aria-label="Trade Finance overview"
                >
                  Trade Finance
                </Link>
                <button
                  className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                  onClick={(e) => { e.preventDefault(); toggleDropdown('trade-finance'); }}
                  aria-label="Toggle Trade Finance menu"
                  aria-expanded={activeDropdown === 'trade-finance'}
                  aria-haspopup="true"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'trade-finance' ? 'rotate-180' : ''
                  }`} />
                </button>
              </div>
              {activeDropdown === 'trade-finance' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => openDropdown('trade-finance')}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  {tradeFinanceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-150"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Banking Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => openDropdown('banking-solutions')}
              onMouseLeave={scheduleCloseDropdown}
            >
              <div className="flex items-center space-x-1 font-medium py-2">
                <Link
                  href="/banking-solutions"
                  className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                  aria-label="Banking Solutions overview"
                >
                  Banking Solutions
                </Link>
                <button
                  className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                  onClick={(e) => { e.preventDefault(); toggleDropdown('banking-solutions'); }}
                  aria-label="Toggle Banking Solutions menu"
                  aria-expanded={activeDropdown === 'banking-solutions'}
                  aria-haspopup="true"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'banking-solutions' ? 'rotate-180' : ''
                  }`} />
                </button>
              </div>
              {activeDropdown === 'banking-solutions' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => openDropdown('banking-solutions')}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  {bankingSolutionsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-150"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium py-2"
            >
              About
            </Link>

            {/* Contact */}
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium py-2"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 hover:shadow-md"
              >
                Login
              </Link>
              <Link
                href="/trade-finance/letters-of-credit"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-blue-900 bg-yellow-500 border-2 border-yellow-500 rounded-lg hover:bg-yellow-600 hover:border-yellow-600 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" 
             onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <TCBLogo 
              width={180} 
              height={40} 
              variant="compact" 
            />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="space-y-2 px-4">
              {/* Trade Finance Mobile Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('trade-finance')}
                  className="w-full flex items-center justify-between p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  aria-expanded={activeMobileDropdown === 'trade-finance'}
                >
                  <span className="font-medium">Trade Finance</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeMobileDropdown === 'trade-finance' ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeMobileDropdown === 'trade-finance' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {tradeFinanceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleMobileLinkClick}
                        className="block p-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-gray-50 rounded transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Banking Solutions Mobile Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('banking-solutions')}
                  className="w-full flex items-center justify-between p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  aria-expanded={activeMobileDropdown === 'banking-solutions'}
                >
                  <span className="font-medium">Banking Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeMobileDropdown === 'banking-solutions' ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeMobileDropdown === 'banking-solutions' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {bankingSolutionsItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleMobileLinkClick}
                        className="block p-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-gray-50 rounded transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About */}
              <Link
                href="/about"
                onClick={handleMobileLinkClick}
                className="block p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
              >
                About
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={handleMobileLinkClick}
                className="block p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Footer with CTA Buttons */}
          <div className="border-t border-gray-200 p-4 space-y-3">
            <Link
              href="/login"
              onClick={handleMobileLinkClick}
              className="block w-full text-center py-3 px-4 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium"
            >
              Login
            </Link>
            <Link
              href="/trade-finance/letters-of-credit"
              onClick={handleMobileLinkClick}
              className="block w-full text-center py-3 px-4 text-blue-900 bg-yellow-500 border-2 border-yellow-500 rounded-lg hover:bg-yellow-600 hover:border-yellow-600 transition-all duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
    <AuthPopup/>
    </>
  );
};