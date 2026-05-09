import { useState, useEffect, useRef } from "react";

const REVIEWS = [
  { id: 1, name: "Pankaj Kumar", date: "2025-06-10", comment: "Best product I've bought this year. Exceeded every expectation — the quality is outstanding!", rating: 5, initials: "PK", color: "#6366f1" },
  { id: 2, name: "Akash Maity", date: "2025-12-17", comment: "Decent product, does what it says. Nothing extraordinary, but solid for the price.", rating: 3, initials: "AM", color: "#14b8a6" },
  { id: 3, name: "Varun Singh", date: "2025-02-13", comment: "Nice product and great value for money. Would definitely consider buying again.", rating: 3, initials: "VS", color: "#f97316" },
  { id: 4, name: "Asutosh Das", date: "2025-11-23", comment: "Really good product with perfect fitting. Highly recommended to everyone!", rating: 5, initials: "AD", color: "#ec4899" },
];

const LABELS = ["", "Terrible", "Poor", "Okay", "Good", "Excellent"];

function useAnimatedNumber(target, duration = 1000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setValue(parseFloat((target * ease).toFixed(1)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return value;
}

function StarIcon({ filled, size = 18, onClick, onHover, onLeave }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      style={{ cursor: onClick ? "pointer" : "default", display: "block", transition: "transform 0.15s, filter 0.15s" }}
      onClick={onClick}
      onMouseEnter={e => { if (onHover) { onHover(); e.currentTarget.style.transform = "scale(1.25)"; e.currentTarget.style.filter = "drop-shadow(0 0 4px #f59e0b88)"; } }}
      onMouseLeave={e => { if (onLeave) { onLeave(); e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "none"; } }}
      onMouseDown={e => { if (onClick) e.currentTarget.style.transform = "scale(1.1)"; }}
      onMouseUp={e => { if (onClick) e.currentTarget.style.transform = "scale(1.25)"; }}
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill={filled ? "#f59e0b" : "#e5e7eb"}
        stroke={filled ? "#d97706" : "#d1d5db"}
        strokeWidth="1"
        style={{ transition: "fill 0.2s, stroke 0.2s" }}
      />
    </svg>
  );
}

function Stars({ rating, size = 18, interactive, onRate }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[1, 2, 3, 4, 5].map(s => (
        <StarIcon
          key={s} size={size}
          filled={interactive ? s <= (hovered || rating) : s <= Math.round(rating)}
          onClick={interactive ? () => onRate(s) : undefined}
          onHover={interactive ? () => setHovered(s) : undefined}
          onLeave={interactive ? () => setHovered(0) : undefined}
        />
      ))}
    </div>
  );
}

function RatingBar({ star, count, total, delay }) {
  const [w, setW] = useState(0);
  const pct = total ? Math.round((count / total) * 100) : 0;
  useEffect(() => {
    const t = setTimeout(() => setW(pct), delay);
    return () => clearTimeout(t);
  }, [pct, delay]);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px" }}>
      <span style={{ width: 16, color: "#94a3b8", textAlign: "right" }}>{star}</span>
      <svg width={12} height={12} viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#f59e0b" />
      </svg>
      <div style={{ flex: 1, height: 5, background: "rgba(255,255,255,0.1)", borderRadius: 99, overflow: "hidden" }}>
        <div style={{
          height: "100%", background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
          borderRadius: 99, width: `${w}%`,
          transition: "width 0.9s cubic-bezier(0.34,1.56,0.64,1)",
        }} />
      </div>
      <span style={{ width: 20, color: "#94a3b8", fontVariantNumeric: "tabular-nums" }}>{count}</span>
    </div>
  );
}

function Avatar({ initials, color }) {
  return (
    <div style={{
      width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
      background: color + "22", border: `2px solid ${color}55`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 14, fontWeight: 800, color,
      transition: "transform 0.2s, box-shadow 0.2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.boxShadow = `0 0 0 4px ${color}22`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
    >{initials}</div>
  );
}

function ReviewCard({ review, index }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), index * 120 + 300); return () => clearTimeout(t); }, [index]);
  const bg = review.rating >= 4 ? { bg: "#dcfce7", color: "#166534" } : review.rating >= 3 ? { bg: "#fef9c3", color: "#854d0e" } : { bg: "#fee2e2", color: "#991b1b" };
  return (
    <div style={{
      display: "flex", gap: 14, padding: "18px 0",
      borderBottom: "1px solid #f1f5f9",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(-20px)",
      transition: `opacity 0.5s ease, transform 0.5s ease`,
    }}>
      <Avatar initials={review.initials} color={review.color} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>{review.name}</div>
            <Stars rating={review.rating} size={13} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ background: bg.bg, color: bg.color, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 99 }}>
              {LABELS[Math.round(review.rating)]}
            </span>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>
              {new Date(review.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
            </span>
          </div>
        </div>
        <p style={{ margin: "8px 0 0", fontSize: 13, color: "#475569", lineHeight: 1.7 }}>{review.comment}</p>
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
  const [mounted, setMounted] = useState(false);
  const [focused, setFocused] = useState(null);

  const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;
  const animAvg = useAnimatedNumber(avg, 1200);
  const total = reviews.length;
  const counts = [5, 4, 3, 2, 1].map(s => reviews.filter(r => Math.round(r.rating) === s).length);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const handleSubmit = () => {
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!comment.trim()) { setError("Please write your review."); return; }
    if (!rating) { setError("Please select a star rating."); return; }
    setError("");
    const palette = ["#6366f1", "#14b8a6", "#f97316", "#ec4899", "#8b5cf6", "#0ea5e9"];
    const initials = name.trim().split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
    setReviews(prev => [{
      id: Date.now(), name: name.trim(),
      date: new Date().toISOString().split("T")[0],
      comment: comment.trim(), rating, initials,
      color: palette[prev.length % palette.length],
    }, ...prev]);
    setComment(""); setRating(0); setName("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3500);
  };

  const inputBase = (field) => ({
    width: "100%", padding: "11px 14px",
    border: `1.5px solid ${focused === field ? "#6366f1" : "#e2e8f0"}`,
    borderRadius: 8, fontSize: 14, background: "#fff",
    outline: "none", color: "#1e293b", boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: focused === field ? "0 0 0 3px #6366f120" : "none",
    fontFamily: "inherit",
  });

  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      maxWidth: 700, margin: "0 auto",
      background: "#fff", borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 24px 64px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.06)",
      opacity: mounted ? 1 : 0,
      transform: mounted ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
      transition: "opacity 0.7s cubic-bezier(0.34,1.56,0.64,1), transform 0.7s cubic-bezier(0.34,1.56,0.64,1)",
    }}>

      {/* ── Header ── */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
        padding: "32px 32px 28px", position: "relative", overflow: "hidden",
      }}>
        {[[200,-60,-60],[150,"68%",-40],[90,"88%","58%"]].map(([s,x,y],i)=>(
          <div key={i} style={{
            position:"absolute", width:s, height:s, borderRadius:"50%",
            border:"1px solid rgba(255,255,255,0.08)", left:x, top:y, pointerEvents:"none",
          }}/>
        ))}

        <div style={{ fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", color: "#64748b", marginBottom: 20 }}>
          Customer Reviews
        </div>

        <div style={{ display: "flex", gap: 36, alignItems: "flex-start" }}>
          <div>
            <div style={{
              fontSize: 68, fontWeight: 800, color: "#f8fafc", lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              textShadow: "0 0 40px rgba(99,102,241,0.5)",
            }}>{animAvg.toFixed(1)}</div>
            <div style={{ marginTop: 10 }}><Stars rating={avg} size={22} /></div>
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 8 }}>
              {total} verified review{total !== 1 ? "s" : ""}
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, paddingTop: 10 }}>
            {[5, 4, 3, 2, 1].map((star, i) => (
              <RatingBar key={star} star={star} count={counts[i]} total={total} delay={600 + i * 80} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Review list ── */}
      <div style={{
        padding: "0 28px", maxHeight: 380, overflowY: "auto",
        scrollbarWidth: "thin", scrollbarColor: "#e2e8f0 transparent",
      }}>
        {reviews.map((r, i) => <ReviewCard key={r.id} review={r} index={i} />)}
      </div>

      {/* ── Success banner ── */}
      {success && (
        <div style={{
          margin: "0 28px",
          background: "#dcfce7", border: "1px solid #86efac",
          color: "#166534", borderRadius: 8,
          padding: "12px 16px", fontSize: 14, fontWeight: 500,
          display: "flex", alignItems: "center", gap: 8,
          animation: "slideDown 0.45s cubic-bezier(0.34,1.56,0.64,1)",
        }}>
          ✓ Thank you! Your review was posted.
        </div>
      )}

      {/* ── Form ── */}
      <div style={{ padding: "24px 28px 32px", background: "#fafafa", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", color: "#94a3b8", marginBottom: 18 }}>
          Write a Review
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <input
            placeholder="Your full name"
            value={name}
            onChange={e => setName(e.target.value)}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            style={inputBase("name")}
          />
          <textarea
            placeholder="Share your experience with this product…"
            value={comment}
            onChange={e => setComment(e.target.value)}
            onFocus={() => setFocused("comment")}
            onBlur={() => setFocused(null)}
            rows={4}
            style={{ ...inputBase("comment"), resize: "vertical", lineHeight: 1.7 }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 13, color: "#64748b" }}>Your rating:</span>
            <Stars rating={rating} size={26} interactive onRate={setRating} />
            {rating > 0 && (
              <span style={{
                fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 99,
                background: rating >= 4 ? "#dcfce7" : rating >= 3 ? "#fef9c3" : "#fee2e2",
                color: rating >= 4 ? "#166534" : rating >= 3 ? "#854d0e" : "#991b1b",
                animation: "pop 0.25s cubic-bezier(0.34,1.56,0.64,1)",
              }}>{LABELS[rating]}</span>
            )}
          </div>
          {error && (
            <div style={{ fontSize: 13, color: "#dc2626", display: "flex", alignItems: "center", gap: 6, animation: "shake 0.3s ease" }}>
              ⚠ {error}
            </div>
          )}
          <button
            onClick={handleSubmit}
            style={{
              alignSelf: "flex-start",
              background: "linear-gradient(135deg, #4338ca, #6366f1)",
              color: "#fff", padding: "12px 34px",
              border: "none", borderRadius: 8,
              cursor: "pointer", fontSize: 12,
              letterSpacing: "2px", textTransform: "uppercase",
              fontFamily: "inherit", fontWeight: 700,
              boxShadow: "0 4px 20px rgba(99,102,241,0.45)",
              transition: "transform 0.18s, box-shadow 0.18s",
            }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 10px 30px rgba(99,102,241,0.55)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(99,102,241,0.45)"; }}
            onMouseDown={e => e.target.style.transform = "translateY(-1px) scale(0.97)"}
            onMouseUp={e => e.target.style.transform = "translateY(-3px) scale(1)"}
          >
            Submit Review
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }
        @keyframes pop { from{opacity:0;transform:scale(0.7)} to{opacity:1;transform:scale(1)} }
      `}</style>
    </div>
  );
}
