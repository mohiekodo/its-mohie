import React from 'react'
import Container from '@components/ui/Container'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-primary-dark/70 border-b border-border-subtle">
      <Container className="flex h-14 items-center justify-between">
        <a href="#hero" className="font-mono text-accent-gold hover:opacity-90 transition">Mohieddin Tanna</a>
        <nav className="hidden md:flex gap-6 text-sm text-text-secondary">
          <a href="#about" className="hover:text-accent-gold">About</a>
          <a href="#experience" className="hover:text-accent-gold">Experience</a>
          <a href="#projects" className="hover:text-accent-gold">Projects</a>
          <a href="#contact" className="hover:text-accent-gold">Contact</a>
        </nav>
      </Container>
    </header>
  )
}

export default Header

