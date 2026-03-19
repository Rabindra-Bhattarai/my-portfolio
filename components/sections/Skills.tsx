import { useScrollFadeIn } from '@/hooks/useScrollFadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { skillDomains } from '@/data/skills'

const tagColorMap: Record<string, { color: string; border: string }> = {
  ai:   { color: '#c084fc', border: '#7e22ce55' },
  data: { color: '#38bdf8', border: '#0369a155' },
}

export default function Skills() {
  const ref = useScrollFadeIn()

  return (
    <section id="skills" className="section" ref={ref as React.RefObject<HTMLElement>}>
      <SectionHeader num="04" title="Skills" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2px',
      }}>
        {skillDomains.map((domain, i) => (
          <div
            key={domain.title}
            className={`fade-in delay-${i + 1}`}
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              padding: '36px 32px',
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
            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center',
              gap: '12px', marginBottom: '20px',
            }}>
              <span style={{ fontSize: '22px' }}>{domain.icon}</span>
              <h3 style={{
                fontFamily: 'var(--display)',
                fontSize: '22px',
                color: 'var(--white)',
              }}>
                {domain.title}
              </h3>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {domain.tags.map(tag => {
                const style = tag.color ? tagColorMap[tag.color] : null
                return (
                  <span
                    key={tag.label}
                    style={{
                      fontFamily: 'var(--mono)', fontSize: '10px',
                      color: style ? style.color : 'var(--muted)',
                      border: `1px solid ${style ? style.border : 'var(--border)'}`,
                      padding: '4px 12px',
                      letterSpacing: '0.1em',
                      transition: 'all 0.25s',
                    }}
                  >
                    {tag.label}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}