import { ExperienceItem, LeadershipItem, ProjectItem, TestimonialItem } from '@app-types/index'
import { getYearsOfExperience } from '@utils/experience'

export const leadershipCards: LeadershipItem[] = [
  {
    title: () => `${getYearsOfExperience()}+ Years`,
    desc: 'Engineering leadership across 3 companies & domains',
    icon: 'award',
  },
  {
    title: '3 Distributed Teams',
    desc: 'Led across KL, Singapore & remote locations',
    icon: 'users',
  },
  { title: 'Cross-functional', desc: 'Product, engineering & design alignment', icon: 'boxes' },
  {
    title: '10+ Mentored',
    desc: 'Individual growth plans & team development',
    icon: 'graduation',
  },
  {
    title: 'Architecture',
    desc: 'Legacy modernisation & service-oriented design',
    icon: 'branch',
  },
]

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
    image: '/assets/projects/seek-architecture.svg',
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
    image: '/assets/projects/propertyguru-platform.svg',
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
    image: '/assets/projects/supahands-selfserve.svg',
  },
]

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Learning from Mohie at Supahands was priceless. He wasn't just my boss; he was my guide into the world of professional software engineering. Mohie taught me the technical stuff like Ruby, JavaScript, and Python, but more importantly, he made me feel confident about solving problems.",
    name: 'Ayoob Mohammed',
    role: 'Senior Software Engineer',
    company: 'Miswag',
  },
  {
    quote:
      'Mohie has consistently demonstrated strong leadership skills and a deep understanding of software development best practices. He is a good leader who strives to support, encourage junior developers and is always willing to listen to and address the concerns of team members.',
    name: 'Wafa Jellali',
    role: 'Senior Frontend Developer',
    company: 'Supahands',
  },
  {
    quote:
      "One of Mohieddin's most remarkable qualities is his ability to think critically and offer insightful perspectives on complex issues. His opinions are well-informed and grounded in his extensive knowledge and experience. He is not afraid to voice his thoughts and provide constructive feedback, which has often led to significant improvements in our projects.",
    name: 'Tzu Chjeh (TC) Wu',
    role: 'Responsible AI Automation',
    company: 'PropertyGuru',
  },
  {
    quote:
      "I've had the opportunity to work alongside Mohie on a fast-paced and technically challenging team. He consistently put effort into aligning team delivery with broader expectations and helped ensure that workloads remained sustainable. His drive to move projects forward and meet deadlines contributed to the team's ability to deliver reliably.",
    name: 'Chin Tiong Tan',
    role: 'Senior Web Engineer',
    company: 'MoneyLion',
  },
  {
    quote:
      'Mohie is a great team player and patient mentor, who constantly works on sharpening his technical skills. It is always a pleasure working with him because he is reliable and I can trust him to deliver quality work on time. He is one of my few go-to people to bounce off ideas because he has the technical experience and big picture, architectural knowledge to ask the right questions.',
    name: 'Grace Tee',
    role: 'Global Payment Data Engineer',
    company: 'ByteDance',
  },
  {
    quote:
      'Mohie is very dedicated engineer who try to implement neat code with high quality. He is fast learner and eager to learn more. He receives feedback very well and works on them to fix them. The same goes for code reviews, he asks why to really understand it and he will fix them after that.',
    name: 'Mohsen Saghafi',
    role: 'Senior Software Engineer',
    company: 'Booking.com',
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
