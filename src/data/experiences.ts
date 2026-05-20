interface Experience {
  id: string
  title: string
  company: string
  period: string
  duration: string
  description: string
  achievements: string[]
  technologies: string[]
  type: 'stage' | 'alternance' | 'emploi'
  status: 'completed' | 'in-progress'
  icon: string
}

export const experiences: Experience[] = [
  {
    id: 'mappia',
    title: 'Développeur fullstack en alternance',
    company: 'MAPPIA',
    period: 'Octobre 2025 - En cours',
    duration: '6 mois',
    description:
      "Alternance en développement fullstack sur la plateforme SaaS GOVALID, impliquant des migrations technologiques et le développement de nouvelles fonctionnalités.",
    achievements: [
      "Migration complète de l'interface AngularJS vers Vue.js : visualisation géographique, gestion des droits par rôle, upload de fichiers, contrôle de partage",
      "Optimisation de l'affichage des listes de données : temps de rendu réduit de plusieurs secondes à quasi-instantané",
      "POC Node.js et Rust pour remplacer l'infrastructure IIS (performance et compatibilité)",
    ],
    technologies: ['Vue.js', 'Node.js', 'JavaScript', 'Vuetify', 'Rust'],
    type: 'alternance',
    status: 'in-progress',
    icon: './briefcase.svg',
  },
  {
    id: 'stillnetwork / StillDev',
    title: 'Stagiaire développeur fullstack Vue.js / Python',
    company: 'Stillnetwork / StillDev',
    period: 'Juin 2025 - Août 2025',
    duration: '3 mois',
    description:
      "Stage de 12 semaines au cours duquel j'ai contribué au développement d'une plateforme web B2B avec Vue.js, FastAPI et découverte des pratiques DevOps (Docker, CI/CD, bases de données, etc).",
    achievements: [
      "Analyses SWOT de solutions techniques (bases de données géographiques, services KYC) pour orienter les choix d'architecture",
      'Données géographiques : implémentation PostgreSQL/PostGIS pour le stockage de points géographiques et le calcul de routes optimales, intégration de cartes interactives avec Leaflet dans Vue.js',
      "Notifications temps réel : création et déploiement d'un serveur de notification avec système Listen/Notify de PostgreSQL et WebSocket",
      'Déploiement de services conteneurisés avec Docker sur Coolify',
      'API Backend : développement de routes REST et workflows avec FastAPI, Python et Temporal',
      "Interface web : développement de composants et de pages de l'interface web avec Vue.js",
    ],
    technologies: [
      'Vue.js',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'PostGIS',
      'Docker',
      'WebSocket',
      'Leaflet',
      'Temporal',
    ],
    type: 'stage',
    status: 'completed',
    icon: './briefcase.svg',
  },
]
