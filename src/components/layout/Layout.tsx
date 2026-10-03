import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-canvas">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="pt-14 flex-1 focus:outline-none">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
