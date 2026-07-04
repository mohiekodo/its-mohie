import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '@components/layout/Layout'
import Hero from '@components/sections/Hero'
import About from '@components/sections/About'
import Experience from '@components/sections/Experience'
import Projects from '@components/sections/Projects'
import Leadership from '@components/sections/Leadership'
import Contact from '@components/sections/Contact'
import { SITE } from '@utils/constants'

function App() {
  return (
    <>
      <Helmet>
        <title>Mohieddin Tanna — Strategic Tech Leader</title>
        <meta
          name="description"
          content="Portfolio of Mohieddin Tanna: Strategic tech leader specializing in scalable solutions and high-performing teams."
        />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="canonical" href="https://its-mohie.com/" />
        <link rel="icon" type="image/svg+xml" href="/assets/brand/mt-icon.svg" />

        {/* Open Graph */}
        <meta property="og:title" content="Mohieddin Tanna — Strategic Tech Leader" />
        <meta
          property="og:description"
          content="Portfolio of Mohieddin Tanna: Strategic tech leader specializing in scalable solutions and high-performing teams."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://its-mohie.com/" />
        <meta property="og:image" content="https://its-mohie.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohieddin Tanna — Strategic Tech Leader" />
        <meta
          name="twitter:description"
          content="Portfolio of Mohieddin Tanna: Strategic tech leader specializing in scalable solutions and high-performing teams."
        />
        <meta name="twitter:image" content="https://its-mohie.com/og-image.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Mohieddin Tanna',
            jobTitle: 'Lead Engineer',
            url: 'https://its-mohie.com/',
            sameAs: [SITE.linkedin, SITE.github],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Kuala Lumpur',
              addressCountry: 'Malaysia',
            },
          })}
        </script>
      </Helmet>
      <Layout>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="leadership">
          <Leadership />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Layout>
    </>
  )
}

export default App
