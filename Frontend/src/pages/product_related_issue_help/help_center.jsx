import React, { useState } from 'react'

 <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }

        .nm-chip:hover { background: #EFEDFF; border-color: #5B4FE9; color: #5B4FE9; }
        .nm-card:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(20,22,43,0.08); border-color: #C9C4FF; }
        .nm-faq-btn:hover { color: #5B4FE9; }
        .nm-contact:hover { border-color: #5B4FE9; box-shadow: 0 14px 30px rgba(91,79,233,0.12); }
        .nm-search:focus { outline: none; border-color: #5B4FE9; box-shadow: 0 0 0 4px rgba(91,79,233,0.15); }
        .nm-faq-btn:focus-visible, .nm-chip:focus-visible, .nm-card:focus-visible, .nm-contact:focus-visible {
          outline: 3px solid #5B4FE9; outline-offset: 2px;
        }
        @media (max-width: 720px) {
          .nm-grid { grid-template-columns: 1fr !important; }
          .nm-contact-row { grid-template-columns: 1fr !important; }
          .nm-hero-title { font-size: 34px !important; }
        }
      `}</style>
const faqs = [
  {
    q: 'Where is my order right now?',
    a: "Open Orders in your account and select the order — you'll see live carrier tracking there. Most orders update within a few hours of leaving the warehouse. If tracking hasn't moved in 3+ days, contact us and we'll chase it down.",
  },
  {
    q: 'How long do refunds take to land?',
    a: "Once we receive a return, we inspect and refund within 3 business days. It then takes 2–5 business days to appear on your statement, depending on your bank. You'll get an email the moment it's issued.",
  },
  {
    q: 'Can I change my payment method after ordering?',
    a: "Not on a placed order, but you can cancel within 30 minutes of purchase (if it hasn't shipped) and reorder with the right card. Saved cards can be managed anytime under Account → Payment methods.",
  },
  {
    q: 'What if an item arrives damaged?',
    a: "Send us a photo within 48 hours of delivery and we'll send a free replacement or a full refund — no need to return the damaged item first.",
  },
]

const categories = [
  {
    icon: '📦',
    title: 'Orders & tracking',
    desc: 'Find a package, edit an address, or see delivery windows.',
  },
  {
    icon: '↩️',
    title: 'Returns & refunds',
    desc: '30-day returns on most items. Start one in a few taps.',
  },
  {
    icon: '💳',
    title: 'Payments & billing',
    desc: 'Cards, gift credit, promo codes, and receipts.',
  },
  {
    icon: '🔒',
    title: 'Account & security',
    desc: 'Passwords, two-step verification, and linked devices.',
  },
  {
    icon: '🚚',
    title: 'Shipping & delivery',
    desc: 'Carriers, delivery zones, and shipping speeds explained.',
  },
  {
    icon: '🛠️',
    title: 'Product support',
    desc: 'Warranty claims, manuals, and troubleshooting guides.',
  },
]

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const [query, setQuery] = useState('')

  return (
    <div style={styles.page}>
     

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroGlow} aria-hidden="true" />
        <div style={styles.heroInner}>
          <p style={styles.eyebrow}>HELP CENTER</p>
          <h1 className="nm-hero-title" style={styles.heroTitle}>
            What do you need help with?
          </h1>
          <p style={styles.heroSub}>
            Search our guides, or jump straight to a topic below.
          </p>

          <div style={styles.searchWrap}>
            <span style={styles.searchIcon} aria-hidden="true">⌕</span>
            <input
              className="nm-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try “where is my order” or “return policy”"
              style={styles.searchInput}
              aria-label="Search help articles"
            />
          </div>

          <div style={styles.chipRow}>
            {['Track an order', 'Start a return', 'Payment issue'].map((c) => (
              <button key={c} className="nm-chip" style={styles.chip}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Browse by topic</h2>
        <div className="nm-grid" style={styles.grid}>
          {categories.map((c) => (
            <button key={c.title} className="nm-card" style={styles.card}>
              <div style={styles.cardIcon}>{c.icon}</div>
              <div style={styles.cardTitle}>{c.title}</div>
              <div style={styles.cardDesc}>{c.desc}</div>
            </button>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...styles.section, background: '#FFFFFF' }}>
        <h2 style={styles.sectionTitle}>Popular questions</h2>
        <div style={styles.faqList}>
          {faqs.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.q} style={styles.faqItem}>
                <button
                  className="nm-faq-btn"
                  style={styles.faqBtn}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <span style={{
                    ...styles.faqChevron,
                    transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>+</span>
                </button>
                {open && <p style={styles.faqAnswer}>{item.a}</p>}
              </div>
            )
          })}
        </div>
      </section>

      {/* Contact strip */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Still stuck? Talk to us</h2>
        <div className="nm-contact-row" style={styles.contactRow}>
          <div className="nm-contact" style={styles.contactCard}>
            <div style={styles.contactIcon}>💬</div>
            <div style={styles.contactTitle}>Live chat</div>
            <div style={styles.contactDesc}>Avg. reply time: 2 minutes</div>
            <div style={styles.contactCta}>Start chat →</div>
          </div>
          <div className="nm-contact" style={styles.contactCard}>
            <div style={styles.contactIcon}>✉️</div>
            <div style={styles.contactTitle}>Email support</div>
            <div style={styles.contactDesc}>help@novamart.com</div>
            <div style={styles.contactCta}>Send a message →</div>
          </div>
          <div className="nm-contact" style={styles.contactCard}>
            <div style={styles.contactIcon}>📞</div>
            <div style={styles.contactTitle}>Call us</div>
            <div style={styles.contactDesc}>Mon–Sat, 9am–7pm</div>
            <div style={styles.contactCta}>1-800-555-0199 →</div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Novamart. Here to help, always.
      </footer>
    </div>
  )
}

const styles = {
  page: {
    fontFamily: "'Inter', -apple-system, sans-serif",
    background: '#F5F6FA',
    color: '#14162B',
    minHeight: '100vh',
  },
  header: {
    borderBottom: '1px solid #E4E5F0',
    background: '#FFFFFF',
  },
  headerInner: {
    maxWidth: 1080,
    margin: '0 auto',
    padding: '18px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    fontSize: 20,
    letterSpacing: '-0.02em',
  },
  backLink: {
    color: '#5C5F7A',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 500,
  },
  hero: {
    position: 'relative',
    overflow: 'hidden',
    background: '#14162B',
    padding: '72px 24px 56px',
    textAlign: 'center',
  },
  heroGlow: {
    position: 'absolute',
    top: '-180px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 640,
    height: 640,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(91,79,233,0.55) 0%, rgba(91,79,233,0) 70%)',
    pointerEvents: 'none',
  },
  heroInner: {
    position: 'relative',
    maxWidth: 640,
    margin: '0 auto',
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.14em',
    color: '#B9B4FF',
    marginBottom: 12,
  },
  heroTitle: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 700,
    fontSize: 44,
    lineHeight: 1.15,
    color: '#FFFFFF',
    margin: '0 0 12px',
  },
  heroSub: {
    color: '#C7C8DA',
    fontSize: 16,
    margin: '0 0 32px',
  },
  searchWrap: {
    position: 'relative',
    maxWidth: 480,
    margin: '0 auto',
  },
  searchIcon: {
    position: 'absolute',
    left: 18,
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#8B8DA8',
    fontSize: 18,
  },
  searchInput: {
    width: '100%',
    padding: '15px 18px 15px 46px',
    borderRadius: 12,
    border: '1px solid transparent',
    fontSize: 15,
    fontFamily: "'Inter', sans-serif",
    background: '#FFFFFF',
    color: '#14162B',
  },
  chipRow: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  chip: {
    padding: '8px 16px',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.25)',
    background: 'rgba(255,255,255,0.06)',
    color: '#E9E9F5',
    fontSize: 13,
    fontWeight: 500,
    cursor: 'pointer',
  },
  section: {
    maxWidth: 1080,
    margin: '0 auto',
    padding: '56px 24px',
  },
  sectionTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 24,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 16,
  },
  card: {
    textAlign: 'left',
    background: '#FFFFFF',
    border: '1px solid #E4E5F0',
    borderRadius: 14,
    padding: '22px 20px',
    cursor: 'pointer',
    transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
    fontFamily: "'Inter', sans-serif",
  },
  cardIcon: { fontSize: 24, marginBottom: 10 },
  cardTitle: { fontWeight: 600, fontSize: 15, marginBottom: 4, color: '#14162B' },
  cardDesc: { fontSize: 13.5, color: '#5C5F7A', lineHeight: 1.5 },
  faqList: {
    borderTop: '1px solid #E4E5F0',
  },
  faqItem: {
    borderBottom: '1px solid #E4E5F0',
    padding: '18px 4px',
  },
  faqBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Inter', sans-serif",
    fontSize: 15.5,
    fontWeight: 600,
    color: '#14162B',
    padding: 0,
    textAlign: 'left',
  },
  faqChevron: {
    fontSize: 20,
    color: '#5B4FE9',
    transition: 'transform 0.2s ease',
  },
  faqAnswer: {
    marginTop: 12,
    fontSize: 14.5,
    lineHeight: 1.65,
    color: '#5C5F7A',
    maxWidth: 640,
  },
  contactRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 16,
  },
  contactCard: {
    background: '#FFFFFF',
    border: '1px solid #E4E5F0',
    borderRadius: 14,
    padding: '24px 20px',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  },
  contactIcon: { fontSize: 22, marginBottom: 10 },
  contactTitle: { fontWeight: 600, fontSize: 15, marginBottom: 4 },
  contactDesc: { fontSize: 13.5, color: '#5C5F7A', marginBottom: 14 },
  contactCta: { fontSize: 13.5, fontWeight: 600, color: '#5B4FE9' },
  footer: {
    textAlign: 'center',
    padding: '32px 24px 48px',
    fontSize: 13,
    color: '#8B8DA8',
  },
}

export default HelpCenter