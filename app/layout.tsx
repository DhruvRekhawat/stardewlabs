import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 


export const metadata: Metadata = {
  title: {
    default: 'Stardew Labs | Digital Agency for Startup MVP Development',
    template: '%s | Stardew Labs'
  },
  description: 'Stardew Labs is a creative digital agency specializing in MVP development for startups. We build custom web applications, admin dashboards, inventory management, and sales systems across AI, Ecommerce, and Web 3 technologies.',
  keywords: [
    'startup MVP development',
    'digital agency',
    'web applications',
    'admin dashboards',
    'inventory management',
    'sales management',
    'AI solutions',
    'ecommerce development',
    'web 3 applications',
    'startup technology',
    'custom software development'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.stardewlabs.com',
    siteName: 'Stardew Labs',
    title: 'Stardew Labs - Digital Agency for Startup MVP Development',
    description: 'Helping startups and small businesses digitalize through custom web and mobile applications.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stardew Labs | Digital Agency for Startups',
    description: 'Custom MVP development for startups in AI, Ecommerce, and Web 3.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://www.stardewlabs.com'
  },
  icons: {
    icon: [
      { url: '/icon.svg' },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-43XZRTYSRH" />
    </html>
  );
}
