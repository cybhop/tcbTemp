import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardTitle, CardHeader, CardDescription, Button,} from "../../styled"
import { 
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
    // FileText,
    // HelpCircle,
  CreditCard,
  DollarSign,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import BancorpSection from '../../components/Bancorp-Section/page';
import GetStartedEaseStep from '../../components/Get-Started-Ease-Step/page';
import { useLocation } from "react-router-dom";

function Home() {
const contactRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll if URL has hash
  useEffect(() => {
    if (location.hash === "#contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  // HeroSection
   const [isLoaded, setIsLoaded] = useState(false);

   
  useEffect(() => {
    setIsLoaded(true);
  }, []);

      // const scrollToSection = (sectionId: string) => {
      //   const element = document.getElementById(sectionId);
      //   if (element) {
      //     element.scrollIntoView({ behavior: 'smooth' });
      //   }
      // };

   const services = [
      { icon: TrendingUp, title: "Trade Finance", description: "Letters of credit, trade loans, and export financing" },
      { icon: Shield, title: "Credit Insurance", description: "Protect your business from payment defaults" },
      { icon: Users, title: "Business Consulting", description: "Strategic financial planning and risk management" },
      { icon: DollarSign, title: "Working Capital", description: "Invoice financing and cash flow solutions" },
      { icon: Building, title: "Corporate Banking", description: "Comprehensive banking services for businesses" },
      { icon: CreditCard, title: "Payment Solutions", description: "Secure and efficient payment processing" }
    ]



 

  return (
    <>


    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 pt-30">
      {/* Background Gradient and Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DAA520] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        </div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1a1f36" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-[#DAA520]" />
                <span className="font-medium">25+ Years</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4 text-[#DAA520]" />
                <span className="font-medium">Global Network</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-[#DAA520]" />
                <span className="font-medium">$50B+ Facilitated</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight mb-6">
              Secure Your{" "}
              <span className="relative">
                <span className="text-[#DAA520]">Global Trade</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#DAA520] to-transparent opacity-30"></div>
              </span>
              {" "}with Confidence
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Trade Credit Bancorp empowers global businesses through secure, innovative banking and finance solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button className="cta-primary group text-lg px-8 py-6 h-auto rounded" 
              >
                <a href="/#" aria-label="Explore our trade finance services" className='flex flex-nowrap items-center justify-center '>
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button className="cta-outline text-lg px-8 py-6 h-auto">
                <a href="https://calendly.com/hubertbogohardt/30min?back=1&month=2025-09" target="_blank" aria-label="Book a free consultation">
                  Get a Consultation
                </a>
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#DAA520] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Regulatory Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#DAA520] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">24/7 Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#DAA520] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Advanced Security</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#DAA520] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Global Coverage</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#DAA520] to-primary rounded-3xl blur-2xl opacity-10"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0215bb9d-6ceb-4f87-a974-198c28935b8c/generated_images/modern-financial-technology-interface-wi-1d7a22b0-20250713090738.jpg"
                  alt="Modern financial technology interface with global trade elements"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="eager"
                />
                
                {/* Overlay Graphics */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                
                {/* Floating Stats Cards */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#DAA520] rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary">Growth Rate</div>
                      <div className="text-lg font-bold text-[#DAA520]">+24.5%</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary">Active Clients</div>
                      <div className="text-lg font-bold text-[#DAA520]">5,000+</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#DAA520] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>




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
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border">
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

              <BancorpSection />
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
                      <Card className="h-full border bg-white">
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
      
                      <Card className="h-full border">
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
      
                      <Card className="h- border">
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

              <Card className="mb-8 border">
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

              <Card className='border'>
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
        {/* <section className="py-16 md:py-24 bg-[#1A1F36]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Briefcase className="w-16 h-16 mx-auto mb-6 text-white" />
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
                    <Button  className="cta-primary flex flex-nowrap items-center justify-center mx-auto text-lg px-5 py-3 h-auto rounded">
                      Explore Career Opportunities
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section> */}

         {/* Get Started Section */}
        <GetStartedEaseStep />
      
       {/* Contact Information Section */}
              <section className="py-20 px-4 bg-[#f7f7f7]" id="contact"
        ref={contactRef}>
                <div className="container max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Office Information */}
                    <Card className="shadow-lg border">
                      <CardHeader>
                        <CardTitle className="text-2xl text-primary flex items-center gap-2">
                          <Building className="w-6 h-6" />
                          Cyprus Office
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-highlight mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-primary">Address</p>
                            <p className="text-muted">Anexartisias 188 <br />Limassol, 3041, Cyprus</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-highlight" />
                          <div>
                            <p className="font-medium text-primary">Phone</p>
                            <a href='tel:+447453747965' className="text-muted hover:text-primary transition-colors">
                              +44 7453 747965
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-highlight" />
                          <div>
                            <p className="font-medium text-primary">Email</p>
                            <a href='mailto:support@tradecreditbancorp.com' className="text-muted hover:text-primary transition-colors">
                              support@tradecreditbancorp.com
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-highlight" />
                          <div>
                            <p className="font-medium text-primary">Business Hours</p>
                            <p className="text-muted"></p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
      
                    {/* Quick Contact Methods */}
                    <Card className="shadow-lg border">
                      <CardHeader>
                        <CardTitle className="text-2xl text-primary">Quick Contact</CardTitle>
                        <p className="text-muted">Choose your preferred way to reach us</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Button className="w-full justify-start rounded gap-3 h-auto p-4 bg-green-600 hover:bg-green-700">
                          <a href="/#" >
                            <MessageCircle className="w-5 h-5 text-white" />
                            <div className="text-left">
                              <div className="font-medium text-white">WhatsApp Support</div>
                              <div className="text-sm opacity-90 text-white">Instant messaging support</div>
                            </div>
                          </a>
                        </Button>
                        <Button className="w-full justify-start rounded gap-3 h-auto p-4 bg-yellow-500 cursor-pointer hover:bg-gray-700 hover:text-white">
                          <a href="https://calendly.com/hubertbogohardt/30min?back=1&month=2025-09" target="_blank" aria-label="Book a free consultation">
                              Get a Consultation
                            </a>
                        </Button>
                        
                        {/* <Button className="w-full justify-start gap-3 h-auto p-4 cta-outline">
                          <a href="/#">
                            <HelpCircle className="w-5 h-5" />
                            <div className="text-left">
                              <div className="font-medium">Help Center</div>
                              <div className="text-sm text-muted">Browse FAQs and guides</div>
                            </div>
                          </a>
                        </Button>
                        
                        <Button  className="w-full justify-start gap-3 h-auto p-4 cta-outline">
                          <a href="/#">
                            <FileText className="w-5 h-5" />
                            <div className="text-left">
                              <div className="font-medium">Submit Ticket</div>
                              <div className="text-sm text-muted">Request detailed assistance</div>
                            </div>
                          </a>
                        </Button> */}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>




    </>
  )
}

export default Home
