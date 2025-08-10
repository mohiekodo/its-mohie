import { ExperienceItem, ProjectItem } from '@app-types/index'

export const experiences: ExperienceItem[] = [
  {
    company: 'SEEK',
    role: 'Lead Engineer',
    duration: 'September 2024 - Present',
    highlights: [
      'Led development teams across Candidates and Talent Consultants domains, driving innovation through cross-functional collaboration',
      'Architected robust backend infrastructure using Node.js, Express.js, TypeScript, and AWS to deliver scalable, enterprise-grade solutions',
      'Established engineering excellence by implementing technical standards, comprehensive code review processes, and quality assurance frameworks',
      'Partnered with product leadership to develop strategic technical roadmaps and implement effective sprint planning methodologies',
      'Delivered high-impact solutions that improved system performance and user experience across talent management platforms',
      'Mentored team members on modern development practices and cloud-based architecture patterns',
    ],
  },
  {
    company: 'PropertyGuru Group',
    role: 'Tech Team Lead',
    duration: 'December 2022 - September 2024',
    highlights: [
      "Led distributed development teams across multiple locations to deliver innovative core platform capabilities for PropertyGuru's business solutions",
      'Participated in system architecture decisions and technical design reviews to modernize legacy systems while implementing new features',
      'Collaborated with product managers on roadmap development and sprint planning to align technical execution with product vision',
      'Mentored development teams and facilitated knowledge transfer across different geographical locations',
      'Contributed to architectural evolution by evaluating and implementing modern development practices and technologies',
    ],
  },
  {
    company: 'Supahands',
    role: 'Software Engineer → Tech Lead',
    duration: 'November 2017 - November 2022',
    highlights: [
      'Led cross-functional development teams across multiple locations to deliver innovative platform solutions, including SelfServe data cleaning features',
      'Mentored junior developers and fostered knowledge sharing initiatives across engineering teams',
      'Participated in system architecture decisions and conducted technical design reviews for enterprise-level applications',
      'Optimized database performance and query efficiency for critical business systems, reducing response times and improving user experience',
      'Designed and implemented RESTful APIs and microservices architecture to support scalable business operations',
      'Contributed to full-stack development using React.js and Next.js for modern web applications',
      'Implemented automated testing frameworks and continuous integration workflows to enhance development velocity',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Enterprise Platforms For TC (SEEK)',
    description: 'Scalable backend infrastructure powering recruitment solutions',
    tech: ['Node.js', 'Express.js', 'TypeScript', 'AWS', 'OpenSearch', 'PostgreSQL'],
    highlights: ['Cross-functional team leadership', 'Enterprise-grade solutions'],
    image: '/assets/projects/seek-architecture.svg',
  },
  {
    title: 'PropertyGuru Data Software Solutions Platform',
    description: 'Core platform capabilities for business solutions',
    tech: ['Full-stack development', 'System design', 'NestJS', 'React.js', 'AWS'],
    highlights: ['Distributed team coordination', 'Architectural evolution'],
    image: '/assets/projects/propertyguru-platform.svg',
  },
  {
    title: 'Supahands Annotation Platform & SelfServe Features',
    description: 'Data cleaning platform with microservices architecture',
    tech: ['React.js', 'Next.js', 'REST', 'Microservices', 'AWS'],
    highlights: ['Planning', 'Development', 'Scaling'],
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
