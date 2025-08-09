import React from 'react'
import Container from '@components/ui/Container'
import AnimatedSection from '@components/ui/AnimatedSection'
import { Award, Users, GitBranch, GraduationCap, Boxes } from 'lucide-react'

const Leadership: React.FC = () => {
  const cards = [
    { title: '8+ Years', desc: 'Technical leadership', icon: Award },
    { title: 'Multiple Teams', desc: 'Distributed leadership', icon: Users },
    { title: 'Cross‑functional', desc: 'Collaboration expertise', icon: Boxes },
    { title: 'Mentorship', desc: 'Growing engineers', icon: GraduationCap },
    { title: 'Architecture', desc: 'Design & evolution', icon: GitBranch },
  ]
  return (
    <div className="py-16">
      <Container>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-accent-gold">Leadership Impact</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="group rounded-xl border border-accent-gold/15 bg-gradient-to-br from-secondary-dark/70 to-primary-dark/70 p-5 shadow-leadership-card hover:border-accent-gold/30 transition transform hover:-translate-y-0.5 hover:shadow-gold-glow"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-gold/10 text-accent-gold shadow-gold-glow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="text-xl font-semibold text-text-primary">{title}</div>
                </div>
                <div className="mt-2 text-sm text-text-secondary">{desc}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Leadership
