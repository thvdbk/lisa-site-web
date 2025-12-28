'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Users, Building, Puzzle, Baby, Clock } from 'lucide-react'
import { ATELIERS } from '@/lib/constants'

const iconMap = {
  Home,
  Users,
  Building,
  Puzzle,
  Baby,
}

const colorMap: Record<string, string> = {
  'vert-feuillage': 'bg-vert-feuillage/10 text-vert-feuillage group-hover:bg-vert-feuillage/20',
  'vert-eau': 'bg-vert-eau/10 text-vert-eau group-hover:bg-vert-eau/20',
  'orange-doux': 'bg-orange-doux/10 text-orange-doux group-hover:bg-orange-doux/20',
  'jaune-soleil': 'bg-jaune-soleil/10 text-jaune-soleil group-hover:bg-jaune-soleil/20',
  'vert-menthe': 'bg-vert-menthe/10 text-vert-menthe group-hover:bg-vert-menthe/20',
}

const borderColorMap: Record<string, string> = {
  'vert-feuillage': 'border-vert-feuillage/20 hover:border-vert-feuillage/40',
  'vert-eau': 'border-vert-eau/20 hover:border-vert-eau/40',
  'orange-doux': 'border-orange-doux/20 hover:border-orange-doux/40',
  'jaune-soleil': 'border-jaune-soleil/20 hover:border-jaune-soleil/40',
  'vert-menthe': 'border-vert-menthe/20 hover:border-vert-menthe/40',
}

export default function Ateliers() {
  return (
    <section id="ateliers" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Mes <span className="text-orange-doux">Ateliers</span> & Interventions
            </h2>
            <p className="section-subtitle">
              Des accompagnements adaptés à vos besoins, que vous soyez un particulier,
              une entreprise ou une structure d'accueil.
            </p>
          </motion.div>

          {/* Ateliers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ATELIERS.map((atelier, index) => {
              const Icon = iconMap[atelier.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={atelier.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`card group border-2 ${borderColorMap[atelier.color]} relative overflow-hidden`}
                >
                  {atelier.comingSoon && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-vert-menthe/20 text-vert-feuillage px-3 py-1 rounded-full text-xs font-medium">
                      <Clock size={12} />
                      Bientôt
                    </div>
                  )}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${colorMap[atelier.color]}`}
                  >
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-marron-terre mb-3">
                    {atelier.title}
                  </h3>
                  <p className="text-marron-terre/70 leading-relaxed text-sm">
                    {atelier.description}
                  </p>
                  {!atelier.comingSoon && (
                    <Link
                      href={`/ateliers#${atelier.id}`}
                      className="inline-block mt-4 text-sm font-medium text-orange-doux hover:underline"
                    >
                      En savoir plus →
                    </Link>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-marron-terre/70 mb-4">
              Vous avez un projet ou une question sur mes interventions ?
            </p>
            <a href="#contact" className="btn-primary">
              Contactez-moi
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
