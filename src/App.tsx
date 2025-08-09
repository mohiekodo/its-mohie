import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '@components/layout/Layout'
import Hero from '@components/sections/Hero'
import About from '@components/sections/About'
import Experience from '@components/sections/Experience'
import Projects from '@components/sections/Projects'
import Leadership from '@components/sections/Leadership'
import Contact from '@components/sections/Contact'

function App() {
  return (
    <>
      <Helmet>
        <title>Mohieddin Tanna — Strategic Tech Leader</title>
        <meta name="description" content="Portfolio of Mohieddin Tanna: Strategic tech leader specializing in scalable solutions and high-performing teams." />
        <meta property="og:title" content="Mohieddin Tanna — Strategic Tech Leader" />
        <meta property="og:description" content="Portfolio of Mohieddin Tanna: Strategic tech leader specializing in scalable solutions and high-performing teams." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Layout>
        <main>
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="projects"><Projects /></section>
          <section id="leadership"><Leadership /></section>
          <section id="contact"><Contact /></section>
        </main>
      </Layout>
    </>
  )
}

export default App

