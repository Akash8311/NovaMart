import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/*
  STEP FLOW:
    1 → Enter email  → send OTP  (hook your email/OTP API at handleSendOtp)
    2 → Enter 6-digit OTP → validate
    3 → Enter new password + confirm → reset (hook Firebase at handleResetPw)
    4 → Success screen
*/

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

  :root {
    --cream: #F7F3EE;
    --espresso: #1C1310;
    --caramel: #bed2f3;
    --gold: #bac9e1;
    --warm-gray: #8A7E78;
    --light-border: #E8DDD5;
    --input-bg: #FDFAF7;
  }

  .fp-root {
    min-height: 100vh; display: flex;
    font-family: 'DM Sans', sans-serif;
    background: var(--espresso); overflow: hidden;
  }

  .fp-left {
    flex: 1; position: relative;
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 48px;
    background: linear-gradient(145deg,#2A1F1A 0%,#1C1310 60%,#0F0B09 100%);
    overflow: hidden;
  }
  .fp-left::before {
    content:''; position:absolute; width:600px; height:600px; border-radius:50%;
    background:radial-gradient(circle,rgba(200,149,108,.18) 0%,transparent 70%);
    top:-150px; left:-150px; pointer-events:none;
    animation:pulse-glow 6s ease-in-out infinite;
  }
  .fp-left::after {
    content:''; position:absolute; width:400px; height:400px; border-radius:50%;
    background:radial-gradient(circle,rgba(212,168,83,.1) 0%,transparent 70%);
    bottom:-100px; right:-100px; pointer-events:none;
    animation:pulse-glow 8s ease-in-out infinite reverse;
  }
  @keyframes pulse-glow {
    0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.12);opacity:.6}
  }

  .particle {
    position:absolute; border-radius:50%; background:var(--caramel); opacity:0;
    animation:float-up 8s ease-in-out infinite; pointer-events:none;
  }
  .particle:nth-child(1){width:3px;height:3px;left:15%;animation-delay:0s;animation-duration:7s}
  .particle:nth-child(2){width:2px;height:2px;left:35%;animation-delay:1.5s;animation-duration:9s}
  .particle:nth-child(3){width:4px;height:4px;left:55%;animation-delay:3s;animation-duration:6s}
  .particle:nth-child(4){width:2px;height:2px;left:75%;animation-delay:4.5s;animation-duration:8s}
  .particle:nth-child(5){width:3px;height:3px;left:90%;animation-delay:2s;animation-duration:10s}
  @keyframes float-up {
    0%{transform:translateY(100vh) scale(0);opacity:0}
    10%{opacity:.6} 90%{opacity:.3}
    100%{transform:translateY(-100px) scale(1);opacity:0}
  }

  .fp-brand {
    position:relative; z-index:1;
    opacity:0; transform:translateY(-20px);
    transition:opacity .7s ease .1s,transform .7s ease .1s;
  }
  .fp-brand.in{opacity:1;transform:translateY(0)}
  .fp-brand-logo{display:flex;align-items:center;gap:12px;margin-bottom:8px}
  .fp-brand-icon{
    width:40px;height:40px; border:1.5px solid var(--caramel);
    display:flex;align-items:center;justify-content:center;
    font-size:18px;color:var(--caramel); animation:spin-slow 12s linear infinite;
  }
  @keyframes spin-slow{to{transform:rotate(360deg)}}
  .fp-brand-name{font-family:'Playfair Display',serif;font-size:22px;color:var(--cream);letter-spacing:4px;text-transform:uppercase}
  .fp-brand-tagline{font-size:11px;color:var(--warm-gray);letter-spacing:2px;text-transform:uppercase;padding-left:52px}

  .fp-hero{
    position:relative;z-index:1;
    opacity:0;transform:translateY(30px);
    transition:opacity .8s ease .3s,transform .8s ease .3s;
  }
  .fp-hero.in{opacity:1;transform:translateY(0)}
  .fp-hero h1{
    font-family:'Playfair Display',serif;
    font-size:clamp(36px,4.5vw,54px);
    font-weight:700;color:var(--cream);line-height:1.15;margin-bottom:20px;
  }
  .fp-hero h1 em{font-style:italic;color:var(--caramel)}
  .fp-hero p{font-size:14px;color:var(--warm-gray);line-height:1.75;max-width:340px;font-weight:300}
  .fp-deco-line{
    width:0;height:1.5px;
    background:linear-gradient(90deg,var(--caramel),var(--gold));
    margin:20px 0;transition:width 1s ease .8s;
  }
  .fp-deco-line.in{width:60px}

  .fp-progress{display:flex;flex-direction:column;gap:0;margin-top:36px}
  .fp-prog-step{
    display:flex;align-items:flex-start;gap:14px;
    opacity:0;transform:translateX(-20px);
    transition:opacity .5s ease,transform .5s ease;
    position:relative;
  }
  .fp-prog-step.in{opacity:1;transform:translateX(0)}
  .fp-prog-step:nth-child(1){transition-delay:.9s}
  .fp-prog-step:nth-child(2){transition-delay:1.1s}
  .fp-prog-step:nth-child(3){transition-delay:1.3s}
  .fp-prog-step:not(:last-child)::after{
    content:''; position:absolute; left:15px; top:32px;
    width:1px; height:28px; background:rgba(190,210,243,.2);
  }
  .fp-prog-num{
    width:32px;height:32px;flex-shrink:0;
    border:1px solid rgba(200,149,108,.3);
    display:flex;align-items:center;justify-content:center;
    font-size:12px;font-weight:500;color:var(--warm-gray);
    transition:border-color .3s,background .3s,color .3s;
    margin-bottom:28px;
  }
  .fp-prog-num.active{border-color:var(--caramel);color:var(--caramel);background:rgba(190,210,243,.1)}
  .fp-prog-num.done{border-color:#9FE1CB;color:#0F6E56;background:rgba(225,245,238,.15)}
  .fp-prog-text{font-size:13px;color:rgba(247,243,238,.55);font-weight:300;letter-spacing:.3px;padding-top:7px}
  .fp-prog-text.active{color:rgba(247,243,238,.85)}

  .fp-left-footer{
    position:relative;z-index:1;
    font-size:11px;color:rgba(84,112,158,.85);letter-spacing:.5px;
    opacity:0;transition:opacity .6s ease 1.5s;
  }
  .fp-left-footer.in{opacity:1}

  .fp-right{
    width:480px;flex-shrink:0; background:var(--cream);
    display:flex;flex-direction:column;justify-content:center;
    padding:56px 48px;position:relative;
    opacity:0;transform:translateX(40px);
    transition:opacity .8s ease .2s,transform .8s ease .2s;
  }
  .fp-right.in{opacity:1;transform:translateX(0)}
  .fp-right::before{
    content:'';position:absolute;top:0;left:0;width:100%;height:4px;
    background:linear-gradient(90deg,var(--caramel),var(--gold),var(--caramel));
    background-size:200% auto; animation:shimmer-bar 3s linear infinite;
  }
  @keyframes shimmer-bar{from{background-position:0% center}to{background-position:200% center}}

  .fp-step-panel{animation:stepIn .4s ease both}
  @keyframes stepIn{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}

  .fp-eyebrow{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--caramel);font-weight:500;margin-bottom:10px}
  .fp-panel-title{font-family:'Playfair Display',serif;font-size:28px;font-weight:600;color:var(--espresso);line-height:1.2;margin-bottom:8px}
  .fp-panel-sub{font-size:13px;color:var(--warm-gray);font-weight:300;margin-bottom:28px;line-height:1.6}
  .fp-panel-sub strong{color:var(--espresso);font-weight:500}

  .fp-form-group{margin-bottom:20px}
  .fp-form-label{
    display:block;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;
    color:var(--espresso);font-weight:500;margin-bottom:8px;transition:color .2s;
  }
  .fp-form-group.focused .fp-form-label{color:var(--caramel)}
  .fp-input-wrap{position:relative}
  .fp-input-icon{
    position:absolute;left:14px;top:50%;transform:translateY(-50%);
    width:16px;height:16px;color:var(--warm-gray);
    pointer-events:none;transition:color .2s;z-index:2;
  }
  .fp-form-group.focused .fp-input-icon{color:var(--caramel)}
  .fp-form-input{
    width:100%; padding:13px 44px 13px 42px;
    border:1.5px solid var(--light-border); background:var(--input-bg);
    font-family:'DM Sans',sans-serif; font-size:14px; color:var(--espresso);
    outline:none; border-radius:0;
    transition:border-color .25s,box-shadow .25s,background .25s;
    -webkit-appearance:none;
  }
  .fp-form-input::placeholder{color:#C4B9B2}
  .fp-form-input:focus{border-color:var(--caramel);box-shadow:0 0 0 3px rgba(117,108,200,.12);background:#fff}
  .fp-form-input.err-input{border-color:#A32D2D!important;animation:shake .4s ease}
  .fp-form-input.ok-input{border-color:#1D9E75!important}

  .fp-eye-btn{
    position:absolute;right:12px;top:50%;transform:translateY(-50%);
    background:none;border:none;cursor:pointer;padding:4px;
    color:var(--warm-gray);display:flex;align-items:center;justify-content:center;
    z-index:3;transition:color .2s;line-height:0;
  }
  .fp-eye-btn:hover{color:var(--caramel)}
  .fp-eye-btn svg{display:block;pointer-events:none}

  .fp-otp-row{display:flex;gap:10px;margin-bottom:8px}
  .fp-otp-box{
    flex:1;height:56px;
    border:1.5px solid var(--light-border); background:var(--input-bg);
    font-family:'Playfair Display',serif;
    font-size:24px;font-weight:600; color:var(--espresso);text-align:center;
    outline:none;border-radius:0;
    transition:border-color .2s,box-shadow .2s,background .2s;
    -webkit-appearance:none;
  }
  .fp-otp-box:focus{border-color:var(--caramel);box-shadow:0 0 0 3px rgba(117,108,200,.12);background:#fff}
  .fp-otp-box.filled{border-color:var(--caramel);background:#fff}
  .fp-otp-box.err-box{border-color:#A32D2D!important;background:#FCEBEB!important;animation:shake .4s ease}

  .fp-alert{
    display:flex;align-items:flex-start;gap:10px;
    padding:11px 14px; font-size:13px; margin-bottom:18px;
    animation:slideDown .35s ease;
  }
  @keyframes slideDown{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
  .fp-alert.success{background:#E1F5EE;color:#0F6E56;border:1px solid #9FE1CB}
  .fp-alert.error{background:#FCEBEB;color:#A32D2D;border:1px solid #F7C1C1}

  .fp-strength-bar{display:flex;gap:4px;margin-top:8px;margin-bottom:4px}
  .fp-strength-seg{flex:1;height:3px;background:#e5e5e5;transition:background .3s}
  .fp-strength-seg.weak{background:#E24B4A}
  .fp-strength-seg.fair{background:#EF9F27}
  .fp-strength-seg.good{background:#1D9E75}
  .fp-strength-label{font-size:11px;color:var(--warm-gray);letter-spacing:.5px;margin-bottom:16px}

  .fp-submit-btn{
    width:100%;padding:15px; background:var(--espresso);color:var(--cream);
    border:none;font-family:'DM Sans',sans-serif;
    font-size:12px;letter-spacing:3px;text-transform:uppercase;
    font-weight:500;cursor:pointer;
    position:relative;overflow:hidden;border-radius:0;
    transition:background .3s,transform .15s,box-shadow .3s;
    display:flex;align-items:center;justify-content:center;gap:10px;
  }
  .fp-submit-btn:hover:not(:disabled){background:#251a2e;box-shadow:0 6px 24px rgba(28,19,16,.3);transform:translateY(-1px)}
  .fp-submit-btn:active:not(:disabled){transform:scale(.99)}
  .fp-submit-btn:disabled{opacity:.6;cursor:not-allowed}
  .fp-btn-shine{position:absolute;left:-100%;top:0;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent)}
  .fp-submit-btn.loading .fp-btn-shine{animation:btn-shimmer 1.2s infinite}
  @keyframes btn-shimmer{to{left:200%}}
  .fp-loader{width:14px;height:14px;border:2px solid rgba(247,243,238,.4);border-top:2px solid var(--cream);border-radius:50%;animation:spin .7s linear infinite;flex-shrink:0}
  @keyframes spin{to{transform:rotate(360deg)}}

  .fp-resend{font-size:12px;color:var(--warm-gray);text-align:center;margin-top:14px}
  .fp-resend-btn{background:none;border:none;cursor:pointer;color:var(--caramel);font-size:12px;font-weight:500;padding:0;transition:opacity .2s;font-family:'DM Sans',sans-serif}
  .fp-resend-btn:hover:not(:disabled){opacity:.7}
  .fp-resend-btn:disabled{opacity:.4;cursor:not-allowed}

  .fp-ghost-btn{background:none;border:none;cursor:pointer;color:var(--caramel);font-size:13px;font-weight:500;padding:0;font-family:'DM Sans',sans-serif;transition:opacity .2s}
  .fp-ghost-btn:hover{opacity:.7}

  .fp-divider{height:1px;background:var(--light-border);margin:24px 0}
  .fp-footer-links{text-align:center;font-size:13px;color:var(--warm-gray)}
  .fp-footer-links a{color:var(--caramel);font-weight:500;text-decoration:none;transition:opacity .2s}
  .fp-footer-links a:hover{opacity:.7}

  .fp-success-icon{
    width:72px;height:72px;border-radius:50%;
    background:#E1F5EE;border:1.5px solid #9FE1CB;
    display:flex;align-items:center;justify-content:center;
    font-size:32px;color:#0F6E56;margin:0 auto 24px;
    animation:popIn .4s ease;
  }
  @keyframes popIn{from{transform:scale(.7);opacity:0}to{transform:scale(1);opacity:1}}
  .fp-success-title{font-family:'Playfair Display',serif;font-size:26px;font-weight:600;color:var(--espresso);margin-bottom:10px;text-align:center}
  .fp-success-body{font-size:13px;color:var(--warm-gray);line-height:1.7;margin-bottom:28px;text-align:center}
  .fp-back-btn{
    display:flex;align-items:center;justify-content:center;gap:8px;
    width:100%;padding:15px;
    background:var(--espresso);color:var(--cream);
    border:none;font-family:'DM Sans',sans-serif;
    font-size:12px;letter-spacing:3px;text-transform:uppercase;
    font-weight:500;cursor:pointer;border-radius:0;text-decoration:none;
    transition:background .3s,transform .15s;
  }
  .fp-back-btn:hover{background:#251a2e;transform:translateY(-1px)}

  @keyframes shake{
    0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)}
    40%{transform:translateX(6px)}   60%{transform:translateX(-4px)}
    80%{transform:translateX(4px)}
  }

  @media(max-width:900px){
    .fp-left{display:none}
    .fp-right{width:100%;padding:40px 28px}
  }
`;

/* ── utils ── */
const genOTP = () => Math.floor(100000 + Math.random() * 900000).toString();
const pwStrength = (pw) => {
  if (!pw) return 0;
  let s = 0;
  if (pw.length >= 8)        s++;
  if (/[A-Z]/.test(pw))     s++;
  if (/[0-9]/.test(pw))     s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
};
const strengthMeta = [
  { label:"", cls:"" },
  { label:"Weak",   cls:"weak" },
  { label:"Fair",   cls:"fair" },
  { label:"Good",   cls:"good" },
  { label:"Strong", cls:"good" },
];

/* ── EyeIcon ── */
const EyeOpen = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const EyeOff = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.39 1 12c.98-2.45 2.74-4.52 5-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c5 0 9.27 3.61 11 8a18.5 18.5 0 0 1-2.16 3.48"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

export default function ForgotPassword() {
  const [mounted, setMounted]           = useState(false);
  const [step, setStep]                 = useState(1);
  const [email, setEmail]               = useState("");
  const [emailFocus, setEmailFocus]     = useState(false);
  const [otp, setOtp]                   = useState(["","","","","",""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [newPw, setNewPw]               = useState("");
  const [confirmPw, setConfirmPw]       = useState("");
  const [showPw, setShowPw]             = useState(false);
  const [showConfirm, setShowConfirm]   = useState(false);
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState("");
  const [otpShake, setOtpShake]         = useState(false);
  const [countdown, setCountdown]       = useState(0);
  const [pwFocus, setPwFocus]           = useState(null);
  const otpRefs  = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);
  useEffect(() => () => clearInterval(timerRef.current), []);

  const startCountdown = () => {
    setCountdown(30);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCountdown(c => { if (c <= 1) { clearInterval(timerRef.current); return 0; } return c - 1; });
    }, 1000);
  };

  /* STEP 1 */
  const handleSendOtp = async () => {
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address."); return;
    }
    setLoading(true); setError("");
    await new Promise(r => setTimeout(r, 1200)); // ← replace with your email/OTP API call
    const code = genOTP();
    setGeneratedOtp(code);
    console.log("OTP (dev only — remove in prod):", code);
    setLoading(false); setStep(2); startCountdown();
  };

  /* STEP 2 */
  const handleVerifyOtp = async () => {
    const entered = otp.join("");
    if (entered.length < 6) { setError("Please enter the complete 6-digit code."); return; }
    setLoading(true); setError(""); setOtpShake(false);
    await new Promise(r => setTimeout(r, 900));
    if (entered === generatedOtp) {
      setLoading(false); setStep(3);
    } else {
      setOtpShake(true);
      setError("Incorrect OTP. Please try again.");
      setLoading(false);
      setOtp(["","","","","",""]);
      setTimeout(() => { setOtpShake(false); otpRefs.current[0]?.focus(); }, 500);
    }
  };

  /* STEP 3 */
  const handleResetPw = async () => {
    if (newPw.length < 8)   { setError("Password must be at least 8 characters."); return; }
    if (newPw !== confirmPw) { setError("Passwords do not match."); return; }
    setLoading(true); setError("");
    await new Promise(r => setTimeout(r, 1200)); // ← replace with Firebase updatePassword / your API
    setLoading(false); setStep(4);
  };

  /* OTP helpers */
  const handleOtpChange = (i, val) => {
    const digit = val.replace(/\D/g,"").slice(-1);
    const next = [...otp]; next[i] = digit;
    setOtp(next); setError(""); setOtpShake(false);
    if (digit && i < 5) otpRefs.current[i+1]?.focus();
  };
  const handleOtpKeyDown = (i, e) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) otpRefs.current[i-1]?.focus();
    if (e.key === "Enter") handleVerifyOtp();
  };
  const handleOtpPaste = (e) => {
    e.preventDefault();
    const digits = e.clipboardData.getData("text").replace(/\D/g,"").slice(0,6).split("");
    const next = ["","","","","",""];
    digits.forEach((d,i) => { next[i] = d; });
    setOtp(next);
    otpRefs.current[Math.min(digits.length, 5)]?.focus();
  };

  const handleResend = async () => {
    if (countdown > 0) return;
    setLoading(true); setError(""); setOtp(["","","","","",""]);
    await new Promise(r => setTimeout(r, 800));
    const code = genOTP();
    setGeneratedOtp(code);
    console.log("Resent OTP (dev only):", code);
    setLoading(false); startCountdown();
    otpRefs.current[0]?.focus();
  };

  const STEPS_META = [
    { num:"01", label:"Enter your email address" },
    { num:"02", label:"Verify the OTP sent to you" },
    { num:"03", label:"Create your new password" },
  ];
  const activeIdx = Math.min(step - 1, 2);
  const str = pwStrength(newPw);

  return (
    <>
      <style>{STYLES}</style>
      <div className="fp-root">

        {/* ── LEFT PANEL ── */}
        <div className="fp-left">
          {[1,2,3,4,5].map(i => <div key={i} className="particle"/>)}

          <div className={`fp-brand ${mounted?"in":""}`}>
            <div className="fp-brand-logo">
              <div className="fp-brand-icon">✦</div>
              <span className="fp-brand-name">NovaMart</span>
            </div>
            <div className="fp-brand-tagline">Curated Luxury &amp; Style</div>
          </div>

          <div className={`fp-hero ${mounted?"in":""}`}>
            <h1>Reset your<br/><em>password</em><br/>securely.</h1>
            <div className={`fp-deco-line ${mounted?"in":""}`}/>
            <p>Three simple steps to reclaim your account safely and quickly.</p>
            <div className="fp-progress">
              {STEPS_META.map((s, i) => (
                <div key={s.num} className={`fp-prog-step ${mounted?"in":""}`}>
                  <div className={`fp-prog-num ${i < activeIdx?"done":i===activeIdx?"active":""}`}>
                    {i < activeIdx ? "✓" : s.num}
                  </div>
                  <span className={`fp-prog-text ${i===activeIdx?"active":""}`}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`fp-left-footer ${mounted?"in":""}`}>
            © 2026 NovaMart. All rights reserved.
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className={`fp-right ${mounted?"in":""}`}>

          {/* ── STEP 1: Email ── */}
          {step === 1 && (
            <div key="s1" className="fp-step-panel">
              <div className="fp-eyebrow">Account recovery</div>
              <h2 className="fp-panel-title">Forgot your password?</h2>
              <p className="fp-panel-sub">Enter your registered email and we'll send a one-time code to verify it's you.</p>

              {error && <div className="fp-alert error"><span>✕</span> {error}</div>}

              <div className={`fp-form-group ${emailFocus?"focused":""}`}>
                <label className="fp-form-label">Email Address</label>
                <div className="fp-input-wrap">
                  <svg className="fp-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <input
                    type="email"
                    className="fp-form-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError(""); }}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    onKeyDown={e => e.key==="Enter" && handleSendOtp()}
                  />
                </div>
              </div>

              <button className={`fp-submit-btn${loading?" loading":""}`} onClick={handleSendOtp} disabled={loading}>
                <span className="fp-btn-shine"/>
                {loading ? <><span className="fp-loader"/>Sending OTP...</> : "Send OTP"}
              </button>

              <div className="fp-divider"/>
              <p className="fp-footer-links">
                Remember it? <Link to="/Login">Sign in</Link>
                &nbsp;·&nbsp;
                <Link to="/Register">Create account</Link>
              </p>
            </div>
          )}

          {/* ── STEP 2: OTP ── */}
          {step === 2 && (
            <div key="s2" className="fp-step-panel">
              <div className="fp-eyebrow">Verification</div>
              <h2 className="fp-panel-title">Enter the OTP</h2>
              <p className="fp-panel-sub">
                We sent a 6-digit code to <strong>{email}</strong>.<br/>
                It expires in 10 minutes.
              </p>

              {error && <div className="fp-alert error"><span>✕</span> {error}</div>}

              <div style={{marginBottom:24}}>
                <label className="fp-form-label" style={{marginBottom:14}}>One-time password</label>
                <div className="fp-otp-row" onPaste={handleOtpPaste}>
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={el => otpRefs.current[i] = el}
                      className={`fp-otp-box${digit?" filled":""}${otpShake?" err-box":""}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={e => handleOtpChange(i, e.target.value)}
                      onKeyDown={e => handleOtpKeyDown(i, e)}
                      autoFocus={i===0}
                    />
                  ))}
                </div>
              </div>

              <button className={`fp-submit-btn${loading?" loading":""}`} onClick={handleVerifyOtp} disabled={loading}>
                <span className="fp-btn-shine"/>
                {loading ? <><span className="fp-loader"/>Verifying...</> : "Verify OTP"}
              </button>

              <p className="fp-resend">
                Didn't receive it?{" "}
                <button className="fp-resend-btn" onClick={handleResend} disabled={countdown>0||loading}>
                  {countdown>0 ? `Resend in ${countdown}s` : "Resend OTP"}
                </button>
              </p>

              <div className="fp-divider"/>
              <p className="fp-footer-links">
                Wrong email?{" "}
                <button className="fp-ghost-btn" onClick={() => { setStep(1); setError(""); setOtp(["","","","","",""]); }}>
                  Go back
                </button>
              </p>
            </div>
          )}

          {/* ── STEP 3: New Password ── */}
          {step === 3 && (
            <div key="s3" className="fp-step-panel">
              <div className="fp-eyebrow">New password</div>
              <h2 className="fp-panel-title">Create a new password</h2>
              <p className="fp-panel-sub">Make it strong — at least 8 characters with a mix of letters, numbers &amp; symbols.</p>

              {error && <div className="fp-alert error"><span>✕</span> {error}</div>}

              {/* New password field */}
              <div className={`fp-form-group${pwFocus==="new"?" focused":""}`} style={{marginBottom:8}}>
                <label className="fp-form-label">New Password</label>
                <div className="fp-input-wrap">
                  <svg className="fp-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <input
                    type={showPw?"text":"password"}
                    className={`fp-form-input${newPw&&str<2?" err-input":""}${newPw&&str>=3?" ok-input":""}`}
                    placeholder="Min. 8 characters"
                    value={newPw}
                    onChange={e => { setNewPw(e.target.value); setError(""); }}
                    onFocus={() => setPwFocus("new")}
                    onBlur={() => setPwFocus(null)}
                  />
                  <button type="button" className="fp-eye-btn" onMouseDown={e => { e.preventDefault(); setShowPw(v=>!v); }}>
                    {showPw ? <EyeOff/> : <EyeOpen/>}
                  </button>
                </div>
              </div>

              {newPw && (
                <>
                  <div className="fp-strength-bar">
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`fp-strength-seg${str>=i?" "+strengthMeta[str].cls:""}`}/>
                    ))}
                  </div>
                  <div className="fp-strength-label">{strengthMeta[str].label}</div>
                </>
              )}

              <div className={`fp-form-group${pwFocus==="confirm"?" focused":""}`}>
                <label className="fp-form-label">Confirm Password</label>
                <div className="fp-input-wrap">
                  <svg className="fp-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M9 12l2 2 4-4"/>
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <input
                    type={showConfirm?"text":"password"}
                    className={`fp-form-input${confirmPw&&confirmPw!==newPw?" err-input":""}${confirmPw&&confirmPw===newPw?" ok-input":""}`}
                    placeholder="Repeat your password"
                    value={confirmPw}
                    onChange={e => { setConfirmPw(e.target.value); setError(""); }}
                    onFocus={() => setPwFocus("confirm")}
                    onBlur={() => setPwFocus(null)}
                    onKeyDown={e => e.key==="Enter" && handleResetPw()}
                  />
                  <button type="button" className="fp-eye-btn" onMouseDown={e => { e.preventDefault(); setShowConfirm(v=>!v); }}>
                    {showConfirm ? <EyeOff/> : <EyeOpen/>}
                  </button>
                </div>
              </div>

              <button className={`fp-submit-btn${loading?" loading":""}`} onClick={handleResetPw} disabled={loading}>
                <span className="fp-btn-shine"/>
                {loading ? <><span className="fp-loader"/>Updating password...</> : "Reset Password"}
              </button>
            </div>
          )}

          {/* ── STEP 4: Success ── */}
          {step === 4 && (
            <div key="s4" className="fp-step-panel" style={{textAlign:"center"}}>
              <div className="fp-success-icon">✓</div>
              <h2 className="fp-success-title">Password reset!</h2>
              <p className="fp-success-body">
                Your password has been updated successfully.<br/>
                You can now sign in with your new credentials.
              </p>
              <Link to="/Login" className="fp-back-btn">Go to sign in</Link>
            </div>
          )}

        </div>
      </div>
    </>
  );
}