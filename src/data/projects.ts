interface Project {
  id: string
  title: string
  description: string
  period: string
  link: string
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
    link: 'https://forge.univ-lyon1.fr/sudonano/sudonano',
    technologies: ['Vue.js', 'Node.js', 'Socket.io', 'JavaScript', 'HTML/CSS'],
    type: 'group',
    status: 'in-progress',
    icon: './alien.svg',
  },
  {
    id: 'jemultiplie',
    title: 'JeMultiplie',
    description:
      "Projet personnel de développement d'un site d'entraînement au calcul mental avec un système de renforcement adaptatif qui permet de revoir les erreurs.",
    period: 'Avril 2025 - En cours',
    link: 'https://github.com/mael-sil/JeMultiplie',
    technologies: ['Vue.js', 'JavaScript', 'HTML/CSS', 'GitHub'],
    type: 'personal',
    status: 'in-progress',
    icon: './cross.svg',
  },
]
