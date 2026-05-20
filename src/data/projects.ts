interface Project {
  id: string
  title: string
  description: string
  period: string
  link: string
  source: string
  technologies: string[]
  type: 'group' | 'personal'
  status: 'in-progress' | 'completed'
  icon: string
}

export const projects: Project[] = [
  {
    id: 'sudonano',
    title: 'SudoNano',
    description:
      "Projet en groupe de 3 réalisé dans le cadre du BUT. Développement d'un jeu de sudoku multijoueur compétitif en temps réel, avec un système d'attaque entre joueurs.",
    period: 'Février 2025 - En cours',
    source: 'https://forge.univ-lyon1.fr/sudonano/sudonano',
    link: 'https://sudonano.fr',
    technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MySQL', 'JavaScript', 'HTML/CSS'],
    type: 'group',
    status: 'in-progress',
    icon: './alien.svg',
  },
  {
    id: 'nexus',
    title: 'Nexus – Suivi de Cursus',
    description:
      'Projet de groupe réalisé dans le cadre du BUT. Application fullstack de suivi de parcours étudiant, avec authentification, gestion des rôles, import de données, visualisation et déploiement sur serveur VPS.',
    period: '2025',
    source: '',
    link: '',
    technologies: ['NestJS', 'Vue.js', 'PostgreSQL', 'Docker', 'Nginx'],
    type: 'group',
    status: 'completed',
    icon: './book.svg',
  },
  {
    id: 'jemultiplie',
    title: 'JeMultiplie',
    description:
      "Projet personnel de développement d'un site d'entraînement au calcul mental avec un système de renforcement adaptatif qui permet de revoir les erreurs.",
    period: 'Avril 2025 - En cours',
    source: 'https://github.com/mael-sil/JeMultiplie',
    link: 'https://maelsilvestresiaz.fr/JeMultiplie',
    technologies: ['Vue.js', 'TypeScript', 'HTML/CSS', 'GitHub'],
    type: 'personal',
    status: 'in-progress',
    icon: './cross.svg',
  },
]
