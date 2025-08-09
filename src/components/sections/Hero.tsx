import React from 'react'
import Container from '@components/ui/Container'
import { SITE } from '@utils/constants'
import AnimatedSection from '@components/ui/AnimatedSection'

const Hero: React.FC = () => {
  return (
    <div className="py-24">
      <Container>
        <AnimatedSection>
          <p className="font-mono text-accent-gold">Hi, my name is</p>
          <h1 className="mt-4 text-5xl sm:text-6xl font-bold">{SITE.name}</h1>
          <h2 className="mt-3 text-2xl sm:text-3xl text-accent-teal max-w-2xl">
            Strategic Tech Leader Building High-Performing Teams
          </h2>
          <p className="mt-6 max-w-2xl text-text-secondary">
            I'm a software engineer and technical leader specializing in building scalable solutions
            and leading distributed development teams. Currently focused on enterprise-grade
            platforms and engineering excellence at SEEK.
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="inline-block rounded bg-accent-gold text-primary-dark px-5 py-3 font-medium shadow-gold-glow hover:opacity-90 transition"
            >
              Check out my work!
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Hero
