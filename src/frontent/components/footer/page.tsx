import { Button, Input} from "../../styled"
import { Link } from "react-router-dom";
import { 
  Building,
  Clock,
  Mail,
  Send,
  PhoneIcon,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

const Footer = () => {

    // Footer
      // const companyLinks = [
      //   { label: "About", to: "/#" },
      //   { label: "Careers", to: "/#" },
      //   { label: "Contact", to: "/#" },
      //   { label: "Partnerships", to: "/#" },
      // ];
    
      // const serviceLinks = [
      //   { label: "Trade Finance", to: "/#" },
      //   { label: "Banking Solutions", to: "/#" },
      //   { label: "Letters of Credit", to: "/#" },
      //   { label: "Bank Guarantees", to: "/#" },
      // ];
    
      // const supportLinks = [
      //   { label: "Help Center", to: "/#" },
      //   { label: "Submit Ticket", to: "/#" },
      //   // { label: "Live Chat", to: "/#" },
      // ];
    
      // const legalLinks = [
      //   { label: "Privacy Policy", to: "/#" },
      //   { label: "Terms of Service", to: "/#" },
      //   { label: "Cookie Policy", to: "/#" },
      // ];
    
      const socialLinks = [
        { icon: Linkedin, to: "/#", label: "LinkedIn" },
        { icon: Twitter, to: "/#", label: "Twitter" },
        { icon: Facebook, to: "/#", label: "Facebook" },
      ];


  return (
    <>
     <footer className="bg-primary text-white">
          {/* Newsletter Section */}
          <div className="border-b border-white/10">
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Stay Updated with Trade Credit News
                </h3>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Get the latest insights on trade finance, credit management, and market trends delivered to your inbox.
                </p>
                <form  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-highlight"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="flex items-center justify-center rounded bg-highlight hover:bg-highlight/90 text-primary font-semibold px-6 py-2 whitespace-nowrap"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
    
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-5">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-highlight mb-3">
                    Trade Credit Bancorp
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Leading provider of trade credit solutions, helping businesses optimize their working capital and mitigate credit risk through innovative financial services.
                  </p>
                </div>
                
                {/* Social Media */}
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, to, label }) => (
                    <Link
                      key={label}
                      to={to}
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-highlight hover:text-primary transition-all duration-300 group"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
    
              {/* Footer Links */}
              {/* <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
                    <ul className="space-y-3">
                      {companyLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            to={link.to}
                            className="text-white/70 hover:text-highlight transition-colors duration-200 text-sm"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
    
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
                    <ul className="space-y-3">
                      {serviceLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            to={link.to}
                            className="text-white/70 hover:text-highlight transition-colors duration-200 text-sm"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
    
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
                    <ul className="space-y-3">
                      {supportLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            to={link.to}
                            className="text-white/70 hover:text-highlight transition-colors duration-200 text-sm"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
    
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
                    <ul className="space-y-3">
                      {legalLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            to={link.to}
                            className="text-white/70 hover:text-highlight transition-colors duration-200 text-sm"
                          >
                            {link.label}
                          </Link  >
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
    
          <hr className="border-white/10" />
    
          {/* Contact Information */}
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium mb-1">Address</p>
                  <p className="text-white/70 leading-relaxed">
                    Anexartisias 188<br />
                    Limassol<br />
                    4000, Cyprus
                  </p>
                </div>
              </div>
    
              <div className="flex items-start space-x-3">
                <PhoneIcon className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium mb-1">Phone</p>
                  <a href="tel:+447453747965" 
                    className="text-white/70 hover:text-highlight transition-colors"
                  >
                    +44 7453 747965
                  </a>
                </div>
              </div>
    
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium mb-1">Email</p>
                  <a 
                    href="mailto:support@tradecreditbancorp.com"
                    className="text-white/70 hover:text-highlight transition-colors"
                  >
                    support@tradecreditbancorp.com 
                  </a>
                </div>
              </div>
    
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium mb-1">Hours</p>
                  <p className="text-white/70">
                    Monday - Friday<br />
                    08:00-18:00<br />
                    (GMT/UTC+0)
                  </p>
                </div>
              </div>
    
              <div className="flex items-start space-x-3">
                <Building className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium mb-1">Registration</p>
                  <p className="text-white/70">
                    Registered in the<br />
                    Cyprus<br />
                    No. HE10234567
                  </p>
                </div>
              </div>
            </div>
          </div>
    
          <hr className="border-white/10" />
    
          {/* Copyright */}
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-white/60 text-sm">
                ©2025 Trade Credit Bancorp. All rights reserved.
              </p>
              <p className="text-white/60 text-sm">
                Professional trade finance solutions since 2010
              </p>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer