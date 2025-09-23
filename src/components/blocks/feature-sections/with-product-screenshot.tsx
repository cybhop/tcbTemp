import { FileText, DollarSign, Shield, BarChart3 } from 'lucide-react'

const features = [
  {
    name: 'Documentary Collections',
    description:
      'Secure and efficient handling of international trade documents with automated processing and compliance verification.',
    icon: FileText,
  },
  {
    name: 'Export Financing',
    description: 'Flexible financing solutions to support your export operations with competitive rates and quick approvals.',
    icon: DollarSign,
  },
  {
    name: 'Supply Chain Finance',
    description: 'Optimize cash flow across your supply chain with our comprehensive financing and risk management solutions.',
    icon: BarChart3,
  },
  {
    name: 'Compliance Management',
    description: 'Stay compliant with international trade regulations through automated monitoring and reporting systems.',
    icon: Shield,
  },
]

export default function WithProductScreenshot() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-[#d4af37]">Advanced Solutions</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#1a1f36] sm:text-5xl">
                Advanced Trade Finance Services
              </p>
              <p className="mt-6 text-lg/8 text-[#1a1f36]">
                Streamline Your International Trade Operations with our comprehensive suite of trade finance solutions designed for modern businesses.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-[#1a1f36] lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-[#1a1f36]">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-[#d4af37]" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#d4af37] hover:bg-[#b8941f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4af37] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="w-full max-w-none">
            <div className="bg-[#e5e7eb] rounded-xl shadow-xl ring-1 ring-gray-400/10 p-4">
              {/* Dashboard Header */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-[#1a1f36]">Trade Finance Dashboard</h3>
                  <p className="text-sm text-gray-600">Real-time analytics and transaction monitoring</p>
                </div>
                
                {/* Key Metrics */}
                <div className="p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#d4af37]">$24.2M</div>
                    <div className="text-sm text-gray-600">Total Volume</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#d4af37]">156</div>
                    <div className="text-sm text-gray-600">Active Transactions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#d4af37]">98.5%</div>
                    <div className="text-sm text-gray-600">Compliance Rate</div>
                  </div>
                </div>
              </div>

              {/* Chart Section */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h4 className="font-semibold text-[#1a1f36]">Transaction Analytics</h4>
                </div>
                <div className="p-6">
                  {/* Simple chart representation */}
                  <div className="h-32 bg-gradient-to-r from-[#1a1f36] to-[#d4af37] rounded opacity-20 flex items-end justify-around p-4">
                    <div className="bg-[#d4af37] w-8 h-16 rounded-t"></div>
                    <div className="bg-[#d4af37] w-8 h-20 rounded-t"></div>
                    <div className="bg-[#d4af37] w-8 h-12 rounded-t"></div>
                    <div className="bg-[#d4af37] w-8 h-24 rounded-t"></div>
                    <div className="bg-[#d4af37] w-8 h-18 rounded-t"></div>
                  </div>
                </div>
              </div>

              {/* Transaction List */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h4 className="font-semibold text-[#1a1f36]">Recent Transactions</h4>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                      <span className="text-sm font-medium text-[#1a1f36]">LC-2024-001</span>
                    </div>
                    <span className="text-sm text-gray-600">$850K</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-[#1a1f36]">DC-2024-047</span>
                    </div>
                    <span className="text-sm text-gray-600">$420K</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-[#1a1f36]">BG-2024-089</span>
                    </div>
                    <span className="text-sm text-gray-600">$1.2M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}