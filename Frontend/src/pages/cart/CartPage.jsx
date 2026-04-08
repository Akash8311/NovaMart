import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import { RiCoupon2Fill } from "react-icons/ri";



const COUPON_CODE = "AKASH2004";
const COUPON_DISCOUNT = 499;
const MIN_ORDER = 1199;

const styles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-16px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes popIn {
    from { opacity: 0; transform: scale(0.88); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    20%     { transform: translateX(-6px); }
    40%     { transform: translateX(6px); }
    60%     { transform: translateX(-4px); }
    80%     { transform: translateX(4px); }
  }
  @keyframes successPulse {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.04); }
    100% { transform: scale(1); }
  }
  @keyframes badgeBounce {
    0%   { transform: scale(1); }
    40%  { transform: scale(1.3); }
    70%  { transform: scale(0.9); }
    100% { transform: scale(1); }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .cart-card {
    background: #fff;
    border: 0.5px solid #e5e5e5;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    gap: 16px;
    align-items: center;
    animation: slideIn 0.38s ease both;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .cart-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 18px rgba(0,0,0,0.07);
  }
  .cart-card.removing {
    animation: fadeUp 0.3s ease reverse forwards;
    pointer-events: none;
  }

  .qty-btn {
    width: 32px; height: 32px;
    border: 0.5px solid #ccc;
    border-radius: 8px;
    background: #f5f5f5;
    color: #111;
    font-size: 18px;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.15s, transform 0.1s;
    line-height: 1;
  }
  .qty-btn:hover { background: #ebebeb; }
  .qty-btn:active { transform: scale(0.9); }

  .del-btn {
    width: 30px; height: 30px;
    border: 0.5px solid #F7C1C1;
    border-radius: 8px;
    background: #FCEBEB;
    color: #A32D2D;
    font-size: 13px;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.15s, transform 0.15s;
  }
  .del-btn:hover { background: #F7C1C1; transform: scale(1.1); }
  .del-btn:active { transform: scale(0.9); }

  .checkout-btn {
    width: 100%; height: 44px;
    background: #1a1a1a; color: #fff;
    border: none; border-radius: 8px;
    font-size: 15px; font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.01em;
    transition: background 0.15s, transform 0.12s, opacity 0.15s;
  }
  .checkout-btn:hover { transform: translateY(-1px); background: #2e2e2e; }
  .checkout-btn:active { transform: scale(0.98); }
  .checkout-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

  .coupon-input {
    flex: 1; height: 36px; padding: 0 12px;
    font-size: 13px;
    border: 0.5px solid #ccc;
    border-radius: 8px;
    background: #f9f9f9;
    color: #111;
    outline: none;
    font-family: monospace;
    letter-spacing: 0.05em;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .coupon-input:focus { border-color: #1D9E75; box-shadow: 0 0 0 3px rgba(29,158,117,0.12); }
  .coupon-input.error   { border-color: #A32D2D; animation: shake 0.4s ease; }
  .coupon-input.success { border-color: #1D9E75; }

  .apply-btn {
    height: 36px; padding: 0 14px;
    font-size: 13px;
    border: 0.5px solid #ccc;
    border-radius: 8px;
    background: #f5f5f5;
    color: #111;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.15s, transform 0.1s;
  }
  .apply-btn:hover  { background: #ebebeb; }
  .apply-btn:active { transform: scale(0.96); }
  .apply-btn:disabled { opacity: 0.6; cursor: default; }

  .coupon-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 12px; font-weight: 500;
    background: #E1F5EE; color: #0F6E56;
    border: 0.5px solid #9FE1CB;
    border-radius: 20px; padding: 3px 10px;
    margin-top: 6px;
    animation: successPulse 0.4s ease;
  }

  .disc-row-enter { animation: slideIn 0.35s ease both; }

  .total-update { animation: countUp 0.3s ease; }
`;

const fmt = (n) => "₹" + n.toLocaleString("en-IN");

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(MyContext);

  const [couponInput, setCouponInput]     = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponStatus, setCouponStatus]   = useState(null); // null | "ok" | "err"
  const [couponMsg, setCouponMsg]         = useState("");
  const [couponInputClass, setCouponInputClass] = useState("");
  const [removingIds, setRemovingIds]     = useState([]);
  const [qtyBump, setQtyBump]             = useState(null);

  const updateQty = (id, delta) => {
    setQtyBump(id);
    setTimeout(() => setQtyBump(null), 350);
    setCartItems((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item)
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setRemovingIds((prev) => [...prev, id]);
    setTimeout(() => {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      setRemovingIds((prev) => prev.filter((x) => x !== id));
    }, 300);
  };

  const subtotal    = cartItems.reduce((t, i) => t + i.price * i.qty, 0);
  const discountAmt = couponApplied ? COUPON_DISCOUNT : 0;
  const totalPrice  = subtotal - discountAmt;
  const totalItems  = cartItems.reduce((a, i) => a + i.qty, 0);

  const applyCoupon = () => {
    if (couponApplied) return;
    const code = couponInput.trim().toUpperCase();

    if (!code) {
      setCouponStatus("err");
      setCouponMsg("Please enter a coupon code.");
      return;
    }
    if (code !== COUPON_CODE) {
      setCouponInputClass("error");
      setCouponStatus("err");
      setCouponMsg("Invalid coupon code. Try AKASH2004!");
      setTimeout(() => setCouponInputClass(""), 600);
      return;
    }
    if (subtotal < MIN_ORDER) {
      setCouponInputClass("error");
      setCouponStatus("err");
      setCouponMsg(`Min. order ₹1,000 required. Add ₹${(MIN_ORDER - subtotal).toLocaleString("en-IN")} more!`);
      setTimeout(() => setCouponInputClass(""), 600);
      return;
    }
    // Success
    setCouponApplied(true);
    setCouponInputClass("success");
    setCouponStatus("ok");
    setCouponMsg("");
  };

  const removeCoupon = () => {
    setCouponApplied(false);
    setCouponInput("");
    setCouponInputClass("");
    setCouponStatus(null);
    setCouponMsg("");
  };

  return (
    <>
      <style>{styles}</style>
      <section style={{ minHeight: "100vh", background: "#f7f8fa", padding: "32px 20px", fontFamily: "sans-serif" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "16px" }}>
                  
               {!couponApplied && (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: "linear-gradient(135deg, #f0faf5, #e6fff6)",
      padding: "12px 14px",
      borderRadius: "12px",
      borderLeft: "4px solid #1D9E75",
      boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
      animation: "slideFade 0.4s ease",
      transition: "0.3s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.06)";
    }}
  >
    <div
      style={{
        fontSize: "26px",
        color: "#1D9E75",
        animation: "pulse 1.5s infinite",
      }}
    >
      <RiCoupon2Fill />
    </div>
    <p
      style={{
        margin: 0,
        fontSize: "14px",
        color: "#444",
        lineHeight: "1.5",
      }}
    >
      No ₹499 off? Use coupon{" "}
      <span
        style={{
          color: "#0F6E56",
          fontWeight: "700",
         
          padding: "4px 8px",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onClick={() => {
          setCouponInput("AKASH2004");
          navigator.clipboard.writeText("AKASH2004");
        }}
        onMouseEnter={(e) => {
         
         
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
        }}
      >
        AKASH2004
      </span>{" "}
      on orders above ₹1,199 to unlock your discount instantly!❤️
    </p>
  </div>
)}
                                   {couponStatus === "err" && couponMsg && (
                    <p style={{ fontSize: "12px", color: "#A32D2D", margin: "6px 0 0", animation: "slideIn 0.3s ease" }}>
                      {couponMsg}
                    </p>
                  )}
                  {couponApplied && (
                    <div className="coupon-badge">
                      ✓ AKASH2004 — ₹499 off!
                      <span
                        onClick={removeCoupon}
                        style={{ cursor: "pointer", fontSize: "11px", opacity: 0.7, marginLeft: "2px" }}
                      >
                        ✕
                      </span>
                    </div>
                  )}
                </div>
          <div style={{ animation: "fadeUp 0.45s ease both" }}>
            <h1 style={{ fontSize: "22px", fontWeight: 500, color: "#111", margin: "0 0 4px" }}>Your cart</h1>
            <p style={{ fontSize: "14px", color: "#666", margin: "0 0 24px" }}>
              {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
            </p>
          </div>
              

          <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}>

            <div style={{ flex: 1, minWidth: "280px", display: "flex", flexDirection: "column", gap: "14px" }}>
              {cartItems.length === 0 ? (
                <div style={{ background: "#fff", border: "0.5px solid #e5e5e5", borderRadius: "12px", padding: "48px", textAlign: "center", animation: "popIn 0.35s ease both" }}>
                  <p style={{ fontSize: "32px", margin: "0 0 12px" }}>🛒</p>
                  <p style={{ fontSize: "16px", color: "#888", margin: 0 }}>Your cart is empty</p>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`cart-card${removingIds.includes(item.id) ? " removing" : ""}`}
                    style={{ animationDelay: `${idx * 0.07}s` }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "88px", height: "88px", borderRadius: "8px", objectFit: "cover", flexShrink: 0 }}
                    />

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: "15px", fontWeight: 500, color: "#111", margin: "0 0 4px" }}>{item.name}</p>
                      <p style={{ fontSize: "16px", fontWeight: 500, color: "#111", margin: "0 0 12px" }}>{fmt(item.price)}</p>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
                        <span
                          style={{
                            minWidth: "36px", textAlign: "center",
                            fontSize: "14px", fontWeight: 500, color: "#111",
                            animation: qtyBump === item.id ? "badgeBounce 0.3s ease" : "none",
                          }}
                        >
                          {item.qty}
                        </span>
                        <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px", flexShrink: 0 }}>
                      <p style={{ fontSize: "15px", fontWeight: 500, color: "#111", margin: 0 }}>
                        {fmt(item.price * item.qty)}
                      </p>
                      <button className="del-btn" onClick={() => removeItem(item.id)}>✕</button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div style={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ background: "#fff", border: "0.5px solid #e5e5e5", borderRadius: "12px", padding: "24px", animation: "fadeUp 0.5s ease 0.1s both" }}>
                <h2 style={{ fontSize: "18px", fontWeight: 500, color: "#111", margin: "0 0 20px" }}>Order summary</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                    <span style={{ color: "#666" }}>Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})</span>
                    <span style={{ color: "#111", fontWeight: 500 }}>{fmt(subtotal)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                    <span style={{ color: "#666" }}>Shipping</span>
                    <span style={{ color: "#0F6E56", fontWeight: 500 }}>Free</span>
                  </div>

                  {couponApplied && (
                    <div className="disc-row-enter" style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                      <span style={{ color: "#666" }}>Discount (AKASH2004)</span>
                      <span style={{ color: "#A32D2D", fontWeight: 500 }}>− {fmt(discountAmt)}</span>
                    </div>
                  )}
                </div>

                <div style={{ borderTop: "0.5px solid #e5e5e5", paddingTop: "16px", marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: "15px", fontWeight: 500, color: "#111" }}>Total</span>
                    <span
                      key={totalPrice}
                      className="total-update"
                      style={{ fontSize: "22px", fontWeight: 500, color: "#111" }}
                    >
                      {fmt(totalPrice)}
                    </span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#aaa", margin: "4px 0 0", textAlign: "right" }}>Incl. all taxes</p>
                </div>

               <div style={{ display: "flex", gap: "8px",marginBottom:"12px" }}>
                    <input
                      className={`coupon-input${couponInputClass ? " " + couponInputClass : ""}`}
                      type="text"
                      placeholder="Coupon code"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && applyCoupon()}
                      disabled={couponApplied}
                    />
                    <button
                      className="apply-btn"
                      onClick={applyCoupon}
                      disabled={couponApplied}
                      style={couponApplied ? { color: "#0F6E56", borderColor: "#9FE1CB" } : {}}
                    >
                      {couponApplied ? "Applied" : "Apply"}
                    </button>
                  </div>
                <button className="checkout-btn" disabled={cartItems.length === 0}>
                  Proceed to Payment
                </button>
                <p style={{ fontSize: "12px", color: "#aaa", textAlign: "center", margin: "14px 0 0" }}>
                  Secure payment via Razorpay
                </p>
              </div>

              <div style={{
                display: "flex", justifyContent: "space-around",
                padding: "14px", background: "#fff",
                border: "0.5px solid #e5e5e5", borderRadius: "12px",
                animation: "fadeUp 0.5s ease 0.2s both"
              }}>
                {[{ icon: "🔒", label: "Secure" }, { icon: "🚚", label: "Free delivery" }, { icon: "↩", label: "Easy returns" }].map((b) => (
                  <div key={b.label} style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "18px", margin: 0 }}>{b.icon}</p>
                    <p style={{ fontSize: "11px", color: "#888", margin: "4px 0 0" }}>{b.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;