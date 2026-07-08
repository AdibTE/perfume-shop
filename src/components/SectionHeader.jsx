import { useInView } from '../hooks'

export default function SectionHeader({ eyebrow, title, subtitle }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      style={{
        textAlign: 'center',
        marginBottom: 50,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease',
      }}
    >
      <span
        style={{
          color: 'var(--gold)',
          fontSize: '0.8rem',
          letterSpacing: '0.2em',
          fontWeight: 300,
          display: 'block',
          marginBottom: 12,
        }}
      >
        {eyebrow}
      </span>
      <h2 style={{ fontSize: '2.5rem', marginBottom: 12, color: 'var(--ink)' }}>
        {title}
      </h2>
      <div
        style={{
          width: 60,
          height: 2,
          background: 'var(--gold)',
          margin: '0 auto 16px',
        }}
      />
      <p style={{ color: '#777', fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>
        {subtitle}
      </p>
    </div>
  )
}
