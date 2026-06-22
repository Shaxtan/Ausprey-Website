import type { Metadata } from 'next'
import { Outfit, Poppins, Playfair_Display, DM_Sans, JetBrains_Mono, Barlow_Condensed } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { organizationSchema, websiteSchema } from '@/lib/schema'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.auspreiot.com'),
  title: {
    default: 'Auspre IoT | Igniting Possibilities — Custom IoT & Software Solutions',
    template: '%s | Auspre IoT',
  },
  description:
    'Auspre IoT delivers innovative, custom IoT and software solutions. We help businesses build scalable, secure, and future-ready technology that drives growth. 100+ happy clients, 250+ projects delivered.',
  keywords: [
    'IoT solutions',
    'Auspre IoT',
    'custom software development',
    'IoT development company',
    'industrial IoT',
    'smart device solutions',
    'embedded systems',
    'cloud IoT platform',
    'scalable software solutions',
    'enterprise software',
    'IoT consulting',
    'digital transformation',
    'igniting possibilities',
    'IoT integration',
    'software architecture',
  ],
  authors: [{ name: 'Auspre IoT', url: 'https://www.auspreiot.com' }],
  creator: 'Auspre IoT',
  publisher: 'Auspre IoT',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.auspreiot.com',
    siteName: 'Auspre IoT',
    title: 'Auspre IoT | Custom IoT & Software Solutions',
    description: 'Igniting Possibilities through innovative IoT and custom software development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Auspre IoT — Igniting Possibilities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auspre IoT | Igniting Possibilities',
    description: 'Custom IoT & software solutions for modern businesses.',
    images: ['/og-image.jpg'],
    creator: '@auspreiot',
  },
  icons: {
    icon: '/images/favicon.png',
  },
  alternates: { canonical: 'https://www.auspreiot.com' },
  verification: { google: 'YOUR_GOOGLE_VERIFICATION_CODE' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${poppins.variable} ${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${barlowCondensed.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), websiteSchema()]),
          }}
        />
      </head>
     <body className="font-sans antialiased">
  <Navbar />
  <main>{children}</main>
  <div className="mt-0">    {/* ← mt-16 = 64px gap */}
    <Footer />
  </div>
</body>
    </html>
  )
}