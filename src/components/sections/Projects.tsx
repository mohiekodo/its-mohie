import React from 'react'
import Container from '@components/ui/Container'
import { projects } from '@data/content'
import AnimatedSection from '@components/ui/AnimatedSection'

const Projects: React.FC = () => {
  return (
    <div className="py-24 bg-surface">
      <Container>
        <AnimatedSection>
          {/* Section label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-google-blue" />
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-slate">
              Projects
            </span>
          </div>

          <h2 className="font-display font-semibold text-ink text-4xl sm:text-5xl tracking-tight leading-tight">
            Some Things I've Built
          </h2>

          <div className="mt-12 space-y-8">
            {projects.map((p, idx) => (
              <div key={p.title} className="gemini-card">
                <div
                  className={`gemini-card-body bg-canvas p-6 sm:p-8 grid md:grid-cols-2 gap-8 items-center ${
                    idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden rounded-2xl bg-surface">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.title} screenshot`}
                        className="w-full h-full object-cover transition-fluid hover:scale-[1.03]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-surface" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <p className="font-mono text-xs tracking-[0.15em] uppercase text-slate">
                      Featured Project
                    </p>

                    <h3 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight leading-tight">
                      {p.title}
                    </h3>

                    <p className="text-slate leading-[1.8] text-base">{p.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-sm px-3 py-1.5 rounded-full bg-surface text-ink/70 border border-slate/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2.5 pt-1">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-base text-slate leading-[1.7]">
                          <span className="text-google-blue shrink-0 text-xs mt-[5px]">▹</span>
                          {h}
                        </li>
                      ))}
                    </ul>
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

export default Projects
