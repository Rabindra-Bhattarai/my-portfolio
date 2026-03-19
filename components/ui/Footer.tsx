export default function Footer() {
  return (
    <footer style={{
      padding: '24px 48px',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'var(--mono)',
      fontSize: '10px',
      color: 'var(--muted)',
      letterSpacing: '0.1em',
      flexWrap: 'wrap',
      gap: '8px',
    }}>
      <span>
        © {new Date().getFullYear()}{' '}
        <span style={{ color: 'var(--teal)' }}>Rabindra Bhattarai</span>
        {' '}· Kathmandu, Nepal
      </span>
      <span>Fullstack · AI · Data</span>
      <span>
        Built with{' '}
        <span style={{ color: 'var(--teal)' }}>precision</span>
      </span>
    </footer>
  )
}