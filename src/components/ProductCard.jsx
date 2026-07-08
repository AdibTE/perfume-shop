import { useState } from 'react'
import { useInView } from '../hooks'
import PerfumeBottle from './PerfumeBottle'

export default function ProductCard({ product, onAddToCart, index }) {
  const [ref, isInView] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.06)',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.5s ease ${index * 0.08}s`,
        cursor: 'pointer',
      }}
    >
      {/* Image area */}
      <div
        style={{
          height: 260,
          background: product.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Tag */}
        <span
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'var(--ink)',
            color: '#fff',
            padding: '4px 12px',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}
        >
          {product.tag}
        </span>

        {/* Bottle */}
        <div
          style={{
            transform: hovered ? 'scale(1.05) translateY(-5px)' : 'scale(1)',
            transition: 'transform 0.4s ease',
          }}
        >
          <PerfumeBottle color={product.color === '#C9A96E' ? '#8B6914' : '#555'} size={100} />
        </div>

        {/* Hover overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            padding: '40px 16px 16px',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        >
          <AddToCartButton onClick={() => onAddToCart(product)} />
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '20px 16px' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 500, letterSpacing: '0.1em' }}>
          {product.brand}
        </span>
        <h3
          style={{
            fontSize: '1.1rem',
            margin: '4px 0 8px',
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {product.name}
        </h3>
        <p style={{ fontSize: '0.78rem', color: '#999', marginBottom: 12, lineHeight: 1.6 }}>
          {product.notes}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1rem', fontWeight: 600, fontFamily: "'Playfair Display', serif" }}>
            {product.price} <span style={{ fontSize: '0.75rem', fontWeight: 400 }}>تومان</span>
          </span>
          <span style={{ fontSize: '0.7rem', color: '#aaa', border: '1px solid #eee', padding: '3px 10px' }}>
            {product.category}
          </span>
        </div>
      </div>
    </div>
  )
}

function AddToCartButton({ onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--gold)' : '#fff',
        color: hovered ? '#fff' : 'var(--ink)',
        border: 'none',
        padding: '10px 24px',
        fontSize: '0.8rem',
        fontWeight: 600,
        cursor: 'pointer',
        width: '100%',
        letterSpacing: '0.03em',
        transition: 'all 0.3s',
      }}
    >
      افزودن به سبد خرید
    </button>
  )
}
