export const SITE_CONFIG = {
  name: 'VieVent',
  brandName: 'VieVent',
  ownerName: 'Lisa Bonal',
  title: 'Éco-Infirmière',
  description: 'Santé environnementale - Accompagnement pour un mode de vie plus sain',
  logo: '/images/Vie_vent_3.png',
  contact: {
    phone: '07 66 37 26 285',
    phoneLink: 'tel:+33766372628',
    email: 'lisabonal@eco-inf.fr',
  },
  domain: 'eco-inf.fr',
}

export const NAV_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#sante-environnementale', label: 'Santé Environnementale' },
  { href: '#ateliers', label: 'Ateliers' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
]

export const ATELIERS = [
  {
    id: 'eco-sante',
    title: 'Ateliers Éco-Santé',
    description: 'Accompagnement personnalisé pour créer un environnement domestique plus sain. Identifiez les sources de pollution intérieure et adoptez des alternatives plus sûres pour votre santé.',
    icon: 'Home',
    color: 'vert-feuillage',
  },
  {
    id: 'conferences',
    title: 'Conférences & Interventions',
    description: 'Webinaires, interventions en milieu scolaire, ateliers sur l\'éco-anxiété... Sensibilisation à la santé environnementale adaptée à tous les publics.',
    icon: 'Users',
    color: 'vert-eau',
  },
  {
    id: 'projets-ov',
    title: 'Projets en Structure',
    description: 'Mise en place de projets de santé environnementale au sein de votre organisation. Accompagnement sur mesure pour les établissements de santé et structures d\'accueil.',
    icon: 'Building',
    color: 'orange-doux',
  },
  {
    id: 'fresque',
    title: 'Fresque Santé Environnementale',
    description: 'Atelier collaboratif en entreprise pour comprendre les liens entre environnement et santé. Une expérience ludique et pédagogique pour vos équipes.',
    icon: 'Puzzle',
    color: 'jaune-soleil',
  },
  {
    id: 'consultations',
    title: 'Consultations Personnalisées',
    description: 'Prochainement : accompagnement individualisé pour les femmes enceintes, futurs et jeunes parents. Accueillez bébé dans un environnement sain et serein.',
    icon: 'Baby',
    color: 'vert-menthe',
    comingSoon: true,
  },
]
