import React from 'react'
import Container from '@components/ui/Container'
import { experiences } from '@data/content'

const Experience: React.FC = () => {
  return (
    <div className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-accent-gold">Where I've Worked</h2>
        <div className="mt-6 grid gap-6">
          {experiences.map((exp) => (
            <div key={exp.company} className="rounded border border-border-subtle p-4 bg-secondary-dark/50">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-accent-gold">{exp.company}</h3>
                <span className="text-sm text-text-secondary">{exp.duration}</span>
              </div>
              <p className="mt-1 text-text-secondary">{exp.role}</p>
              <ul className="mt-3 list-disc pl-5 text-text-secondary space-y-1">
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Experience

