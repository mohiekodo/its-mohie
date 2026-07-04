import React from 'react'
import Container from '@components/ui/Container'
import { skills } from '@data/content'
import AnimatedSection from '@components/ui/AnimatedSection'

const skillCategories: { key: keyof typeof skills; label: string }[] = [
  { key: 'languages', label: 'Languages' },
  { key: 'backend', label: 'Backend' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'databases', label: 'Databases' },
  { key: 'cloud', label: 'Cloud & DevOps' },
  { key: 'leadership', label: 'Leadership' },
]

const getSkills = (key: keyof typeof skills): string[] => {
  if (key === 'cloud') return [...skills.cloud, ...skills.devops]
  return skills[key]
}

const About: React.FC = () => {
  return (
    <div className="py-24 bg-surface">
      <Container>
        <AnimatedSection>
          {/* Section label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-google-blue" />
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-slate">About</span>
          </div>

          <h2 className="font-display font-semibold text-ink text-4xl sm:text-5xl tracking-tight leading-tight">
            About Me
          </h2>

          <p className="mt-6 text-slate max-w-3xl leading-[1.8] text-base sm:text-lg">
            I'm a software engineer and technical leader with over 8 years of experience building
            distributed systems and high-performing teams. I've led engineering across recruitment
            tech at SEEK, real estate at PropertyGuru, and data platforms at Supahands — growing
            from individual contributor to leading cross-functional teams across multiple
            geographies. Originally from Syria and now based in Kuala Lumpur, I care as much about
            the people I work with as the systems we build together. I'm passionate about
            modernising legacy architecture, mentoring engineers at every stage of their growth, and
            aligning technical strategy with real business outcomes.
          </p>

          {/* Skills grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map(({ key, label }) => (
              <div key={key} className="gemini-card">
                <div className="gemini-card-body bg-canvas p-6">
                  <h3 className="font-display font-semibold text-sm tracking-[0.1em] uppercase text-ink mb-4">
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {getSkills(key).map((s) => (
                      <span
                        key={s}
                        className="font-mono text-sm px-3 py-1.5 rounded-full bg-surface text-ink/75 border border-slate/30 transition-fluid hover:border-google-blue/60 hover:text-google-blue cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default About
