import { useState, useEffect } from 'react'

export default function Navbar({ cartCount, onCartClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: scrolled ? 'rgba(250,247,242,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(201,169,110,0.2)' : 'none',
    transition: 'all 0.4s ease',
    padding: '0 40px',
  }

  const innerStyle = {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
  }

  const logoStyle = {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    color: scrolled ? 'var(--ink)' : '#fff',
    letterSpacing: '0.05em',
    transition: 'color 0.3s',
  }

  const links = ['خانه', 'محصولات', 'مجموعه\u200cها', 'درباره ما', 'تماس']

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        <a href="#" style={logoStyle}>
          <span style={{ color: 'var(--gold)' }}>عطر</span> و طراوت
        </a>

        <div className="nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {links.map((item) => (
            <NavLink key={item} item={item} scrolled={scrolled} />
          ))}
          <button
            onClick={onCartClick}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: scrolled ? 'var(--ink)' : '#fff',
              fontSize: '1.2rem',
              position: 'relative',
              transition: 'color 0.3s',
            }}
          >
            🛒
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: -8,
                  right: -8,
                  background: 'var(--gold)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: 18,
                  height: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ item, scrolled }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={`#${item}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? 'var(--gold)' : scrolled ? 'var(--ink)' : '#fff',
        fontSize: '0.9rem',
        fontWeight: 400,
        transition: 'color 0.3s',
        letterSpacing: '0.02em',
      }}
    >
      {item}
    </a>
  )
}
