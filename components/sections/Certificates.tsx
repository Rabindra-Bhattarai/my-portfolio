'use client'

import { useEffect, useRef } from 'react'
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { certificates } from '@/data/certificates'

export default function Certificates() {
  const ref = useScrollFadeIn()
  const barsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = barsRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLDivElement>('.cert-bar-fill').forEach((bar) => {
            bar.style.width = bar.dataset.w + '%'
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certs" className="section alt" ref={ref as React.RefObject<HTMLElement>}>
      <SectionHeader num="03" title="Certificates" />

      <div
        ref={barsRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}
      >
        {certificates.map((cert, i) => (
          <div
            key={cert.name}
            className={`fade-in delay-${i + 1}`}
            style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              padding: '32px 28px',
              transition: 'border-color 0.3s, background 0.3s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--teal)'
              el.style.background = 'var(--bg3)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--border)'
              el.style.background = 'var(--bg2)'
            }}
          >
            {/* Platform */}
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--muted)',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <span style={{ color: 'var(--teal)', fontSize: '8px' }}>◆</span>
              {cert.platform}
            </div>

            {/* Name */}
            <div style={{
              fontFamily: 'var(--body)', fontWeight: 700, fontSize: '15px',
              color: 'var(--white)', marginBottom: '12px', lineHeight: 1.3,
            }}>
              {cert.name}
            </div>

            {/* Skill */}
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '10px',
              color: 'var(--teal)', marginBottom: '16px', letterSpacing: '0.06em',
            }}>
              {cert.skill}
            </div>

            {/* Bar */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)',
                display: 'flex', justifyContent: 'space-between', marginBottom: '5px',
              }}>
                <span>Proficiency</span>
                <span>{cert.status === 'in-progress' ? 'In Progress' : `${cert.proficiency}%`}</span>
              </div>
              <div style={{ height: '2px', background: 'var(--border)', overflow: 'hidden' }}>
                <div
                  className="cert-bar-fill"
                  data-w={cert.proficiency}
                  style={{
                    height: '100%', background: 'var(--teal)', width: 0,
                    transition: 'width 2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              </div>
            </div>

            {/* Badge */}
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '9px',
              color: cert.status === 'in-progress' ? 'var(--yellow)' : 'var(--teal)',
              border: `1px solid ${cert.status === 'in-progress' ? 'var(--yellow)' : 'var(--teal)'}`,
              padding: '3px 10px', display: 'inline-block',
              letterSpacing: '0.15em', textTransform: 'uppercase',
            }}>
              {cert.status === 'in-progress' ? 'In Progress' : 'Completed'}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}