import { useInView } from '../hooks'
import { testimonials } from '../data'
import SectionHeader from './SectionHeader'
import StarIcon from './StarIcon'

export default function Testimonials() {
  const [ref, isInView] = useInView()

  return (
    <section style={{ padding: '80px 20px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} ref={ref}>
        <SectionHeader
          eyebrow="نظرات مشتریان"
          title="آنچه مشتریان می\u200cگویند"
          subtitle="رضایت شما، بزرگترین سرمایه ماست"
        />

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              style={{
                background: '#fff',
                padding: '32px 24px',
                borderLeft: '3px solid var(--gold)',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                {Array.from({ length: 5 }, (_, idx) => (
                  <StarIcon key={idx} filled={idx < t.rating} />
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.8, marginBottom: 20, fontStyle: 'italic' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'var(--blush)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#999' }}>مشتری وفادار</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
