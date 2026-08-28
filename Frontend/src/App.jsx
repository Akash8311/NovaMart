import React, { createContext, useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


import HelpCenter from "./pages/product_related_issue_help/help_center";

import Home from "./pages/home/Home";

// productlisting pages here
import Productlisting from "./pages/Productlisting/Productlisting";
import Men_productListing from "./pages/Productlisting/Men_productListing";

import ProductDetails from "./pages/ProductDetails/ProductDetails";

// Men Products
import MenProductDetails1 from "./pages/ProductDetails/Men/MenProductDetails1";
import MenProductDetails2 from "./pages/ProductDetails/Men/MenProductDetails2";
import MenProductDetails3 from "./pages/ProductDetails/Men/MenProductDetails3";
import MenProductDetails4 from "./pages/ProductDetails/Men/MenProductDetails4";
import MenProductDetails5 from "./pages/ProductDetails/Men/MenProductDetails5";
import MenProductDetails6 from "./pages/ProductDetails/Men/MenProductDetails6";
import MenProductDetails7 from "./pages/ProductDetails/Men/MenProductDetails7";
import MenProductDetails8 from "./pages/ProductDetails/Men/MenProductDetails8";
import MenProductDetails9 from "./pages/ProductDetails/Men/MenProductDetails9";
import MenProductDetails10 from "./pages/ProductDetails/Men/MenProductDetails10";
import MenProductDetails11 from "./pages/ProductDetails/Men/MenProductDetails11";
import MenProductDetails12 from "./pages/ProductDetails/Men/MenProductDetails12";

// Girls Product
import ProductDrtails2 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDrtails2";
import ProductDetails3 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails3";
import ProductDetails4 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails4";
import ProductDetails5 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails5";
import ProductDetails6 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails6";
import ProductDetails7 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails7";
import ProductDetails8 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails8";
import ProductDetails9 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails9";
import ProductDetails10 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails10";
import ProductDetails11 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails11";
import ProductDetails12 from "./pages/ProductDetails/ProductReaview/girlsProductDetails/productDetails12";

// kid product
import KidProductDetails1 from "./pages/ProductDetails/Kids/KidProductDetails1";
import KidProductDetails2 from "./pages/ProductDetails/Kids/KidProductDetails2";
import KidProductDetails3 from "./pages/ProductDetails/Kids/KidProductDetails3";
import KidProductDetails4 from "./pages/ProductDetails/Kids/KidProductDetails4";
import KidProductDetails5 from "./pages/ProductDetails/Kids/KidProductDetails5";
import KidProductDetails6 from "./pages/ProductDetails/Kids/KidProductDetails6";
import KidProductDetails7 from "./pages/ProductDetails/Kids/KidProductDetails7";
import KidProductDetails8 from "./pages/ProductDetails/Kids/KidProductDetails8";
import KidProductDetails9 from "./pages/ProductDetails/Kids/KidProductDetails9";
import KidProductDetails10 from "./pages/ProductDetails/Kids/KidProductDetails10";
import KidProductDetails11 from "./pages/ProductDetails/Kids/KidProductDetails11";
import KidProductDetails12 from "./pages/ProductDetails/Kids/KidProductDetails12";

import LogIn from "./pages/auth/logIn";
import Register from "./pages/auth/Register";

import Drawer from "@mui/material/Drawer";
import CartPage from "./pages/cart/CartPage";
import Forgot from "./pages/auth/Forgot";
import Payment from "./pages/cart/Payment";
import Kids_ProductListing from "./pages/Productlisting/Kids_ProductListing";

  <style>{`
  @keyframes aw-aurora-shift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes aw-glow-pulse {
    0%, 100% { opacity: 0.55; transform: scale(1); }
    50%      { opacity: 1;    transform: scale(1.04); }
  }
  .aw-scroll::-webkit-scrollbar { width: 6px; }
  .aw-scroll::-webkit-scrollbar-track { background: transparent; }
  .aw-scroll::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #6b5b95, #d4568f);
    border-radius: 999px;
  }
  .aw-close-btn { transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease; }
  .aw-close-btn:hover { background: rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.25); transform: rotate(90deg); }
  .aw-item-card { transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease; }
  .aw-item-card:hover {
    border-color: rgba(212,86,143,0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.1), 0 0 0 1px rgba(107,91,149,0.1);
  }
  .aw-remove-link { transition: color 0.2s ease, opacity 0.2s ease; opacity: 0.85; }
  .aw-remove-link:hover { color: #9b2c2c; opacity: 1; }
  .aw-clear-btn { transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease; }
  .aw-clear-btn:hover { background: rgba(197,48,48,0.06); border-color: #c53030; color: #9b2c2c; }

  .aw-buy-btn {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .aw-buy-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: -60%;
    width: 40%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
    transform: skewX(-20deg);
    transition: left 0.6s ease;
    z-index: 1;
  }
  .aw-buy-btn:hover::before { left: 130%; }
  .aw-buy-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(107,91,149,0.35);
  }
  .aw-buy-btn:active { transform: translateY(0); }
`}</style>

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
  const [openWishlistPanel, setOpenWishlistPanel] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true",
  );

  const itemCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  // add wishlist section
  const values = {
    openCartPanel,
    setOpenCartPanel,

    cartItems,
    setCartItems,

    wishlistItems,
    setWishlistItems,

    itemCount,

    isLogin,
    setIsLogin,

    openWishlistPanel,
    setOpenWishlistPanel,
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

  return (
    <MyContext.Provider value={values}>
      <style>{styleTag}</style>

      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/HelpCenter" element={<HelpCenter />} />
          <Route path="/" element={<Home />} />
          <Route path="/Productlisting" element={<Productlisting />} />
          <Route path="/Men_productListing" element={<Men_productListing />} />
          <Route
            path="/Kids_ProductListing"
            element={<Kids_ProductListing />}
          />
          <Route path="/Product/:id" element={<ProductDetails />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/Payment" element={<Payment />} />

          {/* Men product details */}
          <Route path="/MenproductDetails1" element={<MenProductDetails1 />} />
          <Route path="/menproductDetails2" element={<MenProductDetails2 />} />
          <Route path="/menproductDetails3" element={<MenProductDetails3 />} />
          <Route path="/menproductDetails4" element={<MenProductDetails4 />} />
          <Route path="/menproductDetails5" element={<MenProductDetails5 />} />
          <Route path="/menproductDetails6" element={<MenProductDetails6 />} />
          <Route path="/menproductDetails7" element={<MenProductDetails7 />} />
          <Route path="/menproductDetails8" element={<MenProductDetails8 />} />
          <Route path="/menproductDetails9" element={<MenProductDetails9 />} />
          <Route
            path="/menproductDetails10"
            element={<MenProductDetails10 />}
          />
          <Route
            path="/menproductDetails11"
            element={<MenProductDetails11 />}
          />
          <Route
            path="/menproductDetails12"
            element={<MenProductDetails12 />}
          />

          {/* girks product */}
          <Route path="/productDrtails2" element={<ProductDrtails2 />} />
          <Route path="/ProductDetails3" element={<ProductDetails3 />} />
          <Route path="/ProductDetails4" element={<ProductDetails4 />} />
          <Route path="/ProductDetails5" element={<ProductDetails5 />} />
          <Route path="/ProductDetails6" element={<ProductDetails6 />} />
          <Route path="/ProductDetails7" element={<ProductDetails7 />} />
          <Route path="/ProductDetails8" element={<ProductDetails8 />} />
          <Route path="/ProductDetails9" element={<ProductDetails9 />} />
          <Route path="/ProductDetails10" element={<ProductDetails10 />} />
          <Route path="/ProductDetails11" element={<ProductDetails11 />} />
          <Route path="/ProductDetails12" element={<ProductDetails12 />} />

          {/* kids product */}
          <Route path="/kidProductDetails1" element={<KidProductDetails1 />} />
          <Route path="/kidProductDetails2" element={<KidProductDetails2 />} />
          <Route path="/kidProductDetails3" element={<KidProductDetails3 />} />
          <Route path="/kidProductDetails4" element={<KidProductDetails4 />} />
          <Route path="/kidProductDetails5" element={<KidProductDetails5 />} />
          <Route path="/kidProductDetails6" element={<KidProductDetails6 />} />
          <Route path="/kidProductDetails7" element={<KidProductDetails7 />} />
          <Route path="/kidProductDetails8" element={<KidProductDetails8 />} />
          <Route path="/kidProductDetails9" element={<KidProductDetails9 />} />
          <Route
            path="/kidProductDetails10"
            element={<KidProductDetails10 />}
          />
          <Route
            path="/kidProductDetails11"
            element={<KidProductDetails11 />}
          />
          <Route
            path="/kidProductDetails12"
            element={<KidProductDetails12 />}
          />
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

                    {/* delete price */}
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
  
      

        <Drawer
          anchor="right"
          open={openWishlistPanel}
          onClose={() => setOpenWishlistPanel(false)}
          PaperProps={{
            style: {
              width: 400,
              background: "#ffffff",
              boxShadow: "-12px 0 48px rgba(0,0,0,0.12)",
              fontFamily: "'DM Sans', sans-serif",
              border: "none",
              borderLeft: "1px solid rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
            },
          }}
          sx={{
            // Forces the white background even if a theme's default
            // Paper background-color is winning over the inline style above.
            "& .MuiDrawer-paper": {
              backgroundColor: "#ffffff !important",
              backgroundImage: "none !important",
            },
          }}
        >
          {/* Aurora shimmer top line — signature element */}
          <div
            style={{
              height: 4,
              background:
                "linear-gradient(90deg, #0f0c29, #6b5b95, #d4568f, #302b63, #24243e)",
              backgroundSize: "300% 100%",
              animation: "aw-aurora-shift 8s ease-in-out infinite",
            }}
          />

          {/* Header */}
          <div
            style={{
              padding: "26px 28px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              background:
                "radial-gradient(120% 100% at 100% 0%, rgba(107,91,149,0.06) 0%, rgba(255,255,255,0) 60%)",
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 28,
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#111111",
                  letterSpacing: "0.3px",
                }}
              >
                My Wishlist{" "}
                <span
                 
                >
                  ❤️  
                </span>
              </h2>

              {wishlistItems.length > 0 && (
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: 11,
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: "#777777",
                  }}
                >
                  {wishlistItems.length}{" "}
                  {wishlistItems.length === 1 ? "item" : "items"} saved
                </p>
              )}
            </div>

            <button
              className="aw-close-btn"
              onClick={() => setOpenWishlistPanel(false)}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1.5px solid rgba(0,0,0,0.14)",
                background: "rgba(0,0,0,0.02)",
                cursor: "pointer",
                fontSize: 14,
                color: "#333333",
              }}
            >
              ✕
            </button>
          </div>

          {/* Wishlist Products */}
          <div
            className="aw-scroll"
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
            }}
          >
            {wishlistItems.length === 0 ? (
              /* Empty Wishlist */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: 320,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 62,
                    lineHeight: 1,
                    marginBottom: 20,
                    background:
                      "linear-gradient(135deg, #fa0a0a, #eb271d, #f90707)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 14px rgba(212,86,143,0.2))",
                    animation: "aw-glow-pulse 3.5s ease-in-out infinite",
                  }}
                >
                  ❤️
                </div>

                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 23,
                    color: "#111111",
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  Your wishlist is empty
                </p>

                <p
                  style={{
                    margin: "10px 0 0",
                    fontSize: 13,
                    color: "#888888",
                    maxWidth: 220,
                    lineHeight: 1.5,
                  }}
                >
                  Add products you love to see them here.
                </p>
              </div>
            ) : (
              /* Wishlist Items */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {wishlistItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="aw-item-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 14px",
                      background: "#faf9f7",
                      borderRadius: 14,
                      border: "1px solid rgba(0,0,0,0.06)",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* Product Image */}
                    <div
                      style={{
                        width: 75,
                        height: 90,
                        borderRadius: 10,
                        overflow: "hidden",
                        flexShrink: 0,
                        background: "#eeece8",
                        border: "1px solid rgba(0,0,0,0.05)",
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

                    {/* Product Info */}
                    <div
                      style={{
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 7px",
                          fontSize: 13.5,
                          fontWeight: 500,
                          color: "#111111",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.name}
                      </p>

                      <p
                        style={{
                          margin: "0 0 10px",
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#b8863f",
                          letterSpacing: "0.2px",
                        }}
                      >
                        ₹{item.price?.toLocaleString("en-IN")}
                      </p>

                      <button
                        className="aw-remove-link"
                        onClick={() => {
                          setWishlistItems((prev) =>
                            prev.filter(
                              (wishlistItem) => wishlistItem.id !== item.id,
                            ),
                          );
                        }}
                        style={{
                          border: "none",
                          background: "transparent",
                          padding: 0,
                          color: "#c53030",
                          fontSize: 12,
                          cursor: "pointer",
                          marginBottom: 10,
                          display: "block",
                        }}
                      >
                        Remove from Wishlist
                      </button>

                      <Link
                        to="/Payment"
                        state={{ item }}
                        className="aw-buy-btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 6,
                          width: "100%",
                          padding: "8px 12px",
                          background:
                            "linear-gradient(135deg, #6b5b95, #d4568f 55%, #b8863f)",
                          color: "#ffffff",
                          borderRadius: 7,
                          textDecoration: "none",
                          fontSize: 11.5,
                          fontWeight: 600,
                          letterSpacing: "0.6px",
                          textTransform: "uppercase",
                          boxSizing: "border-box",
                        }}
                      >
                        Buy Now
                        <span style={{ fontSize: 13, lineHeight: 1 }}>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom */}
          {wishlistItems.length > 0 && (
            <div
              style={{
                borderTop: "1px solid rgba(0,0,0,0.06)",
                padding: "16px 20px",
              }}
            >
              <button
                className="aw-clear-btn"
                onClick={() => setWishlistItems([])}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "transparent",
                  color: "#c53030",
                  border: "1px solid rgba(197,48,48,0.35)",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 12,
                  letterSpacing: "1px",
                }}
              >
                CLEAR WISHLIST
              </button>
            </div>
          )}
        </Drawer>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;
