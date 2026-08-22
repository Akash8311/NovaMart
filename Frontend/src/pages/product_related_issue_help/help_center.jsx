import React, { useState, useMemo, useRef } from 'react'  

const faqs = [
  {
    q: 'Where is my order right now?',
    a: "Open Orders in your account and select the order — you'll see live carrier tracking there. Most orders update within a few hours of leaving the warehouse. If tracking hasn't moved in 3+ days, contact us and we'll chase it down.",
    tags: ['orders', 'shipping'],
  },
  {
    q: 'How long do refunds take to land?',
    a: "Once we receive a return, we inspect and refund within 3 business days. It then takes 2–5 business days to appear on your statement, depending on your bank. You'll get an email the moment it's issued.",
    tags: ['returns', 'payments'],
  },
  {
    q: 'Can I change my payment method after ordering?',
    a: "Not on a placed order, but you can cancel within 30 minutes of purchase (if it hasn't shipped) and reorder with the right card. Saved cards can be managed anytime under Account → Payment methods.",
    tags: ['payments', 'account'],
  },
  {
    q: 'What if an item arrives damaged?',
    a: "Send us a photo within 48 hours of delivery and we'll send a free replacement or a full refund — no need to return the damaged item first.",
    tags: ['returns', 'product'],
  },
  {
    q: 'How do I reset my password?',
    a: "Go to Account → Security → Reset password. We'll email you a secure link that expires in 30 minutes. If you don't see it, check spam before requesting a new one.",
    tags: ['account', 'security'],
  },
  {
    q: 'Which carriers do you ship with?',
    a: "We use FedEx, UPS, and USPS depending on your zip code and delivery speed. You'll see the assigned carrier and tracking link as soon as your order ships.",
    tags: ['shipping'],
  },
  {
    q: 'Is my two-step verification required?',
    a: "It's optional but strongly recommended. Turn it on under Account → Security → Two-step verification. You'll need a phone number or an authenticator app.",
    tags: ['account', 'security'],
  },
  {
    q: 'How do I file a warranty claim?',
    a: "Find your product under Account → Purchases → Warranty, and submit photos plus a short description. Most claims are resolved within 5 business days.",
    tags: ['product'],
  },
]

const categories = [
  {
    icon: '📦',
    title: 'Orders & tracking',
    desc: 'Find a package, edit an address, or see delivery windows.',
    tag: 'orders',
  },
  {
    icon: '↩️',
    title: 'Returns & refunds',
    desc: '30-day returns on most items. Start one in a few taps.',
    tag: 'returns',
  },
  {
    icon: '💳',
    title: 'Payments & billing',
    desc: 'Cards, gift credit, promo codes, and receipts.',
    tag: 'payments',
  },
  {
    icon: '🔒',
    title: 'Account & security',
    desc: 'Passwords, two-step verification, and linked devices.',
    tag: 'security',
  },
  {
    icon: '🚚',
    title: 'Shipping & delivery',
    desc: 'Carriers, delivery zones, and shipping speeds explained.',
    tag: 'shipping',
  },
  {
    icon: '🛠️',
    title: 'Product support',
    desc: 'Warranty claims, manuals, and troubleshooting guides.',
    tag: 'product',
  },
]

const quickChips = ['Track an order', 'Start a return', 'Payment issue']

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState(null)
  const faqRef = useRef(null)

  const normalizedQuery = query.trim().toLowerCase()

  const filteredFaqs = useMemo(() => {
    return faqs
      .filter((item) => (activeTag ? item.tags.includes(activeTag) : true))
      .filter((item) => {
        if (!normalizedQuery) return true
        return (
          item.q.toLowerCase().includes(normalizedQuery) ||
          item.a.toLowerCase().includes(normalizedQuery)
        )
      })
  }, [normalizedQuery, activeTag])

  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleChipClick = (label) => {
    setQuery(label)
    setActiveTag(null)
    setOpenIndex(0)
    scrollToFaq()
  }

  const handleCategoryClick = (tag) => {
    setActiveTag((current) => (current === tag ? null : tag))
    setQuery('')
    setOpenIndex(0)
    scrollToFaq()
  }

  const clearFilters = () => {
    setQuery('')
    setActiveTag(null)
  }

  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }

        .nm-chip:hover { background: #EFEDFF; border-color: #5B4FE9; color: #5B4FE9; }
        .nm-card:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(20,22,43,0.08); border-color: #C9C4FF; }
        .nm-card.active { border-color: #5B4FE9; box-shadow: 0 0 0 3px rgba(91,79,233,0.15); }
        .nm-faq-btn:hover { color: #5B4FE9; }
        .nm-contact:hover { border-color: #5B4FE9; box-shadow: 0 14px 30px rgba(91,79,233,0.12); text-decoration: none; }
        .nm-search:focus { outline: none; border-color: #5B4FE9; box-shadow: 0 0 0 4px rgba(91,79,233,0.15); }
        .nm-clear:hover { color: #5B4FE9; }
        .nm-faq-btn:focus-visible, .nm-chip:focus-visible, .nm-card:focus-visible, .nm-contact:focus-visible, .nm-clear:focus-visible {
          outline: 3px solid #5B4FE9; outline-offset: 2px;
        }
        @media (max-width: 720px) {
          .nm-grid { grid-template-columns: 1fr !important; }
          .nm-contact-row { grid-template-columns: 1fr !important; }
          .nm-hero-title { font-size: 34px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .nm-card, .nm-faq-chevron { transition: none !important; }
        }
      `}</style>
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
              onChange={(e) => {
                setQuery(e.target.value)
                setActiveTag(null)
              }}
              onFocus={scrollToFaq}
              placeholder="Try “where is my order” or “return policy”"
              style={styles.searchInput}
              aria-label="Search help articles"
            />
          </div>

          <div style={styles.chipRow}>
            {quickChips.map((c) => (
              <button
                key={c}
                className="nm-chip"
                style={styles.chip}
                onClick={() => handleChipClick(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Browse by topic</h2>
        <div className="nm-grid" style={styles.grid}>
          {categories.map((c) => (
            <button
              key={c.title}
              className={`nm-card${activeTag === c.tag ? ' active' : ''}`}
              style={styles.card}
              onClick={() => handleCategoryClick(c.tag)}
              aria-pressed={activeTag === c.tag}
            >
              <div style={styles.cardIcon}>{c.icon}</div>
              <div style={styles.cardTitle}>{c.title}</div>
              <div style={styles.cardDesc}>{c.desc}</div>
            </button>
          ))}
        </div>
      </section>


      <section ref={faqRef} style={{ ...styles.section, background: '#FFFFFF' }}>
        <div style={styles.faqHeaderRow}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: 0 }}>
            {activeTag || normalizedQuery ? 'Matching questions' : 'Popular questions'}
          </h2>
          {(activeTag || normalizedQuery) && (
            <button className="nm-clear" style={styles.clearBtn} onClick={clearFilters}>
              Clear filter ✕
            </button>
          )}
        </div>

        {filteredFaqs.length === 0 ? (
          <div style={styles.emptyState}>
            <p style={styles.emptyTitle}>No matches for that search.</p>
            <p style={styles.emptyDesc}>
              Try a different phrase, or reach out below and a person will help directly.
            </p>
          </div>
        ) : (
          <div style={styles.faqList}>
            {filteredFaqs.map((item) => {
              const open = openIndex === item.q
              return (
                <div key={item.q} style={styles.faqItem}>
                  <button
                    className="nm-faq-btn"
                    style={styles.faqBtn}
                    onClick={() => setOpenIndex(open ? null : item.q)}
                    aria-expanded={open}
                  >
                    <span>{item.q}</span>
                    <span
                      className="nm-faq-chevron"
                      style={{
                        ...styles.faqChevron,
                        transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      +
                    </span>
                  </button>
                  {open && <p style={styles.faqAnswer}>{item.a}</p>}
                </div>
              )
            })}
          </div>
        )}
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Still stuck? Talk to us</h2>
        <div className="nm-contact-row" style={styles.contactRow}>
          <a className="nm-contact" style={styles.contactCard} href="#chat">
            <div style={styles.contactIcon}>💬</div>
            <div style={styles.contactTitle}>Live chat</div>
            <div style={styles.contactDesc}>Avg. reply time: 2 minutes</div>
            <div style={styles.contactCta}>Start chat →</div>
          </a>
          <a className="nm-contact" style={styles.contactCard} href="mailto:help@novamart.com">
            <div style={styles.contactIcon}>✉️</div>
            <div style={styles.contactTitle}>Email support</div>
            <div style={styles.contactDesc}>help@novamart.com</div>
            <div style={styles.contactCta}>Send a message →</div>
          </a>
          <a className="nm-contact" style={styles.contactCard} href="tel:18005550199">
            <div style={styles.contactIcon}>📞</div>
            <div style={styles.contactTitle}>Call us</div>
            <div style={styles.contactDesc}>Mon–Sat, 9am–7pm</div>
            <div style={styles.contactCta}>1-800-555-0199 →</div>
          </a>
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
    fontFamily:
      "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
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
    fontFamily: "'Sora', 'Segoe UI', sans-serif",
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
    fontFamily: "'Sora', 'Segoe UI', sans-serif",
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
    fontFamily: "'Sora', 'Segoe UI', sans-serif",
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
  faqHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  clearBtn: {
    background: 'none',
    border: 'none',
    color: '#5C5F7A',
    fontSize: 13.5,
    fontWeight: 600,
    cursor: 'pointer',
    padding: 0,
  },
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
    gap: 12,
  },
  faqChevron: {
    fontSize: 20,
    color: '#5B4FE9',
    transition: 'transform 0.2s ease',
    flexShrink: 0,
  },
  faqAnswer: {
    marginTop: 12,
    fontSize: 14.5,
    lineHeight: 1.65,
    color: '#5C5F7A',
    maxWidth: 640,
  },
  emptyState: {
    borderTop: '1px solid #E4E5F0',
    padding: '32px 4px',
  },
  emptyTitle: {
    fontWeight: 600,
    fontSize: 15,
    marginBottom: 4,
  },
  emptyDesc: {
    fontSize: 13.5,
    color: '#5C5F7A',
  },
  contactRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 16,
  },
  contactCard: {
    display: 'block',
    background: '#FFFFFF',
    border: '1px solid #E4E5F0',
    borderRadius: 14,
    padding: '24px 20px',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
    textDecoration: 'none',
    color: 'inherit',
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