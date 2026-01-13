import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Link as RouterLink } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import { IoShirt } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useState } from "react";
import Qtybox from "../../components/QtyBox/Qtybox";
import "./Product.css"
import ProductReview from "./ProductReview";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("40");
  const [expanded, setExpanded] = useState(false);

  const sizes = ["38", "40", "42", "44", "46", "48", "50", "52"];
  return (
    <>    <section style={{ padding: "10px", background: "#fafafa" }}>
      {/* Breadcrumb */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link
          component={RouterLink}
          to="/"
          underline="hover"
          color="inherit"
          sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <HomeIcon fontSize="small" />
          Home
        </Link>

        <Link
          underline="hover"
          color="text.primary"
          sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <WhatshotIcon fontSize="small" />
          Fashion
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <IoShirt fontSize="small" />
          Shirts
        </Link>
      </Breadcrumbs>

      <div className="container flex gap-4">
        <div
          className="ProductZoomContainer"
          style={{
            width: "30%",
            position: "sticky",
            top: "90px",
            alignSelf: "flex-start",
            height: "fit-content",
          }}
        >
          <ProductZoom />
        </div>

        <div
          className="product-content"
          style={{
            width: "60%",
            fontFamily: "'Poppins', 'Segoe UI', sans-serif",
            lineHeight: "1.6",
            marginLeft: "25px",
          }}
        >
          {/* TITLE */}
          <h1
            style={{
              fontSize: "29px",
              fontWeight: "600",
              color: "#1a1a1a",
              marginBottom: "6px",
            }}
          >
            Nova Band – Symbol Men's Solid Cotton Formal Shirt
            <span style={{ color: "#555", fontWeight: "400" }}>
              {" "}
              | Plain | Full Sleeve – Regular Fit
                 <p
            style={{
              fontSize: "19px",
              color: "blue",
             
            }}
          >
            Avilable in Stock
          </p>
            </span>
          </h1>

          {/* SUBTITLE */}
          <p style={{ fontSize: "14px", color: "#777" }}>
            Premium cotton fabric • Comfortable for daily formal wear
          </p>

          {/* RATING */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              color: "#f5a623",
              marginBottom: "10px",
            }}
          >
            ⭐⭐⭐⭐☆
            <span style={{ fontSize: "13px", color: "#555" }}>
              (581 reviews)
            </span>
          </div>

          {/* PRICE SECTION */}
          <button
            style={{
              background: "blue",
              color: "#fff",
              border: "none,",
              width: "20vh",
              height: "4vh",
              borderRadius: "5px",
            }}
          >
            Limited time deal
          </button>
         
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            
            <span
              style={{ fontSize: "28px", fontWeight: "600", color: "#B12704" }}
            >
              ₹1,299
            </span>

            <span
              style={{
                fontSize: "16px",
                color: "#777",
                textDecoration: "line-through",
              }}
            >
              ₹2,499
            </span>

            <span
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#007185",
              }}
            >
              48% off
            </span>
          </div>

          <p
            style={{
              fontSize: "13px",
              color: "#777",
              marginTop: "4px",
              paddingBottom: "12px",
              borderBottom: "2px solid #ddd",
            }}
          >
            Inclusive of all taxes
          </p>
          <div className="flex item-center"> 
          <div className="qtyBox ">
            <Qtybox/>
          </div>
          </div>
       

          {/* BADGES */}
          <div style={{ marginTop: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CiTrophy style={{ fontSize: "36px", color: "#007185" }} />
              <span style={{ color: "#007185", fontSize: "14px" }}>
                Top Brand
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "6px",
              }}
            >
              <RiSecurePaymentLine
                style={{ fontSize: "36px", color: "#007185" }}
              />
              <span style={{ color: "#007185", fontSize: "14px" }}>
                Secure Transaction
              </span>
            </div>
          </div>

          {/* SIZE SECTION */}
          <div style={{ marginTop: "20px" }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              Size: <span style={{ color: "#007185" }}>{selectedSize}</span>
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "6px",
                    border:
                      selectedSize === size
                        ? "2px solid #007185"
                        : "1px solid #ccc",
                    background: selectedSize === size ? "#e6f3f8" : "#fff",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div
            style={{
              marginTop: "22px",
              paddingTop: "14px",
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "12px",
                color: "#1a1a1a",
              }}
            >
              Product Details
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                rowGap: "10px",
                fontSize: "14px",
                color: "#333",
              }}
            >
              <span style={{ fontWeight: "500", color: "#555" }}>
                Material composition
              </span>
              <span>100% Cotton</span>

              <span style={{ fontWeight: "500", color: "#555" }}>Pattern</span>
              <span>Solid</span>

              <span style={{ fontWeight: "500", color: "#555" }}>Fit type</span>
              <span>Regular Fit</span>

              <span style={{ fontWeight: "500", color: "#555" }}>
                Sleeve type
              </span>
              <span>Long Sleeve</span>

              <span style={{ fontWeight: "500", color: "#555" }}>
                Collar style
              </span>
              <span>Classic Collar</span>

              <span style={{ fontWeight: "500", color: "#555" }}>Length</span>
              <span>Standard Length</span>

              <span style={{ fontWeight: "500", color: "#555" }}>
                Country of Origin
              </span>
              <span>India</span>
            </div>
          </div>

          <div
            style={{
              marginTop: "24px",
              paddingTop: "14px",
              borderTop: "1px solid #e0e0e0",
              fontFamily: "'Poppins', 'Segoe UI', sans-serif",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#1a1a1a",
              }}
            >
              About this item
            </h3>

            <ul
              style={{
                paddingLeft: "18px",
                fontSize: "14px",
                color: "#333",
                lineHeight: "1.7",
              }}
            >
              <li>
                <strong>FABRIC:</strong> Premium quality 100% cotton twill
                fabric with mercerised soft finish that offers superior
                breathability, smooth texture, rich color retention, and all-day
                wearing comfort.
              </li>

              <li>
                <strong>COMFORT:</strong> Lightweight and skin-friendly material
                that keeps you cool and comfortable throughout long office hours
                or daily formal use.
              </li>

              {expanded && (
                <>
                  <li>
                    <strong>FIT TYPE:</strong> Regular fit tailored to provide a
                    clean, structured look without feeling too tight or too
                    loose.
                  </li>

                  <li>
                    <strong>DESIGN:</strong> Solid pattern with a timeless
                    design that never goes out of style and pairs effortlessly
                    with trousers, chinos, or formal pants.
                  </li>

                  <li>
                    <strong>COLLAR STYLE:</strong> Classic collar that enhances
                    the formal appeal and maintains its shape even after
                    multiple washes.
                  </li>

                  <li>
                    <strong>SLEEVES:</strong> Full-length sleeves with neatly
                    stitched buttoned cuffs for a sharp and polished appearance.
                  </li>

                  <li>
                    <strong>CRAFTSMANSHIP:</strong> Precisely stitched seams and
                    durable buttons ensure long-lasting performance and premium
                    finish.
                  </li>

                  <li>
                    <strong>VERSATILITY:</strong> Suitable for office wear,
                    business meetings, interviews, formal events, and smart
                    casual occasions.
                  </li>

                  <li>
                    <strong>EASY CARE:</strong> Machine washable fabric that is
                    easy to maintain, wrinkle-resistant, and retains its
                    original shape and color over time.
                  </li>

                  <li>
                    <strong>COUNTRY OF ORIGIN:</strong> Proudly made in India
                    with attention to quality and detail.
                  </li>
                </>
              )}
            </ul>

            {/* SEE MORE / LESS */}
            <span
              onClick={() => setExpanded(!expanded)}
              style={{
                color: "#007185",
                fontSize: "14px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "8px",
                fontWeight: "500",
              }}
            >
              {expanded ? "See less...." : "See more....."}
              <span style={{ fontSize: "16px" }}>{expanded ? "" : ""}</span>
            </span>
          </div>


         
        </div>
      </div>


              <ProductReview/>
    
    </section>
    
    </>
  );
};

export default ProductDetails;
