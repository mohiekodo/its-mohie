import { ExperienceItem, ProjectItem } from '@app-types/index'

export const experiences: ExperienceItem[] = [
  {
    company: 'SEEK',
    role: 'Lead Engineer',
    duration: 'September 2024 – Present',
    highlights: [
      'Own technical direction and end-to-end delivery for the Candidates and Talent Consultants domains, leading distributed engineering teams from planning to production',
      'Designed and scaled backend services on Node.js, TypeScript, Express.js, AWS, and OpenSearch powering enterprise recruitment workflows across the platform',
      'Raised the engineering bar across the team — authored coding standards, introduced code-review SLAs, and built QA frameworks now adopted org-wide',
      'Drive quarterly roadmapping and sprint planning in close partnership with product leadership, ensuring technical feasibility and delivery predictability',
      'Improved API reliability and latency across talent management platforms through targeted architectural changes and observability improvements',
      'Mentor engineers at all levels through structured 1:1s, technical pairing, and individual growth plans',
    ],
  },
  {
    company: 'PropertyGuru Group',
    role: 'Tech Team Lead',
    duration: 'December 2022 – September 2024',
    highlights: [
      "Led distributed engineering teams across multiple offices to deliver new capabilities for PropertyGuru's core data software platform",
      'Drove architectural modernisation — decomposing legacy monoliths and introducing scalable service boundaries using NestJS, React.js, and AWS',
      'Partnered with product managers on roadmap sequencing, translating complex technical constraints into actionable delivery milestones',
      'Built team cohesion across geographically distributed teams through structured knowledge transfer, shared documentation, and remote pairing practices',
      'Owned technical design reviews for major platform changes, balancing delivery velocity with long-term maintainability',
    ],
  },
  {
    company: 'Supahands',
    role: 'Software Engineer → Tech Lead',
    duration: 'November 2017 – November 2022',
    highlights: [
      'Grew from Software Engineer to Tech Lead over 5 years, ultimately owning full delivery for the Annotation Platform and SelfServe data-cleaning product',
      'Led cross-functional teams to ship SelfServe — a self-service data annotation tool — from conception through to enterprise client adoption',
      'Architected a microservices system using React.js, Next.js, and RESTful APIs on AWS, enabling horizontal scalability as the client base expanded',
      'Optimised critical database queries and introduced caching strategies that significantly reduced data pipeline processing times',
      'Established automated testing and CI/CD workflows with GitHub Actions, cutting regression incidents and improving deployment confidence',
      'Mentored junior engineers through code reviews, structured pairing sessions, and individual development planning',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Enterprise Platforms For TC (SEEK)',
    description:
      'Scalable backend infrastructure powering end-to-end recruitment workflows for Talent Consultants and Candidates.',
    tech: ['Node.js', 'Express.js', 'TypeScript', 'AWS', 'OpenSearch', 'PostgreSQL'],
    highlights: [
      'Unified backend APIs serving both candidate-facing and consultant-facing applications from a single, well-structured service layer',
      'Standardised OpenSearch indexing strategy across recruitment data pipelines, improving search consistency and relevance',
    ],
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'PropertyGuru Data Software Solutions Platform',
    description:
      "Core platform capabilities modernising the property data infrastructure powering PropertyGuru's business solutions.",
    tech: ['NestJS', 'React.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    highlights: [
      'Drove modernisation from a legacy monolith to a service-oriented architecture, reducing deployment coupling and enabling faster iteration',
      'Enabled parallel team development across 3 geographic locations through well-defined service contracts and shared engineering practices',
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Supahands Annotation Platform & SelfServe',
    description:
      'Self-service data annotation and cleaning platform built on a microservices architecture for enterprise clients.',
    tech: ['React.js', 'Next.js', 'Node.js', 'REST', 'Microservices', 'AWS'],
    highlights: [
      'Scaled SelfServe from an internal MVP to a production platform handling multi-client data annotation workflows',
      'Reduced manual data processing overhead through pipeline automation and a microservices design that isolated processing concerns',
    ],
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
  },
]

export const skills = {
  languages: ['JavaScript', 'TypeScript', 'Go', 'Python', 'Ruby'],
  backend: ['Node.js', 'Express.js', 'NestJS', 'Ruby on Rails'],
  frontend: ['React.js', 'Next.js'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'OpenSearch', 'Redis'],
  cloud: ['AWS (Lambda, ECS, RDS, S3, CloudWatch)'],
  devops: ['BuildKite', 'GitHub Actions', 'Docker'],
  leadership: ['People Management', 'SDLC Management', 'Technical Roadmapping'],
  AI: ['Prompt Engineering', 'Generative AI', 'LLM Fine-tuning', 'LLM Evaluation'],
}
