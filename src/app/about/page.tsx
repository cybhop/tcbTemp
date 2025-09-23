import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
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
  CheckCircle
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-display font-bold mb-6 text-yellow-500">
                About Trade Credit Bancorp
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Empowering businesses with innovative trade finance solutions since our founding
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Globe className="w-4 h-4 mr-2" />
                  Global Reach
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  Industry Leader
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Trusted Partner
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Building2 className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl font-bold mb-4">Company Overview</h2>
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
        </section>

        {/* Vision, Mission & Values Section */}
        <section className="py-16 md:py-24 bg-[#f7f7f7]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Target className="w-16 h-16 mx-auto mb-6 text-primary" />
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
                <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
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
        <section className="py-16 md:py-24 bg-[#f7f7f7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Briefcase className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
                <p className="text-xl text-muted-foreground">
                  Build your career with a leader in trade finance
                </p>
              </div>

              <Card className="mb-8">
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

              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Ready to Make an Impact?</h3>
                <p className="text-muted-foreground mb-6">
                  Join our team of dedicated professionals who are shaping the future of trade finance. 
                  Discover opportunities to grow your career while making a meaningful contribution to global commerce.
                </p>
                <Button variant="outline" size="lg" className="cta-outline">
                  Contact Our HR Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}