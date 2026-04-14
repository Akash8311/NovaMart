import React, { useState, useContext } from "react";
import { MyContext } from "../../App";


const COUPON_CODE     = "AKASH2004";
const COUPON_DISCOUNT = 499;
const MIN_ORDER       = 1199;

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --cream: #ffffff;
    --espresso: #101c1c;
    --caramel: #bed2f3;
    --gold: #bac9e1;
    --warm-gray: #4711cf;
    --light-border: #f7f7f7;
    --input-bg: #FDFAF7;
    --success: #0F6E56;
    --success-bg: #E1F5EE;
    --success-border: #9FE1CB;
    --danger: #A32D2D;
  }

  .pay-root {
    min-height: 100vh;
    background: #f4f0eb;
    font-family: 'DM Sans', sans-serif;
    padding: 48px 24px 80px;
  }

  .pay-header {
    max-width: 1100px; margin: 0 auto 40px;
    display: flex; align-items: center; gap: 16px;
    opacity: 0; transform: translateY(-14px);
    animation: fadeDown .5s ease .05s forwards;
  }
  @keyframes fadeDown { to { opacity: 1; transform: translateY(0); } }

  .pay-brand-icon {
    width: 36px; height: 36px;
    border: 1.5px solid var(--caramel);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; color: var(--caramel);
    animation: spin-slow 12s linear infinite; flex-shrink: 0;
  }
  @keyframes spin-slow { to { transform: rotate(360deg); } }
  .pay-brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 18px; color: var(--espresso);
    letter-spacing: 4px; text-transform: uppercase;
  }

  .pay-steps {
    max-width: 1100px; margin: 0 auto 36px;
    display: flex; align-items: center;
    opacity: 0; animation: fadeUp .5s ease .15s forwards;
  }
  @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
  .pay-step-item {
    display: flex; align-items: center; gap: 8px;
    font-size: 12px; letter-spacing: 1px; text-transform: uppercase; font-weight: 500;
  }
  .pay-step-dot {
    width: 24px; height: 24px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 600; flex-shrink: 0;
    border: 1.5px solid var(--light-border);
    color: var(--warm-gray); background: #fff; transition: all .3s;
  }
  .pay-step-dot.done   { background: var(--success-bg); border-color: var(--success-border); color: var(--success); }
  .pay-step-dot.active { background: var(--espresso); border-color: var(--espresso); color: #fff; }
  .pay-step-label { color: var(--warm-gray); }
  .pay-step-label.active { color: var(--espresso); font-weight: 500; }
  .pay-step-label.done   { color: var(--success); }
  .pay-step-line { flex: 1; height: 1px; background: var(--light-border); margin: 0 12px; min-width: 32px; }

  .pay-layout {
    max-width: 1100px; margin: 0 auto;
    display: flex; gap: 28px; align-items: flex-start;
  }
  .pay-left {
    flex: 1; min-width: 0;
    display: flex; flex-direction: column; gap: 20px;
  }

  .pay-card {
    background: #fff;
    border: 0.5px solid var(--light-border);
    border-radius: 16px; padding: 32px;
    opacity: 0; transform: translateY(16px);
    animation: fadeUp .5s ease forwards;
  }
  .pay-card:nth-child(1) { animation-delay: .2s; }
  .pay-card:nth-child(2) { animation-delay: .3s; }

  .pay-card::before {
    content: '';
    display: block; height: 3px;
    background: linear-gradient(90deg, var(--caramel), var(--gold), var(--caramel));
    background-size: 200% auto;
    animation: shimmer 3s linear infinite;
    border-radius: 16px 16px 0 0;
    margin: -32px -32px 32px;
  }
  @keyframes shimmer { from { background-position: 0% center; } to { background-position: 200% center; } }

  .pay-card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 28px; }
  .pay-card-num {
    width: 28px; height: 28px;
    border: 1px solid var(--caramel);
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 600; color: var(--espresso); flex-shrink: 0;
  }
  .pay-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px; font-weight: 600; color: var(--espresso);
  }

  .pay-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .pay-form-rows { display: flex; flex-direction: column; gap: 16px; }

  .pay-field { display: flex; flex-direction: column; gap: 6px; }
  .pay-label {
    font-size: 10px; letter-spacing: 1.8px; text-transform: uppercase;
    color: var(--espresso); font-weight: 500; transition: color .2s;
  }
  .pay-field.focused .pay-label { color: var(--caramel); }
  .pay-input-wrap { position: relative; }
  .pay-input-icon {
    position: absolute; left: 13px; top: 50%; transform: translateY(-50%);
    width: 15px; height: 15px; color: var(--warm-gray);
    pointer-events: none; transition: color .2s; z-index: 2;
  }
  .pay-field.focused .pay-input-icon { color: var(--caramel); }
  .pay-field.has-icon .pay-input { padding-left: 40px; }

  .pay-input, .pay-select, .pay-textarea {
    width: 100%;
    border: 1.5px solid var(--light-border);
    background: var(--input-bg);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px; color: var(--espresso);
    outline: none; border-radius: 0;
    transition: border-color .25s, box-shadow .25s, background .25s;
    -webkit-appearance: none;
  }
  .pay-input  { height: 46px; padding: 0 14px; }
  .pay-select { height: 46px; padding: 0 14px; cursor: pointer; }
  .pay-textarea { padding: 12px 14px; resize: none; line-height: 1.6; }
  .pay-input::placeholder, .pay-textarea::placeholder { color: #C4B9B2; }
  .pay-input:focus, .pay-select:focus, .pay-textarea:focus {
    border-color: var(--caramel);
    box-shadow: 0 0 0 3px rgba(190,210,243,.18);
    background: #fff;
  }

  /* save address */
  .pay-save-addr {
    width: 100%; padding: 13px;
    background: #fff; color: var(--espresso);
    border: 1.5px solid var(--espresso);
    font-family: 'DM Sans', sans-serif;
    font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase;
    font-weight: 500; cursor: pointer; border-radius: 0;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    transition: background .2s, color .2s; margin-top: 4px;
  }
  .pay-save-addr:hover { background: var(--espresso); color: var(--cream); }
  .pay-save-addr.saved { background: var(--success-bg); color: var(--success); border-color: var(--success-border); }
  .pay-addr-saved-msg {
    font-size: 12px; color: var(--success); text-align: center; padding: 8px;
    background: var(--success-bg); border: 0.5px solid var(--success-border); margin-top: 8px;
  }
  .pay-method-tabs { display: flex; gap: 12px; margin-bottom: 24px; }
  .pay-method-tab {
    flex: 1; padding: 14px 12px;
    border: 1.5px solid var(--light-border);
    background: var(--input-bg); cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 500; color: var(--warm-gray);
    display: flex; flex-direction: column; align-items: center; gap: 6px;
    transition: border-color .2s, color .2s, background .2s, transform .15s;
    border-radius: 0;
  }
  .pay-method-tab:hover { border-color: var(--caramel); color: var(--espresso); transform: translateY(-2px); }
  .pay-method-tab.active { border-color: var(--espresso); background: var(--espresso); color: var(--cream); }
  .pay-method-tab-icon { font-size: 20px; }

  /* live card preview */
  .pay-card-preview {
    background: linear-gradient(135deg, var(--espresso) 0%, #2e2118 100%);
    border-radius: 12px; padding: 24px; margin-bottom: 20px;
    position: relative; overflow: hidden;
  }
  .pay-card-preview-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
  .pay-card-num-display {
    font-family: 'Playfair Display', serif;
    font-size: 20px; color: var(--cream); letter-spacing: 3px; margin-bottom: 16px;
  }
  .pay-card-bottom { display: flex; justify-content: space-between; }
  .pay-card-meta { font-size: 10px; color: rgba(247,243,238,.5); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 2px; }
  .pay-card-meta-val { font-size: 13px; color: var(--cream); letter-spacing: 1px; }
  .pay-submit {
    width: 100%; padding: 16px;
    background: var(--espresso); color: var(--cream);
    border: none; font-family: 'DM Sans', sans-serif;
    font-size: 12px; letter-spacing: 3px; text-transform: uppercase;
    font-weight: 500; cursor: pointer; border-radius: 0;
    transition: background .3s, transform .15s, box-shadow .3s;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    margin-top: 8px;
  }
  .pay-submit:hover:not(:disabled) {
    background: #251a2e;
    box-shadow: 0 6px 24px rgba(28,19,16,.25);
    transform: translateY(-1px);
  }
  .pay-submit:disabled { opacity: .6; cursor: not-allowed; }
  .pay-loader {
    width: 14px; height: 14px;
    border: 2px solid rgba(247,243,238,.35);
    border-top: 2px solid var(--cream);
    border-radius: 50%; animation: spin .7s linear infinite; flex-shrink: 0;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* right col */
  .pay-right {
    width: 320px; flex-shrink: 0;
    display: flex; flex-direction: column; gap: 16px;
    opacity: 0; transform: translateY(16px);
    animation: fadeUp .5s ease .35s forwards;
  }
  .pay-summary-card { background: #fff; border: 0.5px solid var(--light-border); border-radius: 16px; overflow: hidden; }
  .pay-summary-top { background: linear-gradient(135deg, var(--espresso) 0%, #2e2118 100%); padding: 24px; }
  .pay-summary-top-title { font-family: 'Playfair Display', serif; font-size: 18px; color: var(--cream); margin-bottom: 4px; }
  .pay-summary-top-sub { font-size: 12px; color: rgba(247,243,238,.5); }
  .pay-summary-body { padding: 20px 24px; }

  /* order items */
  .pay-order-item {
    display: flex; align-items: center; gap: 12px;
    margin-bottom: 14px; padding-bottom: 14px;
    border-bottom: 0.5px solid var(--light-border);
  }
  .pay-order-item:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
  .pay-order-thumb {
    width: 52px; height: 52px; border-radius: 8px;
    flex-shrink: 0; overflow: hidden; background: #f4f0eb;
  }
  .pay-order-thumb img { width: 100%; height: 100%; object-fit: cover; }
  .pay-order-name  { font-size: 13px; font-weight: 500; color: var(--espresso); margin-bottom: 2px; }
  .pay-order-qty   { font-size: 12px; color: var(--warm-gray); }
  .pay-order-price { font-size: 14px; font-weight: 500; color: var(--espresso); margin-left: auto; flex-shrink: 0; }

  .pay-totals { margin-top: 16px; }
  .pay-total-row { display: flex; justify-content: space-between; font-size: 13px; color: var(--warm-gray); margin-bottom: 10px; }
  .pay-total-row span:last-child { color: var(--espresso); font-weight: 500; }
  .pay-total-row.free span:last-child { color: var(--success); }
  .pay-total-row.disc span:last-child { color: var(--danger); }
  .pay-total-divider { height: 0.5px; background: var(--light-border); margin: 14px 0; }
  .pay-grand-row { display: flex; justify-content: space-between; align-items: baseline; }
  .pay-grand-label { font-size: 15px; font-weight: 500; color: var(--espresso); font-family: 'Playfair Display', serif; }
  .pay-grand-val { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 600; color: var(--espresso); }
  .pay-incl-tax { font-size: 11px; color: var(--warm-gray); text-align: right; margin-top: 2px; }

  /* empty cart notice */
  .pay-empty-notice {
    background: #fff9f0; border: 0.5px solid var(--light-border);
    border-left: 3px solid #f0a500; padding: 14px 18px;
    font-size: 13px; color: var(--warm-gray); border-radius: 4px;
  }

  .pay-trust {
    background: #fff; border: 0.5px solid var(--light-border);
    border-radius: 16px; padding: 16px 20px; display: flex; justify-content: space-around;
  }
  .pay-badge { text-align: center; }
  .pay-badge-icon { font-size: 18px; margin-bottom: 4px; }
  .pay-badge-label { font-size: 11px; color: var(--warm-gray); }

  .pay-secure { display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 12px; color: var(--warm-gray); }

  .cod-notice { background: #f9f6f0; border: 0.5px solid var(--light-border); padding: 16px 18px; border-left: 3px solid var(--caramel); }
  .cod-notice p:first-child { font-size: 13px; color: var(--espresso); font-weight: 500; margin-bottom: 4px; }
  .cod-notice p:last-child  { font-size: 12px; color: var(--warm-gray); line-height: 1.6; }

  /* success overlay */
  .pay-success-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,.45);
    display: flex; align-items: center; justify-content: center; z-index: 999;
  }
  .pay-success-box {
    background: #fff; border-radius: 16px; padding: 44px 36px;
    text-align: center; max-width: 340px; width: 90%;
  }
  .pay-success-check {
    width: 60px; height: 60px;
    background: var(--success-bg); border: 1.5px solid var(--success-border);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 26px; margin: 0 auto 16px;
  }
  .pay-success-box h3 { font-family: 'Playfair Display', serif; font-size: 22px; color: var(--espresso); margin-bottom: 8px; }
  .pay-success-box p  { font-size: 13px; color: var(--warm-gray); margin-bottom: 24px; }
  .pay-success-close {
    padding: 12px 28px; background: var(--espresso); color: var(--cream);
    border: none; font-family: 'DM Sans', sans-serif;
    font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase; cursor: pointer; border-radius: 0;
  }

  @media (max-width: 900px) {
    .pay-layout { flex-direction: column; }
    .pay-right { width: 100%; }
    .pay-grid-2 { grid-template-columns: 1fr; }
  }
`;

const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
  "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
  "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Delhi",
];

const fmt = n => "₹" + n.toLocaleString("en-IN");

const SaveIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
    <polyline points="17 21 17 13 7 13 7 21"/>
    <polyline points="7 3 7 8 15 8"/>
  </svg>
);

const EyeOpen = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const Field = ({ label, icon, children, focused }) => (
  <div className={`pay-field${focused ? " focused" : ""}${icon ? " has-icon" : ""}`}>
    <label className="pay-label">{label}</label>
    <div className="pay-input-wrap">
      {icon && <span className="pay-input-icon">{icon}</span>}
      {children}
    </div>
  </div>
);

export default function Payment() {
  const { cartItems, couponApplied } = useContext(MyContext);
  const subtotal    = (cartItems || []).reduce((t, i) => t + i.price * i.qty, 0);
  const totalQty    = (cartItems || []).reduce((a, i) => a + i.qty, 0);
  const discountAmt = couponApplied ? COUPON_DISCOUNT : 0;
  const grandTotal  = subtotal - discountAmt;

  // ── local UI state ──
  const [focus, setFocus]                   = useState({});
  const [payMethod, setPayMethod]           = useState("card");
  const [loading, setLoading]               = useState(false);
  const [success, setSuccess]               = useState(false);
  const [cardNum, setCardNum]               = useState("");
  const [expiry, setExpiry]                 = useState("");
  const [cvv, setCvv]                       = useState("");
  const [showCvv, setShowCvv]               = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const [addrSaved, setAddrSaved]           = useState(false);
  const [addrMsg, setAddrMsg]               = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", zip: "", company: ""
  });

  const setF = k => val => setForm(p => ({ ...p, [k]: val }));
  const foc  = k => setFocus(p => ({ ...p, [k]: true  }));
  const blur = k => setFocus(p => ({ ...p, [k]: false }));

  const formatCard = v => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const formatExp  = v => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d;
  };

  const cardDisplay = cardNum
    ? cardNum.padEnd(19, "•").substring(0, 19)
    : "**** **** **** ****";

  const handleSaveAddress = () => {
    setAddrSaved(true);
    setAddrMsg(true);
    setTimeout(() => { setAddrSaved(false); setAddrMsg(false); }, 2500);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000)); // ← hook Razorpay here
    setLoading(false);
    setSuccess(true);
  };

  const STEP_LABELS = ["Cart", "Details", "Payment", "Confirm"];

  return (
    <>
      <style>{STYLES}</style>
      <div className="pay-root">

        {/* brand header */}
        <div className="pay-header">
          <div className="pay-brand-icon">✦</div>
          <span className="pay-brand-name">NovaMart</span>
        </div>

        {/* breadcrumb */}
        <div className="pay-steps">
          {STEP_LABELS.map((label, i) => {
            const done   = i < 2;
            const active = i === 2;
            return (
              <React.Fragment key={label}>
                {i > 0 && <div className="pay-step-line" />}
                <div className="pay-step-item">
                  <div className={`pay-step-dot${done ? " done" : active ? " active" : ""}`}>
                    {done ? "✓" : i + 1}
                  </div>
                  <span className={`pay-step-label${done ? " done" : active ? " active" : ""}`}>{label}</span>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="pay-layout">

          {/* ── LEFT COLUMN ── */}
          <div className="pay-left">

            {/* ── BILLING DETAILS ── */}
            <div className="pay-card">
              <div className="pay-card-header">
                <div className="pay-card-num">01</div>
                <h2 className="pay-card-title">Billing Details</h2>
              </div>
              <div className="pay-form-rows">
                <div className="pay-grid-2">
                  <Field label="First Name" focused={focus.firstName} icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                  }>
                    <input className="pay-input" placeholder="Sunny" value={form.firstName}
                      onChange={e => setF("firstName")(e.target.value)}
                      onFocus={() => foc("firstName")} onBlur={() => blur("firstName")} />
                  </Field>
                  <Field label="Last Name" focused={focus.lastName}>
                    <input className="pay-input" placeholder="Leone" value={form.lastName}
                      onChange={e => setF("lastName")(e.target.value)}
                      onFocus={() => foc("lastName")} onBlur={() => blur("lastName")} />
                  </Field>
                </div>

                <div className="pay-grid-2">
                  <Field label="Email Address" focused={focus.email} icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
                  }>
                    <input className="pay-input" type="email" placeholder="you@example.com" value={form.email}
                      onChange={e => setF("email")(e.target.value)}
                      onFocus={() => foc("email")} onBlur={() => blur("email")} />
                  </Field>
                  <Field label="Phone Number" focused={focus.phone} icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 4.17 2 2 0 0 1 5.09 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.9a2 2 0 0 1-.45 2.11L9 10.09a16 16 0 0 0 6.92 6.92l1.36-1.36a2 2 0 0 1 2.11-.45c.93.35 1.9.59 2.9.72A2 2 0 0 1 22 17.92z"/></svg>
                  }>
                    <input className="pay-input" type="tel" placeholder="+91 12345 67890" value={form.phone}
                      onChange={e => setF("phone")(e.target.value)}
                      onFocus={() => foc("phone")} onBlur={() => blur("phone")} />
                  </Field>
                </div>

                <Field label="Street Address" focused={focus.address} icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                }>
                  <textarea className="pay-textarea" rows={2} placeholder="House no., Street, Area..." value={form.address}
                    onChange={e => setF("address")(e.target.value)}
                    onFocus={() => foc("address")} onBlur={() => blur("address")} />
                </Field>

                <div className="pay-grid-2">
                  <Field label="City" focused={focus.city}>
                    <input className="pay-input" placeholder="Fuck Off" value={form.city}
                      onChange={e => setF("city")(e.target.value)}
                      onFocus={() => foc("city")} onBlur={() => blur("city")} />
                  </Field>
                  <Field label="State" focused={focus.state}>
                    <select className="pay-select" value={form.state}
                      onChange={e => setF("state")(e.target.value)}
                      onFocus={() => foc("state")} onBlur={() => blur("state")}>
                      <option value="">Select state</option>
                      {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>

                <div className="pay-grid-2">
                  <Field label="Zip Code" focused={focus.zip}>
                    <input className="pay-input" type="text" inputMode="numeric" placeholder="******" maxLength={6}
                      value={form.zip}
                      onChange={e => setF("zip")(e.target.value.replace(/\D/g, ""))}
                      onFocus={() => foc("zip")} onBlur={() => blur("zip")} />
                  </Field>
                  <Field label="Country" focused={focus.country}>
                    <input className="pay-input" defaultValue="India" readOnly
                      style={{ color: "var(--warm-gray)", cursor: "default" }} />
                  </Field>
                </div>

                <Field label="Company (Optional)" focused={focus.company}>
                  <input className="pay-input" placeholder="Your company name" value={form.company}
                    onChange={e => setF("company")(e.target.value)}
                    onFocus={() => foc("company")} onBlur={() => blur("company")} />
                </Field>

                {/* save address */}
                <button
                  className={`pay-save-addr${addrSaved ? " saved" : ""}`}
                  onClick={handleSaveAddress}
                >
                  <SaveIcon />
                  {addrSaved ? "Saved!" : "Save Address"}
                </button>
                {addrMsg && <div className="pay-addr-saved-msg">✓ Address saved successfully</div>}
              </div>
            </div>

            {/* ── PAYMENT METHOD ── */}
            <div className="pay-card">
              <div className="pay-card-header">
                <div className="pay-card-num">02</div>
                <h2 className="pay-card-title">Payment Method</h2>
              </div>

              <div className="pay-method-tabs">
                {[
                  { id: "card",       icon: "💳", label: "Card" },
                  { id: "upi",        icon: "📱", label: "UPI" },
                  { id: "netbanking", icon: "🏦", label: "Net Banking" },
                  { id: "cod",        icon: "💵", label: "Cash on Delivery" },
                ].map(m => (
                  <button key={m.id}
                    className={`pay-method-tab${payMethod === m.id ? " active" : ""}`}
                    onClick={() => setPayMethod(m.id)}>
                    <span className="pay-method-tab-icon">{m.icon}</span>
                    {m.label}
                  </button>
                ))}
              </div>

              {payMethod === "card" && (
                <>
                  <div className="pay-card-preview">
                    <div className="pay-card-preview-row">
                      <span style={{ fontSize: 20 }}>💳</span>
                      <span style={{ fontSize: 13, color: "rgba(247,243,238,.5)", letterSpacing: 2, textTransform: "uppercase" }}>NovaMart</span>
                    </div>
                    <div className="pay-card-num-display">{cardDisplay}</div>
                    <div className="pay-card-bottom">
                      <div>
                        <div className="pay-card-meta">Card Holder</div>
                        <div className="pay-card-meta-val">
                          {cardHolderName || ((form.firstName || "FIRST") + " " + (form.lastName || "LAST")).toUpperCase()}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div className="pay-card-meta">Expires</div>
                        <div className="pay-card-meta-val">{expiry || "MM/YY"}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pay-form-rows">
                    <Field label="Card Number" focused={focus.cardNum}>
                      <input className="pay-input" placeholder="1234 5678 9012 3456"
                        value={cardNum}
                        onChange={e => setCardNum(formatCard(e.target.value))}
                        onFocus={() => foc("cardNum")} onBlur={() => blur("cardNum")}
                        maxLength={19} inputMode="numeric" />
                    </Field>
                    <div className="pay-grid-2">
                      <Field label="Expiry" focused={focus.expiry}>
                        <input className="pay-input" placeholder="MM/YY"
                          value={expiry}
                          onChange={e => setExpiry(formatExp(e.target.value))}
                          onFocus={() => foc("expiry")} onBlur={() => blur("expiry")}
                          maxLength={5} inputMode="numeric" />
                      </Field>
                      <Field label="CVV" focused={focus.cvv}>
                        <div style={{ position: "relative" }}>
                          <input className="pay-input" placeholder="•••"
                            type={showCvv ? "text" : "password"}
                            value={cvv}
                            onChange={e => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                            onFocus={() => foc("cvv")} onBlur={() => blur("cvv")}
                            inputMode="numeric" />
                          <button type="button"
                            style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--warm-gray)", display: "flex", padding: "4px" }}
                            onMouseDown={e => { e.preventDefault(); setShowCvv(v => !v); }}>
                            <EyeOpen />
                          </button>
                        </div>
                      </Field>
                    </div>
                    <Field label="Name on Card" focused={focus.cardName}>
                      <input className="pay-input" placeholder="As printed on card"
                        value={cardHolderName}
                        onChange={e => setCardHolderName(e.target.value.toUpperCase())}
                        onFocus={() => foc("cardName")} onBlur={() => blur("cardName")} />
                    </Field>
                  </div>
                </>
              )}

              {payMethod === "upi" && (
                <Field label="UPI ID" focused={focus.upi}>
                  <input className="pay-input" placeholder="yourname@upi"
                    onFocus={() => foc("upi")} onBlur={() => blur("upi")} />
                </Field>
              )}

              {payMethod === "netbanking" && (
                <Field label="Select Bank" focused={focus.bank}>
                  <select className="pay-select" onFocus={() => foc("bank")} onBlur={() => blur("bank")}>
                    <option value="">Choose your bank</option>
                    {["SBI", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra", "Bank of Baroda", "Canara Bank", "Punjab National Bank"].map(b => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </Field>
              )}

              {payMethod === "cod" && (
                <div className="cod-notice">
                  <p>Cash on Delivery available</p>
                  <p>Pay at your doorstep when your order arrives. Extra ₹49 COD fee applies.</p>
                </div>
              )}

              <button className="pay-submit" onClick={handleSubmit} disabled={loading || !cartItems?.length}>
                {loading
                  ? <><span className="pay-loader" />Processing payment...</>
                  : <>Place Order · {fmt(grandTotal)} →</>
                }
              </button>

              <div className="pay-secure" style={{ marginTop: 12 }}>
                🔒 <span>Secured by Razorpay · 256-bit SSL</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — live cart from context ── */}
          <div className="pay-right">
            <div className="pay-summary-card">
              <div className="pay-summary-top">
                <div className="pay-summary-top-title">Order Summary</div>
                <div className="pay-summary-top-sub">
                  {totalQty} item{totalQty !== 1 ? "s" : ""} · Estimated delivery in 3–5 days
                </div>
              </div>
              <div className="pay-summary-body">

                {/* ── live cart items from MyContext ── */}
                {!cartItems?.length ? (
                  <div className="pay-empty-notice">
                    Your cart is empty. Go back and add items.
                  </div>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="pay-order-item">
                      <div className="pay-order-thumb">
                        {item.image
                          ? <img src={item.image} alt={item.name} />
                          : <span style={{ fontSize: 22, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>🛍</span>
                        }
                      </div>
                      <div>
                        <div className="pay-order-name">{item.name}</div>
                        <div className="pay-order-qty">Qty: {item.qty}</div>
                      </div>
                      <div className="pay-order-price">{fmt(item.price * item.qty)}</div>
                    </div>
                  ))
                )}

                {/* ── totals (mirrors CartPage exactly) ── */}
                <div className="pay-totals">
                  <div className="pay-total-row">
                    <span>Subtotal ({totalQty} item{totalQty !== 1 ? "s" : ""})</span>
                    <span>{fmt(subtotal)}</span>
                  </div>
                  <div className="pay-total-row free">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  {couponApplied && (
                    <div className="pay-total-row disc">
                      <span>Discount ({COUPON_CODE})</span>
                      <span>− {fmt(discountAmt)}</span>
                    </div>
                  )}
                  <div className="pay-total-divider" />
                  <div className="pay-grand-row">
                    <span className="pay-grand-label">Total</span>
                    <span className="pay-grand-val">{fmt(grandTotal)}</span>
                  </div>
                  <div className="pay-incl-tax">Incl. all taxes</div>
                </div>
              </div>
            </div>

            <div className="pay-trust">
              {[
                { icon: "🔒", label: "Secure payment" },
                { icon: "🚚", label: "Free delivery" },
                { icon: "↩",  label: "Easy returns" },
              ].map(b => (
                <div key={b.label} className="pay-badge">
                  <div className="pay-badge-icon">{b.icon}</div>
                  <div className="pay-badge-label">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* success overlay */}
      {success && (
        <div className="pay-success-overlay">
          <div className="pay-success-box">
            <div className="pay-success-check">✓</div>
            <h3>Payment Successful!</h3>
            <p>Your order has been placed. You'll receive a confirmation shortly.</p>
            <button className="pay-success-close" onClick={() => setSuccess(false)}>Done</button>
          </div>
        </div>
      )}
    </>
  );
}