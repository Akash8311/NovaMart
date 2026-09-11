import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";
import QRCode from "qrcode";


const COUPON_CODE = "AKASH2004";
const COUPON_DISCOUNT = 499;
const MIN_ORDER = 1199;


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
  .pay-save-addr:disabled { opacity: .5; cursor: not-allowed; }
  .pay-save-addr.saved { background: var(--success-bg); color: var(--success); border-color: var(--success-border); }
  .pay-addr-saved-msg {
    font-size: 12px; color: var(--success); text-align: center; padding: 8px;
    background: var(--success-bg); border: 0.5px solid var(--success-border); margin-top: 8px;
  }
  .pay-addr-hint {
    font-size: 12px; color: var(--warm-gray); text-align: center; padding: 8px;
    background: #fff9f0; border: 0.5px solid var(--light-border); border-left: 3px solid #f0a500; margin-top: 8px;
  }
  .pay-locked-notice {
    background: #fff9f0; border: 0.5px solid var(--light-border);
    border-left: 3px solid #f0a500; padding: 16px 18px;
    font-size: 13px; color: var(--warm-gray); border-radius: 4px;
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

  /* QR code section */
  .pay-qr-box {
    display: flex; flex-direction: column; align-items: center;
    gap: 12px; padding: 20px;
    background: var(--input-bg); border: 1.5px dashed var(--caramel);
    margin-top: 16px;
  }
  .pay-qr-img {
    width: 180px; height: 180px; background: #fff;
    padding: 10px; border-radius: 8px;
    border: 0.5px solid var(--light-border);
  }
  .pay-qr-img img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .pay-qr-caption { font-size: 12px; color: var(--warm-gray); text-align: center; }
  .pay-qr-caption strong { color: var(--espresso); }

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
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi",
];

const UPI_QR_DATA_URI = "data:image/png;base64,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w2L3N9P5ZFmtHth42PX1j79dGih2fNNMx296fBYbD4uNn43H9PgsNh6W6fhZpudrNR0t/1abLyvU82M6fmndxayv7oESERERIamBEhERESGpgRIREREhqYESERERIamBEhERESGpgRIREREhqYESERERIamBEhERESGpgRIREREh6STyNmDjNz0+exQ+++w2dnw2fvbofPZRDWz+2aP/2Ue5sNj8sNj5svln68c0dr6m64fF1hsbj+n5mq4Hdv9hsflhsdcXi10vqzFdPxfz/qgGqg3Y+E2Pz77BshswOz4bP3tBsBsAm392A2MvOBabHxY7Xzb/bP2Yxs7XdP2w2Hpj4zE9X9P1wO4/LDY/LPb6YrHrZTWm6+di3h/VQLUBG7/Gv7xMx8+ObzXsfFlWyw87XzZ+dnyW6XisNj6LjYdlOn7TTOfHNNP5Z/PjH4/ugRIREREhqYESERERIamBEhERESGpgRIREREhqYESERERIamBEhERESGpgRIREREhqYESERERIamBEhERESHpJPI2YOM3PT57tD17VL3pR0eYflQJmx82fnZ809hHQbDzZZnOD1s/7HzZ+NnxWaavR3a+pvcT0+vLXi9sfljsfFlsfqyGrR8Wmx//93c1UG3Axm96fPaCYwuQ3SBDfUNi42fHN43dANj5skznh60fdr5s/Oz4LNPXIztf0/uJ6fVlrxc2Pyx2viw2P1bD1g+LzY8aKMPxmx6fFerxSOtMr5fVdLT6sdr6svln42fHZ7HxmGZ6vqHOyuule6BERERESGqgREREREhqoERERERIaqBERERESGqgREREREhqoERERERIaqBERERESGqgREREREhqoERERERI7XISOXt0vmns0fmhnh92vmw87FH4bDymH6XAxs/Gw47PYteLZbX5steX6XhM58dqj7Jgr1+2Ptnx2fyz8bD5YeNh58syHT87Pstq9e+//7RLA8UGaBpbIKGeH3a+bDzshsTGY3qDYeNn42HHZ7HrxbLafNnry3Q8pvPDPnuOxcbDXr9sfbLjs/ln42Hzw8bDzpdlOn52fJbV6r/dG6hQp/y0js0Py3Q+2fjZeNjxrcZq8+1o8bDjs9h4rMZq+TEdD8t0/Oz4LDYeFhu/fzy6B0pERESEpAZKREREhKQGSkRERISkBkpERESEpAZKREREhKQGSkRERISkBkpERESEpAZKREREhKQGSkRERIR0QSeRs0e9h7qLOerdBPZRBFZ7VAAbP5tPdnz2WUts/bP5YbHzZVltvlaLh61PNh7Tj7Jg65+tN9P7D5sfNh7T68XGwzIdPzs+O182HhYbv//1fkENFJuAUMduGOyGymIXnH3DYbH5YeNn88mOz16gbP2z+WGx82VZbb5Wi4etTzYetsFhsfXP1pvp/YfNDxuP6fVi42GZjp8dn50vGw+Ljf+iGyhpHbuhstj1Mh0Py3T8pse3Gna+cmmZrh/T68vGz8bDjs9SPJcWGz+Lna/peFj+8eseKBERERGSGigRERERkhooEREREZIaKBERERGSGigRERERkhooEREREZIaKBERERGSGigRERERks3hcHjZk2WldexJqyx2vUzHwzIdv+nxrYadr1xapuvH9Pqy8bPxsOOzFM+lxcbPYudrOh6Wf/w2h8PhZY8yl9axj5pgsetlOh6W6fhNj2817Hzl0jJdP6bXl42fjYcdn6V4Li02fhY7X9PxsPzj//8AkNW9wzTEpikAAAAASUVORK5CYII=";

const fmt = n => "₹" + n.toLocaleString("en-IN");

const SaveIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

const EyeOpen = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
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
  const subtotal = (cartItems || []).reduce((t, i) => t + i.price * i.qty, 0);
  const totalQty = (cartItems || []).reduce((a, i) => a + i.qty, 0);
  const discountAmt = couponApplied ? COUPON_DISCOUNT : 0;
  const grandTotal = subtotal - discountAmt;
  const [qrCode, setQrCode] = useState("");
  useEffect(() => {
    const upiId = "9831403680@ybl"; // Replace with your actual UPI ID

    const upiUrl =
      `upi://pay?pa=${upiId}` +
      `&pn=NovaMart` +
      `&am=${grandTotal.toFixed(2)}` +
      `&cu=INR`;

    QRCode.toDataURL(upiUrl)
      .then((url) => {
        setQrCode(url);
      })
      .catch((err) => {
        console.error("QR generation failed:", err);
      });
  }, [grandTotal]);

  // ── local UI state ──
  const [focus, setFocus] = useState({});
  const [payMethod, setPayMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cardNum, setCardNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [showCvv, setShowCvv] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const [addrSaved, setAddrSaved] = useState(false);
  const [addrMsg, setAddrMsg] = useState(false);
  // Persists once the address has been confirmed — unlocks the Payment Method
  // section. Unlike addrSaved (which only drives the button's brief "Saved!"
  // animation), this does NOT reset after the timeout.
  const [addressConfirmed, setAddressConfirmed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    houseNo: "",
    street: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    zip: "",
    company: ""
  });

  const setF = k => val => setForm(p => ({ ...p, [k]: val }));
  const foc = k => setFocus(p => ({ ...p, [k]: true }));
  const blur = k => setFocus(p => ({ ...p, [k]: false }));


  const isAddressComplete =
    /^[A-Za-zÀ-ÿ\s]{2,}$/.test(form.firstName.trim()) &&
    /^[A-Za-zÀ-ÿ\s]{2,}$/.test(form.lastName.trim()) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
    /^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "")) &&
    form.houseNo.trim().length >= 1 &&
    form.street.trim().length >= 3 &&
    form.area.trim().length >= 2 &&
    form.city.trim().length >= 2 &&
    form.state.trim() !== "" &&
    /^[1-9][0-9]{5}$/.test(form.zip.trim());

  const formatCard = v => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const formatExp = v => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d;
  };

  const cardDisplay = cardNum
    ? cardNum.padEnd(19, "•").substring(0, 19)
    : "**** **** **** ****";

  const handleSaveAddress = () => {
    if (!isAddressComplete) return;
    setAddrSaved(true);
    setAddrMsg(true);
    setAddressConfirmed(true);
    setTimeout(() => { setAddrSaved(false); setAddrMsg(false); }, 2500);
  };

  // If the user goes back and edits a field after saving, re-lock payment
  // until they save the address again.
  const handleFieldChange = k => val => {
    setForm(p => ({ ...p, [k]: val }));
    setAddressConfirmed(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setSuccess(true);
  };

  const STEP_LABELS = ["Cart", "Details", "Payment", "Confirm"];

  return (
    <>
      <style>{STYLES}</style>
      <div className="pay-root">



        {/* breadcrumb */}
        <div className="pay-steps">
          {STEP_LABELS.map((label, i) => {
            const done = i < 2;
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
                  }>
                    <input className="pay-input" placeholder="Sunny" value={form.firstName}
                      onChange={e => handleFieldChange("firstName")(e.target.value)}
                      onFocus={() => foc("firstName")} onBlur={() => blur("firstName")} />
                  </Field>
                  <Field label="Last Name" focused={focus.lastName}>
                    <input className="pay-input" placeholder="Leone" value={form.lastName}
                      onChange={e => handleFieldChange("lastName")(e.target.value)}
                      onFocus={() => foc("lastName")} onBlur={() => blur("lastName")} />
                  </Field>
                </div>

                <div className="pay-grid-2">
                  <Field label="Email Address" focused={focus.email} icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,6 12,13 2,6" /></svg>
                  }>
                    <input className="pay-input" type="email" placeholder="you@example.com" value={form.email}
                      onChange={e => handleFieldChange("email")(e.target.value)}
                      onFocus={() => foc("email")} onBlur={() => blur("email")} />
                  </Field>
                  <Field label="Phone Number" focused={focus.phone} icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 4.17 2 2 0 0 1 5.09 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.9a2 2 0 0 1-.45 2.11L9 10.09a16 16 0 0 0 6.92 6.92l1.36-1.36a2 2 0 0 1 2.11-.45c.93.35 1.9.59 2.9.72A2 2 0 0 1 22 17.92z" /></svg>
                  }>
                    <input
                      className="pay-input"
                      type="tel"
                      inputMode="numeric"
                      placeholder="9876543210"
                      maxLength={10}
                      value={form.phone}
                      onChange={e =>
                        handleFieldChange("phone")(
                          e.target.value.replace(/\D/g, "").slice(0, 10)
                        )
                      }
                      onFocus={() => foc("phone")}
                      onBlur={() => blur("phone")}
                    />
                  </Field>
                </div>

                <div className="pay-grid-2">
                  <Field label="House / Flat No." focused={focus.houseNo}>
                    <input
                      className="pay-input"
                      placeholder="Flat 204 / House 12"
                      value={form.houseNo}
                      maxLength={50}
                      onChange={e =>
                        handleFieldChange("houseNo")(e.target.value)
                      }
                      onFocus={() => foc("houseNo")}
                      onBlur={() => blur("houseNo")}
                    />
                  </Field>

                  <Field label="Street / Road" focused={focus.street}>
                    <input
                      className="pay-input"
                      placeholder="MG Road"
                      value={form.street}
                      maxLength={100}
                      onChange={e =>
                        handleFieldChange("street")(e.target.value)
                      }
                      onFocus={() => foc("street")}
                      onBlur={() => blur("street")}
                    />
                  </Field>
                </div>

                <Field label="Area / Locality" focused={focus.area}>
                  <input
                    className="pay-input"
                    placeholder="Patia / Saheed Nagar"
                    value={form.area}
                    maxLength={100}
                    onChange={e =>
                      handleFieldChange("area")(e.target.value)
                    }
                    onFocus={() => foc("area")}
                    onBlur={() => blur("area")}
                  />
                </Field>

                <Field label="Landmark (Optional)" focused={focus.landmark}>
                  <input
                    className="pay-input"
                    placeholder="Near City Mall"
                    value={form.landmark}
                    maxLength={100}
                    onChange={e =>
                      handleFieldChange("landmark")(e.target.value)
                    }
                    onFocus={() => foc("landmark")}
                    onBlur={() => blur("landmark")}
                  />
                </Field>

                <div className="pay-grid-2">
                  <Field label="City" focused={focus.city}>
                    <input
                      className="pay-input"
                      placeholder="Bhubaneswar"
                      value={form.city}
                      maxLength={50}
                      onChange={e =>
                        handleFieldChange("city")(
                          e.target.value.replace(/[^A-Za-zÀ-ÿ\s.-]/g, "")
                        )
                      }
                      onFocus={() => foc("city")}
                      onBlur={() => blur("city")}
                    />
                  </Field>

                  <Field label="State" focused={focus.state}>
                    <select
                      className="pay-select"
                      value={form.state}
                      onChange={e =>
                        handleFieldChange("state")(e.target.value)
                      }
                      onFocus={() => foc("state")}
                      onBlur={() => blur("state")}
                    >
                      <option value="">Select state</option>

                      {STATES.map(s => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="pay-grid-2">
                  <Field label="PIN Code" focused={focus.zip}>
                    <input
                      className="pay-input"
                      type="text"
                      inputMode="numeric"
                      placeholder="753001"
                      maxLength={6}
                      value={form.zip}
                      onChange={e =>
                        handleFieldChange("zip")(
                          e.target.value.replace(/\D/g, "").slice(0, 6)
                        )
                      }
                      onFocus={() => foc("zip")}
                      onBlur={() => blur("zip")}
                    />
                  </Field>

                  <Field label="Country" focused={false}>
                    <input
                      className="pay-input"
                      value="India"
                      readOnly
                      style={{
                        color: "var(--warm-gray)",
                        cursor: "default"
                      }}
                    />
                  </Field>
                </div>

                <Field label="Company (Optional)" focused={focus.company}>
                  <input
                    className="pay-input"
                    placeholder="Your company name"
                    value={form.company}
                    maxLength={100}
                    onChange={e =>
                      setF("company")(e.target.value)
                    }
                    onFocus={() => foc("company")}
                    onBlur={() => blur("company")}
                  />
                </Field>
                <button
                  className={`pay-save-addr${addrSaved ? " saved" : ""}`}
                  onClick={handleSaveAddress}
                  disabled={!isAddressComplete}
                >
                  <SaveIcon />
                  {addrSaved ? "Saved!" : "Save Address"}
                </button>
                {addrMsg && <div className="pay-addr-saved-msg">✓ Address saved successfully</div>}
                {!isAddressComplete && !addrMsg && (
                  <div className="pay-addr-hint">Fill in every field above (Zip: 6 digits) to save your address.</div>
                )}
              </div>
            </div>

            {/* ── PAYMENT METHOD (locked until address is saved) ── */}
            {addressConfirmed ? (
              <div className="pay-card">
                <div className="pay-card-header">
                  <div className="pay-card-num">02</div>
                  <h2 className="pay-card-title">Payment Method</h2>
                </div>

                <div className="pay-method-tabs">
                  {[
                    { id: "card", icon: "💳", label: "Card" },
                    { id: "upi", icon: "📱", label: "UPI" },
                    { id: "netbanking", icon: "🏦", label: "Net Banking" },
                    { id: "cod", icon: "💵", label: "Cash on Delivery" },
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
                  <>
                    <Field label="UPI ID" focused={focus.upi}>
                      <input className="pay-input" placeholder="yourupi@upi"
                        onFocus={() => foc("upi")} onBlur={() => blur("upi")} />
                    </Field>

                    {/* ── QR CODE SECTION ── */}
                    <div className="pay-qr-box">
                      <div className="pay-qr-img">
                        <img
                          src={qrCode}
                          alt="Scan to pay via UPI"
                        />
                      </div>
                      <div className="pay-qr-caption">
                        Or scan with any UPI app (PhonePe,GPay,Paytm) to pay<br />
                        <strong>{fmt(grandTotal)}</strong>
                      </div>
                    </div>
                  </>
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
            ) : (
              <div className="pay-card">
                <div className="pay-card-header">
                  <div className="pay-card-num">02</div>
                  <h2 className="pay-card-title">Payment Method</h2>
                </div>
                <div className="pay-locked-notice">
                  🔒 Fill in your billing details above and click <strong>Save Address</strong> to unlock payment options.
                </div>
              </div>
            )}
          </div>

          <div className="pay-right">
            <div className="pay-summary-card">
              <div className="pay-summary-top">
                <div className="pay-summary-top-title">Order Summary</div>
                <div className="pay-summary-top-sub">
                  {totalQty} item{totalQty !== 1 ? "s" : ""} · Estimated delivery in 3–5 days
                </div>
              </div>
              <div className="pay-summary-body">

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
                { icon: "↩", label: "Easy returns" },
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