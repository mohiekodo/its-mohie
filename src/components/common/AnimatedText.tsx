import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, sectionTransition } from '@utils/animations'

const AnimatedText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const letters = Array.from(text)
  return (
    <div aria-label={text} role="heading" className={className}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...sectionTransition, delay: index * 0.02 }}
          style={{ display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}

export default AnimatedText
