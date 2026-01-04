import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Politique de Confidentialité | ${SITE_CONFIG.brandName}`,
  description: 'Politique de confidentialité et protection des données personnelles - Vie_Vent',
}

export default function PolitiqueConfidentialitePage() {
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
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none text-marron-terre/80">
            <p className="lead text-lg">
              La protection de vos données personnelles est une priorité pour {SITE_CONFIG.brandName}.
              Cette politique de confidentialité vous informe sur la manière dont vos données sont collectées,
              utilisées et protégées conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                1. Responsable du traitement
              </h2>
              <p>Le responsable du traitement des données personnelles est :</p>
              <ul className="list-none pl-0 space-y-1">
                <li><strong>Nom :</strong> {SITE_CONFIG.ownerName}</li>
                <li><strong>Email :</strong> <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-vert-feuillage hover:underline">{SITE_CONFIG.contact.email}</a></li>
                <li><strong>Adresse :</strong> {SITE_CONFIG.legal.address}</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                2. Données collectées
              </h2>
              <p>Nous collectons les données personnelles suivantes :</p>

              <h3 className="font-serif text-xl font-semibold text-marron-terre mt-6 mb-3">
                Via le formulaire de contact :
              </h3>
              <ul>
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Sujet de la demande</li>
                <li>Message</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-marron-terre mt-6 mb-3">
                Via l'inscription à la newsletter :
              </h3>
              <ul>
                <li>Adresse email</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-marron-terre mt-6 mb-3">
                Données techniques :
              </h3>
              <p>
                Lors de votre navigation, des données techniques peuvent être collectées automatiquement
                (adresse IP, type de navigateur, pages visitées). Ces données sont utilisées uniquement
                à des fins statistiques et de sécurité.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                3. Finalités du traitement
              </h2>
              <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
              <ul>
                <li><strong>Formulaire de contact :</strong> répondre à vos demandes d'information, devis ou prise de rendez-vous</li>
                <li><strong>Newsletter :</strong> vous envoyer des actualités, conseils en santé environnementale et informations sur les prochains événements</li>
                <li><strong>Amélioration du site :</strong> analyser la fréquentation et améliorer l'expérience utilisateur</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                4. Base légale du traitement
              </h2>
              <p>Le traitement de vos données repose sur :</p>
              <ul>
                <li><strong>Votre consentement :</strong> pour l'inscription à la newsletter</li>
                <li><strong>L'exécution de mesures précontractuelles :</strong> pour répondre à vos demandes via le formulaire de contact</li>
                <li><strong>L'intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité du site</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                5. Durée de conservation
              </h2>
              <p>Vos données sont conservées pendant les durées suivantes :</p>
              <ul>
                <li><strong>Données du formulaire de contact :</strong> 3 ans à compter du dernier contact</li>
                <li><strong>Données de la newsletter :</strong> jusqu'à votre désinscription</li>
                <li><strong>Données techniques :</strong> 13 mois maximum</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                6. Destinataires des données
              </h2>
              <p>
                Vos données personnelles sont destinées uniquement à {SITE_CONFIG.ownerName} et ne sont
                jamais vendues ni cédées à des tiers à des fins commerciales.
              </p>
              <p>
                Les seuls tiers pouvant avoir accès à vos données sont :
              </p>
              <ul>
                <li><strong>Notre hébergeur ({SITE_CONFIG.hosting.name}) :</strong> pour le stockage sécurisé des données</li>
                <li><strong>Notre service d'envoi d'emails :</strong> pour la gestion de la newsletter et des réponses au formulaire de contact</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                7. Vos droits
              </h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul>
                <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
                <li><strong>Droit de rectification :</strong> demander la correction de données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de retirer votre consentement :</strong> à tout moment pour la newsletter</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à :{' '}
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-vert-feuillage hover:underline">
                  {SITE_CONFIG.contact.email}
                </a>
              </p>
              <p>
                Vous disposez également du droit d'introduire une réclamation auprès de la CNIL
                (Commission Nationale de l'Informatique et des Libertés) :{' '}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-vert-feuillage hover:underline">
                  www.cnil.fr
                </a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                8. Cookies
              </h2>
              <p>
                Ce site utilise uniquement des <strong>cookies techniques essentiels</strong> au bon fonctionnement
                du site. Ces cookies ne nécessitent pas votre consentement car ils sont strictement nécessaires.
              </p>
              <p>
                <strong>Aucun cookie de tracking, publicitaire ou de mesure d'audience tiers n'est utilisé sur ce site.</strong>
              </p>
              <p>
                Le cookie utilisé stocke uniquement votre préférence concernant le bandeau d'information cookies
                (acceptation ou refus), afin de ne pas vous le présenter à chaque visite.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                9. Transfert de données hors UE
              </h2>
              <p>
                Notre site est hébergé par Vercel Inc., dont les serveurs peuvent être situés aux États-Unis
                ou dans d'autres pays hors de l'Union Européenne. Vercel adhère au Data Privacy Framework (DPF)
                UE-États-Unis, garantissant un niveau de protection adéquat de vos données personnelles
                conformément aux exigences du RGPD.
              </p>
              <p>
                De même, notre service d'envoi d'emails (Brevo) peut traiter certaines données hors UE,
                dans le respect des clauses contractuelles types approuvées par la Commission Européenne.
              </p>
              <p>
                Pour plus d'informations, vous pouvez consulter la{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-vert-feuillage hover:underline">
                  politique de confidentialité de Vercel
                </a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                10. Sécurité des données
              </h2>
              <p>
                Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger
                vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction :
              </p>
              <ul>
                <li>Connexion sécurisée (HTTPS)</li>
                <li>Hébergement sur des serveurs sécurisés</li>
                <li>Accès restreint aux données personnelles</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-marron-terre mb-4">
                11. Modification de la politique
              </h2>
              <p>
                Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière
                mise à jour est indiquée en bas de cette page. Nous vous encourageons à consulter régulièrement
                cette page pour prendre connaissance de toute modification.
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
