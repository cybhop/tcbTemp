import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from "../../styled"
import { 
  CheckCircle,
  FileText,
  Shield,
  Award,
  DollarSign,
  Lock
} from 'lucide-react'
import TrustIndicators from "../../components/Trust-Indicators/page"
import BancorpSection from "../../components/Bancorp-Section/page"
import CallToActionSection from "../../components/Trade-Call-to-Action-Section/page"
import LoginModal from "../../components/Login-Popup/page"



const TradeFinancePage = () => {
  const [isOpen, setIsOpen] = useState(false);
 const services = [
    {
      title: "Letters of Credit",
      description: "Secure payment instruments that guarantee payment to sellers upon presentation of compliant documents, eliminating payment risk in international trade transactions.",
      icon: FileText,
      features: ["Import/Export LCs", "Standby Letters of Credit", "Confirmed LCs", "Revolving Credit Facilities"]
    },
    {
      title: "Standby Letters of Credit (SBLCs)",
      description: "Financial guarantees providing backup payment assurance, commonly used for performance bonds, payment guarantees, and contract security.",
      icon: Shield,
      features: ["Performance SBLCs", "Payment Guarantees", "Contract Security", "Bid Bonds"]
    },
    {
      title: "Bank Guarantees",
      description: "Irrevocable commitments by banks to pay specified amounts if clients fail to meet contractual obligations, providing security for business transactions.",
      icon: Award,
      features: ["Performance Guarantees", "Payment Guarantees", "Bid Guarantees", "Advance Payment Guarantees"]
    },
    {
      title: "Proof of Funds",
      description: "Official documentation verifying the availability of funds for large transactions, investments, or business ventures, providing credibility and trust.",
      icon: DollarSign,
      features: ["Asset Verification", "Bank Statements", "Investment Documentation", "Liquidity Confirmation"]
    },
    {
      title: "Escrow Services",
      description: "Neutral third-party services that hold funds or documents until all transaction conditions are met, ensuring security for all parties involved.",
      icon: Lock,
      features: ["Transaction Security", "Document Custody", "Milestone Payments", "Dispute Resolution"]
    }
  ]



  const stats = [
    { value: "$2.5B+", label: "Trade Volume Facilitated" },
    { value: "1,200+", label: "Successful Transactions" },
    { value: "45+", label: "Countries Served" },
    { value: "15+ Years", label: "Industry Experience" }
  ]


  return (
    <>
    {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
     <div className="min-h-screen bg-background">
         <div className="pt-0">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div  className="bg-white/10 text-white border-white/20 p-1 px-4 font-medium rounded w-fit">
                    Trade Finance Solutions
                  </div>
                  <h1 className="text-display font-bold leading-tight text-yellow-500">
                    Empowering Global Trade with Trusted Financial Instruments
                  </h1>
                  <p className="text-xl text-white/90 leading-relaxed">
                    Trade Credit Bancorp provides comprehensive trade finance services designed to facilitate international commerce, 
                    mitigate risks, and build trust between trading partners worldwide. Our expert team delivers tailored solutions 
                    that meet the unique needs of businesses engaged in global trade.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => setIsOpen(true)} className="bg-white text-primary hover:bg-yellow-500 font-medium hover:text-white p-3 px-4 rounded ">Get Started Today</Button>
                  <Button  className="border-white text-white hover:bg-white/10 outline px-4 py-2 rounded">
                    <a href="https://calendly.com/hubertbogohardt/30min?back=1&month=2025-09" target="_blank">Schedule Consultation</a> 
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Comprehensive Trade Finance Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our suite of trade finance instruments provides the security, credibility, and peace of mind 
                necessary for successful international business transactions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <service.icon  className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>        
                </Card>
              ))}
            </div>
          </div>
        </section>

        
    <BancorpSection />
    <TrustIndicators />
    <CallToActionSection />
      </div>
  
    </div>
    </>
  )
}

export default TradeFinancePage