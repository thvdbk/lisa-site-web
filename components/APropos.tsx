'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Heart, Leaf } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Infirmière diplômée',
    description: '6 ans d\'expérience, spécialisée en santé environnementale',
  },
  {
    icon: Heart,
    title: 'Passionnée par le vivant',
    description: 'Comprendre les liens entre santé humaine, animale et environnementale',
  },
  {
    icon: Leaf,
    title: 'Éco-infirmière',
    description: 'Sensibiliser, accompagner et montrer que des alternatives existent',
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
                {/* Placeholder for Lisa's photo */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-vert-feuillage/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-serif text-vert-feuillage">LB</span>
                    </div>
                    <p className="text-marron-terre/60 text-sm">
                      Photo de Lisa à ajouter
                    </p>
                  </div>
                </div>
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
                <p className="text-xl font-medium text-marron-terre">
                  Je m'appelle Lisa, j'ai 27 ans. Je n'ai pas d'enfants, ni toutes mes dents mais j'aimerais bien contribuer à un avenir plus vertueux pour montrer la beauté de ce monde.
                </p>

                <p>
                  En parlant de vertueux, j'adore le <span className="text-vert-feuillage font-medium">vert</span>, c'est ma couleur préférée. Peut-être parce que le vert me fait penser à la nature, aux végétaux, au calme.
                </p>

                <p>
                  Parfois je suis un peu vert(e) de rage à l'idée que ce monde change et qu'hier ne sera plus comme demain. Vous aussi ? Vous souffrez peut-être de <em>solastalgie</em> mais pas de panique, ce n'est pas une maladie, par contre elle est contagieuse.
                </p>

                <div className="bg-vert-feuillage/5 rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-xl font-bold text-marron-terre mb-3">
                    Retour vers le passé...
                  </h3>
                  <p className="mb-3">
                    Il y a 6 ans, me voilà avec mon diplôme d'infirmière en poche, youhou je vais pouvoir sauver le monde, enfin c'est ce que je pensais… C'est ce que je pensais avant d'attaquer mes études car très vite, j'ai déchanté et je me suis aperçue que ce métier dont je rêvais, était tout simplement un rêve et pas la réalité.
                  </p>
                  <p className="mb-3">
                    La réalité, c'était le manque de temps, le nombre trop important de patients pour 1 seule personne, des soins curatifs, toujours plus de soins curatifs, des heures supplémentaires, pas de reconnaissance de la part de la hiérarchie et des journées à rallonges.
                  </p>
                  <p>
                    La réalité c'était un impact sur l'environnement, des tonnes de plastiques à usage unique jetés, des flacons ouverts encore remplis jetés, de la nourriture gaspillée, des patients de plus en plus malades, de plus en plus jeunes.
                  </p>
                </div>

                <p className="text-lg font-medium text-vert-feuillage">
                  J'ai donc pris ma vie en main.
                </p>

                <p>
                  Des remises en questions, des réflexions, puis une formation sur la santé environnementale. Oui, enfin, j'avais trouvé quelque chose qui m'animait ! Comprendre les liens entre santé et environnement, voilà ce que je recherchais.
                </p>

                <p>
                  Mon attrait pour l'environnement a toujours été là. Petite, j'errais dans mon village accueillant plus de vaches que d'habitants, je randonnais les week-ends arpentant les montagnes cantaliennes, écoutant les bruits de la nature.
                </p>

                <p>
                  Mais un constat me faisait revenir à la réalité. Le monde change, les températures augmentent impactant des conditions de vie dignes pour l'avenir, pourquoi dans une grande ville comme Paris, les enfants souffraient autant de maladies respiratoires ?
                </p>

                <p className="text-center text-xl font-serif text-marron-terre py-4">
                  Pourquoi ? Pourquoi ? Pourquoi ?<br />
                  <span className="text-base">Je devais comprendre…</span>
                </p>

                <p>
                  Et me voilà 6 ans après, fière de me présenter en tant qu'<strong className="text-vert-feuillage">éco-infirmière</strong>. Éco, pour environnement, écologie. Ma formation m'a permis d'en apprendre davantage sur le vivant, la nature, nos expositions quotidiennes avec des polluants et surtout de comprendre pourquoi nous tombions malade.
                </p>

                <p>
                  Maintenant que j'ai compris (pas tout encore bien sûr) je peux expliquer plus sereinement, je peux vous aider à éviter ces expositions, je peux sensibiliser et montrer que des alternatives existent.
                </p>

                <div className="bg-orange-doux/10 rounded-2xl p-6 my-6 border-l-4 border-orange-doux">
                  <p className="text-marron-terre font-medium mb-0">
                    S'il y a bien quelque chose dont je suis sûre, c'est que <strong>tout est lié</strong> : la santé humaine, animale et environnementale sont liées et si l'un est pollué alors les autres le seront aussi.
                  </p>
                </div>

                <p className="text-xl text-center font-medium text-marron-terre">
                  Vous souhaitez en savoir plus ?<br />
                  <span className="text-vert-feuillage">Vous êtes au bon endroit.</span>
                </p>
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
