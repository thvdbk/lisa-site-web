'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'vievent-cookie-consent'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté/refusé
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setIsVisible(false)
  }

  const handleClose = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'dismissed')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-marron-terre/10 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-serif text-lg font-bold text-marron-terre mb-2">
              Information sur les cookies
            </h3>
            <p className="text-sm text-marron-terre/70 mb-4">
              Ce site utilise uniquement des cookies techniques essentiels au bon fonctionnement.
              Aucun cookie publicitaire ou de tracking n'est utilisé.
              Pour en savoir plus, consultez notre{' '}
              <Link href="/politique-confidentialite" className="text-vert-feuillage hover:underline">
                politique de confidentialité
              </Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAccept}
                className="btn-primary text-sm py-2 px-4"
              >
                J'ai compris
              </button>
              <Link
                href="/politique-confidentialite"
                className="text-sm text-marron-terre/70 hover:text-vert-feuillage transition-colors py-2 px-4"
              >
                En savoir plus
              </Link>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-marron-terre/40 hover:text-marron-terre transition-colors"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
