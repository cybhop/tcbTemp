"use client";

import { useState, useEffect } from 'react';
import { X, Settings, Check, Shield, BarChart3, Target, Info } from 'lucide-react';

interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: 0
  });

  useEffect(() => {
    // Check if user has already given consent
    const savedConsent = localStorage.getItem('tcb-cookie-consent');
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        setConsent(parsed);
      } catch (error) {
        setShowBanner(true);
      }
    }
  }, []);

  const saveConsent = (consentData: CookieConsent) => {
    const consentWithTimestamp = {
      ...consentData,
      timestamp: Date.now()
    };
    localStorage.setItem('tcb-cookie-consent', JSON.stringify(consentWithTimestamp));
    setConsent(consentWithTimestamp);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    });
  };

  const handleAcceptSelected = () => {
    saveConsent(consent);
  };

  const handleToggleConsent = (type: keyof Omit<CookieConsent, 'timestamp'>) => {
    if (type === 'essential') return; // Essential cookies can't be disabled
    setConsent(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieTypes = [
    {
      id: 'essential' as const,
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services.',
      icon: Shield,
      required: true
    },
    {
      id: 'analytics' as const,
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      icon: BarChart3,
      required: false
    },
    {
      id: 'marketing' as const,
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant advertisements and marketing content.',
      icon: Target,
      required: false
    }
  ];

  if (!showBanner && !showPreferences) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg animate-in slide-in-from-bottom-full duration-500">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Info className="h-5 w-5 text-[#1a1f36]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1f36] mb-2">
                      We use cookies to enhance your experience
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We use cookies and similar technologies to help personalise content, 
                      analyse our traffic, and improve your experience on our website. 
                      You can choose which cookies you accept by clicking "Manage Preferences" 
                      or accept all by clicking "Accept All".
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-4 py-2 border border-[#1a1f36] text-[#1a1f36] rounded-md hover:bg-[#1a1f36] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1a1f36] focus:ring-offset-2 flex items-center justify-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Manage Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-[#d4af37] text-white rounded-md hover:bg-[#b8941f] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 flex items-center justify-center gap-2"
                >
                  <Check className="h-4 w-4" />
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => setShowPreferences(false)}
            />
            
            <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#1a1f36]">
                  Cookie Preferences
                </h2>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a1f36] focus:ring-offset-2"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Manage your cookie preferences below. You can enable or disable different 
                    types of cookies except for essential cookies which are required for the 
                    website to function properly.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {cookieTypes.map(({ id, name, description, icon: Icon, required }) => (
                    <div 
                      key={id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <Icon className="h-5 w-5 text-[#1a1f36] mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-medium text-[#1a1f36] mb-1">
                              {name}
                              {required && (
                                <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  Required
                                </span>
                              )}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0 ml-4">
                          <button
                            onClick={() => handleToggleConsent(id)}
                            disabled={required}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a1f36] focus:ring-offset-2 ${
                              consent[id] 
                                ? 'bg-[#d4af37]' 
                                : 'bg-gray-200'
                            } ${required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                consent[id] ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAcceptSelected}
                    className="px-6 py-2 bg-[#d4af37] text-white rounded-md hover:bg-[#b8941f] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 flex items-center justify-center gap-2"
                  >
                    <Check className="h-4 w-4" />
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};