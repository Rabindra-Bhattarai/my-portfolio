'use client'

import { useEffect, useRef } from 'react'
import StatusBar from '@/components/ui/StatusBar'

const chips = [
  'Fullstack Dev', 'AI Integration', 'Data Analytics',
  'Tableau · Viz', 'NepaLink Architect', 'Kathmandu, Nepal',
]

const sysBars = [
  { label: 'Fullstack Dev',   value: 90 },
  { label: 'AI Integration',  value: 82 },
  { label: 'Data Analytics',  value: 85 },
  { label: 'Tableau · Viz',   value: 80 },
]

export default function Hero() {
  const barsRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animate skill bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      barsRef.current?.querySelectorAll<HTMLDivElement>('.bar-fill').forEach((el) => {
        el.style.width = el.dataset.w + '%'
      })
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  // Draw sparkline
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const data = [12, 8, 18, 24, 15, 32, 28, 40, 22, 36, 45, 30, 52, 48, 38, 55, 42, 60, 50, 58, 45, 68, 72, 65]
    const w = canvas.width, h = canvas.height
    const max = Math.max(...data), min = Math.min(...data)
    const pts = data.map((v, i) => ({
      x: (i / (data.length - 1)) * w,
      y: h - ((v - min) / (max - min)) * (h - 8) - 4,
    }))

    const grad = ctx.createLinearGradient(0, 0, 0, h)
    grad.addColorStop(0, 'rgba(13,232,204,0.25)')
    grad.addColorStop(1, 'rgba(13,232,204,0)')

    ctx.beginPath()
    ctx.moveTo(pts[0].x, h)
    pts.forEach((p) => ctx.lineTo(p.x, p.y))
    ctx.lineTo(pts[pts.length - 1].x, h)
    ctx.closePath()
    ctx.fillStyle = grad
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(pts[0].x, pts[0].y)
    pts.forEach((p) => ctx.lineTo(p.x, p.y))
    ctx.strokeStyle = '#0de8cc'
    ctx.lineWidth = 1.5
    ctx.stroke()

    pts.forEach((p, i) => {
      if (i % 4 === 0) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = '#0de8cc'
        ctx.fill()
      }
    })
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: '60px',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="hero-grid-bg" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 480px',
        alignItems: 'center',
        padding: '0 48px',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* LEFT */}
        <div style={{ padding: '80px 0' }}>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--teal)',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px',
          }}>
            <span style={{
              width: '7px', height: '7px', background: 'var(--teal)',
              borderRadius: '50%',
            }} />
            SYSTEM ONLINE
            <span style={{ color: 'var(--muted)' }}>// Rabindra Bhattarai</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(56px, 6.5vw, 96px)',
            lineHeight: 0.95,
            color: 'var(--white)',
            marginBottom: '4px',
          }}>
            Architecting<br />
            <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>Care, Code</span><br />
            &amp; Clarity.
          </h1>

          <p style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(16px, 1.8vw, 22px)',
            color: 'var(--muted)',
            fontStyle: 'italic',
            lineHeight: 1.4,
            margin: '28px 0 40px',
            borderLeft: '2px solid var(--teal)',
            paddingLeft: '18px',
          }}>
            Fullstack developer. AI integrator. Data storyteller.<br />
            Builder of systems that actually matter.
          </p>

          {/* Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '44px' }}>
            {chips.map((chip) => (
              <span key={chip} style={{
                fontFamily: 'var(--mono)', fontSize: '10px',
                color: 'var(--teal)', letterSpacing: '0.12em',
                textTransform: 'uppercase',
                border: '1px solid var(--border)',
                padding: '5px 14px',
                background: 'var(--teal-faint)',
                transition: 'border-color 0.3s',
              }}>{chip}</span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              fontFamily: 'var(--mono)', fontSize: '11px',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '13px 26px', textDecoration: 'none',
              background: 'var(--teal)', color: 'var(--bg)',
              transition: 'background 0.3s, transform 0.2s',
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#0af0d8' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--teal)' }}
            >
              Explore Work
            </a>
            <a href="#contact" style={{
              fontFamily: 'var(--mono)', fontSize: '11px',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '13px 26px', textDecoration: 'none',
              border: '1px solid var(--border)', color: 'var(--muted)',
              transition: 'border-color 0.3s, color 0.3s',
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--teal)'
                el.style.color = 'var(--teal)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--border)'
                el.style.color = 'var(--muted)'
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* RIGHT — system panel */}
        <div style={{
          borderLeft: '1px solid var(--border)',
          padding: '80px 0 80px 40px',
        }}>
          <div ref={barsRef}>
            {/* Panel header */}
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--teal)',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '12px 20px',
              border: '1px solid var(--border)',
              borderBottom: 'none',
              background: 'var(--bg2)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span>dev.profile // status</span>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['#ff4d6d', '#f4c542', '#2ecc89'].map((c) => (
                  <span key={c} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />
                ))}
              </div>
            </div>

            {/* Panel body */}
            <div style={{
              border: '1px solid var(--border)',
              background: 'var(--bg2)',
              padding: '20px',
            }}>
              {[
                { key: 'ROLE',       val: 'Fullstack · AI · Data', color: 'var(--teal)' },
                { key: 'LOCATION',   val: 'Kathmandu, NP',          color: 'var(--white)' },
                { key: 'EDUCATION',  val: 'BSc (Hons) Computing',   color: 'var(--white)' },
                { key: 'UNIVERSITY', val: 'Coventry · KU',          color: 'var(--white)' },
                { key: 'STATUS',     val: '● AVAILABLE',             color: 'var(--green)' },
                { key: 'FLAGSHIP',   val: 'NepaLink Platform',       color: 'var(--teal)' },
              ].map(({ key, val, color }) => (
                <div key={key} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '8px 0', borderBottom: '1px solid var(--border)',
                  fontFamily: 'var(--mono)', fontSize: '11px',
                }}>
                  <span style={{ color: 'var(--muted)', letterSpacing: '0.08em' }}>{key}</span>
                  <span style={{ color, letterSpacing: '0.05em' }}>{val}</span>
                </div>
              ))}

              {/* Skill bars */}
              {sysBars.map(({ label, value }, i) => (
                <div key={label} style={{
                  padding: '12px 0',
                  borderBottom: i < sysBars.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)',
                    display: 'flex', justifyContent: 'space-between', marginBottom: '6px',
                  }}>
                    <span>{label}</span><span>{value}%</span>
                  </div>
                  <div style={{ background: 'var(--bg3)', height: '4px', borderRadius: '2px', overflow: 'hidden' }}>
                    <div className="bar-fill" data-w={value} style={{ width: 0 }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Sparkline */}
            <div style={{
              padding: '16px 20px',
              border: '1px solid var(--border)',
              borderTop: 'none',
              background: 'var(--bg2)',
            }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--muted)',
                letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px',
              }}>
                Commit Activity (6mo)
              </div>
              <canvas ref={canvasRef} width={380} height={48} style={{ display: 'block' }} />
            </div>
          </div>
        </div>
      </div>

      <StatusBar />
    </section>
  )
}