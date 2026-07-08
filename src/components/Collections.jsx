import { useState } from 'react'
import { useInView } from '../hooks'
import { collections } from '../data'
import SectionHeader from './SectionHeader'

export default function Collections() {
  const [ref, isInView] = useInView()

  return (
    <section id="مجموعه\u200cها" style={{ padding: '80px 20px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} ref={ref}>
        <SectionHeader
          eyebrow="مجموعه\u200cهای ویژه"
          title="مجموعه\u200cهای ما"
          subtitle="هر مجموعه، یک سفر بویایی متفاوت"
        />

        <div className="collection-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {collections.map((col, i) => (
            <CollectionCard key={col.id} collection={col} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CollectionCard({ collection, index, isInView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: collection.gradient,
        padding: '48px 32px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        minHeight: 280,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 160,
          height: 160,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      />

      <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: 8 }}>
        {collection.count} محصول
      </span>
      <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: 8 }}>{collection.name}</h3>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: 20 }}>{collection.desc}</p>
      <span
        style={{
          color: 'var(--gold)',
          fontSize: '0.8rem',
          fontWeight: 500,
          display: 'inline-flex',
          alignItems: 'center',
          gap: hovered ? 12 : 8,
          transition: 'gap 0.3s',
        }}
      >
        مشاهده مجموعه ←
      </span>
    </div>
  )
}
