import { useState } from 'react'
export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1A1A1A 0%, #2A1A0A 30%, #1A0A1A 70%, #0A1A2A 100%)',
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '15%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,213,196,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Gold line accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: 1,
          height: '30%',
          background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
          opacity: 0.3,
        }}
      />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 20px' }}>
        {/* Eyebrow */}
        <div style={{ marginBottom: 24, animation: 'fadeIn 1s ease-out' }}>
          <span
            style={{
              color: 'var(--gold)',
              fontSize: '0.85rem',
              fontWeight: 300,
              letterSpacing: '0.3em',
            }}
          >
            ─── مجموعه ۱۴۰۵ ───
          </span>
        </div>

        {/* Title */}
        <h1
          className="hero-title"
          style={{
            fontSize: '4.5rem',
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: 24,
            animation: 'fadeInUp 0.7s ease-out',
          }}
        >
          <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>عطری</span> که
          <br />
          <span style={{ fontWeight: 400 }}>داستان شماست</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            maxWidth: 500,
            margin: '0 auto 40px',
            fontWeight: 300,
            lineHeight: 1.8,
            animation: 'fadeInUp 0.7s ease-out 0.1s forwards',
            opacity: 0,
          }}
        >
          عطرهایی که خاطره می\u200cسازند. هر قطره، یک داستان.
          <br />
          از طبیعت الهام گرفته، برای شما ساخته شده.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.7s ease-out 0.2s forwards',
            opacity: 0,
          }}
        >
          <HeroButton primary href="#محصولات" text="مشاهده محصولات" />
          <HeroButton href="#مجموعه\u200cها" text="مجموعه\u200cها" />
        </div>

        {/* Stats */}
        <div
          className="hero-stats"
          style={{
            marginTop: 60,
            display: 'flex',
            gap: 40,
            justifyContent: 'center',
            animation: 'fadeInUp 0.7s ease-out 0.3s forwards',
            opacity: 0,
          }}
        >
          {[
            { num: '+۵۰۰', label: 'محصول' },
            { num: '+۵۰K', label: 'مشتری راضی' },
            { num: '۹۸٪', label: 'رضایتمندی' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: 'var(--gold)',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {stat.num}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}>
        <div
          className="float"
          style={{
            width: 24,
            height: 40,
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 12,
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 8,
          }}
        >
          <div style={{ width: 3, height: 8, background: 'var(--gold)', borderRadius: 2 }} />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}

function HeroButton({ primary, href, text }) {
  const [hovered, setHovered] = useState(false)

  const baseStyle = {
    padding: '14px 40px',
    borderRadius: 0,
    fontSize: '0.9rem',
    fontWeight: primary ? 500 : 300,
    letterSpacing: '0.05em',
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: primary ? 'none' : '1px solid rgba(255,255,255,0.3)',
    background: primary
      ? hovered
        ? '#fff'
        : 'var(--gold)'
      : 'transparent',
    color: primary
      ? hovered
        ? 'var(--ink)'
        : '#fff'
      : hovered
        ? 'var(--gold)'
        : '#fff',
    borderColor: !primary && hovered ? 'var(--gold)' : undefined,
  }

  return (
    <a
      href={href}
      style={baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </a>
  )
}
