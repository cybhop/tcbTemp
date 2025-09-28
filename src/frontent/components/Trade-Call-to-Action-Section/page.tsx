
import { Button } from '../../styled'
import { 
    CheckCircle
} from 'lucide-react'
const CallToActionSection = () => {
  return (  
    <>
     {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-yellow-500">
                  Ready to Secure Your International Trade?
                </h2>
                <p className="text-xl text-white/90">
                  Contact our trade finance specialists today to discuss your requirements and discover 
                  how our solutions can protect and enhance your global business transactions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button  className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-2 rounded">
                  Get Quote Now
                </Button>
                <Button className="border-white text-white hover:bg-white/10 outline-1 px-6 py-2 rounded">
                  Download Brochure
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="text-sm">Same-Day Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="text-sm">Competitive Rates</span>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default CallToActionSection