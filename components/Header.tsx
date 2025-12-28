'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-creme/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-28">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2 group">
            <Image
              src={SITE_CONFIG.logo}
              alt={`${SITE_CONFIG.brandName} - ${SITE_CONFIG.title}`}
              width={320}
              height={90}
              className="h-24 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-marron-terre hover:text-vert-feuillage transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button Desktop */}
          <a href="#contact" className="hidden md:block btn-primary">
            Me contacter
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-marron-terre"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-creme border-t border-marron-terre/10"
          >
            <ul className="container mx-auto px-4 py-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 px-4 text-marron-terre hover:bg-vert-menthe/20 rounded-lg transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block btn-primary text-center"
                >
                  Me contacter
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
