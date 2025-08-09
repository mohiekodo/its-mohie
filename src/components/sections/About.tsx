import React from 'react'
import Container from '@components/ui/Container'
import { skills } from '@data/content'
import AnimatedSection from '@components/ui/AnimatedSection'

const About: React.FC = () => {
  return (
    <div className="py-16">
      <Container>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-accent-gold">About Me</h2>
          <p className="mt-4 text-text-secondary max-w-3xl">
            8+ years of technical leadership experience. Expertise in building high-performing
            engineering teams across diverse domains: recruitment tech (SEEK), real estate
            (PropertyGuru), and data platforms (Supahands). Passionate about modernizing legacy
            systems and architectural evolution. Journey from Syria to becoming a tech leader in
            Malaysia, with emphasis on cross-functional collaboration and strategic alignment.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-accent-teal">Languages</h3>
              <ul className="mt-2 space-y-1 text-text-secondary">
                {skills.languages.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-accent-teal">Backend</h3>
              <ul className="mt-2 space-y-1 text-text-secondary">
                {skills.backend.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-accent-teal">Frontend</h3>
              <ul className="mt-2 space-y-1 text-text-secondary">
                {skills.frontend.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-accent-teal">Databases</h3>
              <ul className="mt-2 space-y-1 text-text-secondary">
                {skills.databases.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-accent-teal">Cloud</h3>
              <ul className="mt-2 space-y-1 text-text-secondary">
                {skills.cloud.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-accent-teal">DevOps & Leadership</h3>
              <ul className="mt-2 space-y-1 text-text-secondary">
                {[...skills.devops, ...skills.leadership].map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default About
