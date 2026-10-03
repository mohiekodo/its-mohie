import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { Download } from 'lucide-react'
import Container from '@components/ui/Container'
import { SITE } from '@utils/constants'

const ease = [0.2, 0.8, 0.2, 1] as const
const BLOB_SIZE = 620

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease, delay },
})

const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)
  const blobX = useMotionValue(0)
  const blobY = useMotionValue(0)
  const springX = useSpring(blobX, { stiffness: 45, damping: 20, mass: 0.6 })
  const springY = useSpring(blobY, { stiffness: 45, damping: 20, mass: 0.6 })

  useEffect(() => {
    const rect = rootRef.current?.getBoundingClientRect()
    if (rect) {
      blobX.set(rect.width / 2 - BLOB_SIZE / 2)
      blobY.set(rect.height / 2 - BLOB_SIZE / 2)
    }
  }, [blobX, blobY])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    blobX.set(e.clientX - rect.left - BLOB_SIZE / 2)
    blobY.set(e.clientY - rect.top - BLOB_SIZE / 2)
  }

  return (
    <div
      ref={rootRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[calc(100vh-3.5rem)] flex items-center py-24 bg-canvas overflow-hidden"
    >
      {/* Signature moment — aurora blob that drifts toward the cursor */}
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 z-0 rounded-full opacity-25 blur-[110px]"
          style={{
            width: BLOB_SIZE,
            height: BLOB_SIZE,
            background: 'var(--aurora)',
            x: springX,
            y: springY,
          }}
        />
      )}

      <Container className="relative z-10">
        {/* Status badge */}
        <motion.div {...fadeUp(0)} className="mb-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate/20 bg-canvas/80 px-3.5 py-1.5 font-mono text-xs tracking-[0.08em] text-slate">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Open to new opportunities
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.05)}
          className="font-mono text-sm tracking-[0.18em] uppercase text-slate mb-5"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display font-semibold text-ink leading-tight tracking-tight text-[clamp(3rem,7.5vw,6rem)]"
        >
          {SITE.name}
        </motion.h1>

        {/* Title with aurora gradient on key phrase */}
        <motion.h2
          {...fadeUp(0.2)}
          className="mt-5 text-2xl sm:text-3xl font-display font-medium leading-snug"
        >
          <span className="aurora-text">Strategic Tech Leader</span>{' '}
          <span className="text-slate font-normal">Building High-Performing Teams</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          {...fadeUp(0.3)}
          className="mt-6 max-w-xl text-slate leading-[1.8] text-base sm:text-lg"
        >
          I'm a software engineer and technical leader specialising in scalable distributed systems
          and high-performing engineering teams. Currently driving engineering excellence at{' '}
          <span className="text-ink font-semibold">SEEK</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="aurora-bg btn-press text-white px-8 py-3.5 text-sm font-semibold rounded-full shadow-sm hover:shadow-md"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-google-blue text-google-blue px-8 py-3.5 text-sm font-semibold rounded-full hover:bg-active-tint transition-fluid"
          >
            Get In Touch
          </a>
          <a
            href={SITE.resume}
            download
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-slate rounded-full hover:text-ink hover:bg-surface transition-fluid"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Download Résumé
          </a>
        </motion.div>
      </Container>
    </div>
  )
}

export default Hero
