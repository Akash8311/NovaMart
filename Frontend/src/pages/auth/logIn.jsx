import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const [gLoading, setGLoading] = useState(false);

  const handleGoogle = async () => {
    try {
      setGLoading(true);

      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful!");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      alert("Google login failed");
    } finally {
      setGLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => setMounted(true), 50);
  }, []);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --cream: #F7F3EE;
          --espresso: #1C1310;
          --caramel: #bed2f3;
          --gold: #bac9e1;
          --warm-gray: #8A7E78;
          --light-border: #E8DDD5;
          --input-bg: #FDFAF7;
        }

        .login-root {
          min-height: 100vh;
          display: flex;
          font-family: 'DM Sans', sans-serif;
          background: var(--espresso);
          overflow: hidden;
        }

        /* LEFT PANEL */
        .left-panel {
          flex: 1;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 48px;
          background: linear-gradient(145deg, #2A1F1A 0%, #1C1310 60%, #0F0B09 100%);
          overflow: hidden;
        }

        .left-panel::before {
          content: '';
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,149,108,0.18) 0%, transparent 70%);
          top: -150px; left: -150px;
          pointer-events: none;
          animation: pulse-glow 6s ease-in-out infinite;
        }
        .left-panel::after {
          content: '';
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212,168,83,0.1) 0%, transparent 70%);
          bottom: -100px; right: -100px;
          pointer-events: none;
          animation: pulse-glow 8s ease-in-out infinite reverse;
        }
        @keyframes pulse-glow {
          0%,100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.12); opacity: 0.6; }
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          background: var(--caramel);
          opacity: 0;
          animation: float-up 8s ease-in-out infinite;
          pointer-events: none;
        }
        .particle:nth-child(1){width:3px;height:3px;left:15%;animation-delay:0s;animation-duration:7s;}
        .particle:nth-child(2){width:2px;height:2px;left:35%;animation-delay:1.5s;animation-duration:9s;}
        .particle:nth-child(3){width:4px;height:4px;left:55%;animation-delay:3s;animation-duration:6s;}
        .particle:nth-child(4){width:2px;height:2px;left:75%;animation-delay:4.5s;animation-duration:8s;}
        .particle:nth-child(5){width:3px;height:3px;left:90%;animation-delay:2s;animation-duration:10s;}

        @keyframes float-up {
          0%   { transform: translateY(100vh) scale(0); opacity: 0; }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.3; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }

        /* Entrance animations */
        .brand {
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(-20px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .brand.in { opacity: 1; transform: translateY(0); }

        .brand-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }

        .brand-icon {
          width: 40px; height: 40px;
          border: 1.5px solid var(--caramel);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; color: var(--caramel);
          animation: spin-slow 12s linear infinite;
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }

        .brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 22px; color: var(--cream);
          letter-spacing: 4px; text-transform: uppercase;
        }
        .brand-tagline {
          font-size: 11px; color: var(--warm-gray);
          letter-spacing: 2px; text-transform: uppercase;
          padding-left: 52px;
        }

        .left-hero {
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .left-hero.in { opacity: 1; transform: translateY(0); }

        .left-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 5vw, 58px);
          font-weight: 700; color: var(--cream);
          line-height: 1.15; margin-bottom: 20px;
        }
        .left-hero h1 em { font-style: italic; color: var(--caramel); }
        .left-hero p {
          font-size: 14px; color: var(--warm-gray);
          line-height: 1.75; max-width: 340px; font-weight: 300;
        }

        .decoration-line {
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, var(--caramel), var(--gold));
          margin: 20px 0;
          transition: width 1s ease 0.8s;
        }
        .decoration-line.in { width: 60px; }

        .perks { display: flex; flex-direction: column; gap: 14px; margin-top: 36px; }
        .perk {
          display: flex; align-items: center; gap: 14px;
          opacity: 0; transform: translateX(-20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .perk.in { opacity: 1; transform: translateX(0); }
        .perk:nth-child(1){ transition-delay: 0.9s; }
        .perk:nth-child(2){ transition-delay: 1.1s; }
        .perk:nth-child(3){ transition-delay: 1.3s; }
        .perk-icon {
          width: 32px; height: 32px;
          border: 1px solid rgba(200,149,108,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; flex-shrink: 0;
          transition: border-color 0.3s, background 0.3s;
        }
        .perk:hover .perk-icon { border-color: var(--caramel); background: rgba(200,149,108,0.1); }
        .perk-text { font-size: 13px; color: rgba(247,243,238,0.65); font-weight: 300; letter-spacing: 0.3px; }

        .left-footer {
          position: relative; z-index: 1;
          font-size: 11px; color: rgba(84, 112, 158, 0.85); letter-spacing: 0.5px;
          opacity: 0; transition: opacity 0.6s ease 1.5s;
        }
        .left-footer.in { opacity: 1; }

        /* RIGHT PANEL */
        .right-panel {
          width: 480px; flex-shrink: 0;
          background: var(--cream);
          display: flex; flex-direction: column; justify-content: center;
          padding: 56px 48px; position: relative;
          opacity: 0; transform: translateX(40px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }
        .right-panel.in { opacity: 1; transform: translateX(0); }

        .right-panel::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 100%; height: 4px;
          background: linear-gradient(90deg, var(--caramel), var(--gold), var(--caramel));
          background-size: 200% auto;
          animation: shimmer-bar 3s linear infinite;
        }
        @keyframes shimmer-bar {
          from { background-position: 0% center; }
          to   { background-position: 200% center; }
        }

        .form-header {
          margin-bottom: 36px;
          opacity: 0; transform: translateY(15px);
          transition: opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s;
        }
        .form-header.in { opacity: 1; transform: translateY(0); }
        .form-header .eyebrow {
          font-size: 11px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--caramel);
          font-weight: 500; margin-bottom: 10px;
        }
        .form-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 30px; font-weight: 600;
          color: var(--espresso); line-height: 1.2;
        }
        .form-header p { margin-top: 8px; font-size: 13px; color: var(--warm-gray); font-weight: 300; }

        .form-body {
          opacity: 0; transform: translateY(15px);
          transition: opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s;
        }
        .form-body.in { opacity: 1; transform: translateY(0); }

        .form-group { margin-bottom: 20px; }

        .form-label {
          display: block; font-size: 11px;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: var(--espresso); font-weight: 500;
          margin-bottom: 8px; transition: color 0.2s;
        }
        .form-group.focused .form-label { color: var(--caramel); }

        .input-wrap { position: relative; }

        .input-icon {
          position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
          width: 16px; height: 16px; color: var(--warm-gray);
          pointer-events: none; transition: color 0.2s; z-index: 2;
        }
        .form-group.focused .input-icon { color: var(--caramel); }

        .form-input {
          width: 100%;
          padding: 13px 44px 13px 42px;
          border: 1.5px solid var(--light-border);
          background: var(--input-bg);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; color: var(--espresso);
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
          -webkit-appearance: none; border-radius: 0;
        }
        .form-input::placeholder { color: #C4B9B2; }
        .form-input:focus {
          border-color: var(--caramel);
          box-shadow: 0 0 0 3px rgba(117, 108, 200, 0.12);
          background: #fff;
        }

        /* ── EYE BUTTON (fixed) ── */
        .eye-btn {
          position: absolute;
          right: 12px; top: 50%; transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer; padding: 4px;
          color: var(--warm-gray);
          display: flex; align-items: center; justify-content: center;
          z-index: 3; transition: color 0.2s; line-height: 0;
        }
        .eye-btn:hover { color: var(--caramel); }
        .eye-btn svg { display: block; pointer-events: none; }

        .form-meta {
          display: flex; justify-content: space-between; align-items: center; margin-top: 4px;
        }
        .remember-label {
          display: flex; align-items: center; gap: 8px;
          cursor: pointer; font-size: 12px; color: var(--warm-gray); user-select: none;
        }
        .remember-label input[type="checkbox"] { width: 14px; height: 14px; accent-color: var(--caramel); cursor: pointer; }
        .forgot-link { font-size: 12px; color: var(--caramel); text-decoration: none; font-weight: 500; letter-spacing: 0.3px; transition: opacity 0.2s; }
        .forgot-link:hover { opacity: 0.7; }
        .loader {
  width: 14px;
  height: 14px;
  border: 2px solid #ccc;
  border-top: 2px solid #000;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
        .submit-btn {
          width: 100%; padding: 15px;
          background: var(--espresso); color: var(--cream);
          border: none; font-family: 'DM Sans', sans-serif;
          font-size: 12px; letter-spacing: 3px; text-transform: uppercase;
          font-weight: 500; cursor: pointer; margin-top: 28px;
          position: relative; overflow: hidden;
          transition: background 0.3s, transform 0.15s, box-shadow 0.3s;
          border-radius: 0;
        }
        .submit-btn:hover { background: #251a2e; box-shadow: 0 6px 24px rgba(28,19,16,0.3); transform: translateY(-1px); }
        .submit-btn:active { transform: scale(0.99) translateY(0); }
        .submit-btn.loading { pointer-events: none; background: #2e293c; }
        .btn-shine {
          position: absolute; left: -100%; top: 0;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 125, 214, 0.25), transparent);
          display: none;
        }
        .submit-btn.loading .btn-shine { display: block; animation: btn-shimmer 1.2s infinite; }
        @keyframes btn-shimmer { to { left: 200%; } }

        .divider { display: flex; align-items: center; gap: 12px; margin: 24px 0; }
        .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--light-border); }
        .divider span { font-size: 11px; color: var(--warm-gray); letter-spacing: 1px; text-transform: uppercase; }

        .social-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .social-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 11px; border: 1.5px solid var(--light-border); background: white;
          cursor: pointer; font-family: 'DM Sans', sans-serif;
          font-size: 12px; color: var(--espresso); font-weight: 500;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          border-radius: 0;
        }
        .social-btn:hover { border-color: var(--caramel); box-shadow: 0 4px 12px rgba(200,149,108,0.15); transform: translateY(-2px); }
        .social-btn:active { transform: translateY(0); }

        .register-link { margin-top: 28px; text-align: center; font-size: 13px; color: var(--warm-gray); }
        .register-link a { color: var(--caramel); font-weight: 500; text-decoration: none; transition: opacity 0.2s; }
        .register-link a:hover { opacity: 0.7; }

        @media (max-width: 900px) {
          .left-panel { display: none; }
          .right-panel { width: 100%; padding: 40px 28px; }
        }
      `}
      </style>

      <div className="login-root">
        {/* LEFT PANEL */}
        <div className="left-panel">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="particle" />
          ))}

          <div className={`brand ${mounted ? "in" : ""}`}>
            <div className="brand-logo">
              <div className="brand-icon">✦</div>
              <span className="brand-name">NovaMart</span>
            </div>
            <div className="brand-tagline">Curated Luxury &amp; Style</div>
          </div>

          <div className={`left-hero ${mounted ? "in" : ""}`}>
            <h1>
              Where <em>style</em>
              <br />
              meets your
              <br />
              doorstep.
            </h1>
            <div className={`decoration-line ${mounted ? "in" : ""}`} />
            <p>
              Discover curated collections from the world’s finest designers.
              Sign in to access exclusive member-only pieces and early
              releases!!
            </p>
            <div className="perks">
              {[
                ["🎁", "Early access to new arrivals"],
                ["🚚", "Free express shipping on orders over ₹2,000"],
                ["♻️", "Easy 30-day hassle-free returns"],
              ].map(([icon, text]) => (
                <div className={`perk ${mounted ? "in" : ""}`} key={text}>
                  <div className="perk-icon">{icon}</div>
                  <span className="perk-text">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`left-footer ${mounted ? "in" : ""}`}>
            © 2026 NovaMart. All rights reserved.
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className={`right-panel ${mounted ? "in" : ""}`}>
          <div className={`form-header ${mounted ? "in" : ""}`}>
            <div className="">Welcome back</div>
            <h2>Sign in to your account</h2>
            <p>Access your orders, wishlist &amp; exclusive member benefits.</p>
          </div>

          <div className={`form-body ${mounted ? "in" : ""}`}>
            {/* Email */}
            <div
              className={`form-group ${focusedField === "email" ? "focused" : ""}`}
            >
              <label className="form-label">Email Address</label>
              <div className="input-wrap">
                <svg
                  className="input-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            {/* Password */}
            <div
              className={`form-group ${focusedField === "password" ? "focused" : ""}`}
            >
              <label className="form-label">Password</label>
              <div className="input-wrap">
                <svg
                  className="input-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type={showPassword ? "password" : "text"}
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                />
                {/* Eye button — onMouseDown prevents blur before toggle */}
                <button
                  type="button"
                  className="eye-btn"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setShowPassword((v) => !v);
                  }}
                  aria-label={showPassword ? "Show password" : "hide password"}
                >
                  {showPassword ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.39 1 12c.98-2.45 2.74-4.52 5-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c5 0 9.27 3.61 11 8a18.5 18.5 0 0 1-2.16 3.48" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="form-meta">
              <label className="remember-label">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-link">
                Forgot password?
              </a>
            </div>

            <button
              type="button"
              className={`submit-btn${loading ? " loading" : ""}`}
              onClick={handleSubmit}
            >
              <span className="btn-shine" />
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <div className="divider">
              <span>or continue with</span>
            </div>

            <div className="social-btns">
              <button
                type="button"
                className="social-btn"
                onClick={handleGoogle}
                disabled={gLoading}
                style={{width:"60vh",borderRadius:"25px"}}
              >
                {gLoading ? (
                  <>
                    <span className="loader"></span>
                    Connecting...
                  </>
                ) : (
                  <>
                    <svg width="36" height="26" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <p style={{fontSize:"20px",color:"blue"}}>Google</p>
                  </>
                )}
              </button>
            </div>

            <p className="register-link">
              New to NovaMart? <a href="/Register">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
