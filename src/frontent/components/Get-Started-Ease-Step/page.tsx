import { 
  UserCheck,
  FileText,
  Banknote,
    CheckCircle
} from "lucide-react";
import LoginModal from "../../components/Login-Popup/page"
import { useState } from "react"

const GetStartedEaseStep = () => {
   const [isOpen, setIsOpen] = useState(false);
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
    {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
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
    </>
  )
}

export default GetStartedEaseStep