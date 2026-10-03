import React, { Suspense, lazy, useEffect } from 'react'
import Layout from '@components/layout/Layout'
import Hero from '@components/sections/Hero'

// Below-the-fold sections are split into separate chunks so the first paint stays light.
const loaders = {
  About: () => import('@components/sections/About'),
  Experience: () => import('@components/sections/Experience'),
  Projects: () => import('@components/sections/Projects'),
  Leadership: () => import('@components/sections/Leadership'),
  Testimonials: () => import('@components/sections/Testimonials'),
  Contact: () => import('@components/sections/Contact'),
}

const About = lazy(loaders.About)
const Experience = lazy(loaders.Experience)
const Projects = lazy(loaders.Projects)
const Leadership = lazy(loaders.Leadership)
const Testimonials = lazy(loaders.Testimonials)
const Contact = lazy(loaders.Contact)

// Reserves space while a chunk loads so the layout (and scroll-spy) doesn't jump.
const SectionFallback: React.FC = () => <div aria-hidden="true" className="min-h-[60vh]" />

function App() {
  // Warm the chunk cache once the browser is idle so scrolling/hash links never wait on network.
  useEffect(() => {
    const prefetch = () => Object.values(loaders).forEach((load) => void load())
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(prefetch, { timeout: 3000 })
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(prefetch, 1500)
    return () => window.clearTimeout(id)
  }, [])

  // Section wrappers stay eager so IDs exist immediately for navigation and scroll-spy.
  return (
    <Layout>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
      </section>
      <section id="experience">
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
      </section>
      <section id="projects">
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
      </section>
      <section id="leadership">
        <Suspense fallback={<SectionFallback />}>
          <Leadership />
        </Suspense>
      </section>
      <section id="testimonials">
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
      </section>
      <section id="contact">
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </section>
    </Layout>
  )
}

export default App
