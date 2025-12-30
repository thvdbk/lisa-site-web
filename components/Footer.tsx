'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Instagram, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterStatus('loading')

    try {
      const response = await fetch('/api/newsletter/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setNewsletterStatus('success')
        setEmail('')
      } else {
        setNewsletterStatus('error')
      }
    } catch {
      setNewsletterStatus('error')
    }
  }

  return (
    <footer className="bg-marron-terre text-creme">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <Image
                src={SITE_CONFIG.logo}
                alt={`${SITE_CONFIG.brandName} - ${SITE_CONFIG.title}`}
                width={260}
                height={75}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-creme/80 text-sm leading-relaxed">
              Accompagnement en santé environnementale pour un mode de vie plus sain et respectueux de votre santé.
            </p>
            <p className="text-creme/60 text-xs mt-3">
              Basée à {SITE_CONFIG.legal.basedIn}, interventions en {SITE_CONFIG.legal.interventionZone} et France entière.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-jaune-soleil">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-creme/80 hover:text-vert-menthe transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-jaune-soleil">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneLink}`}
                  className="flex items-center gap-2 text-creme/80 hover:text-vert-menthe transition-colors text-sm"
                >
                  <Phone size={16} />
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center gap-2 text-creme/80 hover:text-vert-menthe transition-colors text-sm"
                >
                  <Mail size={16} />
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-creme/80 hover:text-vert-menthe transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-creme/80 hover:text-vert-menthe transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-jaune-soleil">
              Newsletter
            </h3>
            <p className="text-creme/80 text-sm mb-4">
              Recevez des conseils en santé environnementale et les dates des prochains événements.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  className="flex-1 px-3 py-2 rounded-lg bg-creme/10 border border-creme/20 text-creme placeholder:text-creme/50 text-sm focus:outline-none focus:border-vert-menthe"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="px-3 py-2 bg-vert-feuillage hover:bg-vert-eau text-white rounded-lg transition-colors disabled:opacity-50"
                  aria-label="S'inscrire"
                >
                  {newsletterStatus === 'loading' ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin block" />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </div>
              {newsletterStatus === 'success' && (
                <p className="flex items-center gap-1 text-vert-menthe text-xs">
                  <CheckCircle size={14} />
                  Inscription confirmée !
                </p>
              )}
              {newsletterStatus === 'error' && (
                <p className="flex items-center gap-1 text-orange-doux text-xs">
                  <AlertCircle size={14} />
                  Erreur, réessayez.
                </p>
              )}
              <p className="text-creme/50 text-xs">
                En vous inscrivant, vous acceptez notre{' '}
                <Link href="/politique-confidentialite" className="underline hover:text-creme/80">
                  politique de confidentialité
                </Link>.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-creme/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-creme/60 text-sm">
            © {currentYear} {SITE_CONFIG.brandName} - {SITE_CONFIG.ownerName}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/mentions-legales"
              className="text-creme/60 hover:text-vert-menthe transition-colors"
            >
              Mentions légales
            </Link>
            <span className="text-creme/40">|</span>
            <Link
              href="/politique-confidentialite"
              className="text-creme/60 hover:text-vert-menthe transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
