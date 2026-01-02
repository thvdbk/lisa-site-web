'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GraduationCap, Heart, Leaf, Users, School, Handshake, Headphones } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Éco-Infirmière',
    description: 'Formée à l\'IFSEN (Institut de Formation en Santé Environnemetale) en 2023',
  },
  {
    icon: Heart,
    title: 'Membre AMLP',
    description: 'Engagement pour les ordonnances vertes et la santé environnementale',
  },
  {
    icon: Leaf,
    title: 'Approche globale',
    description: 'Santé humaine, animale et environnementale sont indissociables',
  },
]

const offerings = [
  {
    icon: Users,
    text: 'Accompagnements personnalisés (consultations, ateliers)',
  },
  {
    icon: School,
    text: 'Interventions en école pour former les soignants de demain',
  },
  {
    icon: Leaf,
    text: 'Ressources claires pour passer à l\'action',
  },
  {
    icon: Handshake,
    text: 'Collaboration avec des partenaires engagés',
  },
]

export default function APropos() {
  return (
    <section id="a-propos" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              À propos de{' '}
              <span className="text-vert-feuillage">Lisa Bonal</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 relative"
            >
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-vert-feuillage/20 to-vert-menthe/20 overflow-hidden sticky top-28">
                <Image
                  src="/images/photo_lisa_vie_vent.jpg"
                  alt="Lisa Bonal - Éco-Infirmière et créatrice de Vie_Vent"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-jaune-soleil/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-vert-eau/30 rounded-2xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="prose prose-lg max-w-none text-marron-terre/80 leading-relaxed space-y-4 mb-10">
                {/* Citation d'accroche */}
                <p className="text-xl font-serif italic text-vert-feuillage text-center py-2">
                  "Prendre soin du vivant, du corps à la planète."
                </p>

                <p className="text-lg">
                  Hello, moi c'est Lisa, créatrice de <strong className="text-vert-feuillage">Vie_Vent</strong>. Ici, on parle de santé et d'environnement, parce que les deux sont indissociables. Mon credo ? Prendre soin de soi, c'est aussi prendre soin de ce qui nous entoure.
                </p>

                <p>
                  Mon parcours ? Un peu atypique, un mélange d'expériences qui m'ont menée à une évidence : <strong>la prévention est la meilleure des médecines</strong>. Infirmière aux urgences pédiatriques pendant trois ans, j'ai vu les limites du système de santé : le manque de temps, les déchets médicaux à usage unique, et des enfants de plus en plus touchés par des problèmes de santé.
                </p>

                <p className="text-lg font-medium text-vert-feuillage">
                  Un constat qui m'a poussée à agir autrement.
                </p>

                <p>
                  C'est là que j'ai découvert la <strong>santé environnementale</strong>. Une révélation ! Enfin, des réponses à mes questions : <em>Pourquoi tant de maladies respiratoires en ville ? Pourquoi des enfants de plus en plus jeunes touchés par des problèmes de santé ?</em> J'ai compris que la clé, c'était d'agir à la source.
                </p>

                <p>
                  Aujourd'hui, je suis <strong className="text-vert-feuillage">Éco-Infirmière</strong> et je mets mon expertise au service de la santé globale. Mon objectif ? Vous donner les clés pour réduire votre exposition aux polluants du quotidien et adopter des gestes simples, mais impactants. Parce que oui, <strong>savoir, c'est pouvoir</strong>.
                </p>

                {/* Engagements */}
                <div className="bg-vert-feuillage/5 rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-xl font-bold text-marron-terre mb-4">
                    Mes engagements concrets
                  </h3>
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex gap-3">
                      <span className="text-vert-feuillage mt-1">•</span>
                      <span>
                        <strong>Membre active de l'association AMLP</strong> (Alerte Médicale sur les Pesticides et les Perturbateurs Endocriniens) : je fais partie du groupe qui travaille sur les <strong>Ordonnances Vertes</strong>, pour intégrer la santé environnementale dans les pratiques médicales, faire le lien entre la santé et l’alimentation et agir dès les premiers instants de vie, auprès des femmes enceintes.  
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-vert-feuillage mt-1">•</span>
                      <span>
                        <strong>Infirmière en MECS</strong> (Maison d'Enfants à Caractère Social) : dans le cadre de la protection de l'enfance, j'y mets en place des <strong>ateliers sur la santé environnementale</strong> et des actions concrètes. Par exemple, nous avons remplacé <strong>toutes les barquettes en plastique</strong> par de l'<strong>inox</strong> pour les repas. Pourquoi ? Pour éviter les déchets, mais surtout pour limiter l'exposition des enfants et des professionnel·les aux <strong>perturbateurs endocriniens</strong> présents dans le plastique.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Pourquoi Vie_Vent */}
                <h3 className="font-serif text-xl font-bold text-marron-terre mt-8 mb-3">
                  Pourquoi Vie_Vent ?
                </h3>

                <p>
                  Parce que tout est lié : santé humaine, animale et environnementale. Mon approche ? <strong>La prévention primaire</strong> : agir avant que la maladie n'arrive, en s'appuyant sur des données scientifiques vulgarisées et des solutions réalistes.
                </p>

                <p className="font-medium text-marron-terre">
                  Avec Vie_Vent, je vous propose :
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 list-none pl-0 my-4">
                  {offerings.map((item) => (
                    <li key={item.text} className="flex items-start gap-2 bg-white rounded-lg p-3 shadow-sm border border-marron-terre/10">
                      <item.icon className="w-5 h-5 text-vert-feuillage flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Confidence personnelle */}
                <div className="bg-orange-doux/10 rounded-2xl p-6 my-6 border-l-4 border-orange-doux">
                  <p className="text-marron-terre mb-0 italic">
                    <strong>Petite confidence :</strong> Mon engagement pour l'environnement ne date pas d'hier. Enfant, je me perdais dans les montagnes cantaliennes de mon village, où les vaches étaient plus nombreuses que les habitants. Aujourd'hui, c'est cette même connexion à la nature qui guide mon action.
                  </p>
                </div>

                {/* Podcast */}
                <div className="bg-vert-eau/10 rounded-2xl p-6 my-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-vert-feuillage/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-vert-feuillage" />
                  </div>
                  <div>
                    <p className="text-marron-terre mb-1">
                      <strong>Envie d'en savoir plus sur mon parcours ?</strong>
                    </p>
                    <a
                      href="https://podcast.ausha.co/e-vie-demment/rediff-l-ecologie-un-moyen-preventif-pour-ameliorer-la-sante-humaine-avec-lisa-bonal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-vert-feuillage hover:text-vert-eau transition-colors font-medium inline-flex items-center gap-1"
                    >
                      Écoutez le podcast "L'écologie, un moyen préventif pour améliorer la santé humaine"
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>

                {/* Call to action */}
                <div className="text-center py-4">
                  <p className="text-lg font-medium text-marron-terre mb-3">
                    Vous voulez passer à l'action ?
                  </p>
                  <a
                    href="#contact"
                    className="inline-block btn-primary"
                  >
                    Contactez-moi
                  </a>
                  <p className="text-sm text-marron-terre/60 mt-2">
                    Pour échanger autour d'un café (ou d'un thé, pas de discrimination)
                  </p>
                  <p className="text-vert-feuillage font-medium mt-4">
                    Agissons ensemble pour une santé durable, de vous à la planète.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-sm border border-marron-terre/10"
                  >
                    <div className="w-10 h-10 bg-vert-feuillage/10 rounded-lg flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-vert-feuillage" />
                    </div>
                    <h3 className="font-medium text-marron-terre text-sm">{item.title}</h3>
                    <p className="text-xs text-marron-terre/70 mt-1">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
