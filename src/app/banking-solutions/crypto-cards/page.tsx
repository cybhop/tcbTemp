import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CreditCard, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Lock, 
  TrendingUp, 
  Users, 
  Zap, 
  Building, 
  FileText, 
  Headphones,
  Bitcoin,
  Wallet,
  Smartphone,
  Settings,
  Eye,
  AlertTriangle,
  Star,
  Clock,
  DollarSign,
  BarChart,
  Target,
  Award,
  BookOpen,
  Phone
} from 'lucide-react';

export default function CryptoCardsService() {
  const supportedCryptos = [
    { name: 'Bitcoin', symbol: 'BTC', icon: Bitcoin },
    { name: 'Ethereum', symbol: 'ETH', icon: Zap },
    { name: 'Litecoin', symbol: 'LTC', icon: DollarSign },
    { name: 'Bitcoin Cash', symbol: 'BCH', icon: Bitcoin },
    { name: 'Ripple', symbol: 'XRP', icon: TrendingUp },
    { name: 'Cardano', symbol: 'ADA', icon: Star },
    { name: 'Polkadot', symbol: 'DOT', icon: Target },
    { name: 'Chainlink', symbol: 'LINK', icon: Globe }
  ];

  const securityFeatures = [
    { icon: Shield, title: 'Multi-Layer Security', description: 'Advanced encryption with biometric authentication' },
    { icon: Lock, title: 'Cold Storage', description: 'Secure offline storage for digital assets' },
    { icon: Eye, title: 'Real-Time Monitoring', description: '24/7 fraud detection and transaction monitoring' },
    { icon: AlertTriangle, title: 'Risk Management', description: 'Automated risk assessment and prevention' }
  ];

  const features = [
    { icon: CreditCard, title: 'Instant Conversion', description: 'Real-time crypto-to-fiat conversion at point of sale' },
    { icon: Globe, title: 'Global Acceptance', description: 'Use anywhere Visa/Mastercard is accepted worldwide' },
    { icon: Smartphone, title: 'Mobile Integration', description: 'Seamless mobile wallet and app integration' },
    { icon: Settings, title: 'Flexible Controls', description: 'Customizable spending limits and transaction controls' },
    { icon: Clock, title: 'Instant Settlement', description: 'Real-time transaction processing and settlement' },
    { icon: BarChart, title: 'Analytics Dashboard', description: 'Comprehensive spending and portfolio analytics' }
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Enhanced Liquidity', description: 'Convert digital assets to spendable currency instantly' },
    { icon: Users, title: 'Customer Attraction', description: 'Attract crypto-savvy customers and younger demographics' },
    { icon: Building, title: 'Business Growth', description: 'Expand into emerging digital payment markets' },
    { icon: Award, title: 'Competitive Edge', description: 'Stay ahead with cutting-edge payment technology' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1f36] to-[#2a2f46] text-white py-20">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-[#d4af37] rounded-full">
                <CreditCard className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Crypto Cards Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Bridge the gap between digital assets and traditional payments with our comprehensive cryptocurrency-enabled payment cards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8941f] text-white px-8 py-3">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a1f36] px-8 py-3">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f36] mb-6">
                Revolutionize Your Payment Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Crypto Cards service enables businesses and individuals to seamlessly spend their digital assets anywhere traditional payment cards are accepted. Convert cryptocurrency to fiat currency instantly at the point of sale.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#d4af37]">50+</div>
                  <div className="text-sm text-gray-600">Supported Cryptocurrencies</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#d4af37]">200+</div>
                  <div className="text-sm text-gray-600">Countries Supported</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#d4af37]">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#d4af37]">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1a1f36] to-[#2a2f46] rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Wallet className="h-8 w-8 text-[#d4af37] mr-3" />
                  <span className="text-xl font-semibold">Digital Asset Integration</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#d4af37] mr-3" />
                    <span>Real-time conversion rates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#d4af37] mr-3" />
                    <span>Multi-currency support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#d4af37] mr-3" />
                    <span>Instant settlement</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#d4af37] mr-3" />
                    <span>Global acceptance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f36] mb-4">
              Comprehensive Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our crypto cards come packed with advanced features designed to provide seamless digital asset spending
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#d4af37] rounded-full">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="ml-4 text-[#1a1f36]">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Cryptocurrencies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f36] mb-4">
              Supported Cryptocurrencies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Spend your favorite digital assets with support for major cryptocurrencies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {supportedCryptos.map((crypto, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#d4af37] rounded-full">
                      <crypto.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-[#1a1f36] mb-2">{crypto.name}</h3>
                  <Badge variant="secondary">{crypto.symbol}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">And many more cryptocurrencies supported</p>
            <Button variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white">
              View All Supported Assets
            </Button>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-gradient-to-br from-[#1a1f36] to-[#2a2f46] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">
              Bank-Grade Security
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Your digital assets are protected with enterprise-level security measures
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#d4af37] rounded-full">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f36] mb-4">
              Business Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock new opportunities and stay competitive in the digital economy
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center">
                    <div className="p-3 bg-[#d4af37] rounded-full mr-4">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-[#1a1f36]">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f36] mb-4">
              Detailed Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about our crypto cards service capabilities and features
            </p>
          </div>
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-[#e1e1e1]">
              <TabsTrigger value="technical">Technical Details</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="integration">Integration</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            <TabsContent value="technical" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1a1f36]">Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Card Types</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">Physical Cards</h5>
                        <p className="text-sm text-gray-600">Contactless NFC-enabled cards with EMV chip technology</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">Virtual Cards</h5>
                        <p className="text-sm text-gray-600">Instant digital cards for online and mobile payments</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Conversion Technology</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2" />
                        Real-time market rates from multiple exchanges
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2" />
                        Sub-second conversion processing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2" />
                        Automatic slippage protection
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2" />
                        Multi-exchange arbitrage optimization
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="compliance" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1a1f36]">Regulatory Compliance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Certifications & Standards</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">PCI DSS Level 1</h5>
                        <p className="text-sm text-gray-600">Highest level of payment card industry security</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">ISO 27001</h5>
                        <p className="text-sm text-gray-600">Information security management certification</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">SOC 2 Type II</h5>
                        <p className="text-sm text-gray-600">Security and availability controls audit</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">GDPR Compliant</h5>
                        <p className="text-sm text-gray-600">European data protection regulation compliance</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Regulatory Framework</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2" />
                        Anti-Money Laundering (AML) compliance
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2" />
                        Know Your Customer (KYC) verification
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2" />
                        Bank Secrecy Act (BSA) reporting
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2" />
                        OFAC sanctions screening
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="integration" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1a1f36]">Integration Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">API Integration</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">RESTful API</h5>
                        <p className="text-sm text-gray-600">Complete card management and transaction API</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">WebSocket</h5>
                        <p className="text-sm text-gray-600">Real-time transaction notifications</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">SDK Support</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2" />
                        JavaScript/Node.js SDK
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2" />
                        Python SDK
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2" />
                        Java SDK
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#d4af37] mr-2" />
                        Mobile SDKs (iOS/Android)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="support" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1a1f36]">Support & Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Support Channels</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Phone className="h-4 w-4 text-[#d4af37] mr-2" />
                          <h5 className="font-medium">24/7 Phone Support</h5>
                        </div>
                        <p className="text-sm text-gray-600">Direct access to technical specialists</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Headphones className="h-4 w-4 text-[#d4af37] mr-2" />
                          <h5 className="font-medium">Live Chat</h5>
                        </div>
                        <p className="text-sm text-gray-600">Real-time support via web chat</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <BookOpen className="h-4 w-4 text-[#d4af37] mr-2" />
                          <h5 className="font-medium">Documentation</h5>
                        </div>
                        <p className="text-sm text-gray-600">Comprehensive API and integration guides</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Users className="h-4 w-4 text-[#d4af37] mr-2" />
                          <h5 className="font-medium">Community Forum</h5>
                        </div>
                        <p className="text-sm text-gray-600">Developer community and knowledge base</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a1f36] to-[#2a2f46] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">
            Ready to Transform Your Payment Experience?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of businesses already using our crypto cards to bridge traditional and digital payments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8941f] text-white px-8 py-3">
              Start Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a1f36] px-8 py-3">
              Contact Sales Team
            </Button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>Questions? Call us at 1-800-TCB-CARD or email crypto@tcbancorp.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}