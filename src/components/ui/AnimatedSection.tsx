import React from 'react'
import { motion, useInView } from 'framer-motion'
import { sectionTransition, fadeInUp } from '@utils/animations'

const AnimatedSection: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className = '',
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={fadeInUp}
      transition={sectionTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
