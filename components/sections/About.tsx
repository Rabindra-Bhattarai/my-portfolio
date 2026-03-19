import { useScrollFadeIn } from '@/hooks/useScrollFadeIn'
import SectionHeader from '@/components/ui/SectionHeader'

const cards = [
  { icon: '🎓', title: 'BSc (Hons) Computing',          sub: 'Coventry University · Kathmandu Campus' },
  { icon: '🌐', title: 'Fullstack Development',          sub: 'Next.js · Flutter · Node.js · MongoDB · REST' },
  { icon: '🤖', title: 'AI Integration',                 sub: 'Groq · LLM APIs · ai_summary · Intelligent Systems' },
  { icon: '📊', title: 'Data Analytics & Visualization', sub: 'Tableau · Python · pandas · R · Dashboard Design' },
  { icon: '🏀', title: 'Beyond the Screen',              sub: 'Basketball · Guitar · Community Volunteering' },
]

export default function About() {
  const ref = useScrollFadeIn()

  return (
    <section id="about" className="section alt" ref={ref as React.RefObject<HTMLElement>}>
      <SectionHeader num="01" title="About" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'start',
      }}>
        {/* Text */}
        <div className="fade-in delay-1">
          {[
            <>I build <strong style={{ color: 'var(--white)' }}>fullstack systems</strong> — from database schema to pixel-polished UI — that run care platforms, power hospital dashboards, and tell stories through data.</>,
            <>Currently studying <strong style={{ color: 'var(--white)' }}>BSc (Hons) Computing</strong> at Coventry University, Kathmandu. I integrate <strong style={{ color: 'var(--white)' }}>AI models</strong>, design <strong style={{ color: 'var(--white)' }}>REST APIs</strong>, and turn raw data into decisions people can actually use.</>,
            <>I&apos;m drawn to <strong style={{ color: 'var(--white)' }}>data analytics and visualization</strong> — building dashboards in Tableau, wrangling datasets, and making complex systems readable at a glance. My thesis is literally about this: a real-time hospital dashboard optimizing bed occupancy and patient flow.</>,
            <>Outside code, I play <strong style={{ color: 'var(--white)' }}>basketball</strong>, pick up the <strong style={{ color: 'var(--white)' }}>guitar</strong>, and volunteer in my community — because the best engineers understand <strong style={{ color: 'var(--white)' }}>human systems</strong> too.</>,
          ].map((para, i) => (
            <p key={i} style={{
              fontSize: '17px', lineHeight: 1.75,
              color: 'var(--muted)', marginBottom: '16px',
            }}>{para}</p>
          ))}
        </div>

        {/* Cards */}
        <div className="fade-in delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {cards.map((card, i) => (
            <div
              key={card.title}
              style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                transition: 'border-color 0.3s, background 0.3s',
                cursor: 'default',
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--teal)'
                el.style.background = 'var(--bg2)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--border)'
                el.style.background = 'var(--bg3)'
              }}
            >
              <div style={{
                fontSize: '24px', flexShrink: 0,
                width: '48px', height: '48px',
                background: 'var(--bg2)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {card.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--body)', fontWeight: 700,
                  fontSize: '14px', color: 'var(--white)', marginBottom: '4px',
                }}>
                  {card.title}
                </div>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '11px',
                  color: 'var(--muted)', letterSpacing: '0.06em',
                }}>
                  {card.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}