import React, { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import Container from '@components/ui/Container'
import AnimatedSection from '@components/ui/AnimatedSection'
import { testimonials } from '@data/content'

const AUTO_ROTATE_INTERVAL = 6000 // 6 seconds per testimonial
const total = testimonials.length

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const next = useCallback(() => setActiveIndex((i) => (i + 1) % total), [])
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [])

  const isRotating = !userPaused && !isHoveredOrFocused && !shouldReduceMotion

  // Re-arming on activeIndex change means manual navigation restarts the countdown
  useEffect(() => {
    if (!isRotating) return
    const id = window.setTimeout(next, AUTO_ROTATE_INTERVAL)
    return () => window.clearTimeout(id)
  }, [isRotating, activeIndex, next])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    }
  }

  const current = testimonials[activeIndex]
  if (!current) return null
  const { quote, name, role, company } = current

  const navButtonClass =
    'w-10 h-10 rounded-full bg-canvas border border-slate/20 flex items-center justify-center text-slate hover:text-google-blue hover:border-google-blue transition-fluid shadow-sm'

  return (
    <div className="py-24 bg-canvas">
      <Container>
        <AnimatedSection>
          {/* Section label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-google-blue" />
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-slate">
              Testimonials
            </span>
          </div>

          <h2 className="font-display font-semibold text-ink text-4xl sm:text-5xl tracking-tight leading-tight">
            What Colleagues Say
          </h2>

          {/* Carousel container */}
          <div
            className="mt-12 relative"
            role="group"
            aria-roledescription="carousel"
            aria-label="Testimonials from colleagues"
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHoveredOrFocused(true)}
            onMouseLeave={() => setIsHoveredOrFocused(false)}
            onFocus={() => setIsHoveredOrFocused(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setIsHoveredOrFocused(false)
            }}
          >
            <div className="gemini-card max-w-4xl mx-auto">
              <div
                className="gemini-card-body bg-surface p-8 sm:p-12 min-h-[320px] flex flex-col justify-between"
                aria-live={isRotating ? 'off' : 'polite'}
                aria-atomic="true"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${activeIndex + 1} of ${total}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                    className="flex flex-col gap-6"
                  >
                    <Quote className="w-8 h-8 text-google-blue/50 shrink-0" aria-hidden="true" />
                    <blockquote className="text-ink leading-[1.75] text-lg sm:text-xl font-light">
                      &ldquo;{quote}&rdquo;
                    </blockquote>
                    <div className="mt-2">
                      <div className="font-display font-semibold text-base text-ink">{name}</div>
                      <div className="text-sm text-slate mt-0.5">
                        {role}, {company}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className={`${navButtonClass} absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6`}
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className={`${navButtonClass} absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6`}
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Dot indicators + play/pause */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {!shouldReduceMotion && (
                <button
                  type="button"
                  onClick={() => setUserPaused((p) => !p)}
                  aria-label={userPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate hover:text-google-blue hover:bg-active-tint transition-fluid"
                >
                  {userPaused ? (
                    <Play className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <Pause className="w-4 h-4" aria-hidden="true" />
                  )}
                </button>
              )}
              <div className="flex items-center gap-2">
                {testimonials.map((t, i) => (
                  <button
                    type="button"
                    key={t.name}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to testimonial ${i + 1} of ${total}`}
                    aria-current={i === activeIndex ? 'true' : undefined}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-8 bg-google-blue'
                        : 'w-1.5 bg-slate/30 hover:bg-slate/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Testimonials
