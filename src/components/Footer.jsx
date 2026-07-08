import { useState } from 'react'

const footerLinks = [
  { title: 'دسترسی سریع', links: ['خانه', 'محصولات', 'مجموعه\u200cها', 'تماس با ما'] },
  { title: 'خدمات', links: ['ارسال و تحویل', 'گارانتی بازگشت', 'مشاوره عطر', 'هدیه دادن'] },
  { title: 'اطلاعات', links: ['درباره ما', 'قوانین', 'حریم خصوصی', 'همکاری'] },
]

const socialIcons = ['📷', '💬', '📧', '📞']

export default function Footer() {
  return (
    <footer style={{ padding: '60px 20px 30px', background: '#111', color: 'rgba(255,255,255,0.5)' }}>
      <div
        className="footer-grid"
        style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}
      >
        {/* Brand */}
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', color: '#fff', marginBottom: 16 }}>
            <span style={{ color: 'var(--gold)' }}>عطر</span> و طراوت
          </h3>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.8, marginBottom: 20 }}>
            فروشگاه تخصصی عطر و ادکلن اصل با بیش از ۱۰ سال تجربه
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {socialIcons.map((icon, i) => (
              <SocialIcon key={i} icon={icon} />
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: 16, fontWeight: 600 }}>{col.title}</h4>
            <ul style={{ listStyle: 'none' }}>
              {col.links.map((link) => (
                <li key={link} style={{ marginBottom: 10 }}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1100,
          margin: '40px auto 0',
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <span style={{ fontSize: '0.8rem' }}>© ۱۴۰۵ عطر و طراوت. تمامی حقوق محفوظ است.</span>
        <div style={{ display: 'flex', gap: 16, fontSize: '0.8rem' }}>
          <span>🔒 پرداخت امن</span>
          <span>✈️ ارسال سریع</span>
          <span>✓ ضمانت اصالت</span>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36,
        height: 36,
        border: `1px solid ${hovered ? 'var(--gold)' : 'rgba(255,255,255,0.2)'}`,
        background: hovered ? 'var(--gold)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.9rem',
        transition: 'all 0.3s',
      }}
    >
      {icon}
    </a>
  )
}

function FooterLink({ link }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ color: hovered ? 'var(--gold)' : 'rgba(255,255,255,0.5)', fontSize: '0.85rem', transition: 'color 0.3s' }}
    >
      {link}
    </a>
  )
}
