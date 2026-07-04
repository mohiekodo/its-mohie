import React from 'react'
import Container from '@components/ui/Container'
import AnimatedSection from '@components/ui/AnimatedSection'
import { Award, Users, GitBranch, GraduationCap, Boxes } from 'lucide-react'

const cards = [
  { title: '8+ Years', desc: 'Engineering leadership across 3 companies & domains', icon: Award },
  {
    title: '3 Distributed Teams',
    desc: 'Led across KL, Singapore & remote locations',
    icon: Users,
  },
  { title: 'Cross-functional', desc: 'Product, engineering & design alignment', icon: Boxes },
  {
    title: '10+ Mentored',
    desc: 'Individual growth plans & team development',
    icon: GraduationCap,
  },
  {
    title: 'Architecture',
    desc: 'Legacy modernisation & service-oriented design',
    icon: GitBranch,
  },
]

const Leadership: React.FC = () => {
  return (
    <div className="py-24 bg-canvas">
      <Container>
        <AnimatedSection>
          {/* Section label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-google-blue" />
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-slate">
              Leadership
            </span>
          </div>

          <h2 className="font-display font-semibold text-ink text-4xl sm:text-5xl tracking-tight leading-tight">
            Leadership Impact
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="gemini-card">
                <div className="gemini-card-body bg-surface p-7 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-active-tint flex items-center justify-center text-google-blue">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-xl text-ink tracking-tight">
                      {title}
                    </div>
                    <div className="mt-1.5 text-base text-slate leading-[1.65]">{desc}</div>
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

export default Leadership
