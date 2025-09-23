import { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { contactInfo } from '@/lib/contact-config'
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Building,
  Target, 
  Heart, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Briefcase,
  ArrowRight,
  Award,
  Handshake,
  CheckCircle,
  MessageCircle,
  UserCheck,
  FileText,
  Banknote,
  HelpCircle,
  CreditCard,
  DollarSign
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trade Credit Bancorp - Secure Global Trade Finance Solutions",
  description: "Trade Credit Bancorp empowers global businesses through secure, innovative banking and finance solutions including letters of credit, bank guarantees, SBLC, and business IBANs.",
  keywords: ["trade finance", "letters of credit", "bank guarantees", "SBLC", "business banking", "corporate finance"],
  openGraph: {
    title: "Trade Credit Bancorp - Secure Global Trade Finance Solutions",
    description: "Empowering global businesses through secure, innovative banking and finance solutions.",
    type: "website",
  },
};

export default function HomePage() {

    const services = [
      { icon: TrendingUp, title: "Trade Finance", description: "Letters of credit, trade loans, and export financing" },
      { icon: Shield, title: "Credit Insurance", description: "Protect your business from payment defaults" },
      { icon: Users, title: "Business Consulting", description: "Strategic financial planning and risk management" },
      { icon: DollarSign, title: "Working Capital", description: "Invoice financing and cash flow solutions" },
      { icon: Building, title: "Corporate Banking", description: "Comprehensive banking services for businesses" },
      { icon: CreditCard, title: "Payment Solutions", description: "Secure and efficient payment processing" }
    ]

  const benefits = [
      {
        title: "Risk Mitigation",
        description: "Comprehensive protection against payment defaults, performance failures, and counterparty risks in international trade.",
        icon: Shield,
        stats: "99.8% Success Rate"
      },
      {
        title: "Trust Building",
        description: "Establish credibility and confidence with trading partners through internationally recognized financial instruments.",
        icon: Handshake,
        stats: "150+ Countries"
      },
      {
        title: "Regulatory Compliance",
        description: "Ensure adherence to international trade regulations, AML requirements, and banking standards across jurisdictions.",
        icon: CheckCircle,
        stats: "100% Compliant"
      },
      {
        title: "Global Reach",
        description: "Access to extensive network of correspondent banks and financial institutions worldwide for seamless transactions.",
        icon: Globe,
        stats: "500+ Bank Partners"
      }
    ]

    const steps = [
      {
        icon: UserCheck,
        title: "Initial Consultation",
        description: "We assess your business needs and recommend the most suitable banking solutions for your requirements."
      },
      {
        icon: FileText,
        title: "Documentation & Compliance",
        description: "Our team guides you through the necessary documentation and ensures full regulatory compliance."
      },
      {
        icon: CheckCircle,
        title: "Account Setup",
        description: "Quick and efficient account setup with dedicated support throughout the entire process."
      },
      {
        icon: Banknote,
        title: "Go Live",
        description: "Start using your new banking solutions immediately with ongoing support and account management."
      }
    ]
  return (
    <>
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        <HeroSection />
        {/* Additional sections can be added here */}
      </div>
              {/* Company Overview Section */}
        {/* <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Building2 className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="text-xl text-muted-foreground">
                  Leading the future of trade finance with innovation and expertise
                </p>
              </div>
              
              <Card className="mb-12">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                      Trade Credit Bancorp stands at the forefront of the global trade finance industry, providing innovative solutions that bridge the gap between traditional banking and modern commerce. Our comprehensive suite of services empowers businesses of all sizes to expand their operations, manage cash flow, and capitalize on international opportunities.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      Founded on principles of excellence and integrity, we have established ourselves as a trusted partner for businesses seeking reliable trade finance solutions. Our deep understanding of global markets, combined with cutting-edge technology and personalized service, enables us to deliver results that exceed expectations.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      With a commitment to fostering international trade relationships and supporting economic growth, Trade Credit Bancorp continues to evolve and adapt to meet the changing needs of our clients in an increasingly connected world.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Growth Focused</h3>
                    <p className="text-muted-foreground">
                      Enabling business expansion through strategic trade finance solutions
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                    <p className="text-muted-foreground">
                      Connecting businesses across international markets and borders
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Secure Solutions</h3>
                    <p className="text-muted-foreground">
                      Providing safe and reliable financial instruments for peace of mind
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section> */}

        {/* Services Expertise Section */}
        <section className="py-20 px-4">
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
      
       {/* Why Choose Trade Credit BancorpSection */}
        <section className="py-20 bg-[#f7f7f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Trade Credit Bancorp
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our trade finance solutions deliver measurable value through enhanced security, 
                regulatory compliance, and global accessibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <Badge variant="outline" className="mx-auto mt-2 border-primary/20 text-primary">
                      {benefit.stats}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Vision, Mission & Values Section */}
        <section className="py-16 md:py-24 bg-[#f7f7f7]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                {/* <Target className="w-16 h-16 mx-auto mb-6 text-primary" /> */}
                <h2 className="text-3xl font-bold mb-4">Vision, Mission & Values</h2>
                <p className="text-xl text-muted-foreground">
                  The principles that guide our commitment to excellence
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the world's most trusted and innovative trade finance partner, empowering businesses to achieve their global ambitions while fostering sustainable economic growth and international prosperity.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To deliver exceptional trade finance solutions that enable businesses to thrive in the global marketplace through innovative products, expert guidance, and unwavering commitment to client success.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Our Values</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mt-1 mr-2 text-primary flex-shrink-0" />
                        <span>Integrity in all business dealings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mt-1 mr-2 text-primary flex-shrink-0" />
                        <span>Innovation driving excellence</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mt-1 mr-2 text-primary flex-shrink-0" />
                        <span>Client-focused solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mt-1 mr-2 text-primary flex-shrink-0" />
                        <span>Global perspective</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Governance Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                {/* <Users className="w-16 h-16 mx-auto mb-6 text-primary" /> */}
                <h2 className="text-3xl font-bold mb-4">Leadership & Governance</h2>
                <p className="text-xl text-muted-foreground">
                  Experienced leadership driving strategic excellence
                </p>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Executive Leadership</CardTitle>
                  <CardDescription>
                    Our executive team brings decades of combined experience in trade finance, banking, and international commerce
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Strategic Vision</h4>
                        <p className="text-sm text-muted-foreground">
                          Forward-thinking leadership that anticipates market trends and opportunities
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Handshake className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Industry Expertise</h4>
                        <p className="text-sm text-muted-foreground">
                          Deep knowledge of global trade finance markets and regulatory environments
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Corporate Governance</CardTitle>
                  <CardDescription>
                    Committed to transparency, accountability, and ethical business practices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Independent board oversight and risk management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Comprehensive compliance and regulatory adherence</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Stakeholder engagement and transparent reporting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Sustainable business practices and social responsibility</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-16 md:py-24 bg-[#1A1F36]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                {/* <Briefcase className="w-16 h-16 mx-auto mb-6 text-white" /> */}
                <h2 className="text-3xl font-bold mb-4 text-yellow-500">Join Our Team</h2>
                <p className="text-xl text-white ">
                  Build your career with a leader in trade finance
                </p>
              </div>

              <Card className="mb-2">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Why Choose Trade Credit Bancorp?</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We offer a dynamic work environment where innovation meets tradition, and where your contributions make a real difference in the global trade finance landscape.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Professional Growth</h4>
                          <p className="text-sm text-muted-foreground">Continuous learning and development opportunities</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Globe className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Global Exposure</h4>
                          <p className="text-sm text-muted-foreground">Work with international clients and markets</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Collaborative Culture</h4>
                          <p className="text-sm text-muted-foreground">Work alongside industry experts and thought leaders</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Competitive Benefits</h4>
                          <p className="text-sm text-muted-foreground">Comprehensive compensation and benefits package</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="cta-primary">
                      Explore Career Opportunities
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

         {/* Get Started Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">Get Started with Ease</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our streamlined onboarding process ensures you can start using our banking solutions quickly and efficiently
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-highlight group-hover:text-white transition-colors">
                    <step.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <div className="text-sm font-medium text-highlight mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        
      
      {/* Contact Information Section */}
        <section className="py-20 px-4 bg-[#f7f7f7]">
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

        
      </div>
    
    </>
  );
}