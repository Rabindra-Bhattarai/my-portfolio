'use client'

import { useState } from 'react'
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn'
import SectionHeader from '@/components/ui/SectionHeader'

const socials = [
  {
    icon: '⌥',
    label: 'GitHub',
    value: 'Rabindra-Bhattarai',
    href: 'https://github.com/Rabindra-Bhattarai/',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'rabindra-bhattarai-819b35283',
    href: 'https://www.linkedin.com/in/rabindra-bhattarai-819b35283/',
  },
  {
    icon: '@',
    label: 'Email',
    value: 'your@email.com', // ← replace with your email
    href: 'mailto:your@email.com',
  },
]

export default function Contact() {
  const ref = useScrollFadeIn()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section" ref={ref as React.RefObject<HTMLElement>}>
      <SectionHeader num="06" title="Contact" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'start',
      }}>

        {/* Left — intro + socials */}
        <div className="fade-in delay-1">
          <p style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(22px, 2.5vw, 36px)',
            color: 'var(--white)',
            lineHeight: 1.3, marginBottom: '24px',
            fontStyle: 'italic',
          }}>
            Let&apos;s build something that lasts.
          </p>
          <p style={{
            fontSize: '14px', color: 'var(--muted)',
            lineHeight: 1.75, marginBottom: '36px',
          }}>
            I&apos;m open to fullstack roles, AI-integrated projects, data analytics work,
            and technically interesting conversations. If you&apos;re working on something
            that matters — healthcare, civic tech, real infrastructure — I want to hear about it.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {socials.map(social => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '18px 24px',
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  color: 'var(--white)',
                  borderLeft: '2px solid transparent',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderLeftColor = 'var(--teal)'
                  el.style.background = 'var(--bg2)'
                  el.style.paddingLeft = '32px'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderLeftColor = 'transparent'
                  el.style.background = 'var(--bg3)'
                  el.style.paddingLeft = '24px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '36px', height: '36px',
                    background: 'var(--bg2)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', fontFamily: 'var(--mono)',
                    transition: 'border-color 0.3s',
                  }}>
                    {social.icon}
                  </div>
                  <div>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--teal)',
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      display: 'block', marginBottom: '2px',
                    }}>
                      {social.label}
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--white)' }}>
                      {social.value}
                    </span>
                  </div>
                </div>
                <span style={{
                  fontSize: '18px', color: 'var(--muted)',
                  transition: 'color 0.3s, transform 0.3s',
                }}>
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="fade-in delay-2">
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
          >
            {/* Name */}
            <div>
              <label style={{
                fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--teal)',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                display: 'block', marginBottom: '6px',
              }}>
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                placeholder="Your name"
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={{
                  width: '100%', background: 'var(--bg3)',
                  border: '1px solid var(--border)', color: 'var(--white)',
                  fontFamily: 'var(--mono)', fontSize: '12px',
                  padding: '14px 16px', outline: 'none',
                  letterSpacing: '0.04em', transition: 'border-color 0.25s',
                }}
                onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--teal)'}
                onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'var(--border)'}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{
                fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--teal)',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                display: 'block', marginBottom: '6px',
              }}>
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                placeholder="your@email.com"
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={{
                  width: '100%', background: 'var(--bg3)',
                  border: '1px solid var(--border)', color: 'var(--white)',
                  fontFamily: 'var(--mono)', fontSize: '12px',
                  padding: '14px 16px', outline: 'none',
                  letterSpacing: '0.04em', transition: 'border-color 0.25s',
                }}
                onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--teal)'}
                onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'var(--border)'}
              />
            </div>

            {/* Message */}
            <div>
              <label style={{
                fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--teal)',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                display: 'block', marginBottom: '6px',
              }}>
                Message
              </label>
              <textarea
                required
                value={form.message}
                placeholder="What are you building?"
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{
                  width: '100%', background: 'var(--bg3)',
                  border: '1px solid var(--border)', color: 'var(--white)',
                  fontFamily: 'var(--body)', fontSize: '14px',
                  padding: '14px 16px', outline: 'none',
                  minHeight: '120px', resize: 'vertical',
                  transition: 'border-color 0.25s',
                }}
                onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--teal)'}
                onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--border)'}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitted}
              style={{
                fontFamily: 'var(--mono)', fontSize: '11px',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                padding: '15px 32px', marginTop: '6px',
                alignSelf: 'flex-start',
                background: submitted ? 'var(--green)' : 'var(--teal)',
                color: 'var(--bg)', border: 'none', cursor: submitted ? 'default' : 'pointer',
                transition: 'background 0.3s, transform 0.2s',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
              }}
              onMouseEnter={e => {
                if (!submitted) (e.currentTarget as HTMLButtonElement).style.background = '#0af0d8'
              }}
              onMouseLeave={e => {
                if (!submitted) (e.currentTarget as HTMLButtonElement).style.background = 'var(--teal)'
              }}
            >
              {submitted ? 'Message Sent ✓' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}