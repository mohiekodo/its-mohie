import React from 'react'
import Container from '@components/ui/Container'
import { experiences } from '@data/content'
import AnimatedSection from '@components/ui/AnimatedSection'
import { Tab } from '@headlessui/react'

const Experience: React.FC = () => {
  return (
    <div className="py-16">
      <Container>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-accent-gold">Where I've Worked</h2>
          <div className="mt-6">
            <Tab.Group>
              <div className="flex flex-col md:flex-row gap-4">
                <Tab.List className="flex md:flex-col gap-2 md:w-56">
                  {experiences.map((exp) => (
                    <Tab
                      key={exp.company}
                      className={({ selected }) =>
                        `text-left rounded px-3 py-2 border border-border-subtle/60 hover:border-accent-gold/40 focus:outline-none focus:ring-2 focus:ring-accent-gold/60 ${selected ? 'bg-secondary-dark/70 text-accent-gold' : 'text-text-secondary'}`
                      }
                    >
                      <div className="font-semibold">{exp.company}</div>
                      <div className="text-xs text-text-secondary">{exp.duration}</div>
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="flex-1">
                  {experiences.map((exp) => (
                    <Tab.Panel
                      key={exp.company}
                      className="rounded border border-border-subtle p-4 bg-secondary-dark/50"
                    >
                      <div className="text-xl font-semibold text-accent-gold">
                        {exp.role} @ {exp.company}
                      </div>
                      <ul className="mt-3 list-disc pl-5 text-text-secondary space-y-1">
                        {exp.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Experience
