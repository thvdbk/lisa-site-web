import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { SITE_CONFIG } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.title} | Santé Environnementale Toulouse`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: 'Lisa Bonal, éco-infirmière à Toulouse. Ateliers Nesting, Fresque Santé Environnementale, conférences sur les perturbateurs endocriniens. Accompagnement pour un mode de vie plus sain en Occitanie.',
  keywords: [
    'éco-infirmière',
    'éco-infirmière Toulouse',
    'santé environnementale',
    'santé environnementale Occitanie',
    'atelier nesting',
    'atelier nesting Toulouse',
    'fresque santé environnementale',
    'perturbateurs endocriniens',
    'prévention santé',
    'environnement sain',
    'ordonnances vertes',
    'VieVent',
    'Vie_Vent',
    'vie_vent',
    'Lisa Bonal',
    'pollution intérieure',
    'qualité air intérieur',
  ],
  authors: [{ name: SITE_CONFIG.ownerName }],
  creator: SITE_CONFIG.ownerName,
  metadataBase: new URL('https://www.eco-inf.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.title} | Santé Environnementale Toulouse`,
    description: 'Lisa Bonal, éco-infirmière à Toulouse. Ateliers Nesting, Fresque Santé Environnementale, conférences. Accompagnement pour un mode de vie plus sain.',
    url: 'https://www.eco-inf.fr',
    siteName: SITE_CONFIG.brandName,
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VieVent - Éco-Infirmière Santé Environnementale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.title}`,
    description: 'Éco-infirmière à Toulouse. Ateliers et accompagnement en santé environnementale.',
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
  verification: {
    // Tu ajouteras le code Google Search Console ici
    // google: 'ton-code-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
