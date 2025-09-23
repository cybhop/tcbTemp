export default function SimpleCentered() {
    return (
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-primary sm:text-5xl">
              Ready to Start Your Trade Finance Journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-muted-foreground">
              Join leading businesses worldwide who trust TCB for their international trade financing needs. Our compliance-first approach ensures secure, efficient transactions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#d4af37] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#c19b2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]"
              >
                Open Account
              </a>
              <a 
                href="#" 
                className="rounded-md border border-primary px-3.5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Schedule Consultation
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              All services subject to KYC/AML compliance requirements.
            </p>
          </div>
        </div>
      </div>
    )
  }