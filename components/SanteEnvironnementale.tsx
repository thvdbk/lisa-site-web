'use client'

import { motion } from 'framer-motion'
import { Leaf, Heart, Shield, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Environnement quotidien',
    description: 'L\'air que nous respirons, les produits que nous utilisons, notre alimentation... notre environnement impacte directement notre santé.',
  },
  {
    icon: Heart,
    title: 'Prévention santé',
    description: 'En identifiant et réduisant les expositions aux polluants, nous pouvons prévenir de nombreuses pathologies liées à l\'environnement.',
  },
  {
    icon: Shield,
    title: 'Protection des plus vulnérables',
    description: 'Femmes enceintes, bébés, enfants et personnes fragiles sont particulièrement sensibles aux polluants environnementaux.',
  },
]

export default function SanteEnvironnementale() {
  return (
    <section id="sante-environnementale" className="py-20 md:py-28">
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
              Qu'est-ce que la{' '}
              <span className="text-vert-feuillage">Santé Environnementale</span> ?
            </h2>
            <p className="section-subtitle">
              La santé environnementale étudie les interactions entre notre santé et
              notre environnement : qualité de l'air, de l'eau, des sols, produits chimiques,
              ondes électromagnétiques, et bien plus encore.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group"
              >
                <div className="w-16 h-16 bg-vert-feuillage/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-vert-feuillage/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-vert-feuillage" />
                </div>
                <h3 className="font-serif text-xl font-bold text-marron-terre mb-3">
                  {feature.title}
                </h3>
                <p className="text-marron-terre/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-vert-feuillage/10 rounded-3xl p-8 md:p-12"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                Pourquoi agir maintenant ?
              </h3>
              <p className="text-marron-terre/80 leading-relaxed mb-6">
                Selon l'OMS, 23% des décès dans le monde sont liés à des facteurs environnementaux.
                La bonne nouvelle ? De nombreuses actions simples peuvent significativement réduire
                notre exposition aux polluants et améliorer notre qualité de vie.
              </p>
              <a
                href="#ateliers"
                className="inline-flex items-center gap-2 text-vert-feuillage font-medium hover:gap-3 transition-all"
              >
                Découvrir mes ateliers
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
