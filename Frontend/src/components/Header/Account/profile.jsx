import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiEdit2,
  FiCamera,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiPackage,
  FiHeart,
  FiStar,
  FiAward,
  FiSettings,
  FiLogOut,
  FiCheck,
  FiBell,
  FiShield,
  FiX,
} from "react-icons/fi";

// ─────────────────────────────────────────────────────────────────────────
// Scoped styles (kept in one template string, same pattern used elsewhere
// in this project) — colors match the site's existing espresso/caramel
// palette so this page feels native rather than bolted-on.
// ─────────────────────────────────────────────────────────────────────────
const PROFILE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  .pf-root {
    min-height: 100vh;
    background: #f4f0eb;
    font-family: 'DM Sans', sans-serif;
    padding: 32px 24px 80px;
  }
  .pf-shell { max-width: 1100px; margin: 0 auto; }

  :root {
    --pf-espresso: #101c1c;
    --pf-caramel: #bed2f3;
    --pf-gold: #bac9e1;
    --pf-muted: #6b6b6b;
    --pf-border: #ececec;
    --pf-success: #0F6E56;
    --pf-success-bg: #E1F5EE;
    --pf-danger: #b3402f;
  }

  @keyframes pf-fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pf-fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes pf-pop    { 0% { opacity: 0; transform: scale(.7); } 70% { transform: scale(1.05); } 100% { opacity: 1; transform: scale(1); } }
  @keyframes pf-pulse  { 0% { box-shadow: 0 0 0 0 rgba(15,110,86,.45); } 70% { box-shadow: 0 0 0 8px rgba(15,110,86,0); } 100% { box-shadow: 0 0 0 0 rgba(15,110,86,0); } }
  @keyframes pf-shimmer{ from { background-position: 0% center; } to { background-position: 200% center; } }
  @keyframes pf-spin   { to { transform: rotate(360deg); } }

  /* ── banner + avatar ── */
  .pf-banner {
    height: 150px; border-radius: 20px;
    background: linear-gradient(120deg, var(--pf-espresso), #2e3d3d, var(--pf-espresso));
    background-size: 220% auto;
    animation: pf-shimmer 8s linear infinite, pf-fadeIn .5s ease both;
    position: relative;
  }

  .pf-headrow {
    display: flex; align-items: flex-end; gap: 20px;
    margin-top: -54px; padding: 0 28px;
    position: relative; z-index: 2;
  }

  .pf-avatar-wrap { position: relative; flex-shrink: 0; animation: pf-pop .5s cubic-bezier(.34,1.56,.64,1) .1s both; }
  .pf-avatar {
    width: 108px; height: 108px; border-radius: 50%;
    border: 4px solid #f4f0eb; background: #ddd;
    object-fit: cover; display: block;
  }
  .pf-avatar-status {
    position: absolute; bottom: 6px; right: 6px;
    width: 16px; height: 16px; border-radius: 50%;
    background: var(--pf-success); border: 2px solid #fff;
    animation: pf-pulse 2s infinite;
  }
  .pf-avatar-edit {
    position: absolute; bottom: 2px; right: 2px;
    width: 32px; height: 32px; border-radius: 50%;
    background: var(--pf-espresso); color: #fff;
    display: flex; align-items: center; justify-content: center;
    border: 2px solid #f4f0eb; cursor: pointer;
    transition: transform .2s ease, background .2s ease;
  }
  .pf-avatar-edit:hover { transform: scale(1.12) rotate(-8deg); background: #2e3d3d; }

  .pf-headinfo { flex: 1; min-width: 0; padding-bottom: 8px; opacity: 0; animation: pf-fadeUp .5s ease .2s forwards; }
  .pf-name { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 600; color: var(--pf-espresso); display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .pf-badge {
    font-size: 10px; letter-spacing: .5px; font-weight: 600; text-transform: uppercase;
    background: var(--pf-success-bg); color: var(--pf-success);
    padding: 3px 9px; border-radius: 20px;
  }
  .pf-sub { font-size: 13px; color: var(--pf-muted); margin-top: 4px; }

  .pf-headactions { display: flex; gap: 10px; padding-bottom: 8px; opacity: 0; animation: pf-fadeUp .5s ease .28s forwards; }
  .pf-btn {
    display: inline-flex; align-items: center; gap: 7px;
    padding: 10px 18px; border-radius: 999px; border: none;
    font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
    cursor: pointer; transition: transform .15s ease, box-shadow .2s ease, background .2s ease;
    white-space: nowrap;
  }
  .pf-btn:active { transform: scale(.96); }
  .pf-btn-dark { background: var(--pf-espresso); color: #fff; }
  .pf-btn-dark:hover { background: #24312f; box-shadow: 0 6px 18px rgba(16,28,28,.25); transform: translateY(-1px); }
  .pf-btn-outline { background: #fff; color: var(--pf-espresso); border: 1.5px solid var(--pf-border); }
  .pf-btn-outline:hover { border-color: var(--pf-espresso); transform: translateY(-1px); }
  .pf-btn-danger { background: #fff; color: var(--pf-danger); border: 1.5px solid #f0d9d4; }
  .pf-btn-danger:hover { background: #fdf3f1; }

  /* ── stat cards ── */
  .pf-stats {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
    margin-top: 28px;
  }
  .pf-stat {
    background: #fff; border: 1px solid var(--pf-border); border-radius: 16px;
    padding: 18px 20px; display: flex; align-items: center; gap: 12px;
    opacity: 0; transform: translateY(14px);
    animation: pf-fadeUp .45s ease forwards;
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .pf-stat:hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(16,28,28,.08); }
  .pf-stat:nth-child(1) { animation-delay: .12s; }
  .pf-stat:nth-child(2) { animation-delay: .19s; }
  .pf-stat:nth-child(3) { animation-delay: .26s; }
  .pf-stat:nth-child(4) { animation-delay: .33s; }
  .pf-stat-icon {
    width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center; font-size: 19px;
    background: #f4f0eb; color: var(--pf-espresso);
  }
  .pf-stat-num { font-family: 'Playfair Display', serif; font-size: 21px; font-weight: 600; color: var(--pf-espresso); line-height: 1.1; }
  .pf-stat-label { font-size: 12px; color: var(--pf-muted); margin-top: 2px; }

  /* ── tabs ── */
  .pf-tabs {
    display: flex; gap: 4px; margin-top: 32px;
    border-bottom: 1.5px solid var(--pf-border);
    position: relative;
    opacity: 0; animation: pf-fadeUp .45s ease .38s forwards;
    overflow-x: auto;
  }
  .pf-tab {
    padding: 12px 18px; background: none; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-size: 13.5px; font-weight: 500;
    color: var(--pf-muted); display: flex; align-items: center; gap: 7px;
    white-space: nowrap; transition: color .2s ease;
  }
  .pf-tab:hover { color: var(--pf-espresso); }
  .pf-tab.active { color: var(--pf-espresso); }
  .pf-tab-underline {
    position: absolute; bottom: -1.5px; height: 2px; background: var(--pf-espresso);
    transition: transform .28s cubic-bezier(.65,0,.35,1), width .28s cubic-bezier(.65,0,.35,1);
  }

  .pf-panel { padding-top: 24px; animation: pf-fadeUp .35s ease both; }

  /* ── info rows ── */
  .pf-card { background: #fff; border: 1px solid var(--pf-border); border-radius: 16px; padding: 24px 26px; }
  .pf-card + .pf-card { margin-top: 16px; }
  .pf-card-title { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 600; color: var(--pf-espresso); margin-bottom: 16px; }

  .pf-info-row {
    display: flex; align-items: center; gap: 14px;
    padding: 13px 0; border-bottom: 1px solid #f5f5f5;
  }
  .pf-info-row:last-child { border-bottom: none; padding-bottom: 0; }
  .pf-info-row:first-child { padding-top: 0; }
  .pf-info-icon {
    width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
    background: #f4f0eb; color: var(--pf-espresso);
    display: flex; align-items: center; justify-content: center; font-size: 15px;
  }
  .pf-info-label { font-size: 11px; text-transform: uppercase; letter-spacing: .6px; color: var(--pf-muted); }
  .pf-info-val { font-size: 14px; color: var(--pf-espresso); font-weight: 500; margin-top: 1px; }
  .pf-info-edit {
    margin-left: auto; background: none; border: none; color: var(--pf-muted);
    cursor: pointer; padding: 6px; border-radius: 8px; display: flex;
    transition: color .2s ease, background .2s ease;
  }
  .pf-info-edit:hover { color: var(--pf-espresso); background: #f4f0eb; }

  .pf-input {
    border: 1.5px solid var(--pf-border); border-radius: 8px; padding: 8px 12px;
    font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--pf-espresso);
    outline: none; transition: border-color .2s ease; width: 100%; max-width: 280px;
  }
  .pf-input:focus { border-color: var(--pf-espresso); }

  /* ── empty state (orders / wishlist) ── */
  .pf-empty {
    display: flex; flex-direction: column; align-items: center; text-align: center;
    padding: 48px 20px; color: var(--pf-muted);
  }
  .pf-empty-icon {
    width: 56px; height: 56px; border-radius: 50%; background: #f4f0eb;
    display: flex; align-items: center; justify-content: center; font-size: 24px;
    color: var(--pf-espresso); margin-bottom: 14px;
  }
  .pf-empty p { font-size: 13.5px; max-width: 300px; }

  /* ── settings toggles ── */
  .pf-toggle-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 0; border-bottom: 1px solid #f5f5f5;
  }
  .pf-toggle-row:last-child { border-bottom: none; }
  .pf-toggle-text strong { font-size: 14px; color: var(--pf-espresso); display: block; }
  .pf-toggle-text span { font-size: 12.5px; color: var(--pf-muted); }

  .pf-switch { width: 42px; height: 24px; border-radius: 999px; background: #ddd; position: relative; border: none; cursor: pointer; flex-shrink: 0; transition: background .25s ease; }
  .pf-switch.on { background: var(--pf-success); }
  .pf-switch-knob { position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%; background: #fff; transition: transform .25s cubic-bezier(.65,0,.35,1); box-shadow: 0 1px 3px rgba(0,0,0,.25); }
  .pf-switch.on .pf-switch-knob { transform: translateX(18px); }

  .pf-save-bar {
    display: flex; justify-content: flex-end; margin-top: 20px;
  }

  /* toast */
  .pf-toast {
    position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
    background: var(--pf-espresso); color: #fff; padding: 12px 22px; border-radius: 999px;
    font-size: 13px; display: flex; align-items: center; gap: 8px;
    animation: pf-fadeUp .3s ease both; z-index: 1000; box-shadow: 0 12px 30px rgba(0,0,0,.25);
  }

  @media (max-width: 760px) {
    .pf-stats { grid-template-columns: repeat(2, 1fr); }
    .pf-headrow { flex-wrap: wrap; }
    .pf-headactions { width: 100%; padding-bottom: 0; margin-top: 12px; }
    .pf-name { font-size: 20px; }
  }
  @media (max-width: 460px) {
    .pf-root { padding: 20px 14px 60px; }
    .pf-avatar { width: 88px; height: 88px; }
    .pf-headrow { margin-top: -44px; padding: 0 16px; gap: 14px; }
  }
`;

// Counts a number up from 0 to `target` over `duration` ms — used for the
// stat cards so they feel alive on first load instead of just appearing.
function useCountUp(target, duration = 900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

const TABS = [
  { id: "overview", label: "Overview", icon: <FiShield /> },
  { id: "orders", label: "My Orders", icon: <FiPackage /> },
  { id: "wishlist", label: "Wishlist", icon: <FiHeart /> },
  { id: "settings", label: "Settings", icon: <FiSettings /> },
];

const StatCard = ({ icon, value, label }) => {
  const count = useCountUp(value);
  return (
    <div className="pf-stat">
      <div className="pf-stat-icon">{icon}</div>
      <div>
        <div className="pf-stat-num">{count}</div>
        <div className="pf-stat-label">{label}</div>
      </div>
    </div>
  );
};

const Toggle = ({ checked, onChange }) => (
  <button
    type="button"
    className={`pf-switch${checked ? " on" : ""}`}
    onClick={() => onChange(!checked)}
    aria-pressed={checked}
  >
    <span className="pf-switch-knob" />
  </button>
);

const Profile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [avatar, setAvatar] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [toast, setToast] = useState("");

const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

const [user, setUser] = useState({
  name: savedUser.displayName || savedUser.name || "User",
  email: savedUser.email || "",
  phone: savedUser.phone || "+91 1111 111 111",
  address: savedUser.address || "Add your delivery address",
  joined: savedUser.joined || "September 2026",
});

  const [editingField, setEditingField] = useState(null);
  const [draft, setDraft] = useState("");

  const [settings, setSettings] = useState({
    emailNotifs: true,
    smsAlerts: false,
    twoFactor: false,
  });

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };

  const handleAvatarClick = () => fileInputRef.current?.click();

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  const startEdit = (field) => {
    setEditingField(field);
    setDraft(user[field]);
  };

  const saveEdit = (field) => {
    setUser((prev) => ({ ...prev, [field]: draft }));
    setEditingField(null);
    showToast("Profile updated");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("user");
    navigate("/");
  };

  const activeIndex = TABS.findIndex((t) => t.id === activeTab);

  const infoRow = (field, icon, label) => (
    <div className="pf-info-row">
      <div className="pf-info-icon">{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="pf-info-label">{label}</div>
        {editingField === field ? (
          <div style={{ display: "flex", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
            <input
              className="pf-input"
              value={draft}
              autoFocus
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveEdit(field)}
            />
            <button className="pf-btn pf-btn-dark" style={{ padding: "8px 14px" }} onClick={() => saveEdit(field)}>
              <FiCheck /> Save
            </button>
            <button
              className="pf-btn pf-btn-outline"
              style={{ padding: "8px 14px" }}
              onClick={() => setEditingField(null)}
            >
              <FiX /> Cancel
            </button>
          </div>
        ) : (
          <div className="pf-info-val">{user[field]}</div>
        )}
      </div>
      {editingField !== field && (
        <button className="pf-info-edit" onClick={() => startEdit(field)} aria-label={`Edit ${label}`}>
          <FiEdit2 size={15} />
        </button>
      )}
    </div>
  );

  return (
    <div className="pf-root">
      <style>{PROFILE_STYLES}</style>

      <div className="pf-shell">
        {/* ── banner + avatar/header ── */}
        <div className="pf-banner" />
        <div className="pf-headrow">
          <div className="pf-avatar-wrap">
            <img
              className="pf-avatar"
              src={
                avatar ||
                "https://api.dicebear.com/7.x/initials/svg?seed=" +
                  encodeURIComponent(user.name)
              }
              alt={user.name}
            />
            <span className="pf-avatar-status" title="Online" />
            <button className="pf-avatar-edit" onClick={handleAvatarClick} aria-label="Change photo">
              <FiCamera size={14} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleAvatarChange}
            />
          </div>

          <div className="pf-headinfo">
            <div className="pf-name">
              {user.name}
              <span className="pf-badge">Gold Member</span>
            </div>
            <div className="pf-sub">Member since {user.joined} · {user.email}</div>
          </div>

          <div className="pf-headactions">
            <button className="pf-btn pf-btn-outline" onClick={() => setActiveTab("settings")}>
              <FiSettings size={15} /> Settings
            </button>
            <button className="pf-btn pf-btn-danger" onClick={handleLogout}>
              <FiLogOut size={15} /> Logout
            </button>
          </div>
        </div>

        {/* ── stats ── */}
        <div className="pf-stats">
          <StatCard icon={<FiPackage />} value={18} label="Orders placed" />
          <StatCard icon={<FiHeart />} value={7} label="Wishlist items" />
          <StatCard icon={<FiStar />} value={5} label="Reviews written" />
          <StatCard icon={<FiAward />} value={1240} label="Loyalty points" />
        </div>

        {/* ── tabs ── */}
        <div className="pf-tabs" style={{ position: "relative" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`pf-tab${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
          <span
            className="pf-tab-underline"
            style={{
              width: `${100 / TABS.length}%`,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          />
        </div>

        {/* ── tab panels ── */}
        <div className="pf-panel" key={activeTab}>
          {activeTab === "overview" && (
            <div className="pf-card">
              <div className="pf-card-title">Personal Information</div>
              {infoRow("email", <FiMail size={16} />, "Email address")}
              {infoRow("phone", <FiPhone size={16} />, "Phone number")}
              {infoRow("address", <FiMapPin size={16} />, "Delivery address")}
              <div className="pf-info-row">
                <div className="pf-info-icon"><FiCalendar size={16} /></div>
                <div>
                  <div className="pf-info-label">Member since</div>
                  <div className="pf-info-val">{user.joined}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="pf-card">
              <div className="pf-card-title">Recent Orders</div>
              <div className="pf-empty">
                <div className="pf-empty-icon"><FiPackage size={22} /></div>
                <p>No recent orders to show here yet — once you place an order, it'll show up in this tab.</p>
              </div>
            </div>
          )}

          {activeTab === "wishlist" && (
            <div className="pf-card">
              <div className="pf-card-title">Saved Items</div>
              <div className="pf-empty">
                <div className="pf-empty-icon"><FiHeart size={22} /></div>
                <p>Items you save will appear here so you can find them again easily.</p>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="pf-card">
              <div className="pf-card-title">Notification Preferences</div>
              <div className="pf-toggle-row">
                <div className="pf-toggle-text">
                  <strong>Email notifications</strong>
                  <span>Order updates and offers via email</span>
                </div>
                <Toggle
                  checked={settings.emailNotifs}
                  onChange={(v) => setSettings((p) => ({ ...p, emailNotifs: v }))}
                />
              </div>
              <div className="pf-toggle-row">
                <div className="pf-toggle-text">
                  <strong>SMS alerts</strong>
                  <span>Delivery updates via text message</span>
                </div>
                <Toggle
                  checked={settings.smsAlerts}
                  onChange={(v) => setSettings((p) => ({ ...p, smsAlerts: v }))}
                />
              </div>
              <div className="pf-toggle-row">
                <div className="pf-toggle-text">
                  <strong>Two-factor authentication</strong>
                  <span>Extra security when signing in</span>
                </div>
                <Toggle
                  checked={settings.twoFactor}
                  onChange={(v) => setSettings((p) => ({ ...p, twoFactor: v }))}
                />
              </div>
              <div className="pf-save-bar">
                <button className="pf-btn pf-btn-dark" onClick={() => showToast("Settings saved")}>
                  <FiCheck size={15} /> Save changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {toast && (
        <div className="pf-toast">
          <FiCheck /> {toast}
        </div>
      )}
    </div>
  );
};

export default Profile;