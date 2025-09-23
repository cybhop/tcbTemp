import { CreditCard, Globe, ShieldCheck } from 'lucide-react'

const features = [
  {
    name: 'Letter of Credit Services',
    description:
      'Secure payment guarantees for international trade transactions. Our comprehensive LC services ensure smooth and trusted business relationships across global markets.',
    href: '#',
    icon: CreditCard,
  },
  {
    name: 'Trade Financing',
    description:
      'Working capital solutions designed for import/export operations. Access flexible financing options to support your international business growth and cash flow needs.',
    href: '#',
    icon: Globe,
  },
  {
    name: 'Risk Management',
    description:
      'Comprehensive compliance and risk mitigation services. Protect your business with our advanced risk assessment tools and regulatory compliance solutions.',
    href: '#',
    icon: ShieldCheck,
  },
]

export default function SimpleThreeColumnWithLargeIcons() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-[#1a1f36] sm:text-5xl">
            Comprehensive Banking Solutions
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            TCB delivers innovative core banking solutions designed to meet the evolving needs of modern financial institutions and their customers.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col bg-[#e5e7eb] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform">
                <dt className="text-base/7 font-semibold text-[#1a1f36]">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-[#d4af37] hover:bg-[#b8941f] transition-colors duration-300">
                    <feature.icon aria-hidden="true" className="size-7 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm/6 font-semibold text-[#d4af37] hover:text-[#b8941f] transition-colors duration-300">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}