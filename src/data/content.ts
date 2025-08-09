import { ExperienceItem, ProjectItem } from '@app-types/index'

export const experiences: ExperienceItem[] = [
  {
    company: 'SEEK',
    role: 'Lead Engineer',
    duration: 'September 2024 - Present',
    highlights: [
      'Leading high-impact teams in Candidates and Talent Consultants domains',
      'Architecting robust backend infrastructure with Node.js, TypeScript, AWS',
      'Establishing engineering excellence and quality frameworks',
      'Strategic technical roadmap development',
    ],
  },
  {
    company: 'PropertyGuru Group',
    role: 'Tech Team Lead',
    duration: 'December 2022 - September 2024',
    highlights: [
      'Spearheaded distributed development teams',
      'Drove architectural evolution and system modernization',
      'Strategic alignment between technical execution and product vision',
    ],
  },
  {
    company: 'Supahands',
    role: 'Software Engineer → Tech Lead',
    duration: 'November 2017 - November 2022',
    highlights: [
      'Led cross-functional teams on innovative platform solutions',
      'Mentored junior developers and fostered knowledge sharing',
      'System architecture decisions and performance optimization',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Enterprise Platform Architecture (SEEK)',
    description: 'Scalable backend infrastructure powering recruitment solutions',
    tech: ['Node.js', 'Express.js', 'TypeScript', 'AWS'],
    highlights: ['Cross-functional team leadership', 'Enterprise-grade solutions'],
    image: '/assets/projects/seek-architecture.svg',
  },
  {
    title: 'PropertyGuru Core Platform',
    description: 'Modernized legacy systems while implementing innovative features',
    tech: ['Full-stack development', 'System design'],
    highlights: ['Distributed team coordination', 'Architectural evolution'],
    image: '/assets/projects/propertyguru-platform.svg',
  },
  {
    title: 'Supahands SelfServe Platform',
    description: 'Data cleaning platform with microservices architecture',
    tech: ['React.js', 'Next.js', 'REST', 'Microservices'],
    highlights: ['Performance optimization', 'Automated testing'],
    image: '/assets/projects/supahands-selfserve.svg',
  },
]

export const skills = {
  languages: ['JavaScript', 'TypeScript', 'Go', 'Python', 'Ruby'],
  backend: ['Node.js', 'Express.js', 'NestJS', 'Ruby on Rails'],
  frontend: ['React.js', 'Next.js'],
  databases: ['SQL', 'NoSQL'],
  cloud: ['AWS'],
  devops: ['BuildKite', 'GitHub Actions'],
  leadership: ['People Management', 'SDLC Management'],
}
