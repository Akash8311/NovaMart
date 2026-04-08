import React, { createContext, useState, link } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home/Home";
import Productlisting from "./pages/Productlisting/Productlisting";
import Men_productListing from "./pages/Productlisting/Men_productListing";

import ProductDetails from "./pages/ProductDetails/ProductDetails";

// Men Products
import MenProductDetails1 from "./pages/ProductDetails/Men/MenProductDetails1";
import MenProductDetails2 from "./pages/ProductDetails/Men/MenProductDetails2";
import MenProductDetails3 from "./pages/ProductDetails/Men/MenProductDetails3";
import MenProductDetails4 from "./pages/ProductDetails/Men/MenProductDetails4";

// Girls Product
import ProductDrtails2 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDrtails2";
import ProductDetails3 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails3";
import ProductDetails4 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails4";

import LogIn from "./pages/auth/logIn";
import Register from "./pages/auth/Register";

import Drawer from "@mui/material/Drawer";
import CartPage from "./pages/cart/CartPage";

export const MyContext = createContext();

const styleTag = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulseRed {
    0%,100% { transform: scale(1); }
    50%      { transform: scale(1.15); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  .cart-item-enter {
    animation: fadeSlideIn 0.35s ease forwards;
  }

  .cart-delete-btn:hover {
    background: #fee2e2 !important;
    color: #dc2626 !important;
    transform: scale(1.1);
  }

  .checkout-btn:hover {
    background: #1a1a2e !important;
    letter-spacing: 2.5px !important;
    box-shadow: 0 8px 30px rgba(0,0,0,0.35) !important;
  }

  .qty-btn:hover {
    background: #111 !important;
    color: #fff !important;
  }

  .cart-item-row:hover {
    background: #fafafa !important;
    box-shadow: 0 2px 12px rgba(0,0,0,0.07) !important;
  }

  .empty-cart-icon {
    animation: pulseRed 2.5s ease infinite;
  }

  .shimmer-line {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px;
  }
`;

const App = () => {
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const values = {
    openCartPanel,
    setOpenCartPanel,
    cartItems,
    setCartItems,
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const itemCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <MyContext.Provider value={values}>
      <style>{styleTag}</style>

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productlisting" element={<Productlisting />} />
          <Route path="/Men_productListing" element={<Men_productListing />} />
          <Route path="/Product/:id" element={<ProductDetails />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/CartPage" element={<CartPage />} />

          <Route path="/MenproductDetails1" element={<MenProductDetails1 />} />
          <Route path="/menproductDetails2" element={<MenProductDetails2 />} />
          <Route path="/menproductDetails3" element={<MenProductDetails3 />} />
          <Route path="/menproductDetails4" element={<MenProductDetails4 />} />

          <Route path="/productDrtails2" element={<ProductDrtails2 />} />
          <Route path="/ProductDetails3" element={<ProductDetails3 />} />
          <Route path="/ProductDetails4" element={<ProductDetails4 />} />
        </Routes>

        <Footer />

        <Drawer
          anchor="right"
          open={openCartPanel}
          onClose={() => setOpenCartPanel(false)}
          PaperProps={{
            style: {
              width: 400,
              background: "#fff",
              boxShadow: "-8px 0 40px rgba(0,0,0,0.12)",
              fontFamily: "'DM Sans', sans-serif",
              border: "none",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <div
            style={{
              height: 4,
              background: "linear-gradient(90deg, #0f0c29, #302b63, #24243e)",
            }}
          />

          <div
            style={{
              padding: "22px 24px 18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 700,
                  letterSpacing: "-0.3px",
                  color: "#111",
                  lineHeight: 1,
                }}
              >
                Add to Cart
              </h2>
              {itemCount > 0 && (
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: 12,
                    color: "#888",
                    letterSpacing: "0.5px",
                  }}
                >
                  {itemCount} {itemCount === 1 ? "item" : "items"} selected
                </p>
              )}
            </div>

            <button
              onClick={() => setOpenCartPanel(false)}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1.5px solid #e5e5e5",
                background: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                color: "#555",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#111";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "#111";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#555";
                e.currentTarget.style.borderColor = "#e5e5e5";
              }}
            >
              ✕
            </button>
          </div>

          {totalPrice > 0 && totalPrice < 999 && (
            <div
              style={{
                margin: "12px 16px 0",
                padding: "10px 14px",
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: 8,
                fontSize: 12,
                color: "#15803d",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 500,
              }}
            >
              🚚 Add ₹{999 - totalPrice} more for FREE delivery!
            </div>
          )}
          {totalPrice >= 999 && (
            <div
              style={{
                margin: "12px 16px 0",
                padding: "10px 14px",
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: 8,
                fontSize: 12,
                color: "#15803d",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 500,
              }}
            >
              🎉 You've unlocked FREE delivery!
            </div>
          )}

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              scrollbarWidth: "thin",
              scrollbarColor: "#ddd transparent",
            }}
          >
            {cartItems.length === 0 ? (
              /* Empty State */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: 320,
                  gap: 16,
                  color: "#aaa",
                }}
              >
                <div
                  className="empty-cart-icon"
                  style={{ fontSize: 64, lineHeight: 1 }}
                >
                  🛍️
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 22,
                      color: "#333",
                      fontWeight: 600,
                    }}
                  >
                    Your cart is empty
                  </p>
                  <p style={{ margin: "8px 0 0", fontSize: 13, color: "#aaa" }}>
                    Add items to see them here
                  </p>
                </div>
                <button
                  onClick={() => setOpenCartPanel(false)}
                  style={{
                    marginTop: 8,
                    padding: "11px 28px",
                    background: "#111",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    fontSize: 13,
                    cursor: "pointer",
                    letterSpacing: "1px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    transition: "all 0.2s",
                  }}
                >
                  EXPLORE PRODUCTS
                </button>
              </div>
            ) : (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="cart-item-enter cart-item-row"
                    style={{
                      animationDelay: `${index * 0.06}s`,
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 14px",
                      background: "#fff",
                      borderRadius: 12,
                      border: "1px solid #f0f0f0",
                      transition: "all 0.2s",
                    }}
                  >
                    {/* Image */}
                    <div
                      style={{
                        width: 70,
                        height: 88,
                        borderRadius: 8,
                        overflow: "hidden",
                        flexShrink: 0,
                        background: "#f5f5f5",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          margin: "0 0 3px",
                          fontSize: 13.5,
                          fontWeight: 500,
                          color: "#1a1a1a",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.name}
                      </p>

                      {item.size && (
                        <span
                          style={{
                            display: "inline-block",
                            fontSize: 10,
                            color: "#888",
                            background: "#f5f5f5",
                            borderRadius: 4,
                            padding: "2px 7px",
                            marginBottom: 8,
                            letterSpacing: "0.5px",
                          }}
                        >
                          SIZE: {item.size}
                        </span>
                      )}

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          marginTop: 6,
                        }}
                      >
                        <button
                          className="qty-btn"
                          onClick={() => updateQty(item.id, -1)}
                          style={{
                            width: 26,
                            height: 26,
                            borderRadius: 6,
                            border: "1.5px solid #ddd",
                            background: "#fff",
                            cursor: "pointer",
                            fontSize: 15,
                            lineHeight: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#555",
                            transition: "all 0.18s",
                            fontWeight: 600,
                          }}
                        >
                          −
                        </button>
                        <span
                          style={{
                            width: 28,
                            textAlign: "center",
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#111",
                          }}
                        >
                          {item.qty}
                        </span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQty(item.id, 1)}
                          style={{
                            width: 26,
                            height: 26,
                            borderRadius: 6,
                            border: "1.5px solid #ddd",
                            background: "#fff",
                            cursor: "pointer",
                            fontSize: 15,
                            lineHeight: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#555",
                            transition: "all 0.18s",
                            fontWeight: 600,
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Price + Delete */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: 20,
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#111",
                          fontFamily: "'Cormorant Garamond', serif",
                          letterSpacing: "-0.2px",
                        }}
                      >
                        ₹{(item.price * item.qty).toLocaleString("en-IN")}
                      </span>

                      <button
                        className="cart-delete-btn"
                        onClick={() => removeItem(item.id)}
                        title="Remove item"
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 6,
                          border: "1.5px solid #fce4e4",
                          background: "#fff8f8",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 13,
                          color: "#e57373",
                          transition: "all 0.18s",
                        }}
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── FOOTER: SUMMARY + CHECKOUT ── */}
          {cartItems.length > 0 && (
            <div
              style={{
                borderTop: "1px solid #f0f0f0",
                background: "#fff",
              }}
            >
              {/* Order Summary */}
              <div style={{ padding: "16px 20px 12px" }}>
                <p
                  style={{
                    margin: "0 0 12px",
                    fontSize: 11,
                    color: "#aaa",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Order Summary
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                    fontSize: 13,
                    color: "#555",
                  }}
                >
                  <span>Subtotal ({itemCount} items)</span>
                  <span>₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 12,
                    fontSize: 13,
                    color: totalPrice >= 999 ? "#16a34a" : "#555",
                    fontWeight: totalPrice >= 999 ? 500 : 400,
                  }}
                >
                  <span>Delivery</span>
                  <span>{totalPrice >= 999 ? "FREE" : `₹99`}</span>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: "#f0f0f0",
                    margin: "10px 0",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#111",
                    }}
                  >
                    Total
                  </span>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#111",
                    }}
                  >
                    ₹
                    {(totalPrice + (totalPrice >= 999 ? 0 : 99)).toLocaleString(
                      "en-IN",
                    )}
                  </span>
                </div>

                {totalPrice < 999 && (
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: 11,
                      color: "#aaa",
                      textAlign: "right",
                    }}
                  >
                    incl. ₹99 delivery fee
                  </p>
                )}
              </div>

              <div style={{ padding: "0 20px 20px" }}>
                <Link
                  to="/CartPage"
                  className="checkout-btn"
                  style={{
                    display: "block",
                    textAlign: "center",
                    width: "100%",
                    padding: "15px",
                    background: "#111",
                    color: "#fff",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontSize: "12px",
                    letterSpacing: "2px",
                  }}
                >
                  Proceed to Pay→
                </Link>

                <button
                  onClick={() => setOpenCartPanel(false)}
                  style={{
                    width: "100%",
                    marginTop: 10,
                    padding: "11px",
                    background: "transparent",
                    color: "#777",
                    border: "1.5px solid #e5e5e5",
                    borderRadius: 10,
                    cursor: "pointer",
                    fontSize: 12,
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#999";
                    e.currentTarget.style.color = "#333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e5e5e5";
                    e.currentTarget.style.color = "#777";
                  }}
                >
                  Continue Shopping
                </button>
              </div>

              {/* Trust badges */}
              <div
                style={{
                  padding: "12px 20px 16px",
                  borderTop: "1px solid #f5f5f5",
                  display: "flex",
                  justifyContent: "center",
                  gap: 24,
                }}
              >
                {["🔒 Secure", "↩️ Easy Returns", "⚡ Fast Delivery"].map(
                  (badge) => (
                    <span
                      key={badge}
                      style={{
                        fontSize: 10.5,
                        color: "#aaa",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>
            </div>
          )}
        </Drawer>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;
