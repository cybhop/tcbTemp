import { Metadata, Viewport } from 'next';

// Type definitions for consistent metadata usage
export interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    siteName?: string;
    type?: 'website' | 'article' | 'product';
    locale?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    images?: string[];
    creator?: string;
    site?: string;
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
    };
  };
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
}

// Viewport configuration that can be exported from any page
export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
    ],
    colorScheme: 'light dark',
  };
}

// Common site information
export const siteConfig = {
  name: 'Trade Credit Bancorp',
  description: 'Your trusted partner for trade credit solutions, factoring, and business financing services.',
  url: 'https://tradecreditbancorp.com',
  ogImage: '/og-image.jpg',
  keywords: [
    'trade credit',
    'factoring',
    'business financing',
    'credit solutions',
    'receivables financing',
    'working capital',
    'trade finance',
    'business loans',
    'commercial finance',
    'cash flow solutions'
  ],
  creator: 'Trade Credit Bancorp',
  twitterHandle: '@tradecreditbc',
  locale: 'en_US',
};

// Default metadata configuration
export const defaultMetadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Trade Credit Solutions`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1a1f36' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code
  },
  category: 'Business & Finance',
  classification: 'Business Services',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteConfig.name,
  },
  other: {
    'application-name': siteConfig.name,
    'msapplication-TileColor': '#1a1f36',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#ffffff',
  },
};

// Helper function to generate page-specific metadata
export function generatePageMetadata(config: PageMetadata): Metadata {
  return {
    title: config.title,
    description: config.description || siteConfig.description,
    keywords: config.keywords || siteConfig.keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: config.openGraph?.title || config.title,
      description: config.openGraph?.description || config.description,
      images: config.openGraph?.images || defaultMetadata.openGraph?.images,
      type: config.openGraph?.type || 'website',
      siteName: config.openGraph?.siteName || siteConfig.name,
      locale: config.openGraph?.locale || siteConfig.locale,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: config.twitter?.title || config.title,
      description: config.twitter?.description || config.description,
      images: config.twitter?.images || [siteConfig.ogImage],
      card: config.twitter?.card || 'summary_large_image',
      creator: config.twitter?.creator || siteConfig.twitterHandle,
      site: config.twitter?.site || siteConfig.twitterHandle,
    },
    robots: {
      ...defaultMetadata.robots,
      index: config.robots?.index !== undefined ? config.robots.index : true,
      follow: config.robots?.follow !== undefined ? config.robots.follow : true,
      googleBot: {
        ...defaultMetadata.robots?.googleBot,
        index: config.robots?.googleBot?.index !== undefined ? config.robots.googleBot.index : true,
        follow: config.robots?.googleBot?.follow !== undefined ? config.robots.googleBot.follow : true,
      },
    },
    alternates: {
      ...defaultMetadata.alternates,
      canonical: config.alternates?.canonical,
      languages: config.alternates?.languages,
    },
  };
}

// Common metadata for different page types
export const pageMetadataTemplates = {
  home: {
    title: 'Home',
    description: 'Trade Credit Bancorp - Your trusted partner for trade credit solutions, factoring, and business financing services.',
    keywords: ['trade credit', 'factoring', 'business financing', 'credit solutions'],
  },
  about: {
    title: 'About Us',
    description: 'Learn about Trade Credit Bancorp\'s mission, values, and commitment to providing exceptional trade credit solutions.',
    keywords: ['about trade credit bancorp', 'company mission', 'trade finance experts'],
  },
  services: {
    title: 'Our Services',
    description: 'Discover our comprehensive range of trade credit solutions including factoring, credit insurance, and business financing.',
    keywords: ['trade credit services', 'factoring services', 'business financing solutions'],
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with Trade Credit Bancorp for personalized trade credit solutions and expert financial guidance.',
    keywords: ['contact trade credit bancorp', 'get quote', 'business financing contact'],
  },
  blog: {
    title: 'Blog',
    description: 'Stay updated with the latest insights, trends, and news in trade credit, factoring, and business finance.',
    keywords: ['trade credit blog', 'business finance insights', 'factoring news'],
  },
};

// SEO utilities
export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-TRADE-BC',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.linkedin.com/company/trade-credit-bancorp',
      'https://twitter.com/tradecreditbc',
    ],
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  },
};