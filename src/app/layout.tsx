import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { LiveChatComponent } from "@/components/live-chat";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { defaultMetadata, generateViewport } from "@/lib/metadata";
import VisualEditsMessenger from "@/visual-edits/VisualEditsMessenger";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Footer } from "@/components/footer";


const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Trade Credit Bancorp - Secure Global Trade Finance Solutions",
  description: "Trade Credit Bancorp empowers global businesses through secure, innovative banking and finance solutions including letters of credit, bank guarantees, SBLC, and business IBANs.",
  keywords: ["trade finance", "letters of credit", "bank guarantees", "SBLC", "business banking", "corporate finance"],
  openGraph: {
    title: "Trade Credit Bancorp - Secure Global Trade Finance Solutions",
    description: "Empowering global businesses through secure, innovative banking and finance solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Credit Bancorp - Secure Global Trade Finance Solutions",
    description: "Empowering global businesses through secure, innovative banking and finance solutions.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = generateViewport();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a1f36" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Navigation />
        <main>{children}</main>
        <LiveChatComponent />
        <WhatsAppButton />
      
        <VisualEditsMessenger />

        <Footer/>
      </body>
    </html>
  );
}