'use client'

import { useState } from 'react'
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import {
  nepalinkTabs,
  nepalinkMetrics,
  nepalinkFeatures,
  otherProjects,
  type NepaLinkTab,
} from '@/data/projects'

function StackTag({ label, color }: { label: string; color?: string }) {
  const colorMap: Record<string, { color: string; border: string }> = {
    ai:   { color: '#c084fc', border: '#7e22ce55' },
    data: { color: '#38bdf8', border: '#0369a155' },
  }
  const style = color ? colorMap[color] : { color: 'var(--muted)', border: 'var(--border)' }

  return (
    <span style={{
      fontFamily: 'var(--mono)', fontSize: '10px',
      color: style.color,
      border: `1px solid ${style.border}`,
      padding: '3px 10px',
      transition: 'all 0.2s',
    }}>
      {label}
    </span>
  )
}

function SmallProjectCard({ project }: { project: typeof otherProjects[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: 'var(--bg2)', border: '1px solid var(--border)',
        padding: '40px', cursor: 'pointer',
        transition: 'border-color 0.3s',
        position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--teal)'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
    >
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--teal)',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        border: '1px solid var(--teal)', padding: '3px 10px',
        display: 'inline-block', marginBottom: '20px',
      }}>
        {project.tag}
      </div>
      <h3 style={{
        fontFamily: 'var(--display)', fontSize: '22px',
        color: 'var(--white)', marginBottom: '12px',
      }}>{project.name}</h3>
      <p style={{
        fontSize: '13px', color: 'var(--muted)', lineHeight: 1.75,
        marginBottom: '20px',
        display: '-webkit-box', WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.stack.map(t => <StackTag key={t.label} label={t.label} color={t.color} />)}
      </div>

      {/* Expandable detail */}
      {open && project.expandContent && (
        <div style={{
          marginTop: '20px', paddingTop: '20px',
          borderTop: '1px solid var(--border)',
          fontFamily: 'var(--mono)', fontSize: '11px',
          color: 'var(--muted)', lineHeight: 1.8,
          animation: 'tabFadeIn 0.3s ease',
        }}>
          <div style={{
            fontSize: '10px', color: 'var(--teal)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: '8px',
          }}>Key Features</div>
          {project.expandContent}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const ref = useScrollFadeIn()
  const [activeTab, setActiveTab] = useState<NepaLinkTab['id']>('web')

  const currentTab = nepalinkTabs.find(t => t.id === activeTab)!

  return (
    <section id="projects" className="section" ref={ref as React.RefObject<HTMLElement>}>
      <SectionHeader num="02" title="Projects" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>

        {/* ── NepaLink Featured ── */}
        <div
          className="fade-in delay-1"
          style={{
            gridColumn: '1 / -1',
            background: 'var(--bg2)', border: '1px solid var(--border)',
            padding: '52px',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px',
            position: 'relative', overflow: 'hidden',
            transition: 'border-color 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--teal)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
        >
          <div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--teal)',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              border: '1px solid var(--teal)', padding: '3px 10px',
              display: 'inline-block', marginBottom: '20px',
            }}>
              Flagship · Dual-Platform Caregiving Ecosystem
            </div>

            <h3 style={{
              fontFamily: 'var(--display)', fontSize: 'clamp(26px, 3vw, 38px)',
              color: 'var(--white)', marginBottom: '24px',
            }}>NepaLink</h3>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '2px', marginBottom: '24px' }}>
              {nepalinkTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    fontFamily: 'var(--mono)', fontSize: '10px',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    padding: '9px 18px',
                    background: activeTab === tab.id ? 'var(--teal-faint)' : 'var(--bg3)',
                    border: `1px solid ${activeTab === tab.id ? 'var(--teal)' : 'var(--border)'}`,
                    color: activeTab === tab.id ? 'var(--teal)' : 'var(--muted)',
                    cursor: 'pointer', transition: 'all 0.25s',
                  }}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div key={activeTab} style={{ animation: 'tabFadeIn 0.35s ease' }}>
              <p style={{
                fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--teal2)',
                letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px',
              }}>
                {currentTab.platformLabel}
              </p>
              <p
                style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '20px' }}
                dangerouslySetInnerHTML={{ __html: currentTab.description }}
              />
              <div style={{
                background: 'var(--bg3)', borderLeft: '2px solid var(--teal)',
                padding: '14px 16px', marginBottom: '20px',
                fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--white)',
                lineHeight: 1.5,
              }}>
                {activeTab === 'ai' && (
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: '10px',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    padding: '4px 12px', display: 'inline-block',
                    background: 'linear-gradient(135deg,#1a0a3a,#0a1a3a)',
                    border: '1px solid #a855f7', color: '#c084fc',
                    marginBottom: '10px',
                  }}>
                    ai_summary
                  </span>
                )}
                {activeTab === 'ai' && <br />}
                &ldquo;{currentTab.impact}&rdquo;
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {currentTab.stack.map(t => (
                  <StackTag key={t.label} label={t.label} color={t.color} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: metrics + features */}
          <div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '2px', marginBottom: '24px',
            }}>
              {nepalinkMetrics.map(m => (
                <div key={m.label} style={{
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  padding: '20px', textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--display)', fontSize: '32px',
                    color: 'var(--teal)', lineHeight: 1, marginBottom: '6px',
                  }}>{m.num}</div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '10px',
                    color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase',
                  }}>{m.label}</div>
                </div>
              ))}
            </div>
            <ul style={{ listStyle: 'none' }}>
              {nepalinkFeatures.map((f, i) => (
                <li key={i} style={{
                  fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)',
                  padding: '7px 0 7px 18px',
                  borderBottom: i < nepalinkFeatures.length - 1 ? '1px solid var(--border)' : 'none',
                  position: 'relative', lineHeight: 1.4,
                }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--teal)' }}>▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Other Projects ── */}
        {otherProjects.map((project, i) => (
          <div
            key={project.id}
            className={`fade-in delay-${i + 2}`}
            style={{ gridColumn: project.id === 'dsa' ? '1 / -1' : undefined }}
          >
            <SmallProjectCard project={project} />
          </div>
        ))}

      </div>
    </section>
  )
}