import React from 'react'
import Container from '@components/ui/Container'
import { experiences } from '@data/content'
import AnimatedSection from '@components/ui/AnimatedSection'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const Experience: React.FC = () => {
  return (
    <div className="py-24 bg-canvas">
      <Container>
        <AnimatedSection>
          {/* Section label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-google-blue" />
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-slate">
              Experience
            </span>
          </div>

          <h2 className="font-display font-semibold text-ink text-4xl sm:text-5xl tracking-tight leading-tight">
            Where I've Worked
          </h2>

          <div className="mt-10">
            <TabGroup>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Tab list */}
                <TabList className="flex md:flex-col gap-0 md:w-48 shrink-0 border-b md:border-b-0 md:border-r border-slate/10">
                  {experiences.map((exp) => (
                    <Tab
                      key={exp.company}
                      className={({ selected }) =>
                        `text-left px-4 py-4 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-google-blue transition-fluid border-b-2 md:border-b-0 md:border-r-2 ${
                          selected
                            ? 'border-google-blue text-google-blue bg-active-tint/50'
                            : 'border-transparent text-slate hover:text-ink hover:bg-surface/70'
                        }`
                      }
                    >
                      <div className="font-semibold">{exp.company}</div>
                      <div className="text-sm opacity-60 mt-0.5">{exp.duration}</div>
                    </Tab>
                  ))}
                </TabList>

                {/* Panels */}
                <TabPanels className="flex-1 min-w-0">
                  {experiences.map((exp) => (
                    <TabPanel key={exp.company}>
                      <div className="gemini-card">
                        <div className="gemini-card-body bg-surface p-6 sm:p-8">
                          <div className="font-display font-semibold text-2xl text-ink tracking-tight">
                            {exp.role} <span className="aurora-text">@ {exp.company}</span>
                          </div>
                          <div className="mt-1.5 font-mono text-sm tracking-[0.1em] uppercase text-slate">
                            {exp.duration}
                          </div>

                          <ul className="mt-6 space-y-3.5">
                            {exp.highlights.map((h) => (
                              <li
                                key={h}
                                className="flex gap-3 text-base text-slate leading-[1.75]"
                              >
                                <span className="text-google-blue mt-[5px] shrink-0 text-xs">
                                  ▹
                                </span>
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </TabPanels>
              </div>
            </TabGroup>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Experience
