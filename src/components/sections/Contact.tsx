import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Linkedin, Github, MapPin, type LucideIcon } from 'lucide-react'
import Container from '@components/ui/Container'
import { SITE } from '@utils/constants'
import AnimatedSection from '@components/ui/AnimatedSection'

const contactDetails: Array<{
  label: string
  icon: LucideIcon
  value: string
  href: string | undefined
}> = [
  { label: 'Email', icon: Mail, value: SITE.email, href: `mailto:${SITE.email}` },
  { label: 'LinkedIn', icon: Linkedin, value: 'linkedin.com/in/mohie93', href: SITE.linkedin },
  { label: 'GitHub', icon: Github, value: 'github.com/mohiekodo', href: SITE.github },
  { label: 'Location', icon: MapPin, value: SITE.location, href: undefined },
]

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const resetTimerRef = useRef<number | undefined>(undefined)
  const [status, setStatus] = useState<FormStatus>('idle')

  // Clear any pending status-reset timer on unmount
  useEffect(() => () => window.clearTimeout(resetTimerRef.current), [])

  const finish = (next: Exclude<FormStatus, 'idle' | 'sending'>, resetAfterMs: number) => {
    setStatus(next)
    window.clearTimeout(resetTimerRef.current)
    resetTimerRef.current = window.setTimeout(() => setStatus('idle'), resetAfterMs)
  }

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    // Honeypot: real users never see or fill this field. Silently pretend success for bots.
    const honeypot = new FormData(form).get('website')
    if (typeof honeypot === 'string' && honeypot.trim() !== '') {
      form.reset()
      finish('success', 4000)
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        'EmailJS env vars are not set. Check VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY.'
      )
      finish('error', 8000)
      return
    }

    setStatus('sending')

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey })
      form.reset()
      finish('success', 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      finish('error', 8000)
    }
  }

  const inputClass =
    'w-full bg-canvas rounded-xl border border-slate/35 px-4 py-3.5 text-base text-ink placeholder-slate/45 focus:border-google-blue focus:outline-none focus:ring-2 focus:ring-google-blue/15 transition-fluid'
  const labelClass = 'block mb-1.5 font-mono text-xs tracking-[0.12em] uppercase text-slate'

  return (
    <div className="py-24 bg-surface">
      <Container>
        <AnimatedSection>
          {/* Section label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-google-blue" />
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-slate">
              Contact
            </span>
          </div>

          <h2 className="font-display font-semibold text-ink text-4xl sm:text-5xl tracking-tight leading-tight">
            Get In Touch
          </h2>

          <p className="mt-5 text-slate max-w-xl leading-[1.8] text-base sm:text-lg">
            Open to new opportunities, interesting projects, or just a conversation about tech and
            leadership. I'll get back to you promptly.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
            {/* Contact details */}
            <div className="divide-y divide-slate/10">
              {contactDetails.map(({ label, icon: Icon, value, href }) => {
                return (
                  <div key={label} className="flex items-center gap-4 py-4">
                    <div className="w-10 h-10 rounded-xl bg-active-tint flex items-center justify-center text-google-blue shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono text-xs tracking-[0.12em] uppercase text-slate mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="text-base font-medium text-ink hover:text-google-blue transition-fluid"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-base font-medium text-ink">{value}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Contact form — uses sendForm so EmailJS reads name attributes directly */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              {/* Honeypot — hidden from users and assistive tech, tempting to bots */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="user_name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Your message…"
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex items-center gap-5 flex-wrap pt-1">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="aurora-bg btn-press text-white px-8 py-3.5 text-base font-semibold rounded-full shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                {/* Always mounted so screen readers announce status changes */}
                <div role="status" aria-live="polite" className="text-base">
                  {status === 'success' && (
                    <p className="text-success font-medium">Message sent — I'll be in touch!</p>
                  )}
                  {status === 'error' && (
                    <p className="text-error">
                      Something went wrong. Please email me at{' '}
                      <a
                        href={`mailto:${SITE.email}`}
                        className="underline underline-offset-2 hover:text-ink"
                      >
                        {SITE.email}
                      </a>
                      .
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Contact
