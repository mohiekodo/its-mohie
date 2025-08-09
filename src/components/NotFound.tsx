import React from 'react'
import Container from '@components/ui/Container'

const NotFound: React.FC = () => (
  <div className="py-24">
    <Container>
      <h1 className="text-3xl font-bold text-accent-gold">Page not found</h1>
      <p className="mt-2 text-text-secondary">The page you're looking for doesn't exist.</p>
      <a className="mt-4 inline-block text-accent-teal" href="#hero">Go back home</a>
    </Container>
  </div>
)

export default NotFound

