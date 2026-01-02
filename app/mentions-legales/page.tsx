import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Mentions Légales | ${SITE_CONFIG.brandName}`,
  description: 'Mentions légales du site VieVent - Éco-Infirmière',
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-vert-feuillage hover:text-vert-eau transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Retour à l'accueil
          </Link>

          <h1 className="font-serif text-4xl font-bold text-marron-terre mb-8">
            Mentions Légales
          </h1>

          <div className="prose prose-lg max-w-none text-marron-terre/80">
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                1. Éditeur du site
              </h2>
              <p>
                Le site <strong>{SITE_CONFIG.domain}</strong> est édité par :
              </p>
              <ul className="list-none pl-0 space-y-1">
                <li><strong>Nom :</strong> {SITE_CONFIG.ownerName}</li>
                <li><strong>Profession :</strong> {SITE_CONFIG.title}</li>
                <li><strong>Coopérative :</strong> {SITE_CONFIG.legal.cooperative}</li>
                <li><strong>SIRET :</strong> {SITE_CONFIG.legal.siret}</li>
                <li><strong>Siège social :</strong> {SITE_CONFIG.legal.address}</li>
                <li><strong>Basée à :</strong> {SITE_CONFIG.legal.basedIn}</li>
                <li><strong>Zone d'intervention :</strong> {SITE_CONFIG.legal.interventionZone} et France entière (en distanciel)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                2. Contact
              </h2>
              <ul className="list-none pl-0 space-y-1">
                <li><strong>Email :</strong> <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-vert-feuillage hover:underline">{SITE_CONFIG.contact.email}</a></li>
                <li><strong>Téléphone :</strong> <a href={SITE_CONFIG.contact.phoneLink} className="text-vert-feuillage hover:underline">{SITE_CONFIG.contact.phone}</a></li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                3. Directeur de la publication
              </h2>
              <p>
                Le directeur de la publication est <strong>{SITE_CONFIG.ownerName}</strong>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                4. Hébergeur
              </h2>
              <p>Le site est hébergé par :</p>
              <ul className="list-none pl-0 space-y-1">
                <li><strong>Nom :</strong> {SITE_CONFIG.hosting.name}</li>
                <li><strong>Adresse :</strong> {SITE_CONFIG.hosting.address}</li>
                <li><strong>Site web :</strong> <a href={SITE_CONFIG.hosting.website} target="_blank" rel="noopener noreferrer" className="text-vert-feuillage hover:underline">{SITE_CONFIG.hosting.website}</a></li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                5. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, vidéos, etc.) est protégé par le droit d'auteur.
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
                du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable
                de {SITE_CONFIG.ownerName}.
              </p>
              <p>
                Le logo et la marque {SITE_CONFIG.brandName} sont la propriété exclusive de {SITE_CONFIG.ownerName}.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                6. Données personnelles
              </h2>
              <p>
                Les informations concernant la collecte et le traitement des données personnelles sont détaillées
                dans notre <Link href="/politique-confidentialite" className="text-vert-feuillage hover:underline">Politique de Confidentialité</Link>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                7. Cookies
              </h2>
              <p>
                Ce site utilise uniquement des cookies techniques essentiels au bon fonctionnement du site.
                Aucun cookie de tracking ou publicitaire n'est utilisé. Pour plus d'informations, consultez
                notre <Link href="/politique-confidentialite" className="text-vert-feuillage hover:underline">Politique de Confidentialité</Link>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                8. Limitation de responsabilité
              </h2>
              <p>
                {SITE_CONFIG.ownerName} s'efforce de fournir sur le site des informations aussi précises que possible.
                Toutefois, elle ne pourra être tenue responsable des omissions, inexactitudes ou carences dans la mise
                à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p>
                Les informations présentes sur ce site sont données à titre indicatif et ne sauraient se substituer
                à un avis médical professionnel.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                9. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux
                français seront seuls compétents.
              </p>
            </section>
          </div>

          <p className="text-sm text-marron-terre/50 mt-12">
            Dernière mise à jour : Janvier 2026
          </p>
        </div>
      </div>
    </div>
  )
}
