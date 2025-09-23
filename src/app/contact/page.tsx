import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { contactInfo } from '@/lib/contact-config'
import { 
  MessageCircle, 
  HelpCircle, 
  FileText, 
  TrendingUp, 
  Shield, 
  Users, 
  DollarSign, 
  Building, 
  CreditCard,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Expert Financial Guidance | Trade Credit Bancorp',
  description: 'Get in touch with Trade Credit Bancorp for expert trade finance and business credit solutions. Contact our Cyprus office for personalized financial guidance.',
  keywords: 'contact trade credit bancorp, financial guidance, trade finance support, business credit consultation, cyprus office',
  openGraph: {
    title: 'Contact Us - Expert Financial Guidance | Trade Credit Bancorp',
    description: 'Get in touch with Trade Credit Bancorp for expert trade finance and business credit solutions. Contact our Cyprus office for personalized financial guidance.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Expert Financial Guidance | Trade Credit Bancorp',
    description: 'Get in touch with Trade Credit Bancorp for expert trade finance and business credit solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "£50M+", label: "Credit Facilitated" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Years Experience" }
  ]

  const services = [
    { icon: TrendingUp, title: "Trade Finance", description: "Letters of credit, trade loans, and export financing" },
    { icon: Shield, title: "Credit Insurance", description: "Protect your business from payment defaults" },
    { icon: Users, title: "Business Consulting", description: "Strategic financial planning and risk management" },
    { icon: DollarSign, title: "Working Capital", description: "Invoice financing and cash flow solutions" },
    { icon: Building, title: "Corporate Banking", description: "Comprehensive banking services for businesses" },
    { icon: CreditCard, title: "Payment Solutions", description: "Secure and efficient payment processing" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative h-125 flex items-center justify-center overflow-hidden ">
          <div className="absolute inset-0">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0215bb9d-6ceb-4f87-a974-198c28935b8c/generated_images/modern-financial-technology-interface-wi-1d7a22b0-20250713090738.jpg"
              alt="Contact Trade Credit Bancorp"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Get Expert Financial Guidance
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Connect with our experienced team for personalized trade finance solutions
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 bg-accent">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Office Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Building className="w-6 h-6" />
                    Cyprus Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <contactInfo.icons.address className="w-5 h-5 text-highlight mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary">Address</p>
                      <p className="text-muted">{contactInfo.address.street}<br />{contactInfo.address.city}, {contactInfo.address.postalCode}, {contactInfo.address.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <contactInfo.icons.phone className="w-5 h-5 text-highlight" />
                    <div>
                      <p className="font-medium text-primary">Phone</p>
                      <Link href={`tel:${contactInfo.phone}`} className="text-muted hover:text-primary transition-colors">
                        {contactInfo.phone}
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <contactInfo.icons.email className="w-5 h-5 text-highlight" />
                    <div>
                      <p className="font-medium text-primary">Email</p>
                      <Link href={`mailto:${contactInfo.email}`} className="text-muted hover:text-primary transition-colors">
                        {contactInfo.email}
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <contactInfo.icons.hours className="w-5 h-5 text-highlight" />
                    <div>
                      <p className="font-medium text-primary">Business Hours</p>
                      <p className="text-muted">{contactInfo.businessHours.full}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Methods */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Quick Contact</CardTitle>
                  <p className="text-muted">Choose your preferred way to reach us</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full justify-start gap-3 h-auto p-4 bg-green-600 hover:bg-green-700">
                    <Link href={`https://wa.me/${contactInfo.whatsapp.replace(/[^\d]/g, '')}?text=Hello! I'm interested in Trade Credit Bancorp's financial services. Could you please provide more information?`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      <div className="text-left">
                        <div className="font-medium">WhatsApp Support</div>
                        <div className="text-sm opacity-90">Instant messaging support</div>
                      </div>
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full justify-start gap-3 h-auto p-4 cta-outline">
                    <Link href="/faqs">
                      <HelpCircle className="w-5 h-5" />
                      <div className="text-left">
                        <div className="font-medium">Help Center</div>
                        <div className="text-sm text-muted">Browse FAQs and guides</div>
                      </div>
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full justify-start gap-3 h-auto p-4 cta-outline">
                    <Link href="/support">
                      <FileText className="w-5 h-5" />
                      <div className="text-left">
                        <div className="font-medium">Submit Ticket</div>
                        <div className="text-sm text-muted">Request detailed assistance</div>
                      </div>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Expertise Section */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Expertise</h2>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                Comprehensive financial solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <service.icon className="w-12 h-12 text-highlight mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                    <p className="text-muted">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4 bg-primary text-white">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Trade Credit Bancorp</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center gap-3">
                <BarChart3 className="w-8 h-8 text-highlight" />
                <div className="text-left">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-white/80">Success Rate</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <contactInfo.icons.hours className="w-8 h-8 text-highlight" />
                <div className="text-left">
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-white/80">Response Time</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-8 h-8 text-highlight" />
                <div className="text-left">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-white/80">Secure</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-accent">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted mb-8">
              Let us help you unlock your business potential with our tailored financial solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-primary">
                <Link href="/trade-finance">Explore Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="cta-outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}