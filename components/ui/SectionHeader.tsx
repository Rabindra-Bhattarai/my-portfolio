interface SectionHeaderProps {
  num: string
  title: string
}

export default function SectionHeader({ num, title }: SectionHeaderProps) {
  return (
    <div
      className="fade-in"
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '20px',
        marginBottom: '64px',
      }}
    >
      <span style={{
        fontFamily: 'var(--mono)', fontSize: '10px',
        color: 'var(--teal)', letterSpacing: '0.25em',
      }}>
        {num} //
      </span>
      <h2 style={{
        fontFamily: 'var(--display)',
        fontSize: 'clamp(36px, 4vw, 56px)',
        color: 'var(--white)',
        lineHeight: 1,
      }}>
        {title}
      </h2>
      <div style={{
        flex: 1, height: '1px',
        background: 'var(--border)',
        marginLeft: '20px',
        alignSelf: 'center',
      }} />
    </div>
  )
}