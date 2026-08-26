import React, { useState, useMemo, useEffect, useRef } from "react";

const tokens = {
  paper: "#FAF6EC",
  paperDim: "#F1EBDB",
  surface: "#FFFFFF",
  ink: "#182620",
  inkSoft: "#cbdacf",
  muted: "#7A7565",
  forest: "#1a15b5",
  forestDeep: "#0F1D16",
  gold: "#C98A2B",
  goldDeep: "#8B5E14",
  goldSoft: "#F3E4C4",
  line: "#E4DDC8",
  danger: "#A8412C",
};

const FONT_LINK_ID = "novamart-help-fonts";

function useGoogleFonts() {
  useEffect(() => {
    if (document.getElementById(FONT_LINK_ID)) return;
    const link = document.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}

const CATEGORIES = [
  { id: "orders", icon: "📦", title: "Orders & tracking", desc: "Find a package, edit an address, or see delivery windows." },
  { id: "returns", icon: "↩️", title: "Returns & refunds", desc: "30-day returns on most items. Start one in a few taps." },
  { id: "payments", icon: "💳", title: "Payments & billing", desc: "Cards, gift credit, promo codes, and receipts." },
  { id: "account", icon: "🔒", title: "Account & security", desc: "Passwords, two-step verification, and linked devices." },
  { id: "shipping", icon: "🚚", title: "Shipping & delivery", desc: "Carriers, delivery zones, and shipping speeds explained." },
  { id: "product", icon: "🛠️", title: "Product support", desc: "Warranty claims, manuals, and troubleshooting guides." },
];

const ARTICLES = [
  { cat: "orders", q: "Where is my order right now?", body: "<p>Open <strong>Orders</strong> in your account and select the order you want to check — you'll see live carrier tracking right on that page. Most orders update within a few hours of leaving the warehouse.</p><p>If tracking hasn't moved in 3 or more days, don't wait it out. Contact us and we'll chase it down with the carrier directly.</p>" },
  { cat: "orders", q: "Can I change my delivery address after ordering?", body: "<p>If the order hasn't shipped yet, go to <strong>Orders → Edit address</strong>. Once a carrier has picked it up, we can no longer redirect it ourselves, but most carriers let you reroute a package directly from their tracking page.</p>" },
  { cat: "orders", q: "What does 'processing' mean on my order status?", body: "<p>Processing means we've received your order and are preparing it in the warehouse — this usually takes 12–24 hours. Once it ships, the status changes to <strong>In transit</strong> and you'll get a tracking link by email.</p>" },
  { cat: "orders", q: "Can I combine two separate orders into one shipment?", body: "<p>Not automatically, but if both orders are still in the processing stage, contact support within an hour of placing the second order and we can often merge them to save on shipping.</p>" },
  { cat: "orders", q: "My order shows delivered but I never got it.", body: "<p>First check with neighbors and any building mailroom — carriers sometimes mark packages delivered a little early. If it's genuinely missing after 24 hours, contact us with your order number and we'll open a carrier trace or send a replacement.</p>" },
  { cat: "returns", q: "How long do refunds take to land?", body: "<p>Once we receive a return, we inspect and refund within 3 business days. It then takes 2–5 business days to appear on your statement, depending on your bank. You'll get an email the moment the refund is issued.</p>" },
  { cat: "returns", q: "What if an item arrives damaged?", body: "<p>Send us a photo within 48 hours of delivery and we'll send a free replacement or a full refund — no need to return the damaged item first.</p>" },
  { cat: "returns", q: "How do I start a return?", body: "<p>Go to <strong>Orders</strong>, select the item, and choose <strong>Start a return</strong>. Print the prepaid label we email you, drop the package at any carrier location, and you're done.</p><ul><li>Most items: 30 days from delivery</li><li>Final-sale items: not eligible</li><li>Opened electronics: 15-day window</li></ul>" },
  { cat: "returns", q: "Do I have to pay for return shipping?", body: "<p>Return shipping is free for defective or incorrect items. For change-of-mind returns, a flat $4.99 label fee is deducted from your refund unless you're a Novamart Plus member, in which case it's free.</p>" },
  { cat: "returns", q: "Can I exchange an item instead of returning it?", body: "<p>Yes — choose <strong>Exchange</strong> instead of <strong>Return</strong> during the return flow and pick the new size or color. We ship the replacement as soon as your original item is scanned by the carrier, so you're not stuck waiting.</p>" },
  { cat: "payments", q: "Can I change my payment method after ordering?", body: "<p>Not on a placed order, but you can cancel within 30 minutes of purchase (if it hasn't shipped) and reorder with the right card. Saved cards can be managed anytime under <strong>Account → Payment methods</strong>.</p>" },
  { cat: "payments", q: "Why was my card declined?", body: "<p>The most common causes are an expired card, an incorrect billing zip code, or your bank flagging the charge as unusual. Try re-entering your card details or use a different payment method — if it keeps failing, your bank can usually tell you why fastest.</p>" },
  { cat: "payments", q: "How do gift cards and store credit work?", body: "<p>Gift cards and credit are applied automatically at checkout when available on your account. They never expire and can be combined with one other payment method for the remaining balance.</p>" },
  { cat: "payments", q: "Where can I find my receipts and invoices?", body: "<p>Every order confirmation email includes a PDF receipt. You can also download any receipt anytime from <strong>Orders → select order → Download receipt</strong>.</p>" },
  { cat: "payments", q: "Do you charge sales tax?", body: "<p>Sales tax is calculated based on your shipping address and applicable local law, shown at checkout before you pay — nothing is added afterward.</p>" },
  { cat: "account", q: "How do I reset my password?", body: "<p>Go to <strong>Account → Security → Reset password</strong>. We'll email you a secure link that expires in 30 minutes. If you don't see it, check spam before requesting a new one.</p>" },
  { cat: "account", q: "Is two-step verification required?", body: "<p>It's optional but strongly recommended. Turn it on under <strong>Account → Security → Two-step verification</strong>. You'll need a phone number or an authenticator app.</p>" },
  { cat: "account", q: "How do I see which devices are logged into my account?", body: "<p><strong>Account → Security → Active sessions</strong> lists every device currently signed in, with location and last-active time. You can sign any of them out remotely with one tap.</p>" },
  { cat: "account", q: "How do I delete my account?", body: "<p>Go to <strong>Account → Privacy → Delete account</strong>. This permanently removes your order history, saved addresses, and payment methods after a 14-day grace period, during which you can cancel the deletion by logging back in.</p>" },
  { cat: "account", q: "Can I merge two accounts?", body: "<p>Accounts can't be merged automatically. Contact support with both email addresses and we can manually transfer order history and any store credit to the account you want to keep.</p>" },
  { cat: "shipping", q: "Which carriers do you ship with?", body: "<p>We use FedEx, UPS, and USPS depending on your zip code and delivery speed. You'll see the assigned carrier and tracking link as soon as your order ships.</p>" },
  { cat: "shipping", q: "Do you ship internationally?", body: "<p>Yes, to over 40 countries. International orders may be subject to customs fees and duties charged by your local authority, which are separate from what you pay at checkout.</p>" },
  { cat: "shipping", q: "What are my delivery speed options?", body: "<ul><li><strong>Standard:</strong> 5–7 business days, free over $35</li><li><strong>Express:</strong> 2–3 business days, $8.99</li><li><strong>Overnight:</strong> next business day if ordered before 2pm local time, $19.99</li></ul>" },
  { cat: "shipping", q: "Can I schedule a specific delivery window?", body: "<p>For select metro areas, choose a 2-hour delivery window at checkout for an extra $5.99. This option only appears if it's available for your address.</p>" },
  { cat: "product", q: "How do I file a warranty claim?", body: "<p>Find your product under <strong>Account → Purchases → Warranty</strong>, and submit photos plus a short description. Most claims are resolved within 5 business days.</p>" },
  { cat: "product", q: "Where can I find product manuals?", body: "<p>Every product page has a <strong>Manuals & guides</strong> tab near the bottom with the PDF manual, quick-start card, and any recall notices for that model.</p>" },
  { cat: "product", q: "My product won't turn on — what should I try first?", body: "<ul><li>Confirm the cable is fully seated at both ends</li><li>Try a different outlet or a known-working cable</li><li>Hold the power button for 10 seconds to force a reset</li><li>Check the manual's troubleshooting section for model-specific steps</li></ul><p>If none of that works, start a warranty claim and we'll take it from there.</p>" },
  { cat: "product", q: "How long is the standard warranty?", body: "<p>Most products carry a 1-year manufacturer warranty from the delivery date. Extended 2-year and 3-year plans are available at checkout on eligible items.</p>" },
];

const QUICK_CHIPS = [
  { label: "Track an order", query: "where is my order" },
  { label: "Start a return", query: "start a return" },
  { label: "Payment issue", query: "card declined" },
  { label: "Reset password", query: "reset my password" },
];

const TRACK_STEPS = ["Order placed", "Processing", "In transit", "Out for delivery", "Delivered"];

function catMeta(id) {
  return CATEGORIES.find((c) => c.id === id) || null;
}
function countFor(id) {
  return ARTICLES.filter((a) => a.cat === id).length;
}
function stripTags(html) {
  return html.replace(/<[^>]+>/g, "");
}
gasjsjbx
function tornEdgeClipPath(teeth = 26, depth = 10) {
  const pts = ["0% 0%", "100% 0%", "100% 100%"];
  for (let i = teeth; i >= 0; i--) {
    const x = (i / teeth) * 100;
    const y = i % 2 === 0 ? 100 : 100 - depth;
    pts.push(`${x}% ${y}%`);
  }
  return `polygon(${pts.join(",")})`;
}


export default function NovamartHelpCenter() {
  useGoogleFonts();

  const [query, setQuery] = useState("");
  const [cat, setCat] = useState(null);
  const [article, setArticle] = useState(null);
  const [helpful, setHelpful] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [orderNum, setOrderNum] = useState("");
  const [tracked, setTracked] = useState(null);
  const mainRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const catOk = cat ? a.cat === cat : true;
      const qOk = q ? (a.q + " " + a.body).toLowerCase().includes(q) : true;
      return catOk && qOk;
    });
  }, [query, cat]);

  function pickChip(q) {
    setQuery(q);
    setArticle(null);
  }
  function selectCat(id) {
    setCat((prev) => (prev === id ? null : id));
    setArticle(null);
  }
  function openArticle(a) {
    setArticle(a);
    setHelpful(null);
    requestAnimationFrame(() => {
      mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
  function clearAll() {
    setQuery("");
    setCat(null);
    setArticle(null);
  }

  function runTracker(e) {
    e.preventDefault();
    if (!orderNum.trim()) return;
    // Deterministic mock so the same number always shows the same step —
    // there's no live order backend behind this demo.
    const sum = orderNum
      .toUpperCase()
      .split("")
      .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const stepIndex = sum % TRACK_STEPS.length;
    setTracked({ id: orderNum.toUpperCase(), stepIndex });
  }

  return (
    <div style={styles.page}>
      <Header query={query} setQuery={(v) => { setQuery(v); setArticle(null); }} />

      <Hero
        query={query}
        setQuery={(v) => { setQuery(v); setArticle(null); }}
        chips={QUICK_CHIPS}
        onChip={pickChip}
        orderNum={orderNum}
        setOrderNum={setOrderNum}
        tracked={tracked}
        onTrack={runTracker}
      />

      <div style={styles.shell}>
        <Sidebar cat={cat} onSelect={selectCat} />

        <main ref={mainRef} style={{ minWidth: 0 }}>
          {article ? (
            <ArticleDetail
              article={article}
              helpful={helpful}
              setHelpful={setHelpful}
              onBack={() => setArticle(null)}
              onOpen={openArticle}
            />
          ) : (
            <ArticleList
              heading={cat ? catMeta(cat).title : query.trim() ? `Results for “${query.trim()}”` : "All articles"}
              subDesc={cat && !query.trim() ? catMeta(cat).desc : null}
              showClear={!!cat || !!query.trim()}
              onClear={clearAll}
              filtered={filtered}
              onOpen={openArticle}
            />
          )}
        </main>
      </div>

      <ContactSection />
      <Footer />
      <ChatWidget open={chatOpen} setOpen={setChatOpen} />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header({ query, setQuery }) {
  return (
    <div>     </div>
  );
}

/* ---------------- Hero (with order tracker) ---------------- */

function Hero({ query, setQuery, chips, onChip, orderNum, setOrderNum, tracked, onTrack }) {
  return (
    <section style={styles.hero}>
      <div style={styles.heroGlow} aria-hidden="true" />
      <div style={styles.heroGrid}>
        <div style={styles.heroLeft}>
          <p style={styles.eyebrow}>Help center</p>
          <h1 style={styles.h1}>Everything you need,<br />itemized.</h1>
          <p style={styles.heroSub}>Search 30+ guides, or jump straight to a topic below.</p>

          <div style={styles.heroSearchWrap}>
            <span style={styles.heroSearchIcon} aria-hidden="true">⌕</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Try “where is my order” or “return policy”'
              aria-label="Search help articles"
              style={styles.heroSearchInput}
            />
            {query && (
              <button aria-label="Clear search" onClick={() => setQuery("")} style={styles.heroClearBtn}>✕</button>
            )}
          </div>

          <div style={styles.chipRow}>
            {chips.map((c, i) => (
              <button key={i} onClick={() => onChip(c.query)} style={styles.chip}>{c.label}</button>
            ))}
          </div>

          <div style={styles.statsRow}>
            <div style={styles.stat}><div style={styles.statNum}>30+</div><div style={styles.statLbl}>help articles</div></div>
            <div style={styles.stat}><div style={styles.statNum}>2 min</div><div style={styles.statLbl}>avg. chat reply</div></div>
            <div style={styles.stat}><div style={styles.statNum}>24/7</div><div style={styles.statLbl}>self-serve access</div></div>
          </div>
        </div>

        {/* NEW: live order tracker card, styled like a torn receipt stub */}
        <OrderTrackerCard orderNum={orderNum} setOrderNum={setOrderNum} tracked={tracked} onTrack={onTrack} />
      </div>

      <div style={{ ...styles.tornEdge, clipPath: tornEdgeClipPath(30, 9) }} aria-hidden="true" />
    </section>
  );
}

function OrderTrackerCard({ orderNum, setOrderNum, tracked, onTrack }) {
  return (
    <div style={styles.trackCard}>
      <div style={styles.trackPerf} aria-hidden="true" />
      <div style={styles.trackHeadRow}>
        <span style={styles.trackEyebrow}>Quick order lookup</span>
        <span style={styles.trackSealMini}>N</span>
      </div>
      <h3 style={styles.trackTitle}>Track a package</h3>
      <p style={styles.trackHint}>Enter your order number — no login needed.</p>

      <form onSubmit={onTrack} style={styles.trackForm}>
        <input
          value={orderNum}
          onChange={(e) => setOrderNum(e.target.value)}
          placeholder="e.g. NM-48213"
          aria-label="Order number"
          style={styles.trackInput}
        />
        <button type="submit" style={styles.trackBtn}>Track</button>
      </form>

      {tracked && (
        <div style={styles.trackResult}>
          <div style={styles.trackResultHead}>
            <span style={styles.trackMono}>#{tracked.id}</span>
            <span style={styles.trackStatusPill}>{TRACK_STEPS[tracked.stepIndex]}</span>
          </div>
          <div style={styles.trackSteps}>
            {TRACK_STEPS.map((step, i) => (
              <div key={step} style={styles.trackStepItem}>
                <div
                  style={{
                    ...styles.trackDot,
                    background: i <= tracked.stepIndex ? tokens.gold : "rgba(255,255,255,0.18)",
                    borderColor: i <= tracked.stepIndex ? tokens.gold : "rgba(255,255,255,0.3)",
                  }}
                />
                {i < TRACK_STEPS.length - 1 && (
                  <div
                    style={{
                      ...styles.trackLine,
                      background: i < tracked.stepIndex ? tokens.gold : "rgba(255,255,255,0.18)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <p style={styles.trackNote}>
            {tracked.stepIndex === TRACK_STEPS.length - 1
              ? "Delivered — enjoy! Report a problem below if this isn't right."
              : "This is a preview based on your order number pattern. For live carrier data, open Orders in your account."}
          </p>
        </div>
      )}
    </div>
  );
}

/* ---------------- Sidebar (ticket-stub categories) ---------------- */

function Sidebar({ cat, onSelect }) {
  return (
    <nav style={styles.sidebar} aria-label="Help topics">
      <div style={styles.sidebarTitle}>Browse by topic</div>
      <button
        onClick={() => onSelect(null)}
        style={{ ...styles.sideItem, ...(cat === null ? styles.sideItemActive : {}) }}
      >
        <span style={styles.sideIc}>🗂️</span>
        <span>All topics</span>
        <span style={{ ...styles.sideCount, ...(cat === null ? styles.sideCountActive : {}) }}>{ARTICLES.length}</span>
      </button>
      {CATEGORIES.map((c) => {
        const active = cat === c.id;
        return (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            style={{ ...styles.sideItem, ...(active ? styles.sideItemActive : {}) }}
          >
            <span style={styles.sideIc}>{c.icon}</span>
            <span>{c.title}</span>
            <span style={{ ...styles.sideCount, ...(active ? styles.sideCountActive : {}) }}>{countFor(c.id)}</span>
          </button>
        );
      })}
    </nav>
  );
}

/* ---------------- Article list ---------------- */

function ArticleList({ heading, subDesc, showClear, onClear, filtered, onOpen }) {
  return (
    <div>
      <div style={styles.mainHead}>
        <h2 style={styles.mainHeadH2}>{heading}</h2>
        <span style={styles.resultCount}>{filtered.length} article{filtered.length === 1 ? "" : "s"}</span>
      </div>

      {subDesc && <p style={styles.subDesc}>{subDesc}</p>}
      {showClear && (
        <div style={{ marginBottom: 18 }}>
          <button onClick={onClear} style={styles.clearFilters}>Clear filters ✕</button>
        </div>
      )}

      {filtered.length === 0 ? (
        <div style={styles.emptyState}>
          <div style={{ fontSize: 34, marginBottom: 14 }}>🔍</div>
          <h3 style={{ fontSize: 18, marginBottom: 8, fontFamily: "'Fraunces', serif" }}>No matches for that search</h3>
          <p style={{ fontSize: 14, color: tokens.muted, margin: "0 0 20px" }}>Try different words, or reach a real person directly.</p>
          <a href="mailto:help@novamart.com" style={styles.emptyCta}>Email support</a>
        </div>
      ) : (
        <div style={styles.articleListWrap}>
          {filtered.map((a, i) => (
            <ArticleRow key={i} article={a} onOpen={onOpen} />
          ))}
        </div>
      )}
    </div>
  );
}

function ArticleRow({ article, onOpen }) {
  const c = catMeta(article.cat);
  const snippet = stripTags(article.body).slice(0, 110);
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={() => onOpen(article)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...styles.articleRow, ...(hover ? styles.articleRowHover : {}) }}
    >
      <span style={{ fontSize: 20, flexShrink: 0 }}>{c.icon}</span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={styles.articleTitle}>{article.q}</span>
        <span style={styles.articleDesc}>{snippet}{snippet.length >= 110 ? "…" : ""}</span>
      </span>
      <span style={styles.articleTag}>{c.title}</span>
      <span style={{ color: tokens.muted, fontSize: 18, flexShrink: 0 }}>›</span>
    </button>
  );
}

/* ---------------- Article detail ---------------- */

function ArticleDetail({ article, helpful, setHelpful, onBack, onOpen }) {
  const c = catMeta(article.cat);
  const related = ARTICLES.filter((a) => a.cat === article.cat && a.q !== article.q).slice(0, 3);

  return (
    <div>
      <button onClick={onBack} style={styles.backBtn}>← Back to results</button>
      <div style={styles.articleDetail}>
        <div style={{ ...styles.tornEdgeTop, clipPath: tornEdgeClipPath(22, 7) }} aria-hidden="true" />
        <span style={styles.badge}>{c.icon} {c.title}</span>
        <h2 style={styles.detailH2}>{article.q}</h2>
        <div style={styles.bodyText} dangerouslySetInnerHTML={{ __html: article.body }} />

        <div style={styles.articleFooter}>
          <div style={styles.helpfulRow}>
            <span>Was this helpful?</span>
            <button
              onClick={() => setHelpful("yes")}
              style={{ ...styles.helpfulBtn, ...(helpful === "yes" ? styles.helpfulBtnPicked : {}) }}
            >
              {helpful === "yes" ? "👍 Thanks!" : "👍 Yes"}
            </button>
            <button
              onClick={() => setHelpful("no")}
              style={{ ...styles.helpfulBtn, ...(helpful === "no" ? styles.helpfulBtnPicked : {}) }}
            >
              {helpful === "no" ? "👎 Noted" : "👎 No"}
            </button>
          </div>
          <a
            href={`mailto:help@novamart.com?subject=${encodeURIComponent("Question about: " + article.q)}`}
            style={styles.helpfulBtn}
          >
            Still need help? Email us
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <div style={styles.mainHead}>
            <h2 style={{ ...styles.mainHeadH2, fontSize: 19 }}>Related in {c.title}</h2>
          </div>
          <div style={styles.articleListWrap}>
            {related.map((r, i) => (
              <ArticleRow key={i} article={r} onOpen={onOpen} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Contact ---------------- */

function ContactSection() {
  const cards = [
   
  ];
  return (
    <section style={styles.contactSection}>
      <div style={styles.contactInner}>
       
        <div style={styles.contactRow}>
          {cards.map((c, i) => (
            <ContactCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, desc, cta, href }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...styles.contactCard, ...(hover ? styles.contactCardHover : {}) }}
    >
      <div style={styles.contactIcon}>{icon}</div>
      <div style={styles.contactTitle}>{title}</div>
      <div style={styles.contactDesc}>{desc}</div>
      <div style={styles.contactCta}>{cta}</div>
    </a>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
   
    </footer>
  );
}

/* ---------------- NEW: floating chat widget ---------------- */

function ChatWidget({ open, setOpen }) {
  const [messages] = useState([
    { from: "agent", text: "Hi! I'm a Novamart guide. Ask me about an order, return, or account issue." },
  ]);
  const [draft, setDraft] = useState("");
  const [sent, setSent] = useState([]);

  function send(e) {
    e.preventDefault();
    if (!draft.trim()) return;
    setSent((s) => [...s, draft.trim()]);
    setDraft("");
  }

  return (
    <>
      
      <button
        onClick={() => setOpen((o) => !o)}
        style={styles.chatFab}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? "✕" : "💬"}
      </button>
    </>
  );
}

/* ================= styles (inline, JS objects) ================= */

const styles = {
  page: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    background: tokens.paper,
    color: tokens.ink,
    minHeight: "100vh",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: tokens.surface,
    borderBottom: `1px solid ${tokens.line}`,
  },
  headerInner: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "14px 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "'Fraunces', serif",
    fontWeight: 700,
    fontSize: 21,
    letterSpacing: "-0.02em",
    whiteSpace: "nowrap",
  },
  logoSeal: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: tokens.forest,
    color: tokens.goldSoft,
    fontSize: 14,
    fontWeight: 700,
    transform: "rotate(-8deg)",
  },
  headerSearchWrap: { flex: 1, maxWidth: 480, position: "relative", display: "none" },
  headerSearchIcon: { position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: tokens.muted, fontSize: 16 },
  headerSearchInput: {
    width: "100%",
    padding: "11px 16px 11px 40px",
    borderRadius: 8,
    border: `1px solid ${tokens.line}`,
    background: tokens.paper,
    fontSize: 14,
    color: tokens.ink,
    fontFamily: "inherit",
  },
  backLink: { color: tokens.muted, textDecoration: "none", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" },

  hero: {
    position: "relative",
    overflow: "hidden",
    background: `linear-gradient(160deg, ${tokens.forestDeep} 0%, ${tokens.forest} 62%, #24402F 100%)`,
    padding: "72px 24px 100px",
  },
  heroGlow: {
    position: "absolute",
    top: -260,
    left: "20%",
    width: 760,
    height: 760,
    borderRadius: "50%",
    background: `radial-gradient(circle, rgba(201,138,43,0.35) 0%, rgba(201,138,43,0) 70%)`,
    pointerEvents: "none",
  },
  heroGrid: {
    position: "relative",
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 48,
    alignItems: "start",
  },
  heroLeft: {},
  eyebrow: {
    fontSize: 12.5,
    fontWeight: 700,
    letterSpacing: "0.16em",
    color: tokens.goldSoft,
    marginBottom: 14,
    textTransform: "uppercase",
    fontFamily: "'IBM Plex Mono', monospace",
  },
  h1: {
    fontFamily: "'Fraunces', serif",
    fontSize: 46,
    lineHeight: 1.12,
    color: "#fff",
    margin: "0 0 14px",
    fontWeight: 600,
  },
  heroSub: { color: "#CBD3C8", fontSize: 16.5, margin: "0 0 32px" },
  heroSearchWrap: { position: "relative", maxWidth: 520, marginBottom: 20 },
  heroSearchIcon: { position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", color: "#8B8DA8", fontSize: 18 },
  heroSearchInput: {
    width: "100%",
    padding: "16px 44px 16px 46px",
    borderRadius: 10,
    border: "1px solid transparent",
    fontSize: 15.5,
    fontFamily: "inherit",
    background: "#fff",
    color: tokens.ink,
    boxSizing: "border-box",
  },
  heroClearBtn: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: "translateY(-50%)",
    border: "none",
    background: "none",
    color: "#8B8DA8",
    fontSize: 16,
    cursor: "pointer",
    padding: 6,
  },
  chipRow: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 },
  chip: {
    padding: "9px 16px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(255,255,255,0.06)",
    color: "#EAEFE8",
    fontSize: 13.5,
    fontWeight: 600,
    cursor: "pointer",
  },
  statsRow: { display: "flex", gap: 40, flexWrap: "wrap" },
  stat: { color: "#fff" },
  statNum: { fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 600 },
  statLbl: { fontSize: 12.5, color: "#9FAA9C", marginTop: 2 },

  tornEdge: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 26,
    background: tokens.paper,
  },

  /* order tracker */
  trackCard: {
    position: "relative",
    background: tokens.surface,
    borderRadius: 6,
    padding: "26px 24px 22px",
    boxShadow: "0 30px 60px rgba(15,29,22,0.35)",
    fontFamily: "'IBM Plex Mono', monospace",
  },
  trackPerf: {
    position: "absolute",
    top: 0,
    left: 18,
    right: 18,
    height: 0,
    borderTop: `2px dashed ${tokens.line}`,
  },
  trackHeadRow: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
  trackEyebrow: { fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: tokens.muted, fontWeight: 600 },
  trackSealMini: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22,
    borderRadius: "50%",
    background: tokens.forest,
    color: tokens.goldSoft,
    fontSize: 11,
    fontWeight: 700,
    transform: "rotate(-8deg)",
    flexShrink: 0,
  },
  trackTitle: { fontFamily: "'Fraunces', serif", fontSize: 21, margin: "0 0 4px", color: tokens.ink },
  trackHint: { fontSize: 12.5, color: tokens.muted, margin: "0 0 16px", fontFamily: "'Inter', sans-serif" },
  trackForm: { display: "flex", gap: 8, marginBottom: 6 },
  trackInput: {
    flex: 1,
    padding: "11px 12px",
    borderRadius: 6,
    border: `1px solid ${tokens.line}`,
    fontSize: 13.5,
    fontFamily: "'IBM Plex Mono', monospace",
    color: tokens.ink,
    background: tokens.paper,
    boxSizing: "border-box",
  },
  trackBtn: {
    padding: "11px 18px",
    borderRadius: 6,
    border: "none",
    background: tokens.gold,
    color: "#2A1B04",
    fontWeight: 700,
    fontSize: 13.5,
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
  },
  trackResult: { marginTop: 18, paddingTop: 18, borderTop: `1px dashed ${tokens.line}` },
  trackResultHead: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
  trackMono: { fontSize: 13, fontWeight: 600, color: tokens.inkSoft },
  trackStatusPill: {
    fontSize: 11.5,
    fontWeight: 700,
    color: tokens.goldDeep,
    background: tokens.goldSoft,
    padding: "4px 10px",
    borderRadius: 999,
    textTransform: "uppercase",
    letterSpacing: "0.03em",
  },
  trackSteps: { display: "flex", alignItems: "center", marginBottom: 12 },
  trackStepItem: { display: "flex", alignItems: "center", flex: 1 },
  trackDot: { width: 12, height: 12, borderRadius: "50%", border: `2px solid ${tokens.line}`, flexShrink: 0, background: tokens.forest },
  trackLine: { height: 2, flex: 1, background: tokens.line },
  trackNote: { fontSize: 11.5, color: tokens.muted, lineHeight: 1.5, fontFamily: "'Inter', sans-serif", margin: 0 },

  shell: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "44px 24px 80px",
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: 40,
    alignItems: "start",
  },

  sidebar: {
    position: "sticky",
    top: 84,
    background: tokens.surface,
    border: `1px solid ${tokens.line}`,
    borderRadius: 10,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  sidebarTitle: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: tokens.muted,
    textTransform: "uppercase",
    padding: "12px 12px 8px",
    fontFamily: "'IBM Plex Mono', monospace",
  },
  sideItem: {
    display: "flex",
    alignItems: "center",
    gap: 11,
    width: "100%",
    textAlign: "left",
    padding: "11px 12px",
    borderRadius: 6,
    border: "none",
    borderLeft: "3px solid transparent",
    background: "none",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 600,
    color: tokens.ink,
    fontFamily: "inherit",
  },
  sideItemActive: { background: tokens.goldSoft, color: tokens.goldDeep, borderLeft: `3px solid ${tokens.gold}` },
  sideIc: { fontSize: 16, width: 20, textAlign: "center" },
  sideCount: {
    marginLeft: "auto",
    fontSize: 11.5,
    fontWeight: 700,
    color: tokens.muted,
    background: tokens.paper,
    borderRadius: 999,
    padding: "2px 8px",
    fontFamily: "'IBM Plex Mono', monospace",
  },
  sideCountActive: { background: "#fff", color: tokens.goldDeep },

  mainHead: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 20, flexWrap: "wrap" },
  mainHeadH2: { fontFamily: "'Fraunces', serif", fontSize: 25, fontWeight: 600, margin: 0 },
  resultCount: { fontSize: 13, color: tokens.muted, fontWeight: 600, fontFamily: "'IBM Plex Mono', monospace" },
  subDesc: { color: tokens.muted, fontSize: 14.5, margin: "-10px 0 22px", maxWidth: 620 },
  clearFilters: { background: "none", border: "none", color: tokens.muted, fontSize: 13.5, fontWeight: 700, cursor: "pointer", padding: 0 },

  articleListWrap: { display: "flex", flexDirection: "column", gap: 10 },
  articleRow: {
    background: tokens.surface,
    border: `1px solid ${tokens.line}`,
    borderRadius: 8,
    padding: "16px 18px",
    display: "flex",
    alignItems: "center",
    gap: 16,
    cursor: "pointer",
    textAlign: "left",
    width: "100%",
    transition: "transform .12s ease, box-shadow .12s ease, border-color .12s ease",
    fontFamily: "inherit",
  },
  articleRowHover: { borderColor: tokens.gold, boxShadow: "0 10px 24px rgba(24,38,32,0.08)", transform: "translateY(-1px)" },
  articleTitle: { display: "block", fontWeight: 700, fontSize: 14.5, marginBottom: 3 },
  articleDesc: { display: "block", fontSize: 13.5, color: tokens.muted, lineHeight: 1.5 },
  articleTag: {
    fontSize: 11,
    fontWeight: 700,
    color: tokens.goldDeep,
    background: tokens.goldSoft,
    padding: "4px 10px",
    borderRadius: 999,
    flexShrink: 0,
    textTransform: "uppercase",
    letterSpacing: "0.03em",
  },

  emptyState: { background: tokens.surface, border: `1px dashed ${tokens.line}`, borderRadius: 10, padding: "56px 24px", textAlign: "center" },
  emptyCta: { display: "inline-block", background: tokens.forest, color: "#fff", fontWeight: 700, fontSize: 14, padding: "11px 22px", borderRadius: 999, textDecoration: "none" },

  backBtn: { display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "none", color: tokens.goldDeep, fontWeight: 700, fontSize: 14, cursor: "pointer", padding: 0, marginBottom: 18, fontFamily: "inherit" },

  articleDetail: { position: "relative", background: tokens.surface, border: `1px solid ${tokens.line}`, borderRadius: 10, padding: "36px", paddingTop: 44, overflow: "hidden" },
  tornEdgeTop: { position: "absolute", top: 0, left: 0, right: 0, height: 14, background: tokens.paperDim },
  badge: { display: "inline-block", fontSize: 11, fontWeight: 700, color: tokens.goldDeep, background: tokens.goldSoft, padding: "5px 12px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 16 },
  detailH2: { fontFamily: "'Fraunces', serif", fontSize: 27, marginBottom: 18, lineHeight: 1.25, fontWeight: 600 },
  bodyText: { fontSize: 15.5, lineHeight: 1.8, color: tokens.inkSoft, maxWidth: 700 },

  articleFooter: { marginTop: 32, paddingTop: 24, borderTop: `1px dashed ${tokens.line}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 },
  helpfulRow: { display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: tokens.muted, fontWeight: 600 },
  helpfulBtn: { border: `1px solid ${tokens.line}`, background: tokens.surface, borderRadius: 999, padding: "7px 16px", fontSize: 13.5, fontWeight: 700, cursor: "pointer", color: tokens.ink, textDecoration: "none" },
  helpfulBtnPicked: { background: tokens.forest, borderColor: tokens.forest, color: "#fff" },

  contactSection: { background: tokens.surface, borderTop: `1px solid ${tokens.line}`, padding: "64px 24px" },
  contactInner: { maxWidth: 1280, margin: "0 auto" },
  contactH2: { fontFamily: "'Fraunces', serif", fontSize: 25, marginBottom: 8, fontWeight: 600 },
  contactSub: { color: tokens.muted, fontSize: 14.5, margin: "0 0 28px" },
  contactRow: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 },
  contactCard: { display: "block", background: tokens.paper, border: `1px solid ${tokens.line}`, borderRadius: 10, padding: "26px 22px", textDecoration: "none", color: "inherit", transition: "border-color .12s ease, box-shadow .12s ease, background .12s ease" },
  contactCardHover: { borderColor: tokens.gold, boxShadow: "0 14px 30px rgba(201,138,43,0.15)", background: "#fff" },
  contactIcon: { width: 42, height: 42, borderRadius: 8, background: tokens.goldSoft, color: tokens.goldDeep, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19, marginBottom: 14 },
  contactTitle: { fontWeight: 700, fontSize: 15.5, marginBottom: 4 },
  contactDesc: { fontSize: 13.5, color: tokens.muted, marginBottom: 16 },
  contactCta: { fontSize: 13.5, fontWeight: 700, color: tokens.goldDeep },


  /* chat widget */
  chatFab: {
    position: "fixed",
    right: 24,
    bottom: 24,
    width: 54,
    height: 54,
    borderRadius: "50%",
    border: "none",
    background: tokens.forest,
    color: "#fff",
    fontSize: 22,
    cursor: "pointer",
    boxShadow: "0 14px 30px rgba(15,29,22,0.35)",
    zIndex: 60,
  },
  chatPanel: {
    position: "fixed",
    right: 24,
    bottom: 90,
    width: 320,
    maxWidth: "calc(100vw - 48px)",
    background: tokens.surface,
    border: `1px solid ${tokens.line}`,
    borderRadius: 12,
    boxShadow: "0 24px 60px rgba(15,29,22,0.25)",
    zIndex: 60,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  chatPanelHead: { display: "flex", alignItems: "center", gap: 10, padding: "14px 14px", borderBottom: `1px solid ${tokens.line}`, background: tokens.paper },
  chatClose: { marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: tokens.muted, fontSize: 15 },
  chatBody: { padding: 14, display: "flex", flexDirection: "column", gap: 10, maxHeight: 260, overflowY: "auto" },
  chatBubbleAgent: { alignSelf: "flex-start", background: tokens.paper, border: `1px solid ${tokens.line}`, borderRadius: "10px 10px 10px 2px", padding: "9px 12px", fontSize: 13.5, lineHeight: 1.5, maxWidth: "85%" },
  chatBubbleUser: { alignSelf: "flex-end", background: tokens.forest, color: "#fff", borderRadius: "10px 10px 2px 10px", padding: "9px 12px", fontSize: 13.5, lineHeight: 1.5, maxWidth: "85%" },
  chatForm: { display: "flex", gap: 8, padding: 12, borderTop: `1px solid ${tokens.line}` },
  chatInput: { flex: 1, padding: "9px 11px", borderRadius: 8, border: `1px solid ${tokens.line}`, fontSize: 13.5, fontFamily: "inherit", boxSizing: "border-box" },
  chatSend: { padding: "9px 14px", borderRadius: 8, border: "none", background: tokens.gold, color: "#2A1B04", fontWeight: 700, fontSize: 13, cursor: "pointer" },
};