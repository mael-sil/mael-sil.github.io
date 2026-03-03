interface FormationStep {
  id: string
  title: string
  institution: string
  period: string
  description: string
  skills: string[]
  icon: string
}

export const formationSteps: FormationStep[] = [
  {
    id: 'unige',
    title: 'Bachelor en Physique',
    institution: 'Université de Genève',
    period: '2020 - 2023',
    description:
      'Formation en physique fondamentale avec acquisition de compétences en programmation C++ et méthodes scientifiques.',
    skills: ['Physique', 'Mathématiques', 'C++', 'Python', 'LaTeX'],
    icon: './book.svg',
  },
  {
    id: 'epfl',
    title: 'Master 1 en Science et ingénierie quantiques',
    institution: 'EPFL',
    period: '2023 - 2024',
    description:
      '18 ECTS validés, notamment en machine learning, avant une réorientation vers une formation informatique.',
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'PyTorch'],
    icon: './atom.svg',
  },
  {
    id: 'iut-lyon1',
    title: 'Bachelor universitaire de technologie en informatique',
    institution: 'IUT Lyon 1',
    period: '2024 - en cours',
    description:
      "BUT informatique parcours réalisation d'applications avec 3e année en alternance. Année spéciale (BUT1+BUT2 combinées en un an) validée en 2025.",
    skills: ['Java', 'Vue.js', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'Git', 'Docker', 'Linux', 'MongoDB', 'Neo4j'],
    icon: './computer.svg',
  },
].reverse()
