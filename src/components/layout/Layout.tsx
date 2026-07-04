import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-canvas">
      <Header />
      <main className="pt-14 flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
