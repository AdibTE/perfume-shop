import { useState } from 'react'
import { products } from '../data'
import SectionHeader from './SectionHeader'
import ProductCard from './ProductCard'

const categories = ['همه', 'زنانه', 'مردانه', 'یونیسکس']

export default function Products({ onAddToCart }) {
  const [filter, setFilter] = useState('همه')

  const filtered = filter === 'همه' ? products : products.filter((p) => p.category === filter)

  return (
    <section id="محصولات" style={{ padding: '80px 20px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader
          eyebrow="مجموعه ۱۴۰۵"
          title="محصولات ما"
          subtitle="مجموعه\u200cای منحصربفرد از بهترین عطرهای جهان"
        />

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <FilterButton key={cat} label={cat} active={filter === cat} onClick={() => setFilter(cat)} />
          ))}
        </div>

        {/* Grid */}
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? 'var(--ink)' : 'transparent',
        color: active ? '#fff' : 'var(--ink)',
        border: active ? 'none' : '1px solid var(--mist)',
        padding: '8px 24px',
        fontSize: '0.8rem',
        cursor: 'pointer',
        fontWeight: active ? 600 : 400,
        transition: 'all 0.3s',
      }}
    >
      {label}
    </button>
  )
}
