import { useScrollFadeIn } from '@/hooks/useScrollFadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { insights } from '@/data/insights'

export default function Insights() {
  const ref = useScrollFadeIn()

  return (
    <section id="blog" className="section alt" ref={ref as React.RefObject<HTMLElement>}>
      <SectionHeader num="05" title="Insights" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2px',
      }}>
        {insights.map((post, i) => (
          <div
            key={post.num}
            className={`fade-in delay-${i + 1}`}
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              padding: '36px 32px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
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
            {/* Big background number */}
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '52px', fontWeight: 300,
              color: 'var(--border)', lineHeight: 1,
              position: 'absolute', top: '20px', right: '24px',
              pointerEvents: 'none',
              transition: 'color 0.3s',
            }}>
              {post.num}
            </div>

            {/* Category */}
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--teal)',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              {post.category}
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: 'var(--display)', fontSize: '20px',
              color: 'var(--white)', lineHeight: 1.25, marginBottom: '12px',
            }}>
              {post.title}
            </h3>

            {/* Excerpt */}
            <p style={{
              fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7,
              marginBottom: '20px',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {post.excerpt}
            </p>

            {/* Meta */}
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--muted)',
              letterSpacing: '0.08em',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <span style={{
                display: 'inline-block', width: '24px', height: '1px',
                background: 'var(--teal)',
              }} />
              {post.readTime} · {post.tags.join(' · ')}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}