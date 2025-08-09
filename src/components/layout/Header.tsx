import React, { useEffect } from 'react'
import Container from '@components/ui/Container'
import { useActiveSection } from '@hooks/useActiveSection'
import { Menu } from 'lucide-react'

const Header: React.FC = () => {
  const active = useActiveSection()
  useEffect(() => {
    const details = document.querySelectorAll('details[open]')
    details.forEach((d) => d.removeAttribute('open'))
  }, [active])

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-primary-dark/70 border-b border-border-subtle">
      <Container className="flex h-14 items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-accent-gold hover:opacity-90 transition"
          aria-label="Go to top"
        >
          Mohieddin Tanna
        </a>
        <nav className="hidden md:flex gap-6 text-sm text-text-secondary" aria-label="Primary">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`hover:text-accent-gold ${active === n.id ? 'text-accent-gold' : ''}`}
              aria-current={active === n.id ? 'page' : undefined}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <details className="md:hidden relative">
          <summary
            className="list-none p-2 rounded hover:bg-secondary-dark/60 cursor-pointer"
            aria-label="Open menu"
            role="button"
          >
            <Menu className="w-5 h-5 text-text-secondary" />
          </summary>
          <div className="absolute right-0 mt-2 w-48 rounded border border-border-subtle bg-secondary-dark/95 p-2">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="block px-3 py-2 rounded text-sm text-text-secondary hover:bg-primary-dark/60 hover:text-accent-gold"
              >
                {n.label}
              </a>
            ))}
          </div>
        </details>
      </Container>
    </header>
  )
}

export default Header
