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
    description: 'BUT en année spéciale combinant les deux premières années en une seule.',
    skills: ['Java', 'Vue.js', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'Git', 'Docker', 'Linux'],
    icon: './computer.svg',
  },
]
