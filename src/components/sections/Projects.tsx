import React from 'react'
import Container from '@components/ui/Container'
import { projects } from '@data/content'
import AnimatedSection from '@components/ui/AnimatedSection'

const Projects: React.FC = () => {
  return (
    <div className="py-16">
      <Container>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-accent-gold">Some Things I've Built</h2>
          <div className="mt-8 grid gap-8">
            {projects.map((p, idx) => (
              <div
                key={p.title}
                className={`grid md:grid-cols-2 gap-6 items-center ${idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="aspect-video rounded bg-secondary-dark/60 border border-border-subtle" />
                <div>
                  <h3 className="text-2xl font-semibold text-accent-gold">{p.title}</h3>
                  <p className="mt-2 text-text-secondary">{p.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2 text-sm text-accent-teal">
                    {p.tech.map((t) => (
                      <li key={t} className="px-2 py-1 rounded border border-accent-teal/30">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-3 list-disc pl-5 text-text-secondary space-y-1">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Projects
