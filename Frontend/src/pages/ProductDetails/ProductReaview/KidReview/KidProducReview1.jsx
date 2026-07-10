import { useState } from "react";

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Pooja Sharma",
    date: "2026-02-18",
    comment:
      "The Caribbean Blue colour looks exactly like the pictures. My daughter loved it and the fabric feels very soft.",
    rating: 5,
    initials: "PS",
    color: "#6366f1",
  },
  {
    id: 2,
    name: "Akash Maity",
    date: "2026-03-05",
    comment:
      "Good quality shorts with a comfortable fit. Worth buying for daily wear.",
    rating: 4,
    initials: "AM",
    color: "#14b8a6",
  },
  {
    id: 3,
    name: "Sneha Das",
    date: "2026-01-27",
    comment:
      "Nice stitching and lightweight fabric. Perfect for summer, though I wish there were more colour options.",
    rating: 4,
    initials: "SD",
    color: "#f97316",
  },
  {
    id: 4,
    name: "Riya Gupta",
    date: "2026-04-11",
    comment:
      "Excellent fitting and very comfortable. Even after multiple washes, the colour has not faded.",
    rating: 5,
    initials: "RG",
    color: "#ec4899",
  },
];

const LABELS = ["", "Terrible", "Poor", "Okay", "Good", "Excellent"];

function Star({ filled, size = 16, onClick, onHover, onLeave }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block", cursor: onClick ? "pointer" : "default", transition: "transform .15s, filter .15s" }}
      onClick={onClick}
      onMouseEnter={e => { if (onHover) { onHover(); e.currentTarget.style.transform = "scale(1.3)"; e.currentTarget.style.filter = "drop-shadow(0 0 5px #f59e0baa)"; } }}
      onMouseLeave={e => { if (onLeave) { onLeave(); e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "none"; } }}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill={filled ? "#f59e0b" : "#e2e8f0"} stroke={filled ? "#d97706" : "#cbd5e1"} strokeWidth="1"
        style={{ transition: "fill .18s" }}
      />
    </svg>
  );
}
function Stars({ rating, size = 16, interactive, onRate }) {
  const [hov, setHov] = useState(0);
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[1, 2, 3, 4, 5].map(s => (
        <Star key={s} size={size} filled={interactive ? s <= (hov || rating) : s <= Math.round(rating)}
          onClick={interactive ? () => onRate(s) : undefined}
          onHover={interactive ? () => setHov(s) : undefined}
          onLeave={interactive ? () => setHov(0) : undefined}
        />
      ))}
    </div>
  );
}

function AnimBar({ count, total, delay }) {
  const [w, setW] = useState(0);
  const pct = total ? Math.round((count / total) * 100) : 0;
  useState(() => { const t = setTimeout(() => setW(pct), delay); return () => clearTimeout(t); });
  return (
    <div style={{ flex: 1, height: 6, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
      <div style={{ height: "100%", background: "linear-gradient(90deg,#f59e0b,#fbbf24)", borderRadius: 99, width: `${w}%`, transition: `width .9s cubic-bezier(.34,1.56,.64,1) ${delay}ms` }} />
    </div>
  );
}

function Avatar({ initials, color, size = 42 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      background: color + "1a", border: `2px solid ${color}44`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * .3, fontWeight: 800, color,
      transition: "transform .2s, box-shadow .2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.boxShadow = `0 0 0 5px ${color}22`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
    >{initials}</div>
  );
}

function ReviewCard({ r, index }) {
  const badge = r.rating >= 4 ? { bg: "#dcfce7", c: "#166534" } : r.rating >= 3 ? { bg: "#fef9c3", c: "#854d0e" } : { bg: "#fee2e2", c: "#991b1b" };
  return (
    <div style={{
      display: "flex", gap: 16, padding: "22px 0",
      borderBottom: "1px solid #f1f5f9",
      animation: `fadeUp .5s ease ${index * .08 + .1}s both`,
    }}>
      <Avatar initials={r.initials} color={r.color} />
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: "#0f172a" }}>{r.name}</span>
            <span style={{ background: badge.bg, color: badge.c, fontSize: 11, fontWeight: 600, padding: "2px 10px", borderRadius: 99 }}>{LABELS[Math.round(r.rating)]}</span>
          </div>
          <span style={{ fontSize: 12, color: "#94a3b8" }}>{new Date(r.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
        </div>
        <Stars rating={r.rating} size={13} />
        <p style={{ margin: "8px 0 0", fontSize: 13, color: "#475569", lineHeight: 1.75 }}>{r.comment}</p>
      </div>
    </div>
  );
}

function OnlyReviewSection() {
  const [reviews, setReviews] = useState(REVIEWS_DATA);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [focused, setFocused] = useState(null);

  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const total = reviews.length;
  const counts = [5, 4, 3, 2, 1].map(s => reviews.filter(r => Math.round(r.rating) === s).length);

  const submit = () => {
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!comment.trim()) { setError("Please write your review."); return; }
    if (!rating) { setError("Please select a star rating."); return; }
    setError("");
    const palette = ["#6366f1", "#14b8a6", "#f97316", "#ec4899", "#8b5cf6", "#0ea5e9"];
    const initials = name.trim().split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
    setReviews(prev => [{ id: Date.now(), name: name.trim(), date: new Date().toISOString().split("T")[0], comment: comment.trim(), rating, initials, color: palette[prev.length % palette.length] }, ...prev]);
    setName(""); setComment(""); setRating(0);
    setSuccess(true); setTimeout(() => setSuccess(false), 3500);
  };

  const inp = (f) => ({
    width: "100%", padding: "11px 14px", borderRadius: 10,
    border: `1.5px solid ${focused === f ? "#6366f1" : "#e2e8f0"}`,
    fontSize: 13, outline: "none", color: "#0f172a", background: "#fff",
    boxSizing: "border-box", fontFamily: "inherit",
    boxShadow: focused === f ? "0 0 0 3px #6366f118" : "none",
    transition: "border-color .2s, box-shadow .2s",
  });

  return (
    <div>
      <div style={{ background: "linear-gradient(135deg,#0f172a,#1e1b4b)", padding: "28px 32px", display: "flex", gap: 40, flexWrap: "wrap", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", color: "#64748b", marginBottom: 8 }}>Overall Rating</div>
          <div style={{ fontSize: 58, fontWeight: 800, color: "#f8fafc", lineHeight: 1, fontVariantNumeric: "tabular-nums", textShadow: "0 0 30px rgba(99,102,241,.5)" }}>{avg.toFixed(1)}</div>
          <div style={{ marginTop: 8 }}><Stars rating={avg} size={20} /></div>
          <div style={{ fontSize: 12, color: "#64748b", marginTop: 6 }}>{total} verified review{total !== 1 ? "s" : ""}</div>
        </div>
        <div style={{ flex: 1, minWidth: 220, display: "flex", flexDirection: "column", gap: 8, paddingTop: 10 }}>
          {[5, 4, 3, 2, 1].map((star, i) => (
            <div key={star} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
              <span style={{ width: 14, color: "#94a3b8", textAlign: "right" }}>{star}</span>
              <svg width={12} height={12} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#f59e0b" /></svg>
              <AnimBar count={counts[i]} total={total} delay={400 + i * 70} />
              <span style={{ width: 16, color: "#64748b" }}>{counts[i]}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 10 }}>
          {[{ label: "5 Star", val: `${total ? Math.round((counts[0] / total) * 100) : 0}%`, color: "#22c55e" }, { label: "Recommend", val: `${total ? Math.round((reviews.filter(r => r.rating >= 4).length / total) * 100) : 0}%`, color: "#6366f1" }].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 3, letterSpacing: "1px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 28px", maxHeight: 360, overflowY: "auto", scrollbarWidth: "thin", scrollbarColor: "#e2e8f0 transparent" }}>
        {reviews.map((r, i) => <ReviewCard key={r.id} r={r} index={i} />)}
      </div>

      {success && (
        <div style={{ margin: "0 28px", background: "#dcfce7", border: "1px solid #86efac", color: "#166534", borderRadius: 8, padding: "12px 16px", fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 8, animation: "slideDown .4s ease" }}>
          ✓ Thank you! Your review was posted.
        </div>
      )}

      <div style={{ background: "#fafafa", borderTop: "1px solid #f1f5f9", padding: "24px 28px 28px" }}>
        <div style={{ fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", color: "#94a3b8", marginBottom: 16 }}>Write a Review</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <input placeholder="Your full name" value={name} onChange={e => setName(e.target.value)}
              onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} style={inp("name")} />
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", border: `1.5px solid ${focused === "stars" ? "#6366f1" : "#e2e8f0"}`, borderRadius: 10, padding: "0 14px", transition: "border-color .2s" }}
              onMouseEnter={() => setFocused("stars")} onMouseLeave={() => setFocused(null)}>
              <span style={{ fontSize: 12, color: "#64748b", whiteSpace: "nowrap" }}>Rating:</span>
              <Stars rating={rating} size={20} interactive onRate={setRating} />
              {rating > 0 && <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 99, whiteSpace: "nowrap", background: rating >= 4 ? "#dcfce7" : rating >= 3 ? "#fef9c3" : "#fee2e2", color: rating >= 4 ? "#166534" : rating >= 3 ? "#854d0e" : "#991b1b", animation: "pop .2s ease" }}>{LABELS[rating]}</span>}
            </div>
          </div>
          <textarea placeholder="Share your experience…" value={comment} onChange={e => setComment(e.target.value)} rows={4}
            onFocus={() => setFocused("comment")} onBlur={() => setFocused(null)}
            style={{ ...inp("comment"), resize: "vertical", lineHeight: 1.7 }} />
          {error && <div style={{ fontSize: 12, color: "#dc2626", display: "flex", alignItems: "center", gap: 6, animation: "shake .3s ease" }}>⚠ {error}</div>}
          <button onClick={submit} style={{
            alignSelf: "flex-start", background: "linear-gradient(135deg,#4338ca,#6366f1)",
            color: "#fff", padding: "11px 30px", border: "none", borderRadius: 10,
            cursor: "pointer", fontSize: 12, letterSpacing: "2px", textTransform: "uppercase",
            fontFamily: "inherit", fontWeight: 700, boxShadow: "0 4px 20px rgba(99,102,241,.4)",
            transition: "transform .18s, box-shadow .18s",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 10px 28px rgba(99,102,241,.55)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(99,102,241,.4)"; }}
          >Submit Review</button>
        </div>
      </div>
    </div>
  );
}

const DETAILS = [
  { label: "Brand Name", value: "DYCA" },
  { label: "Generic Name", value: "Shorts" },
  { label: "Item Type", value: "Regular Shorts" },
  { label: "Target Audience", value: "Girls" },
  { label: "Age Range", value: "Kid" },
  { label: "Colour", value: "Caribbean Blue" },
  { label: "Fit Type", value: "Regular Fit" },
  { label: "Pattern", value: "Solid" },
  { label: "Rise Style", value: "Mid Rise" },
  { label: "Season", value: "Summer" },
  { label: "Occasion", value: "Casual" },
  { label: "Net Quantity", value: "1 Count" },
  { label: "Item Weight", value: "300 g" },
  { label: "Item Dimensions", value: "15 × 12 × 7 cm" },
  { label: "Country of Origin", value: "India" },
  {
    label: "Manufacturer",
    value:
      "BODYCARE INTERNATIONAL LTD, Bodycare International Ltd., Noida",
  },
  {
    label: "Packer",
    value: "BODYCARE INTERNATIONAL LTD",
  },
  {
    label: "Best Sellers Rank",
    value:
      "#9,321 in Clothing & Accessories • #22 in Girls' Shorts",
  },
  {
    label: "ASIN",
    value: "B0CYLV4TJ7",
  },
];

const FEATURES = [
  {
    icon: "👧",
    title: "Made for Girls",
    desc: "Stylish regular-fit shorts specially designed for girls with maximum comfort.",
  },
  {
    icon: "💙",
    title: "Caribbean Blue",
    desc: "Modern Caribbean Blue colour that looks stylish and matches various outfits.",
  },
  {
    icon: "🌞",
    title: "Perfect for Summer",
    desc: "Lightweight and breathable fabric keeps kids cool during warm weather.",
  },
  {
    icon: "🧺",
    title: "Easy Maintenance",
    desc: "Machine washable fabric that maintains its colour and shape after repeated washing.",
  },
];

function DescriptionTab() {
  const [expandBSR, setExpandBSR] = useState(false);
  return (
    <div style={{ padding: "32px 36px", animation: "fadeUp .4s ease both" }}>
      {/* Feature highlights */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 16, marginBottom: 36 }}>
        {FEATURES.map((f, i) => (
          <div key={i} style={{
            background: "#f8fafc", border: "1px solid #e2e8f0",
            borderRadius: 12, padding: "18px 20px",
            transition: "transform .2s, box-shadow .2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,.07)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 4 }}>{f.title}</div>
            <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.65 }}>{f.desc}</div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
        <div style={{ flex: 1, height: 1, background: "#f1f5f9" }} />
        <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: "#94a3b8", fontWeight: 600 }}>Product Details</span>
        <div style={{ flex: 1, height: 1, background: "#f1f5f9" }} />
      </div>

      {/* Detail rows */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        {DETAILS.map((d, i) => {
          const isBSR = d.label === "Best Sellers Rank";
          const val = isBSR && !expandBSR ? d.value.slice(0, 35) + "…" : d.value;
          return (
            <div key={i} style={{
              display: "flex", gap: 0,
              borderBottom: "1px solid #f1f5f9",
              padding: "12px 0",
              gridColumn: isBSR ? "1/-1" : undefined,
              animation: `fadeUp .35s ease ${i * .04}s both`,
            }}>
              <div style={{ width: 200, flexShrink: 0, fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", paddingRight: 16 }}>{d.label}</div>
              <div style={{ fontSize: 13, color: "#0f172a", lineHeight: 1.6 }}>
                {val}
                {isBSR && (
                  <button onClick={() => setExpandBSR(p => !p)} style={{ marginLeft: 8, background: "none", border: "none", color: "#6366f1", cursor: "pointer", fontSize: 12, fontWeight: 600, padding: 0 }}>
                    {expandBSR ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const TABS = [
  { id: "Product details", label: "Product details" },
  { id: "review", label: "Reviews", count: 39 },
];

export default function ProductReview() {
  const [activeTab, setActiveTab] = useState("Product details");

  return (
    <div style={{ width: "100%", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* Tab bar */}
      <div style={{
        display: "flex", borderBottom: "2px solid #f1f5f9",
        background: "#fff", gap: 0,
      }}>
        {TABS.map(tab => {
          const active = activeTab === tab.id;
          return (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              position: "relative", padding: "16px 32px",
              background: "none", border: "none", cursor: "pointer",
              fontSize: 14, fontWeight: active ? 700 : 500,
              color: active ? "#0f172a" : "#64748b",
              fontFamily: "inherit",
              transition: "color .2s",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              {tab.label}
              {tab.count && (
                <span style={{
                  background: active ? "#6366f1" : "#e2e8f0",
                  color: active ? "#fff" : "#64748b",
                  fontSize: 11, fontWeight: 700,
                  padding: "2px 8px", borderRadius: 99,
                  transition: "background .2s, color .2s",
                }}>{tab.count}</span>
              )}
              <span style={{
                position: "absolute", bottom: -2, left: 0, right: 0, height: 2,
                background: "#6366f1", borderRadius: 2,
                transform: active ? "scaleX(1)" : "scaleX(0)",
                transition: "transform .25s cubic-bezier(.34,1.56,.64,1)",
                transformOrigin: "left",
              }} />
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div style={{ background: "#fff", borderRadius: "0 0 16px 16px", overflow: "hidden", border: "1px solid #f1f5f9", borderTop: "none" }}>
        {activeTab === "Product details" && <DescriptionTab />}
        {activeTab === "review" && <OnlyReviewSection />}
      </div>

      <style>{`
        @keyframes fadeUp   { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideDown{ from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shake    { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }
        @keyframes pop      { from{opacity:0;transform:scale(.7)} to{opacity:1;transform:scale(1)} }
      `}</style>
    </div>
  );
}