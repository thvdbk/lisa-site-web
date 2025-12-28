import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-marron-terre text-creme">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-jaune-soleil">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-creme/80 hover:text-vert-menthe transition-colors text-sm"
                  >
                    {link.label}
                  </a>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-creme/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-creme/60 text-sm">
            © {currentYear} {SITE_CONFIG.brandName} - {SITE_CONFIG.ownerName}. Tous droits réservés.
          </p>
          <a
            href="#mentions-legales"
            className="text-creme/60 hover:text-vert-menthe transition-colors text-sm"
          >
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  )
}
