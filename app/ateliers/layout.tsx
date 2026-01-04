import { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ateliers Santé Environnementale Toulouse | Lisa Bonal Éco-Infirmière',
  description: 'Découvrez les ateliers santé environnementale de Lisa Bonal, éco-infirmière à Toulouse : Ateliers Nesting, Fresque Santé Environnementale, conférences et accompagnement en Occitanie et Haute-Garonne.',
  keywords: [
    'ateliers santé environnementale',
    'atelier santé environnementale Toulouse',
    'ateliers Lisa Bonal',
    'atelier nesting Toulouse',
    'fresque santé environnementale',
    'éco-infirmière Toulouse',
    'santé environnementale Occitanie',
    'santé environnementale Haute-Garonne',
    'perturbateurs endocriniens atelier',
    'prévention santé environnement',
  ],
  alternates: {
    canonical: '/ateliers',
  },
  openGraph: {
    title: 'Ateliers Santé Environnementale | Lisa Bonal - Éco-Infirmière Toulouse',
    description: 'Ateliers Nesting, Fresque Santé Environnementale, conférences sur les perturbateurs endocriniens. Accompagnement personnalisé en Occitanie par Lisa Bonal.',
    url: 'https://www.eco-inf.fr/ateliers',
    siteName: SITE_CONFIG.brandName,
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function AteliersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
