'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { Phone, Mail, Send, CheckCircle, AlertCircle, Instagram, Linkedin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
  acceptPrivacy: boolean
  subscribeNewsletter: boolean
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')

    try {
      // Using Web3Forms - free and unlimited
      // You'll need to get an access key from https://web3forms.com/
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with actual key
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          newsletter: data.subscribeNewsletter ? 'Oui' : 'Non',
          to: SITE_CONFIG.contact.email,
        }),
      })

      if (response.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
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
              Me <span className="text-orange-doux">Contacter</span>
            </h2>
            <p className="section-subtitle">
              Une question, un projet, ou simplement envie d'en savoir plus ?
              N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-vert-feuillage/5 rounded-3xl p-8 h-full">
                <h3 className="font-serif text-2xl font-bold text-marron-terre mb-6">
                  Coordonnées
                </h3>

                <div className="space-y-6">
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneLink}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-vert-feuillage/10 rounded-xl flex items-center justify-center group-hover:bg-vert-feuillage/20 transition-colors">
                      <Phone className="w-5 h-5 text-vert-feuillage" />
                    </div>
                    <div>
                      <p className="text-sm text-marron-terre/60">Téléphone</p>
                      <p className="font-medium text-marron-terre group-hover:text-vert-feuillage transition-colors">
                        {SITE_CONFIG.contact.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-vert-feuillage/10 rounded-xl flex items-center justify-center group-hover:bg-vert-feuillage/20 transition-colors">
                      <Mail className="w-5 h-5 text-vert-feuillage" />
                    </div>
                    <div>
                      <p className="text-sm text-marron-terre/60">Email</p>
                      <p className="font-medium text-marron-terre group-hover:text-vert-feuillage transition-colors">
                        {SITE_CONFIG.contact.email}
                      </p>
                    </div>
                  </a>
                </div>

                {/* Réseaux sociaux */}
                <div className="mt-8">
                  <h4 className="font-medium text-marron-terre mb-4">
                    Suivez-moi sur les réseaux
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href={SITE_CONFIG.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-vert-feuillage/10 rounded-xl flex items-center justify-center hover:bg-vert-feuillage/20 transition-colors group"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-vert-feuillage" />
                    </a>
                    <a
                      href={SITE_CONFIG.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-vert-feuillage/10 rounded-xl flex items-center justify-center hover:bg-vert-feuillage/20 transition-colors group"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-vert-feuillage" />
                    </a>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-marron-terre/10">
                  <h4 className="font-medium text-marron-terre mb-3">
                    Zones d'intervention
                  </h4>
                  <p className="text-marron-terre/70 text-sm leading-relaxed">
                    Basée à <strong>{SITE_CONFIG.legal.basedIn}</strong>, j'interviens en présentiel
                    en <strong>{SITE_CONFIG.legal.interventionZone}</strong> et à distance
                    (webinaires, consultations en visio) partout en France.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-marron-terre mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Ce champ est requis' })}
                    className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors
                      ${errors.name ? 'border-red-400' : 'border-marron-terre/20'}
                      focus:border-vert-feuillage focus:outline-none focus:ring-2 focus:ring-vert-feuillage/20`}
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-marron-terre mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Ce champ est requis',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email invalide',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors
                      ${errors.email ? 'border-red-400' : 'border-marron-terre/20'}
                      focus:border-vert-feuillage focus:outline-none focus:ring-2 focus:ring-vert-feuillage/20`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-marron-terre mb-2"
                  >
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    {...register('subject', { required: 'Ce champ est requis' })}
                    className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors
                      ${errors.subject ? 'border-red-400' : 'border-marron-terre/20'}
                      focus:border-vert-feuillage focus:outline-none focus:ring-2 focus:ring-vert-feuillage/20`}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="atelier-nesting">Ateliers Nesting</option>
                    <option value="conference">Conférence / Intervention</option>
                    <option value="projet-structure">Projet en structure</option>
                    <option value="fresque">Fresque Santé Environnementale</option>
                    <option value="autre">Autre demande</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-marron-terre mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Ce champ est requis' })}
                    className={`w-full px-4 py-3 rounded-xl border bg-white transition-colors resize-none
                      ${errors.message ? 'border-red-400' : 'border-marron-terre/20'}
                      focus:border-vert-feuillage focus:outline-none focus:ring-2 focus:ring-vert-feuillage/20`}
                    placeholder="Décrivez votre projet ou votre question..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Checkbox RGPD */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="acceptPrivacy"
                      {...register('acceptPrivacy', { required: 'Vous devez accepter la politique de confidentialité' })}
                      className="mt-1 w-4 h-4 text-vert-feuillage border-marron-terre/30 rounded focus:ring-vert-feuillage"
                    />
                    <label htmlFor="acceptPrivacy" className="text-sm text-marron-terre/70">
                      J'accepte la{' '}
                      <Link href="/politique-confidentialite" className="text-vert-feuillage hover:underline">
                        politique de confidentialité
                      </Link>{' '}
                      et le traitement de mes données personnelles. *
                    </label>
                  </div>
                  {errors.acceptPrivacy && (
                    <p className="text-sm text-red-500">{errors.acceptPrivacy.message}</p>
                  )}

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="subscribeNewsletter"
                      {...register('subscribeNewsletter')}
                      className="mt-1 w-4 h-4 text-vert-feuillage border-marron-terre/30 rounded focus:ring-vert-feuillage"
                    />
                    <label htmlFor="subscribeNewsletter" className="text-sm text-marron-terre/70">
                      Je souhaite m'inscrire à la newsletter pour recevoir des conseils en santé environnementale et être informé(e) des prochains événements.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer le message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-vert-feuillage bg-vert-feuillage/10 px-4 py-3 rounded-xl">
                    <CheckCircle size={20} />
                    <span>Message envoyé avec succès ! Je vous répondrai rapidement.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl">
                    <AlertCircle size={20} />
                    <span>Une erreur est survenue. Veuillez réessayer ou me contacter directement.</span>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
