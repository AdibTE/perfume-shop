import { useState } from 'react'
import PerfumeBottle from './PerfumeBottle'

export default function CartModal({ isOpen, onClose, items, onRemove }) {
  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          width: '100%',
          maxWidth: 420,
          maxHeight: '80vh',
          overflow: 'auto',
          padding: 32,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
            paddingBottom: 16,
            borderBottom: '1px solid #eee',
          }}
        >
          <h3 style={{ fontSize: '1.2rem', fontFamily: "'Playfair Display', serif" }}>سبد خرید</h3>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#999' }}
          >
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: '#999' }}>
            <div style={{ fontSize: '2rem', marginBottom: 12 }}>🛒</div>
            <p>سبد خرید شما خالی است</p>
          </div>
        ) : (
          <>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: 12,
                  padding: '12px 0',
                  borderBottom: '1px solid #f5f5f5',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    background: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <PerfumeBottle color="#555" size={25} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#999' }}>{item.brand}</div>
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.price} ت</div>
                <button
                  onClick={() => onRemove(item.id)}
                  style={{ background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: '1.1rem', padding: 4 }}
                >
                  ×
                </button>
              </div>
            ))}
            <CheckoutButton />
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

function CheckoutButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%',
        marginTop: 20,
        padding: '14px',
        background: hovered ? 'var(--gold-light)' : 'var(--gold)',
        color: '#fff',
        border: 'none',
        fontSize: '0.9rem',
        fontWeight: 600,
        cursor: 'pointer',
        letterSpacing: '0.05em',
        transition: 'background 0.3s',
      }}
    >
      تکمیل خرید
    </button>
  )
}
