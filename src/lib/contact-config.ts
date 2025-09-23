import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

// Exported contact configuration used across the app (Footer, WhatsApp button, etc.)
export const contactInfo = {
  company: {
    name: "Trade Credit Bancorp",
    registrationNumber: "HE10234567",
  },
  address: {
    street: "Anexartisias 188",
    city: "Limassol", 
    postalCode: "3041",
    country: "Cyprus",
  },
  phone: "+44 7453 747965",
  email: "support@tradecreditbancorp.com",
  // WhatsApp number should be digits only with country code
  whatsapp: "447453747965",
  businessHours: {
    days: "Monday – Friday",
    hours: "08:00 – 18:00",
    timezone: "GMT/UTC+0",
  },
  socialMedia: {
    linkedin: "https://www.linkedin.com/company/tradecreditbancorp",
    twitter: "https://x.com/tradecreditbancorp",
    facebook: "https://www.facebook.com/tradecreditbancorp",
  },
  icons: {
    linkedin: Linkedin,
    twitter: Twitter,
    facebook: Facebook,
    address: MapPin,
    phone: Phone,
    email: Mail,
    hours: Clock,
  },
} as const;