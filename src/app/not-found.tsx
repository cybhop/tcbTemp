import { Metadata, Viewport } from 'next'
import { generatePageMetadata, generateViewport } from '@/lib/metadata'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ChevronRight, Home, Search, Phone, Mail, MapPin, Building, CreditCard, TrendingUp, Shield, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: 'Page Not Found',
  description: "The page you're looking for doesn't exist. Explore our banking and trade finance solutions.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Page Not Found | Trade Credit Bancorp',
    description: "The page you're looking for doesn't exist. Explore our banking and trade finance solutions.",
  },
  twitter: {
    title: 'Page Not Found | Trade Credit Bancorp',
    description: "The page you're looking for doesn't exist. Explore our banking and trade finance solutions.",
  },
})

export const viewport: Viewport = generateViewport()

export default function NotFound() {
  const mainServices = [
    {
      title: 'Banking Solutions',
      description: 'Comprehensive banking services for businesses',
      href: '/banking-solutions',
      icon: Building,
    },
    {
      title: 'Trade Finance',
      description: 'Letters of credit and trade financing',
      href: '/trade-finance',
      icon: Globe,
    },
    {
      title: 'Credit Services',
      description: 'Business credit and loan solutions',
      href: '/credit-services',
      icon: CreditCard,
    },
    {
      title: 'Investment Banking',
      description: 'Capital markets and advisory services',
      href: '/investment-banking',
      icon: TrendingUp,
    },
    {
      title: 'Risk Management',
      description: 'Treasury and risk solutions',
      href: '/risk-management',
      icon: Shield,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-accent">
        <div className="container py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>404 - Page Not Found</span>
          </nav>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-3xl font-semibold text-primary mb-6">
                Page Not Found
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're sorry, but the page you're looking for doesn't exist. 
                It may have been moved, deleted, or you might have typed the URL incorrectly.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search our services..."
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button asChild className="bg-highlight hover:bg-highlight/90 text-primary px-8 py-3">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Return Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-3">
                <Link href="/contact">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>

          {/* Main Services Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
              Explore Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-highlight" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-2">
                          {service.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        <Button asChild variant="ghost" className="p-0 h-auto font-medium text-highlight hover:text-highlight/80">
                          <Link href={service.href}>
                            Learn More
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-accent/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  Need Assistance?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-highlight" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-sm text-muted-foreground">+44-7453-747965</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-highlight" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-muted-foreground">tradecreditbancorp@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-highlight" />
                    <div>
                      <p className="font-medium">Main Office</p>
                      <p className="text-sm text-muted-foreground">
                        123 Financial District<br />
                        New York, NY 10005
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <Link href="/about" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <span>About Us</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="/banking-solutions" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <span>Banking Solutions</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="/trade-finance" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <span>Trade Finance</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="/partnerships" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <span>Partnerships</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="/support" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <span>Support</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-primary/5 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't let a missing page stop you from achieving your financial goals. 
              Contact our team today to learn how we can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-highlight hover:bg-highlight/90 text-primary px-8 py-3">
                <Link href="/contact">
                  Get Started Today
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-3">
                <Link href="/banking-solutions">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}