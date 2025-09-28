import { Card, CardContent } from "./../../styled";
import { 
  Building2, 
  TrendingUp, 
  Shield, 
  Globe, 
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-15">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-display font-bold mb-6 text-yellow-500">
                About Trade Credit Bancorp
              </h1>
              <p className="text-xl md:text-2xl  opacity-90">
                Empowering businesses with innovative trade finance solutions since our founding
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Building2 className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="text-xl text-muted-foreground">
                  Leading the future of trade finance with innovation and expertise
                </p>
              </div>
              
              <Card className="mb-12 border">
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
                <Card className="text-center border">
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Growth Focused</h3>
                    <p className="text-muted-foreground">
                      Enabling business expansion through strategic trade finance solutions
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center border">
                  <CardContent className="p-6">
                    <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                    <p className="text-muted-foreground">
                      Connecting businesses across international markets and borders
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center border">
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

     
      </div>
    </div>
  );
}