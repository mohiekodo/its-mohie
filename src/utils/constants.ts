export const SITE = {
  name: 'Mohieddin Tanna',
  title: 'Strategic Tech Leader Building High-Performing Teams',
  email: 'mohieddintana93@gmail.com',
  location: 'Kuala Lumpur, Malaysia',
  linkedin: 'https://www.linkedin.com/in/mohie93',
  github: 'https://github.com/mohiekodo',
  url: 'https://its-mohie.com/',
  resume: '/resume.pdf',
  ogImage: 'https://its-mohie.com/og-image.png',
  description:
    'Portfolio of Mohieddin Tanna: Strategic tech leader specializing in scalable solutions and high-performing teams.',
}

/** Career start (Supahands) — used to derive years of experience dynamically. */
export const CAREER_START = new Date(2017, 10, 1)

/** Every top-level section, in page order. Single source of truth for IDs. */
export const SECTION_IDS = [
  'hero',
  'about',
  'experience',
  'projects',
  'leadership',
  'testimonials',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

/** Sections that appear in the header navigation. */
export const NAV_ITEMS: ReadonlyArray<{ id: SectionId; label: string }> = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]
