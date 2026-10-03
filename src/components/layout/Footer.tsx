import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Container from '@components/ui/Container'
import { SITE } from '@utils/constants'

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate/10 bg-canvas py-10">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-display font-semibold text-sm text-ink tracking-tight">
            {SITE.name}
          </span>
          <nav aria-label="Social" className="flex items-center gap-1">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-slate hover:text-google-blue hover:bg-active-tint transition-fluid"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-slate hover:text-google-blue hover:bg-active-tint transition-fluid"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="p-2 rounded-full text-slate hover:text-google-blue hover:bg-active-tint transition-fluid"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
          </nav>
          <p className="text-xs text-slate">
            © {new Date().getFullYear()} — Built with React, TypeScript &amp; Tailwind
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
