import React from 'react'
import Container from '@components/ui/Container'
import { SITE } from '@utils/constants'

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate/10 bg-canvas py-10">
      <Container>
        <div className="sr-only">
          This site supports keyboard navigation, screen readers, and reduces motion if your system
          requests it.
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-display font-semibold text-sm text-ink tracking-tight">
            {SITE.name}
          </span>
          <p className="text-xs text-slate">
            © {new Date().getFullYear()} — Built with React, TypeScript &amp; Tailwind
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
