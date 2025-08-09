import React from 'react'
import Container from '@components/ui/Container'

const AccessibilityNote: React.FC = () => (
  <div className="sr-only">
    This site supports high contrast, keyboard navigation, screen readers, and reduces motion if
    your system requests it.
  </div>
)

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-accent-gold/20 bg-secondary-dark/40 py-8">
      <Container>
        <AccessibilityNote />
        <p className="text-center text-xs text-text-secondary">
          © {new Date().getFullYear()} Mohieddin Tanna. Built with React, TypeScript, and Tailwind.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
