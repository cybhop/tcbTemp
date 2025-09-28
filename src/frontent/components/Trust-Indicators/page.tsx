
import { 
    Building,
    Users,
    Zap,
} from 'lucide-react'

const TrustIndicators = () => {
  return (
    <>
        {/* Trust Indicators */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Building className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">Bank Grade Security</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Institutional-level security protocols and compliance standards
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">Rapid Processing</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Streamlined processes for faster transaction completion
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">Expert Support</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dedicated specialists with deep trade finance expertise
                </p>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default TrustIndicators