import React from 'react'
import Container from '@components/ui/Container'

const SectionWrapper: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className='' }) => (
  <div className={`py-16 ${className}`}>
    <Container>
      {children}
    </Container>
  </div>
)

export default SectionWrapper

