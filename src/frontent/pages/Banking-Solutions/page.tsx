import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from "../../styled"
import { useState } from "react"
import { 
  CreditCard, 
  Building2, 
  Gift, 
  Wallet, 
  PiggyBank, 
  Bitcoin, 
  Receipt,
} from 'lucide-react'
import GetStartedEaseStep from "../../components/Get-Started-Ease-Step/page"
import BankCallToActionSection from "../../components/Bank-Call-to-Action-Section/page"
import LoginModal from "../../components/Login-Popup/page"


const BankingSolutionsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const services = [
    {
      icon: Building2,
      title: "Business IBANs",
      description: "Streamline your international transactions with dedicated European business bank accounts and IBANs.",
      link: "/banking-solutions/business-ibans"
    },
    {
      icon: CreditCard,
      title: "Card Issuing",
      description: "White-label card issuing solutions for businesses looking to offer branded payment cards to their customers.",
      link: "/banking-solutions/card-issuing"
    },
    {
      icon: PiggyBank,
      title: "Prepaid Cards",
      description: "Flexible prepaid card solutions for expense management, employee benefits, and customer rewards.",
      link: "/banking-solutions/prepaid-cards"
    },
    {
      icon: Wallet,
      title: "Debit/Credit Cards",
      description: "Traditional banking cards with modern features, perfect for everyday business and personal use.",
      link: "/banking-solutions/debit-credit-cards"
    },
    {
      icon: Receipt,
      title: "Corporate Expense Cards",
      description: "Sophisticated expense management solutions with real-time tracking and automated reporting.",
      link: "/banking-solutions/corporate-expense-cards"
    },
    {
      icon: Bitcoin,
      title: "Crypto Cards",
      description: "Bridge the gap between digital assets and traditional payments with our cryptocurrency-enabled cards.",
      link: "/banking-solutions/crypto-cards"
    },
    {
      icon: Gift,
      title: "Gift Cards",
      description: "Custom gift card programs to boost customer loyalty and create new revenue streams for your business.",
      link: "/banking-solutions/gift-cards"
    }
  ]




  return (
    <>
    {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
     <div className="min-h-screen bg-background">
      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white pb-20 pt-34">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-500">Banking Solutions</h1>
              <p className="text-xl leading-relaxed mb-8">
                Trade Credit Bancorp provides comprehensive banking solutions designed to meet the diverse needs of modern businesses. 
                From traditional banking services to innovative fintech solutions, we offer a complete suite of financial products 
                that enable businesses to operate efficiently in today's global marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => setIsOpen(true)} className="bg-white text-primary hover:bg-yellow-500 font-medium hover:text-white p-3 px-4 rounded ">Get Started Today</Button>
                <Button  className="border-white text-white hover:bg-white/10 outline px-4 py-2 rounded">
                                    <a href="https://calendly.com/hubertbogohardt/30min?back=1&month=2025-09" target="_blank">Schedule Consultation</a> 
                                  </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-[#f7f7f7]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Banking Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive financial solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border shadow-md">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-highlight group-hover:text-white transition-colors">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </CardDescription>
                      {/* <Link to={service.link} className="flex items-center px-3 py-2 group-hover:bg-primary group-hover:text-white">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <GetStartedEaseStep />
        <BankCallToActionSection />

      </div>
  
    </div>
    </>
  )
}

export default BankingSolutionsPage;