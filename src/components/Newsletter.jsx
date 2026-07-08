import { useState } from 'react'
import { useInView } from '../hooks'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [ref, isInView] = useInView()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section
      ref={ref}
      style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #1A1A1A 0%, #2A1A0A 100%)',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease',
      }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.2em', display: 'block', marginBottom: 12 }}>
          خبرنامه
        </span>
        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: 12 }}>از جدیدترین عطرها باخبر شوید</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: 32 }}>
          با عضویت در خبرنامه، از تخفیف\u200cها و محصولات جدید مطلع شوید
        </p>

        {subscribed ? (
          <div style={{ color: 'var(--gold)', fontSize: '1rem', padding: '16px', border: '1px solid var(--gold)' }}>
            ✦ با موفقیت عضو شدید! از این پس خبرنامه برای شما ارسال می\u200cشود.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="newsletter-form"
            style={{ display: 'flex', gap: 0, maxWidth: 450, margin: '0 auto' }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل خود را وارد کنید"
              required
              style={{
                flex: 1,
                padding: '14px 20px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none',
                direction: 'ltr',
              }}
            />
            <SubmitButton />
          </form>
        )}
      </div>
    </section>
  )
}

function SubmitButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      type="submit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--gold-light)' : 'var(--gold)',
        color: '#fff',
        border: 'none',
        padding: '14px 28px',
        fontSize: '0.85rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'background 0.3s',
      }}
    >
      عضویت
    </button>
  )
}
