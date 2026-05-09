import { useState, useEffect } from "react";

const REVIEWS = [
  { id: 1, name: "Pankaj Kumar", date: "2025-06-10", comment: "Best product I've bought this year. Exceeded every expectation — the quality is outstanding!", rating: 5, initials: "PK", color: "#6366f1" },
  { id: 2, name: "Akash Maity", date: "2025-12-17", comment: "Decent product, does what it says. Nothing extraordinary, but solid for the price.", rating: 3, initials: "AM", color: "#14b8a6" },
  { id: 3, name: "Varun Singh", date: "2025-02-13", comment: "Nice product and great value for money. Would definitely consider buying again.", rating: 3, initials: "VS", color: "#f97316" },
  { id: 4, name: "Asutosh Das", date: "2025-11-23", comment: "Really good product with perfect fitting. Highly recommended to everyone!", rating: 5, initials: "AD", color: "#ec4899" },
];

const LABELS = ["", "Terrible", "Poor", "Okay", "Good", "Excellent"];

function useCountUp(target, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(parseFloat((target * ease).toFixed(1)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target]);
  return val;
}

function StarSVG({ filled, size = 16, onClick, onHover, onLeave }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      style={{ display: "block", cursor: onClick ? "pointer" : "default", transition: "transform 0.15s, filter 0.15s" }}
      onClick={onClick}
      onMouseEnter={e => { if (onHover) { onHover(); e.currentTarget.style.transform = "scale(1.3)"; e.currentTarget.style.filter = "drop-shadow(0 0 5px #f59e0baa)"; } }}
      onMouseLeave={e => { if (onLeave) { onLeave(); e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "none"; } }}
      onMouseDown={e => { if (onClick) e.currentTarget.style.transform = "scale(1.1)"; }}
      onMouseUp={e => { if (onClick) e.currentTarget.style.transform = "scale(1.3)"; }}
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill={filled ? "#f59e0b" : "#e2e8f0"} stroke={filled ? "#d97706" : "#cbd5e1"} strokeWidth="1"
        style={{ transition: "fill 0.18s" }}
      />
    </svg>
  );
}

function Stars({ rating, size = 16, interactive, onRate }) {
  const [hov, setHov] = useState(0);
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1,2,3,4,5].map(s => (
        <StarSVG key={s} size={size} filled={interactive ? s <= (hov || rating) : s <= Math.round(rating)}
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
  useEffect(() => { const t = setTimeout(() => setW(pct), delay); return () => clearTimeout(t); }, [pct, delay]);
  return (
    <div style={{ flex: 1, height: 6, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
      <div style={{ height: "100%", background: "linear-gradient(90deg,#f59e0b,#fbbf24)", borderRadius: 99, width: `${w}%`, transition: "width 0.85s cubic-bezier(0.34,1.56,0.64,1)" }} />
    </div>
  );
}

function Avatar({ initials, color, size = 48 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      background: color + "1a", border: `2px solid ${color}44`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.3, fontWeight: 800, color,
      transition: "transform 0.2s, box-shadow 0.2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.boxShadow = `0 0 0 5px ${color}22`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
    >{initials}</div>
  );
}

function ReviewRow({ r, index }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), index * 100 + 200); return () => clearTimeout(t); }, []);
  const badge = r.rating >= 4 ? { bg: "#dcfce7", c: "#166534" } : r.rating >= 3 ? { bg: "#fef9c3", c: "#854d0e" } : { bg: "#fee2e2", c: "#991b1b" };
  return (
    <div style={{
      display: "flex", gap: 18, padding: "24px 0",
      borderBottom: "1px solid #f1f5f9",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>
      <Avatar initials={r.initials} color={r.color} />
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 15, color: "#0f172a" }}>{r.name}</span>
            <span style={{ background: badge.bg, color: badge.c, fontSize: 11, fontWeight: 600, padding: "2px 10px", borderRadius: 99 }}>{LABELS[Math.round(r.rating)]}</span>
          </div>
          <span style={{ fontSize: 12, color: "#94a3b8" }}>{new Date(r.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
        </div>
        <Stars rating={r.rating} size={14} />
        <p style={{ margin: "10px 0 0", fontSize: 14, color: "#475569", lineHeight: 1.8 }}>{r.comment}</p>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState(REVIEWS);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [focused, setFocused] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 60); }, []);

  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const animAvg = useCountUp(avg, 1200);
  const total = reviews.length;
  const counts = [5,4,3,2,1].map(s => reviews.filter(r => Math.round(r.rating) === s).length);

  const submit = () => {
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!comment.trim()) { setError("Please write your review."); return; }
    if (!rating) { setError("Please select a star rating."); return; }
    setError("");
    const palette = ["#6366f1","#14b8a6","#f97316","#ec4899","#8b5cf6","#0ea5e9"];
    const initials = name.trim().split(" ").map(w=>w[0]).join("").toUpperCase().slice(0,2);
    setReviews(prev => [{ id: Date.now(), name: name.trim(), date: new Date().toISOString().split("T")[0], comment: comment.trim(), rating, initials, color: palette[prev.length % palette.length] }, ...prev]);
    setName(""); setComment(""); setRating(0);
    setSuccess(true); setTimeout(() => setSuccess(false), 3500);
  };

  const inp = (f) => ({
    width: "100%", padding: "12px 16px", borderRadius: 10,
    border: `1.5px solid ${focused === f ? "#6366f1" : "#e2e8f0"}`,
    fontSize: 14, outline: "none", color: "#0f172a", background: "#fff",
    boxSizing: "border-box", fontFamily: "inherit",
    boxShadow: focused === f ? "0 0 0 3px #6366f118" : "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  });

  return (
    <div style={{
      width: "100%",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      opacity: mounted ? 1 : 0,
      transform: mounted ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
    }}>

      {/* ── Summary bar ── */}
      <div style={{
        width: "100%",
        background: "linear-gradient(135deg,#0f172a 0%,#1e1b4b 100%)",
        padding: "40px 48px",
        boxSizing: "border-box",
        display: "flex", alignItems: "flex-start", gap: 60, flexWrap: "wrap",
      }}>
        {/* Big score */}
        <div style={{ minWidth: 140 }}>
          <div style={{ fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", color: "#64748b", marginBottom: 12 }}>Overall Rating</div>
          <div style={{ fontSize: 72, fontWeight: 800, color: "#f8fafc", lineHeight: 1, fontVariantNumeric: "tabular-nums", textShadow: "0 0 40px rgba(99,102,241,0.5)" }}>
            {animAvg.toFixed(1)}
          </div>
          <div style={{ marginTop: 10 }}><Stars rating={avg} size={22} /></div>
          <div style={{ fontSize: 13, color: "#64748b", marginTop: 8 }}>{total} verified review{total !== 1 ? "s" : ""}</div>
        </div>

        {/* Bars */}
        <div style={{ flex: 1, minWidth: 260, display: "flex", flexDirection: "column", gap: 10, paddingTop: 12 }}>
          {[5,4,3,2,1].map((star, i) => (
            <div key={star} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
              <span style={{ width: 14, color: "#94a3b8", textAlign: "right" }}>{star}</span>
              <svg width={13} height={13} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#f59e0b" /></svg>
              <AnimBar count={counts[i]} total={total} delay={500 + i * 80} />
              <span style={{ width: 18, color: "#64748b", fontVariantNumeric: "tabular-nums" }}>{counts[i]}</span>
            </div>
          ))}
        </div>

        {/* Quick stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 12 }}>
          {[
            { label: "5 Star", val: `${total ? Math.round((counts[0]/total)*100) : 0}%`, color: "#22c55e" },
            { label: "Recommend", val: `${total ? Math.round((reviews.filter(r=>r.rating>=4).length/total)*100) : 0}%`, color: "#6366f1" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 4, letterSpacing: "1px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Reviews list ── */}
      <div style={{ width: "100%", background: "#fff", padding: "0 48px", boxSizing: "border-box" }}>
        {reviews.map((r, i) => <ReviewRow key={r.id} r={r} index={i} />)}
      </div>

      {/* ── Success ── */}
      {success && (
        <div style={{ margin: "0 48px", background: "#dcfce7", border: "1px solid #86efac", color: "#166534", borderRadius: 10, padding: "14px 20px", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 8, animation: "slideDown 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}>
          ✓ Thank you! Your review was posted.
        </div>
      )}

      {/* ── Form ── */}
      <div style={{ width: "100%", background: "#f8fafc", borderTop: "2px solid #f1f5f9", padding: "40px 48px", boxSizing: "border-box" }}>
        <div style={{ fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", color: "#94a3b8", marginBottom: 8 }}>Write a Review</div>
        <h3 style={{ margin: "0 0 24px", fontSize: 20, fontWeight: 700, color: "#0f172a" }}>Share your experience</h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <input placeholder="Your full name" value={name} onChange={e=>setName(e.target.value)}
            onFocus={()=>setFocused("name")} onBlur={()=>setFocused(null)} style={inp("name")} />
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `1.5px solid ${focused==="stars"?"#6366f1":"#e2e8f0"}`, borderRadius: 10, padding: "0 16px", boxShadow: focused==="stars"?"0 0 0 3px #6366f118":"none", transition: "border-color 0.2s" }}
            onMouseEnter={()=>setFocused("stars")} onMouseLeave={()=>setFocused(null)}>
            <span style={{ fontSize: 13, color: "#64748b", whiteSpace: "nowrap" }}>Your rating:</span>
            <Stars rating={rating} size={22} interactive onRate={setRating} />
            {rating > 0 && <span style={{ fontSize: 12, fontWeight: 600, padding: "2px 10px", borderRadius: 99, whiteSpace: "nowrap", background: rating>=4?"#dcfce7":rating>=3?"#fef9c3":"#fee2e2", color: rating>=4?"#166534":rating>=3?"#854d0e":"#991b1b", animation: "pop 0.2s ease" }}>{LABELS[rating]}</span>}
          </div>
        </div>

        <textarea placeholder="Share your experience with this product — what did you like or dislike?" value={comment}
          onChange={e=>setComment(e.target.value)} rows={5}
          onFocus={()=>setFocused("comment")} onBlur={()=>setFocused(null)}
          style={{ ...inp("comment"), resize: "vertical", lineHeight: 1.8, marginBottom: 16 }}
        />

        {error && <div style={{ fontSize: 13, color: "#dc2626", marginBottom: 12, display: "flex", alignItems: "center", gap: 6, animation: "shake 0.3s ease" }}>⚠ {error}</div>}

        <button onClick={submit} style={{
          background: "linear-gradient(135deg,#4338ca,#6366f1)",
          color: "#fff", padding: "14px 40px",
          border: "none", borderRadius: 10, cursor: "pointer",
          fontSize: 12, letterSpacing: "2px", textTransform: "uppercase",
          fontFamily: "inherit", fontWeight: 700,
          boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
          transition: "transform 0.18s, box-shadow 0.18s",
        }}
          onMouseEnter={e=>{e.target.style.transform="translateY(-3px)";e.target.style.boxShadow="0 10px 30px rgba(99,102,241,0.55)";}}
          onMouseLeave={e=>{e.target.style.transform="translateY(0)";e.target.style.boxShadow="0 4px 20px rgba(99,102,241,0.4)";}}
          onMouseDown={e=>e.target.style.transform="translateY(-1px) scale(0.97)"}
          onMouseUp={e=>e.target.style.transform="translateY(-3px)"}
        >Submit Review</button>
      </div>

      <style>{`
        @keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
        @keyframes pop{from{opacity:0;transform:scale(0.7)}to{opacity:1;transform:scale(1)}}
      `}</style>
    </div>
  );
}
