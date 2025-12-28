export const SITE_CONFIG = {
  name: 'VieVent',
  brandName: 'VieVent',
  ownerName: 'Lisa Bonal',
  title: 'Éco-Infirmière',
  description: 'Santé environnementale - Accompagnement pour un mode de vie plus sain',
  logo: '/images/Vie_vent_3.png',
  contact: {
    phone: '07 63 72 62 85',
    phoneLink: 'tel:+33763726285',
    email: 'lisabonal@eco-inf.fr',
  },
  social: {
    instagram: 'https://www.instagram.com/lisa_infirmierengagee',
    linkedin: 'https://www.linkedin.com/in/lisa-bonal',
  },
  domain: 'eco-inf.fr',
}

export const NAV_LINKS = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#sante-environnementale', label: 'Santé Environnementale' },
  { href: '/ateliers', label: 'Ateliers' },
  { href: '/evenements', label: 'Événements' },
  { href: '/#a-propos', label: 'À propos' },
  { href: '/#contact', label: 'Contact' },
]

export const ATELIERS = [
  {
    id: 'eco-sante',
    title: 'Ateliers Éco-Santé',
    subtitle: 'Pour un habitat plus sain',
    description: 'Accompagnement personnalisé pour créer un environnement domestique plus sain. Identifiez les sources de pollution intérieure et adoptez des alternatives plus sûres pour votre santé.',
    longDescription: `Les ateliers Éco-Santé vous accompagnent dans la création d'un environnement domestique plus sain pour vous et votre famille.

**Ce que nous abordons :**
- Identification des sources de pollution intérieure (produits ménagers, cosmétiques, matériaux)
- Analyse de la qualité de l'air intérieur
- Alternatives saines et accessibles pour le quotidien
- Lecture et compréhension des étiquettes
- Conseils personnalisés selon votre situation

**Format :** Atelier individuel ou en petit groupe (2-3h)
**Public :** Particuliers, familles, futurs parents`,
    icon: 'Home',
    color: 'vert-feuillage',
    image: '/images/ateliers/eco-sante.jpg',
  },
  {
    id: 'conferences',
    title: 'Conférences & Interventions',
    subtitle: 'Sensibilisation tous publics',
    description: 'Webinaires, interventions en milieu scolaire, ateliers sur l\'éco-anxiété... Sensibilisation à la santé environnementale adaptée à tous les publics.',
    longDescription: `Des interventions adaptées à chaque public pour sensibiliser aux enjeux de la santé environnementale.

**Types d'interventions :**
- Conférences en entreprise ou collectivités
- Webinaires interactifs
- Interventions en milieu scolaire (primaire, collège, lycée)
- Ateliers sur l'éco-anxiété et la gestion des émotions face au changement climatique

**Thématiques abordées :**
- Introduction à la santé environnementale
- Perturbateurs endocriniens au quotidien
- Qualité de l'air intérieur et extérieur
- Alimentation et environnement
- Éco-anxiété : comprendre et agir

**Format :** De 1h à une demi-journée selon vos besoins`,
    icon: 'Users',
    color: 'vert-eau',
    image: '/images/ateliers/conferences.jpg',
  },
  {
    id: 'projets-ov',
    title: 'Projets en Structure',
    subtitle: 'Accompagnement sur mesure',
    description: 'Mise en place de projets de santé environnementale au sein de votre organisation. Accompagnement sur mesure pour les établissements de santé et structures d\'accueil.',
    longDescription: `Un accompagnement complet pour intégrer la santé environnementale au cœur de votre structure.

**Pour qui ?**
- Établissements de santé (hôpitaux, cliniques, EHPAD)
- Structures petite enfance (crèches, MAM)
- Établissements scolaires
- Entreprises souhaitant améliorer leur environnement de travail

**Notre accompagnement :**
- Audit environnemental de vos locaux
- Formation du personnel aux bonnes pratiques
- Mise en place d'un plan d'action concret
- Suivi et évaluation des améliorations
- Accompagnement vers des labels (crèche sans perturbateurs endocriniens, etc.)

**Format :** Projet sur plusieurs mois, adapté à vos contraintes`,
    icon: 'Building',
    color: 'orange-doux',
    image: '/images/ateliers/projets-structure.jpg',
  },
  {
    id: 'fresque',
    title: 'Fresque Santé Environnementale',
    subtitle: 'Atelier collaboratif',
    description: 'Atelier collaboratif en entreprise pour comprendre les liens entre environnement et santé. Une expérience ludique et pédagogique pour vos équipes.',
    longDescription: `La Fresque de la Santé Environnementale est un atelier collaboratif et ludique pour comprendre les liens entre notre environnement et notre santé.

**Le concept :**
Inspirée de la Fresque du Climat, cette fresque permet de visualiser les mécanismes qui relient notre environnement (air, eau, alimentation, produits du quotidien) à notre santé.

**Déroulement :**
- Constitution d'équipes de 4 à 8 personnes
- Construction collective de la fresque à partir de cartes
- Échanges et débats sur les solutions
- Plan d'action individuel et collectif

**Bénéfices :**
- Compréhension globale des enjeux
- Cohésion d'équipe
- Prise de conscience collective
- Passage à l'action facilité

**Format :** 3h | **Participants :** 8 à 30 personnes`,
    icon: 'Puzzle',
    color: 'jaune-soleil',
    image: '/images/ateliers/fresque.jpg',
  },
  {
    id: 'consultations',
    title: 'Consultations Personnalisées',
    subtitle: 'Accompagnement périnatalité',
    description: 'Prochainement : accompagnement individualisé pour les femmes enceintes, futurs et jeunes parents. Accueillez bébé dans un environnement sain et serein.',
    longDescription: `Un accompagnement personnalisé pour les futurs et jeunes parents souhaitant accueillir bébé dans un environnement sain.

**Ce service comprend :**
- Bilan personnalisé de votre environnement
- Conseils pour préparer la chambre de bébé
- Guide des produits sains (cosmétiques, couches, alimentation)
- Accompagnement pendant la grossesse et les premiers mois
- Suivi à distance entre les consultations

**Pourquoi c'est important ?**
Les 1000 premiers jours de vie sont cruciaux pour le développement de l'enfant. Réduire l'exposition aux polluants pendant cette période est essentiel.

**Format :** Consultations individuelles (visio ou présentiel)

*Service disponible prochainement*`,
    icon: 'Baby',
    color: 'vert-menthe',
    image: '/images/ateliers/consultations.jpg',
    comingSoon: true,
  },
]

export type Evenement = {
  id: string
  title: string
  atelierType: string // ID de l'atelier correspondant
  date: string // Format ISO: YYYY-MM-DD
  startTime: string // Format: HH:MM
  endTime: string // Format: HH:MM
  location: string
  address?: string
  description: string
  registrationLink?: string // Lien d'inscription si ouvert au public
  isPublic: boolean // true si ouvert au public, false si privé
}

export const EVENEMENTS: Evenement[] = [
  // Exemples d'événements - à personnaliser
  {
    id: 'fresque-janvier-2025',
    title: 'Fresque Santé Environnementale',
    atelierType: 'fresque',
    date: '2025-01-25',
    startTime: '14:00',
    endTime: '17:00',
    location: 'La Maison des Associations',
    address: '15 rue de la Santé, 75013 Paris',
    description: 'Venez participer à un atelier collaboratif pour comprendre les liens entre notre environnement et notre santé. Places limitées à 20 participants.',
    registrationLink: 'https://example.com/inscription',
    isPublic: true,
  },
  {
    id: 'webinaire-fevrier-2025',
    title: 'Webinaire : Les perturbateurs endocriniens au quotidien',
    atelierType: 'conferences',
    date: '2025-02-15',
    startTime: '18:30',
    endTime: '20:00',
    location: 'En ligne (Zoom)',
    description: 'Un webinaire interactif pour apprendre à identifier et éviter les perturbateurs endocriniens dans notre quotidien. Gratuit et ouvert à tous.',
    registrationLink: 'https://example.com/webinaire',
    isPublic: true,
  },
  {
    id: 'atelier-eco-sante-mars-2025',
    title: 'Atelier Éco-Santé : Préparer l\'arrivée de bébé',
    atelierType: 'eco-sante',
    date: '2025-03-08',
    startTime: '10:00',
    endTime: '12:30',
    location: 'Cabinet VieVent',
    address: '25 avenue de la Nature, 69000 Lyon',
    description: 'Atelier dédié aux futurs parents pour créer un environnement sain pour l\'arrivée de bébé. Chambre, produits de soin, alimentation : tout pour bien commencer.',
    registrationLink: 'https://example.com/atelier-bebe',
    isPublic: true,
  },
  // Exemple d'événement passé
  {
    id: 'conference-decembre-2024',
    title: 'Conférence : Introduction à la santé environnementale',
    atelierType: 'conferences',
    date: '2024-12-10',
    startTime: '19:00',
    endTime: '21:00',
    location: 'Médiathèque centrale',
    address: '10 place du Livre, 69001 Lyon',
    description: 'Une conférence pour découvrir les bases de la santé environnementale et comprendre son impact sur notre bien-être quotidien.',
    isPublic: true,
  },
  // Exemple d'événement privé
  {
    id: 'formation-entreprise-janvier-2025',
    title: 'Formation en entreprise',
    atelierType: 'projets-ov',
    date: '2025-01-20',
    startTime: '09:00',
    endTime: '17:00',
    location: 'Entreprise cliente',
    description: 'Formation professionnelle sur la qualité de l\'air intérieur en milieu de travail.',
    isPublic: false,
  },
]
