import { useInView } from '../hooks'
import { features } from '../data'

export default function Features() {
  const [ref, isInView] = useInView()

  return (
    <section ref={ref} style={{ padding: '80px 20px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              style={{
                textAlign: 'center',
                padding: '32px 16px',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div style={{ fontSize: '1.8rem', color: 'var(--gold)', marginBottom: 16 }}>{f.icon}</div>
              <h4 style={{ fontSize: '1rem', marginBottom: 8, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
                {f.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
