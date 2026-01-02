'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink, Users, Lock, Home, Building, Puzzle, Phone, Play } from 'lucide-react'
import { EVENEMENTS, ATELIERS, type Evenement } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Users,
  Building,
  Puzzle,
}

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
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

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function formatDateShort(dateStr: string): { day: string; month: string } {
  const date = new Date(dateStr)
  return {
    day: date.getDate().toString(),
    month: date.toLocaleDateString('fr-FR', { month: 'short' }).replace('.', ''),
  }
}

function isEventPast(dateStr: string): boolean {
  const eventDate = new Date(dateStr)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return eventDate < today
}

function EventCard({ event, isPast }: { event: Evenement; isPast: boolean }) {
  const atelier = ATELIERS.find((a) => a.id === event.atelierType)
  const colors = atelier ? colorMap[atelier.color] : colorMap['vert-feuillage']
  const Icon = atelier ? iconMap[atelier.icon as keyof typeof iconMap] : null
  const dateShort = formatDateShort(event.date)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`bg-white rounded-2xl border-2 ${isPast ? 'border-marron-terre/10 opacity-75' : colors.border + '/30'} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Date badge */}
        <div className={`${isPast ? 'bg-marron-terre/10' : colors.bg} p-6 flex flex-col items-center justify-center min-w-[120px]`}>
          <span className={`text-4xl font-bold ${isPast ? 'text-marron-terre/60' : colors.text}`}>
            {dateShort.day}
          </span>
          <span className={`text-sm uppercase font-medium ${isPast ? 'text-marron-terre/60' : colors.text}`}>
            {dateShort.month}
          </span>
          {isPast && (
            <span className="mt-2 text-xs bg-marron-terre/20 text-marron-terre/70 px-2 py-1 rounded-full">
              Passé
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              {Icon && (
                <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${colors.text}`} />
                </div>
              )}
              <span className={`text-xs font-medium ${colors.text} ${colors.bg} px-2 py-1 rounded-full`}>
                {atelier?.title || 'Événement'}
              </span>
            </div>
            {!event.isPublic && (
              <span className="flex items-center gap-1 text-xs text-marron-terre/60 bg-marron-terre/10 px-2 py-1 rounded-full">
                <Lock size={12} />
                Privé
              </span>
            )}
          </div>

          <h3 className="font-serif text-xl font-bold text-marron-terre mb-3">
            {event.title}
          </h3>

          <p className="text-marron-terre/70 text-sm mb-4 line-clamp-4">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-marron-terre/70 mb-4">
            <div className="flex items-center gap-2">
              <Calendar size={16} className={colors.text} />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className={colors.text} />
              <span>{event.startTime} - {event.endTime}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm text-marron-terre/70 mb-4">
            <MapPin size={16} className={`${colors.text} flex-shrink-0 mt-0.5`} />
            <div>
              <span className="font-medium">{event.location}</span>
              {event.address && (
                <span className="block text-marron-terre/50">{event.address}</span>
              )}
            </div>
          </div>

          {/* Contact info pour inscription */}
          {event.contact && (
            <div className="flex items-start gap-2 text-sm text-marron-terre/70 mb-4">
              <Phone size={16} className={`${colors.text} flex-shrink-0 mt-0.5`} />
              <span>{event.contact}</span>
            </div>
          )}

          {/* Boutons d'action */}
          <div className="flex flex-wrap gap-3">
            {!isPast && event.isPublic && event.registrationLink && (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary text-sm"
              >
                S'inscrire
                <ExternalLink size={14} />
              </a>
            )}

            {!isPast && event.isPublic && !event.registrationLink && !event.contact && (
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 btn-primary text-sm"
              >
                Me contacter pour s'inscrire
              </Link>
            )}

            {/* Lien replay pour événements passés */}
            {isPast && event.replayLink && (
              <a
                href={event.replayLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-doux text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-orange-doux/90 transition-colors"
              >
                <Play size={14} />
                Voir le replay
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function EvenementsPage() {
  const [showPast, setShowPast] = useState(false)

  const { upcomingEvents, pastEvents } = useMemo(() => {
    const publicEvents = EVENEMENTS.filter((e) => e.isPublic)
    const upcoming = publicEvents
      .filter((e) => !isEventPast(e.date))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    const past = publicEvents
      .filter((e) => isEventPast(e.date))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return { upcomingEvents: upcoming, pastEvents: past }
  }, [])

  const displayedEvents = showPast ? pastEvents : upcomingEvents

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-vert-feuillage hover:text-vert-eau transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            Retour à l'accueil
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-marron-terre mb-6">
            Mes <span className="text-orange-doux">Événements</span>
          </h1>
          <p className="text-lg text-marron-terre/80 max-w-2xl mx-auto">
            Retrouvez tous mes ateliers, conférences et interventions à venir.
            Inscrivez-vous pour participer aux événements ouverts au public.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-marron-terre/10 rounded-full p-1">
            <button
              onClick={() => setShowPast(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !showPast
                  ? 'bg-vert-feuillage text-white shadow-md'
                  : 'text-marron-terre/70 hover:text-marron-terre'
              }`}
            >
              À venir ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setShowPast(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                showPast
                  ? 'bg-marron-terre text-white shadow-md'
                  : 'text-marron-terre/70 hover:text-marron-terre'
              }`}
            >
              Passés ({pastEvents.length})
            </button>
          </div>
        </motion.div>

        {/* Events list */}
        <div key={showPast ? 'past' : 'upcoming'} className="max-w-4xl mx-auto space-y-6">
          {displayedEvents.length > 0 ? (
            displayedEvents.map((event, index) => (
              <motion.div
                key={`${showPast ? 'past' : 'upcoming'}-${event.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <EventCard event={event} isPast={showPast} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-marron-terre/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-marron-terre/40" />
              </div>
              <h3 className="font-serif text-xl font-bold text-marron-terre mb-2">
                {showPast ? 'Aucun événement passé' : 'Aucun événement à venir'}
              </h3>
              <p className="text-marron-terre/60 max-w-md mx-auto">
                {showPast
                  ? 'Les événements passés apparaîtront ici.'
                  : 'De nouveaux événements seront bientôt annoncés. Suivez-moi sur les réseaux sociaux pour être informé(e) !'}
              </p>
            </motion.div>
          )}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-vert-feuillage/10 rounded-3xl p-12 max-w-4xl mx-auto"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-marron-terre mb-4">
            Vous souhaitez organiser un événement ?
          </h3>
          <p className="text-marron-terre/80 mb-8 max-w-xl mx-auto">
            Je propose des ateliers et conférences sur mesure pour les entreprises,
            collectivités et associations. Contactez-moi pour discuter de votre projet.
          </p>
          <Link href="/#contact" className="btn-primary">
            Me contacter
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
