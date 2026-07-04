import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/ui/Container'
import { SITE } from '@utils/constants'

const ease = [0.2, 0.8, 0.2, 1] as const

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease, delay },
})

const Hero: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center py-24 bg-canvas">
      <Container>
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0)}
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
        </motion.div>
      </Container>
    </div>
  )
}

export default Hero
