'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Home, Users, Building, Puzzle, Baby, ArrowLeft, Clock } from 'lucide-react'
import { ATELIERS } from '@/lib/constants'
import Link from 'next/link'

const iconMap = {
  Home,
  Users,
  Building,
  Puzzle,
  Baby,
}

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  'vert-feuillage': {
    bg: 'bg-vert-feuillage/10',
    text: 'text-vert-feuillage',
    border: 'border-vert-feuillage',
  },
  'vert-eau': {
    bg: 'bg-vert-eau/10',
    text: 'text-vert-eau',
    border: 'border-vert-eau',
  },
  'orange-doux': {
    bg: 'bg-orange-doux/10',
    text: 'text-orange-doux',
    border: 'border-orange-doux',
  },
  'jaune-soleil': {
    bg: 'bg-jaune-soleil/10',
    text: 'text-jaune-soleil',
    border: 'border-jaune-soleil',
  },
  'vert-menthe': {
    bg: 'bg-vert-menthe/10',
    text: 'text-vert-menthe',
    border: 'border-vert-menthe',
  },
}

function parseMarkdown(text: string) {
  return text
    .split('\n\n')
    .map((paragraph, i) => {
      if (paragraph.startsWith('**') && paragraph.includes(':**')) {
        const [title, ...rest] = paragraph.split(':**')
        return (
          <div key={i} className="mb-4">
            <h4 className="font-semibold text-marron-terre mb-2">
              {title.replace(/\*\*/g, '')} :
            </h4>
            <p className="text-marron-terre/80">{rest.join(':**')}</p>
          </div>
        )
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('- '))
        return (
          <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-marron-terre/80">
            {items.map((item, j) => (
              <li key={j}>{item.replace('- ', '')}</li>
            ))}
          </ul>
        )
      }
      if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
        return (
          <p key={i} className="italic text-marron-terre/60 mb-4">
            {paragraph.replace(/\*/g, '')}
          </p>
        )
      }
      return (
        <p key={i} className="text-marron-terre/80 mb-4">
          {paragraph}
        </p>
      )
    })
}

export default function AteliersPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <Link
            href="/#ateliers"
            className="inline-flex items-center gap-2 text-vert-feuillage hover:text-vert-eau transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            Retour à l'accueil
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-marron-terre mb-6">
            Mes <span className="text-orange-doux">Ateliers</span> & Interventions
          </h1>
          <p className="text-lg text-marron-terre/80 max-w-2xl mx-auto">
            Découvrez en détail mes différentes offres d'accompagnement en santé environnementale,
            adaptées à vos besoins que vous soyez un particulier, une entreprise ou une structure d'accueil.
          </p>
        </motion.div>

        {/* Ateliers sections */}
        <div className="space-y-24">
          {ATELIERS.map((atelier, index) => {
            const Icon = iconMap[atelier.icon as keyof typeof iconMap]
            const colors = colorClasses[atelier.color]
            const isEven = index % 2 === 0

            return (
              <motion.section
                key={atelier.id}
                id={atelier.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className={`aspect-[4/3] rounded-3xl overflow-hidden ${colors.bg}`}>
                      {atelier.image ? (
                        <div className="w-full h-full flex items-center justify-center">
                          {/* Placeholder for image */}
                          <div className="text-center p-8">
                            <div className={`w-24 h-24 ${colors.bg} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                              {Icon && <Icon className={`w-12 h-12 ${colors.text}`} />}
                            </div>
                            <p className="text-marron-terre/60 text-sm">
                              Photo à ajouter
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          {Icon && <Icon className={`w-24 h-24 ${colors.text}`} />}
                        </div>
                      )}
                    </div>
                    {atelier.comingSoon && (
                      <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-vert-feuillage px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        <Clock size={16} />
                        Prochainement
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm font-medium mb-4`}>
                      {Icon && <Icon size={18} />}
                      {atelier.subtitle}
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-marron-terre mb-6">
                      {atelier.title}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      {parseMarkdown(atelier.longDescription || atelier.description)}
                    </div>
                    {!atelier.comingSoon && (
                      <Link
                        href="/#contact"
                        className="inline-block btn-primary mt-6"
                      >
                        Me contacter pour cet atelier
                      </Link>
                    )}
                  </div>
                </div>
              </motion.section>
            )
          })}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center bg-vert-feuillage/10 rounded-3xl p-12"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-marron-terre mb-4">
            Vous avez un projet en tête ?
          </h3>
          <p className="text-marron-terre/80 mb-8 max-w-xl mx-auto">
            Chaque intervention est adaptée à vos besoins. Contactez-moi pour discuter
            de votre projet et construire ensemble un accompagnement sur mesure.
          </p>
          <Link href="/#contact" className="btn-primary">
            Discutons de votre projet
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
