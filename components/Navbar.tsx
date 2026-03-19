'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about',    label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#certs',    label: 'Certs' },
  { href: '#skills',   label: 'Skills' },
  { href: '#blog',     label: 'Insights' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        padding: '0 48px', height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(6,12,26,0.95)' : 'rgba(6,12,26,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.3s',
      }}
    >
      {/* Brand */}
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--teal)',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        display: 'flex', alignItems: 'center', gap: '10px',
      }}>
        <span style={{
          width: '7px', height: '7px', background: 'var(--teal)',
          borderRadius: '50%', display: 'inline-block',
          animation: 'pulse 2s ease infinite',
        }} />
        RB.sys
      </div>

      {/* Links */}
      <ul style={{ display: 'flex', gap: 0, listStyle: 'none' }}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontFamily: 'var(--mono)', fontSize: '11px',
                color: 'var(--muted)', textDecoration: 'none',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '0 18px', height: '60px',
                display: 'flex', alignItems: 'center',
                borderRight: '1px solid var(--border)',
                transition: 'color 0.25s, background 0.25s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.color = 'var(--teal)'
                el.style.background = 'var(--teal-faint)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.color = 'var(--muted)'
                el.style.background = 'transparent'
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 var(--teal2); }
          50%       { box-shadow: 0 0 0 6px transparent; }
        }
        @media (max-width: 768px) {
          nav ul { display: none; }
          nav { padding: 0 24px; }
        }
      `}</style>
    </nav>
  )
}