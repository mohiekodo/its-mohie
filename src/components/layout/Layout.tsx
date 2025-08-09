import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
