import React, { useCallback, useEffect, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { FileText, Menu, X } from 'lucide-react'
import Container from '@components/ui/Container'
import { useActiveSection } from '@hooks/useActiveSection'
import { NAV_ITEMS, SITE } from '@utils/constants'

const Header: React.FC = () => {
  const active = useActiveSection()
  const shouldReduceMotion = useReducedMotion()
  const detailsRef = useRef<HTMLDetailsElement>(null)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })

  const closeMobileMenu = useCallback(() => detailsRef.current?.removeAttribute('open'), [])

  // Close the menu whenever the active section changes
  useEffect(() => {
    closeMobileMenu()
  }, [active, closeMobileMenu])

  // Close on Escape or when clicking/tapping outside the menu
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && detailsRef.current?.hasAttribute('open')) {
        closeMobileMenu()
        detailsRef.current?.querySelector('summary')?.focus()
      }
    }
    const onPointerDown = (e: PointerEvent) => {
      const el = detailsRef.current
      if (el?.hasAttribute('open') && e.target instanceof Node && !el.contains(e.target)) {
        closeMobileMenu()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [closeMobileMenu])

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
            alt=""
            className="h-9 w-9"
            width={36}
            height={36}
            loading="eager"
          />
          <span className="hidden sm:inline font-display font-semibold text-sm tracking-tight text-ink">
            {SITE.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm" aria-label="Primary">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? 'true' : undefined}
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
                  style={{ background: 'var(--aurora)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a
            href={SITE.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-google-blue px-4 py-1.5 font-semibold text-google-blue transition-fluid hover:bg-active-tint"
          >
            <FileText className="w-4 h-4" aria-hidden="true" />
            Résumé
          </a>
        </nav>

        {/* Mobile menu */}
        <details ref={detailsRef} className="md:hidden relative group">
          <summary
            className="list-none p-2 rounded-full cursor-pointer text-slate hover:text-ink hover:bg-surface transition-fluid"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5 group-open:hidden" aria-hidden="true" />
            <X className="w-5 h-5 hidden group-open:block" aria-hidden="true" />
          </summary>
          <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-slate/10 bg-white shadow-float overflow-hidden">
            {NAV_ITEMS.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={closeMobileMenu}
                className={`block px-5 py-3 text-sm font-medium border-b border-slate/8 transition-fluid ${
                  active === n.id
                    ? 'text-google-blue bg-active-tint'
                    : 'text-slate hover:text-ink hover:bg-surface'
                }`}
              >
                {n.label}
              </a>
            ))}
            <a
              href={SITE.resume}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-google-blue hover:bg-active-tint transition-fluid"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              Résumé
            </a>
          </div>
        </details>
      </Container>

      {/* Scroll progress */}
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute left-0 right-0 -bottom-px h-[2px] origin-left"
          style={{ scaleX: progress, background: 'var(--aurora)' }}
        />
      )}
    </header>
  )
}

export default Header
