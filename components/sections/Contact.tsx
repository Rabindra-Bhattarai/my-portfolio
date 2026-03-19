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
    value: 'onlystudyforrabindra@gmail.com',
    href: 'onlystudyforrabindra@gmail.com',
  },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const ref = useScrollFadeIn()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
        return
      }

      setStatus('success')
      setForm({ name: '', email: '', message: '' })

    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--bg3)',
    border: '1px solid var(--border)',
    color: 'var(--white)',
    fontFamily: 'var(--mono)',
    fontSize: '12px',
    padding: '14px 16px',
    outline: 'none',
    letterSpacing: '0.04em',
    transition: 'border-color 0.25s',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--mono)',
    fontSize: '10px',
    color: 'var(--teal)',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '6px',
  }

  const isLoading = status === 'loading'

  return (
    <section id="contact" className="section" ref={ref as React.RefObject<HTMLElement>}>
      <SectionHeader num="06" title="Contact" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'start',
      }}>

        {/* ── LEFT: intro + socials ── */}
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
            {socials.map((social) => (
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
                  textDecoration: 'none', color: 'var(--white)',
                  borderLeft: '2px solid transparent',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderLeftColor = 'var(--teal)'
                  el.style.background = 'var(--bg2)'
                  el.style.paddingLeft = '32px'
                }}
                onMouseLeave={(e) => {
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
                <span style={{ fontSize: '18px', color: 'var(--muted)' }}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT: form ── */}
        <div className="fade-in delay-2">

          {/* Success state */}
          {status === 'success' ? (
            <div style={{
              background: 'var(--bg3)',
              border: '1px solid var(--green)',
              padding: '48px 32px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>✓</div>
              <div style={{
                fontFamily: 'var(--display)', fontSize: '22px',
                color: 'var(--green)', marginBottom: '12px',
              }}>
                Message sent.
              </div>
              <p style={{
                fontFamily: 'var(--mono)', fontSize: '11px',
                color: 'var(--muted)', letterSpacing: '0.08em', lineHeight: 1.7,
              }}>
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                style={{
                  marginTop: '24px',
                  fontFamily: 'var(--mono)', fontSize: '10px',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  padding: '10px 24px', background: 'transparent',
                  border: '1px solid var(--border)', color: 'var(--muted)',
                  cursor: 'pointer', transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.borderColor = 'var(--teal)'
                  el.style.color = 'var(--teal)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.borderColor = 'var(--border)'
                  el.style.color = 'var(--muted)'
                }}
              >
                Send another →
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
            >
              {/* Name */}
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text" required disabled={isLoading}
                  value={form.name} placeholder="Your name"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{ ...inputStyle, opacity: isLoading ? 0.6 : 1 }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--teal)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email" required disabled={isLoading}
                  value={form.email} placeholder="your@email.com"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{ ...inputStyle, opacity: isLoading ? 0.6 : 1 }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--teal)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  required disabled={isLoading}
                  value={form.message} placeholder="What are you building?"
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    ...inputStyle,
                    fontFamily: 'var(--body)', fontSize: '14px',
                    minHeight: '120px', resize: 'vertical',
                    opacity: isLoading ? 0.6 : 1,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--teal)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Error banner */}
              {status === 'error' && (
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '11px',
                  color: 'var(--red)', padding: '10px 14px',
                  border: '1px solid var(--red)',
                  background: '#ff4d6d11', letterSpacing: '0.06em',
                }}>
                  ✕ {errorMsg}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit" disabled={isLoading}
                style={{
                  fontFamily: 'var(--mono)', fontSize: '11px',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  padding: '15px 32px', marginTop: '6px',
                  alignSelf: 'flex-start',
                  background: isLoading ? 'var(--teal2)' : 'var(--teal)',
                  color: 'var(--bg)', border: 'none',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'background 0.3s',
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) (e.currentTarget as HTMLButtonElement).style.background = '#0af0d8'
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) (e.currentTarget as HTMLButtonElement).style.background = 'var(--teal)'
                }}
              >
                {isLoading ? (
                  <>
                    <span style={{
                      display: 'inline-block',
                      width: '10px', height: '10px',
                      border: '2px solid var(--bg)',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'spin 0.7s linear infinite',
                    }} />
                    Sending…
                  </>
                ) : (
                  'Send Message →'
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}