export type ExperienceItem = {
  company: string
  role: string
  duration: string
  highlights: string[]
}

export type ProjectItem = {
  title: string
  description: string
  tech: string[]
  highlights: string[]
  image?: string
}

export type LeadershipIconKey = 'award' | 'users' | 'boxes' | 'graduation' | 'branch'

export type LeadershipItem = {
  /** Static title, or a function that derives it (e.g. from the current date). */
  title: string | (() => string)
  desc: string
  icon: LeadershipIconKey
}

export type TestimonialItem = {
  quote: string
  name: string
  role: string
  company: string
}
