import { SITE_CONFIG } from '@/lib/constants'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VieVent',
    alternateName: ['Vie_Vent', 'VieVent', 'vie_vent'],
    url: 'https://www.eco-inf.fr',
    logo: 'https://www.eco-inf.fr/images/Vie_vent_3.png',
    image: 'https://www.eco-inf.fr/images/Vie_vent_3.png',
    description: 'Vie_Vent - Santé environnementale et accompagnement pour un mode de vie plus sain par Lisa Bonal, éco-infirmière à Toulouse.',
    founder: {
      '@type': 'Person',
      name: 'Lisa Bonal',
      jobTitle: 'Éco-Infirmière',
      description: 'Lisa Bonal est éco-infirmière à Toulouse, spécialisée en santé environnementale. Fondatrice de Vie_Vent, elle accompagne les particuliers et les structures vers un mode de vie plus sain.',
      url: 'https://www.eco-inf.fr/#a-propos',
      sameAs: [
        SITE_CONFIG.social.instagram,
        SITE_CONFIG.social.linkedin,
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contact.phoneLink,
      email: SITE_CONFIG.contact.email,
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: 'French',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toulouse',
      addressRegion: 'Occitanie',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 43.6047,
        longitude: 1.4442,
      },
      geoRadius: '100000',
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.linkedin,
    ],
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lisa Bonal',
    givenName: 'Lisa',
    familyName: 'Bonal',
    jobTitle: 'Éco-Infirmière',
    description: 'Lisa Bonal est éco-infirmière à Toulouse, fondatrice de Vie_Vent (VieVent). Spécialisée en santé environnementale, elle propose des ateliers Nesting, des fresques santé environnementale et des conférences sur les perturbateurs endocriniens en Occitanie.',
    url: 'https://www.eco-inf.fr',
    image: 'https://www.eco-inf.fr/images/photo_lisa_vie_vent.jpg',
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phoneLink,
    worksFor: {
      '@type': 'Organization',
      name: 'VieVent',
      alternateName: 'Vie_Vent',
    },
    knowsAbout: [
      'Santé environnementale',
      'Perturbateurs endocriniens',
      'Atelier Nesting',
      'Fresque Santé Environnementale',
      'Qualité de l\'air intérieur',
      'Prévention santé',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'IFSEN - Institut de Formation en Santé Environnementale',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'AMLP - Alerte Médicale sur les Pesticides et les Perturbateurs Endocriniens',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toulouse',
      addressRegion: 'Occitanie',
      addressCountry: 'FR',
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.linkedin,
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VieVent - Éco-Infirmière Santé Environnementale',
    alternateName: ['Vie_Vent', 'VieVent', 'eco-inf.fr'],
    url: 'https://www.eco-inf.fr',
    description: 'Site officiel de Lisa Bonal, éco-infirmière à Toulouse. Ateliers Nesting, Fresque Santé Environnementale, conférences et accompagnement en santé environnementale.',
    publisher: {
      '@type': 'Person',
      name: 'Lisa Bonal',
    },
    inLanguage: 'fr-FR',
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.eco-inf.fr/#business',
    name: 'VieVent - Lisa Bonal Éco-Infirmière',
    alternateName: ['Vie_Vent', 'VieVent'],
    image: 'https://www.eco-inf.fr/images/Vie_vent_3.png',
    logo: 'https://www.eco-inf.fr/images/Vie_vent_3.png',
    description: 'Éco-infirmière à Toulouse proposant des ateliers Nesting, fresques santé environnementale et accompagnement pour un mode de vie plus sain.',
    url: 'https://www.eco-inf.fr',
    telephone: SITE_CONFIG.contact.phoneLink,
    email: SITE_CONFIG.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toulouse',
      addressRegion: 'Occitanie',
      postalCode: '31000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6047,
      longitude: 1.4442,
    },
    areaServed: {
      '@type': 'State',
      name: 'Occitanie',
    },
    priceRange: '€€',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.linkedin,
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
