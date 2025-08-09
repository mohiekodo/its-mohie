import React from 'react'
import Container from '@components/ui/Container'
import { SITE } from '@utils/constants'
import AnimatedSection from '@components/ui/AnimatedSection'

const Contact: React.FC = () => {
  return (
    <div className="py-16">
      <Container>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-accent-gold">Get In Touch</h2>
          <p className="mt-4 text-text-secondary max-w-2xl">
            I'm always open to discussing new opportunities, interesting projects, or just having a
            conversation about technology and leadership. Whether you have a question or just want
            to say hi, feel free to reach out!
          </p>
          <div className="mt-6 space-y-2 text-text-secondary">
            <p>
              <span className="text-text-primary">Email:</span>{' '}
              <a className="text-accent-teal" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            <p>
              <span className="text-text-primary">LinkedIn:</span>{' '}
              <a className="text-accent-teal" href={SITE.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/mohie93
              </a>
            </p>
            <p>
              <span className="text-text-primary">Phone:</span> {SITE.phone}
            </p>
            <p>
              <span className="text-text-primary">Location:</span> {SITE.location}
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Contact
