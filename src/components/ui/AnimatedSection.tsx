import React from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { sectionTransition, fadeInUp, fadeIn } from '@utils/animations'

const AnimatedSection: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className = '',
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={shouldReduceMotion ? fadeIn : fadeInUp}
      transition={sectionTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
