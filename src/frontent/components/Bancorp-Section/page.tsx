
import { Card, CardContent, CardTitle, Badge, CardHeader} from "../../styled"
import { 
  Shield, 
  Globe, 
  Handshake,
  CheckCircle,
} from "lucide-react";

const page = () => {

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
  return (
   <>
   
         {/* Why Choose Trade Credit Bancorp Section */}
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
                       <Badge  className="mx-auto mt-2 border-primary/20 text-primary">
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
   
   </>
  )
}

export default page