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
  // Informations légales
  legal: {
    cooperative: 'KANOPE',
    siret: '429 228 018 00041',
    address: '68 rue Dessoles, 32000 Auch',
    basedIn: 'Toulouse',
    interventionZone: 'Occitanie',
  },
  // Hébergeur
  hosting: {
    name: 'o2switch',
    address: 'Chem. des Pardiaux, 63000 Clermont-Ferrand',
    website: 'https://www.o2switch.fr',
  },
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
    id: 'nesting',
    title: 'Ateliers Nesting',
    subtitle: 'Pour un habitat plus sain',
    description: 'Accompagnement personnalisé pour créer un environnement domestique plus sain. Identifiez les sources de pollution intérieure et adoptez des alternatives plus sûres pour votre santé.',
    longDescription: `Les ateliers Nesting vous accompagnent dans la création d'un environnement domestique plus sain pour vous et votre famille.

**Ce que nous abordons :**
- Identification des sources de pollution intérieure (produits ménagers, cosmétiques, matériaux...)
- Analyse de la qualité de l'air intérieur
- Alternatives saines et accessibles pour le quotidien
- Lecture et compréhension des étiquettes
- Conseils personnalisés selon votre situation

**Format :** Atelier individuel ou en petit groupe (2-3h)
**Public :** Particuliers, familles, futurs parents`,
    icon: 'Home',
    color: 'vert-feuillage',
    images: ['/images/ateliers/atelier-nesting-sante-environnementale.jpg', '/images/ateliers/atelier-nesting-sante-environnementale-2.jpeg'],
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
- Interventions en milieu scolaire (IFSI, IFAS, etc.)
- Ateliers sur l'éco-anxiété et la gestion des émotions face au changement climatique

**Thématiques abordées :**
- Introduction à la santé environnementale
- Perturbateurs endocriniens au quotidien
- Qualité de l'air intérieur et extérieur
- Alimentation et environnement
- Éco-anxiété : comprendre et agir
- Le respect de l'environnements dans la pratique du soin

**Format :** De 1h à une demi-journée selon vos besoins`,
    icon: 'Users',
    color: 'vert-eau',
    images: ['/images/ateliers/intervention-theatre-sante-environnementale.jpg','/images/ateliers/table-ronde-cocagne-alim-sante-environnementale.jpg','/images/ateliers/intervention-ifas-sante-environnementale.jpg', '/images/ateliers/intervention-ifas-cours-sante-environnementale.jpeg'],
  },
  {
    id: 'projets-structure',
    title: 'Projets en Structure',
    subtitle: 'Accompagnement sur mesure',
    description: 'Mise en place de projets de santé environnementale au sein de votre organisation. Accompagnement sur mesure pour les établissements de santé, structures d\'accueil, collectivités (exemple: Projets d\'ordonnances vertes).',
    longDescription: `Un accompagnement complet pour intégrer la santé environnementale au cœur de votre structure.

**Pour qui ?**
- Collectivité (Mairies, Mairies de Quartier)
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
- Mise en place des Ordonnances Vertes au sein de votre collectivité

**Format :** Projet sur plusieurs mois, adapté à vos contraintes`,
    icon: 'Building',
    color: 'orange-doux',
    images: ['/images/ateliers/octobre-rose-forum-sante-environnementale.jpg'],
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
    images: ['/images/ateliers/fresque-sante-environnementale.jpeg'],
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
    images: ['/images/ateliers/consultations.jpg'],
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
  contact?: string // Contact personne / entité organisatrice (téléphone, email)
  replayLink?: string // Lien vers le replay pour les événements passés
  isPublic: boolean // true si ouvert au public, false si privé
}

export const EVENEMENTS: Evenement[] = [
  {
    id: 'nesting-auzeville-tolosane-fev-2026',
    title: 'Atelier Nesting (Auzeville-Tolosane)',
    atelierType: 'nesting',
    date: '2026-02-14',
    startTime: '10:00',
    endTime: '12:00',
    location: 'Auzeville-Tolosane',
    address: 'Auzeville-Tolosane',
    description: 'Venez repérer les polluants de la maison et comprendre leurs impacts sur notre santé. Nous verrons comment limiter les expositions et trouver des alternatives saines. Places limitées à 15 participants.',
    contact: 'Inscription par téléphone : 05.61.73.53.10',
    isPublic: true,
  },
  {
    id: 'nesting-pechabou-jan-2026',
    title: 'Atelier Nesting (Péchabou)',
    atelierType: 'nesting',
    date: '2026-01-15',
    startTime: '19:00',
    endTime: '21:00',
    location: 'Médiathèque de Pechabou',
    address: "29 Avenue d'Occitanie, 31320 Péchabou",
    description: 'Venez repérer les polluants de la maison et comprendre leurs impacts sur notre santé. Nous verrons comment limiter les expositions et trouver des alternatives saines. Places limitées à 15 participants.',
    contact: 'Inscription auprès du CCAS de Pechabou (06.70.59.67.31 ou par mail : ccas@mairie-pechabou.fr)',
    isPublic: true,
  },
  {
    id: 'nesting-lacroix-falgarde-jan-2026',
    title: 'Atelier Nesting (Lacroix-Falgarde)',
    atelierType: 'nesting',
    date: '2026-01-10',
    startTime: '10:00',
    endTime: '12:00',
    location: 'Lacroix-Falgarde',
    address: 'Lacroix-Falgarde',
    description: 'Venez repérer les polluants de la maison et comprendre leurs impacts sur notre santé. Nous verrons comment limiter les expositions et trouver des alternatives saines. Places limitées à 15 participants.',
    contact: 'Inscription par téléphone : 05.62.14.07.25',
    isPublic: true,
  },
  {
    id: 'nesting-cugnaux-jan-2026',
    title: 'Atelier Nesting (Cugnaux)',
    atelierType: 'nesting',
    date: '2026-01-09',
    startTime: '09:30',
    endTime: '11:30',
    location: 'Relais Parentalité',
    address: 'Impasse Vincent Auriol, Cugnaux',
    description: 'Venez repérer les polluants de la maison et comprendre leurs impacts sur notre santé. Nous verrons comment limiter les expositions et trouver des alternatives saines. Places limitées à 15 participants.',
    contact: 'Inscription auprès du CCAS de Cugnaux (tel: 0626292598)',
    isPublic: true,
  },
  {
    id: 'webinaire-decembre-2025',
    title: 'Webinaire : Le microbiote',
    atelierType: 'conferences',
    date: '2025-12-19',
    startTime: '13:00',
    endTime: '14:00',
    location: 'En ligne (Zoom)',
    description: "Un webinaire interactif organisé par le SICOVAL pour découvrir le microbiote, son rôle essentiel pour la santé, et comprendre les risques qui s'y appliquent. Gratuit et ouvert à tous.",
    isPublic: true,
  },
  {
    id: 'journee-sante-envrionnement-cocagne-decembre-2025',
    title: 'Journée santé environnement - Cocagne Alimentaire',
    atelierType: 'conferences',
    date: '2025-12-17',
    startTime: '09:00',
    endTime: '17:00',
    location: 'Fenouillet',
    description: "Une journée organisée par Cocagne Alimentaire sur le thème: De la Production Agricole à l'assiette : Comment consilier santé du vivant, préservation des écosystèmes et justice sociale ? Table ronde, Visite des jardins, et Forum des Initiatives au Programme",
    registrationLink: 'https://urls.fr/okwJlq', 
    isPublic: true,
  },
  {
    id: 'intervention-ifas-decembre-2025',
    title: 'Intervention en IFAS: Vers des pratiques de soin plus vertueuses',
    atelierType: 'conferences',
    date: '2025-12-02',
    startTime: '09:00',
    endTime: '12:00',
    location: 'IFAS Lavaur',
    description: 'Cours à l\'IFAS de Lavaur pour sensibiliser sur l\'importance de la mise en place de soins plus vertueux pour la santé et l\'environnement',
    isPublic: true,
  },
  {
    id: 'webinaire-perturbateur-endocrinien-novembre-2025',
    title: 'Webinaire sur les Perturbateurs Endocriniens',
    atelierType: 'conferences',
    date: '2025-11-28',
    startTime: '19:00',
    endTime: '21:00',
    location: 'En ligne (Zoom)',
    replayLink: 'https://youtu.be/hnoi3fmrN30', // Replay
    description: 'Un webinaire sur les perturbateurs endocriniens organisé par le PRSE4 SICOVAL : quels sont les enjeux et comment s\'en protéger ? Ouvert à tous',
    isPublic: true,
  },
  {
    id: 'webinaire-eco-anxiete-juin-2025',
    title: 'Webinaire "Eco-Anxiété"',
    atelierType: 'conferences',
    date: '2025-06-12',
    startTime: '19:00',
    endTime: '21:00',
    location: 'En ligne (Zoom)',
    replayLink: 'https://www.youtube.com/watch?v=8HzD4wpBSRg', // Replay
    description: 'Un webinaire sur la thématique "Eco-anxiété" organisé par le PRSE4 SICOVAL: « Comment transformer l\'anxiété en ressource ». Ouvert à tous',
    isPublic: true,
  },
  {
    id: 'webinaire-one-health-mars-2025',
    title: 'Webinaire "One Health"',
    atelierType: 'conferences',
    date: '2025-03-14',
    startTime: '19:00',
    endTime: '21:00',
    location: 'En ligne (Zoom)',
    replayLink: 'https://www.youtube.com/watch?v=eA7rn6fPmJo', // Replay
    description: 'Un webinaire sur la thématique "One Health" organisé par le PRSE4 SICOVAL: « Ensemble pour une santé globale, des écosystèmes à l\'humain ». Ouvert à tous',
    isPublic: true,
  },
  {
    id: 'cine-debat-contrepoisons-janv-2025',
    title: 'Ciné-Débat "Contrepoisons, un combat citoyen',
    atelierType: 'conferences',
    date: '2025-01-16',
    startTime: '20:00',
    endTime: '22:00',
    location: 'Cinéma Utopia Tournefeuille',
    address: 'Impasse du Chateau, 31170 Tournefeuille',
    description: 'Projection du film "Contrepoisons, un combat citoyen", en présence des réalisateursn de Laurence Huc, Toxicologue, Directrice de recherche INRAE/ INSERM / IRSET / LISIS & Professionnels de Santé',
    isPublic: true,
  }
]
