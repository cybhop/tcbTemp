"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X, Globe, Shield, Users } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Banking Solutions', href: '#' },
  { name: 'Trade Finance Services', href: '#' },
  { name: 'Partnerships', href: '#' },
  { name: 'Support', href: '#' },
  { name: 'Legal', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function SimpleCentered() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-background font-[var(--font-inter)]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 bg-primary">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Global Trade Finance</span>
              <div className="flex items-center space-x-2">
                <Globe className="h-8 w-8 text-[--color-highlight]" />
                <span className="text-lg font-semibold text-primary-foreground">TradeFinance</span>
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-foreground"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-medium text-primary-foreground hover:text-[--color-highlight] transition-colors">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="rounded-md bg-[--color-highlight] px-4 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-[--color-highlight]/90 transition-colors">
              Client Access
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary p-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Global Trade Finance</span>
                <div className="flex items-center space-x-2">
                  <Globe className="h-8 w-8 text-[--color-highlight]" />
                  <span className="text-lg font-semibold text-primary-foreground">TradeFinance</span>
                </div>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-primary-foreground"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-primary-foreground/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Client Access
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-primary/20 to-[--color-highlight]/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-4 py-2 text-sm/6 text-muted-foreground ring-1 ring-border hover:ring-border/80 bg-card">
              <Shield className="inline-block w-4 h-4 mr-2 text-[--color-highlight]" />
              Trusted by 10,000+ international businesses.{' '}
              <a href="#" className="font-semibold text-[--color-highlight]">
                <span aria-hidden="true" className="absolute inset-0" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-balance text-foreground sm:text-7xl">
              Global Trade Finance Solutions
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8 max-w-3xl mx-auto">
              Empowering international commerce with secure, compliant, and innovative banking solutions for businesses worldwide.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <a
                href="#"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
              >
                Explore Services
              </a>
              <a href="#" className="text-sm/6 font-semibold text-foreground hover:text-[--color-highlight] transition-colors">
                Client Access <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          
          {/* Subtle international business icons */}
          <div className="mt-16 flex justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Globe className="w-6 h-6" />
              <span className="text-sm font-medium">Global Network</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-medium">Secure Transactions</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Users className="w-6 h-6" />
              <span className="text-sm font-medium">Expert Support</span>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-primary/20 to-[--color-highlight]/20 opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}