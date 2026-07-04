import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Container from '@components/ui/Container'
import { useActiveSection } from '@hooks/useActiveSection'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]

const aurora = 'linear-gradient(90deg, #1A73E8 0%, #8AB4F8 40%, #A062FF 70%, #FF8bcb 100%)'

const Header: React.FC = () => {
  const active = useActiveSection()
  const detailsRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    detailsRef.current?.removeAttribute('open')
  }, [active])

  const closeMobileMenu = () => detailsRef.current?.removeAttribute('open')

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate/10"
      style={{ backdropFilter: 'blur(12px)', background: 'rgba(255, 255, 255, 0.82)' }}
    >
      <Container className="flex h-14 items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 transition-fluid hover:opacity-75"
          aria-label="Go to top"
        >
          <img
            src="/assets/brand/mt-icon.svg"
            alt="MT monogram"
            className="h-9 w-9"
            width={36}
            height={36}
            loading="eager"
          />
          <span className="hidden sm:inline font-display font-semibold text-sm tracking-tight text-ink">
            Mohieddin Tanna
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm" aria-label="Primary">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? 'page' : undefined}
              className={`relative px-3 py-2 font-medium transition-fluid rounded-sm ${
                active === n.id ? 'text-ink' : 'nav-link-hover text-slate hover:text-ink'
              }`}
            >
              {n.label}
              {/* Aurora gradient underline — shared layout animation across active items */}
              {active === n.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute left-0 right-0 -bottom-[2px] h-[2px] rounded-full"
                  style={{ background: aurora }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile menu */}
        <details ref={detailsRef} className="md:hidden relative group">
          <summary className="list-none p-2 rounded-full cursor-pointer text-slate hover:text-ink hover:bg-surface transition-fluid">
            <Menu className="w-5 h-5 group-open:hidden" />
            <X className="w-5 h-5 hidden group-open:block" />
          </summary>
          <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-slate/10 bg-white shadow-float overflow-hidden">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={closeMobileMenu}
                className={`block px-5 py-3 text-sm font-medium border-b border-slate/8 last:border-0 transition-fluid ${
                  active === n.id
                    ? 'text-google-blue bg-active-tint'
                    : 'text-slate hover:text-ink hover:bg-surface'
                }`}
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
