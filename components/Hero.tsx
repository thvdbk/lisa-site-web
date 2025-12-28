'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-vert-menthe/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-jaune-soleil/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-vert-eau/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-vert-feuillage/10 text-vert-feuillage px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              Santé Environnementale
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-marron-terre mb-6 leading-tight"
          >
            Prenez soin de votre santé{' '}
            <span className="text-vert-feuillage">en prenant soin</span>{' '}
            de votre environnement
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-marron-terre/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Éco-infirmière spécialisée en santé environnementale, je vous accompagne
            pour identifier les risques liés à votre environnement quotidien et adopter
            des pratiques plus saines pour vous et votre famille.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#ateliers" className="btn-primary">
              Découvrir mes ateliers
            </a>
            <a href="#sante-environnementale" className="btn-secondary">
              En savoir plus
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#sante-environnementale"
            className="flex flex-col items-center gap-2 text-marron-terre/60 hover:text-vert-feuillage transition-colors"
          >
            <span className="text-sm">Défiler</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
