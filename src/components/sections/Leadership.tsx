import React from 'react'
import Container from '@components/ui/Container'
import AnimatedSection from '@components/ui/AnimatedSection'

const Leadership: React.FC = () => {
  const cards = [
    { title: '8+ Years', desc: 'of technical leadership' },
    { title: 'Multiple Teams', desc: 'led across distributed locations' },
    { title: 'Cross-functional', desc: 'collaboration expertise' },
    { title: 'Mentorship', desc: 'of junior developers' },
    { title: 'System Architecture', desc: 'design and evolution' },
  ]
  return (
    <div className="py-16">
      <Container>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-accent-gold">Leadership Impact</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded border border-border-subtle bg-secondary-dark/50 p-5 shadow-leadership-card"
              >
                <div className="text-2xl font-semibold text-accent-gold">{c.title}</div>
                <div className="mt-1 text-text-secondary">{c.desc}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Leadership
