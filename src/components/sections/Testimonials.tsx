import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Container from '@components/ui/Container'
import { testimonials } from '@data/content'
import AnimatedSection from '@components/ui/AnimatedSection'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const AUTO_ROTATE_INTERVAL = 6000 // 6 seconds per testimonial

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const timerRef = useRef<number | null>(null)

  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const goTo = (index: number) => setActiveIndex(index)

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return
    timerRef.current = setInterval(next, AUTO_ROTATE_INTERVAL)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, shouldReduceMotion])

  const { quote, name, role, company } = testimonials[activeIndex]

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
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="gemini-card max-w-4xl mx-auto">
              <div className="gemini-card-body bg-surface p-8 sm:p-12 min-h-[320px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                    className="flex flex-col gap-6"
                  >
                    <Quote className="w-8 h-8 text-google-blue/50 shrink-0" />
                    <p className="text-ink leading-[1.75] text-lg sm:text-xl font-light">
                      &ldquo;{quote}&rdquo;
                    </p>
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
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-10 h-10 rounded-full bg-canvas border border-slate/20 flex items-center justify-center text-slate hover:text-google-blue hover:border-google-blue transition-fluid shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-10 h-10 rounded-full bg-canvas border border-slate/20 flex items-center justify-center text-slate hover:text-google-blue hover:border-google-blue transition-fluid shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-8 bg-google-blue' : 'w-1.5 bg-slate/30 hover:bg-slate/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Testimonials
