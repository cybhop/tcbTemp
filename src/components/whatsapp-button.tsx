"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { contactInfo } from "@/lib/contact-config";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = contactInfo.whatsapp,
  message = "Hello! I'm interested in Trade Credit Bancorp's financial services. Could you please provide more information?",
  className = ""
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const formatPhoneNumber = (phone: string): string => {
    // Remove all non-digit characters except +
    return phone.replace(/[^\d+]/g, '');
  };

  const encodeMessage = (msg: string): string => {
    return encodeURIComponent(msg);
  };

  const handleWhatsAppClick = (): void => {
    setIsClicked(true);
    
    // Format phone number properly for WhatsApp
    const formattedPhone = phoneNumber.replace(/[^\d]/g, '');
    const encodedMessage = encodeMessage(message);
    
    // WhatsApp Web URL format - this is the most reliable method
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    
    try {
      // For better compatibility, try to detect if it's a mobile device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        // On mobile, try to open WhatsApp app directly
        window.location.href = whatsappUrl;
      } else {
        // On desktop, open in new tab
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }
      
      // Track analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'click', {
          event_category: 'WhatsApp',
          event_label: 'Chat Button',
          value: 1
        });
      }
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      // Fallback: try to copy phone number to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText(phoneNumber);
        alert(`WhatsApp link failed to open. Phone number ${phoneNumber} copied to clipboard.`);
      }
    }
    
    // Reset loading state after a short delay
    setTimeout(() => {
      setIsClicked(false);
    }, 1500);
  };

  return (
    <div className={`fixed bottom-6 left-6 z-40 ${className}`}>
      <button
        onClick={handleWhatsAppClick}
        disabled={isClicked}
        className={`
          group relative
          w-14 h-14 md:w-16 md:h-16
          bg-[#25D366] hover:bg-[#20bd5a]
          rounded-full
          shadow-lg hover:shadow-xl
          transition-all duration-300 ease-out
          transform hover:scale-110 active:scale-95
          border-4 border-white
          focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50
          animate-pulse hover:animate-none
          ${isClicked ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}
        `}
        aria-label={`Contact ${contactInfo.company.name} via WhatsApp`}
        title={`Chat with ${contactInfo.company.name} on WhatsApp`}
      >
        {/* Icon container */}
        <div className="flex items-center justify-center w-full h-full">
          {isClicked ? (
            <div className="animate-spin">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
          ) : (
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-200" />
          )}
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        
        {/* Loading overlay */}
        {isClicked && (
          <div className="absolute inset-0 rounded-full bg-black bg-opacity-10 flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </button>
      
      {/* Tooltip - positioned above button */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with {contactInfo.company.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
      
      {/* Success feedback */}
      {isClicked && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded text-xs font-medium animate-bounce">
          Opening WhatsApp...
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;