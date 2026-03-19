'use client'

import { useEffect, useState } from 'react'

const items = [
  { color: 'var(--green)',  text: 'All systems nominal' },
  { color: 'var(--teal)',   text: 'NepaLink v2.1.0 — fullstack · AI · live' },
  { color: 'var(--yellow)', text: 'Thesis: Hospital Dashboard — in progress' },
]

export default function StatusBar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const t = new Date()
      setTime(
        t.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' NST'
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg2)',
      padding: '10px 48px',
      display: 'flex',
      alignItems: 'center',
      gap: '32px',
      flexWrap: 'wrap',
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      color: 'var(--muted)',
      letterSpacing: '0.1em',
      position: 'relative',
      zIndex: 2,
    }}>
      {items.map((item) => (
        <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: item.color, flexShrink: 0,
          }} />
          <span>{item.text}</span>
        </div>
      ))}
      <div style={{ marginLeft: 'auto', color: 'var(--teal)' }}>
        {time}
      </div>
    </div>
  )
}