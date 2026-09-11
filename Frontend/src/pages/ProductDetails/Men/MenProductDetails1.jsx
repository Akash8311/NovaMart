import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Link as RouterLink } from "react-router-dom";
import { IoShirt } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useState } from "react";
import Qtybox from "../../../components/QtyBox/Qtybox";
import "../Product.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import MenProduct1 from "../Men/MenProduct1";
import MenProduct2 from "../Men/MenProduct2";
import MenProduct3 from "../Men/MenProduct3";
import MenProduct4 from "../Men/MenProduct4";
import MenProduct5 from "../Men/MenProduct5";
import MenProduct6 from "../Men/MenProduct6";
import MenProduct7 from "../Men/MenProduct7";
import MenProduct8 from "../Men/MenProduct8";
import MenProduct9 from "../Men/MenProduct9";
import ProductZoomMen1 from "../../../components/ProductZoom/MenProductZoom/ProductZoomMen1";
import MenProductReview1 from "../ProductReaview/MenReview/MenProductReview1";

// Scoped responsive CSS for this page. Layout-critical rules (columns,
// widths, grid, font-scaling) live here so they can use media queries;
// one-off cosmetic styles stay as inline style objects like the original.
const PDP_STYLES = `
  .mpd-container {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }

  .mpd-zoom {
    width: 30%;
    min-width: 280px;
    position: sticky;
    top: 90px;
    align-self: flex-start;
    height: fit-content;
  }

  .mpd-content {
    width: 60%;
    flex: 1 1 420px;
    min-width: 0;
    font-family: 'Poppins', 'Segoe UI', sans-serif;
    line-height: 1.6;
  }

  .mpd-title {
    font-size: 29px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 6px;
  }

  .mpd-highlights-grid {
    display: grid;
    grid-template-columns: 220px 1fr;
    row-gap: 10px;
    font-size: 14px;
    color: #333;
  }

  .mpd-deal-btn {
    background: blue;
    color: #fff;
    border: none;
    padding: 8px 18px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
  }

  .mpd-related-title {
    padding-top: 25px;
    font-weight: 400;
  }

  /* ── Tablet ── */
  @media (max-width: 1024px) {
    .mpd-zoom { width: 34%; min-width: 240px; }
    .mpd-content { width: 56%; }
    .mpd-title { font-size: 25px; }
  }

  /* ── Below tablet: stack image above content, drop sticky ── */
  @media (max-width: 860px) {
    .mpd-container { flex-direction: column; gap: 20px; }
    .mpd-zoom {
      width: 100%;
      min-width: 0;
      position: static;
      max-width: 420px;
      margin: 0 auto;
    }
    .mpd-content { width: 100%; margin-left: 0 !important; }
  }

  /* ── Mobile ── */
  @media (max-width: 600px) {
    .mpd-title { font-size: 21px; }
    .mpd-highlights-grid {
      grid-template-columns: 1fr;
      row-gap: 4px;
    }
    .mpd-highlights-grid span:nth-child(odd) { margin-top: 8px; }
    .mpd-price-row { flex-wrap: wrap; row-gap: 6px; }
    .mpd-related-title { margin-left: 0 !important; padding-left: 15px; }
  }

  @media (max-width: 400px) {
    .mpd-title { font-size: 18px; }
  }
`;

const MenProductDetails1 = () => {
  const [selectedSize, setSelectedSize] = useState("40");
  const [expanded, setExpanded] = useState(false);

  const sizes = ["S", "M", "L", "XL"];

  const product = {
    id: "mens 1",
    name: "JVX Men Sweatshirts",
    price: 599,
    image: "https://m.media-amazon.com/images/I/61MCKVRROeL._SY741_.jpg",
  };

  return (
    <>
      <style>{PDP_STYLES}</style>

      <section style={{ padding: "10px", background: "#fafafa" }}>
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

        <div className="container mpd-container">
          <div className="ProductZoomContainer mpd-zoom">
            <ProductZoomMen1 />
          </div>

          <div className="product-content mpd-content" style={{ marginLeft: "25px" }}>
            <h1 className="mpd-title">
              JVX Men Sweatshirts || Sweatshirts for Men
              <span style={{ color: "#555", fontWeight: "400" }}>
                {" "}
                || Unisex Hoodie ||Hoodie ||Available in Plus Size
                (SWEATSHIRT-11)
                <p
                  style={{
                    fontSize: "14px",
                    color: "blue",
                  }}
                >
                  Avilable in Stock
                </p>
              </span>
            </h1>

            <p style={{ fontSize: "14px", color: "#777" }}>
              Men sweatshirts || sweatshirts for Men || Unisex sweatshirts
              ||Hoodie for men || unisex hoodie || hoodie || Available in Plus
              Size
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
              ⭐⭐⭐☆☆
              <span style={{ fontSize: "13px", color: "#555" }}>
                (152 reviews)
              </span>
            </div>

            {/* PRICE SECTION */}
            <button className="mpd-deal-btn">Limited time deal</button>

            <div
              className="mpd-price-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  color: "#B12704",
                }}
              >
                ₹599
              </span>

              <span
                style={{
                  fontSize: "16px",
                  color: "#777",
                  textDecoration: "line-through",
                }}
              >
                ₹2,999
              </span>

              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#007185",
                }}
              >
                80% off
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
                <Qtybox product={product} />
              </div>
            </div>

            {/* BADGES */}
            <div style={{ marginTop: "12px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
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
                Top highlights
              </h3>

              <div className="mpd-highlights-grid">
                <span style={{ fontWeight: "500", color: "#555" }}>
                  Material composition
                </span>
                <span>Wool Blend</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Sleeve type
                </span>
                <span>Long Sleeve</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Material type
                </span>
                <span>Wool Blend</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Fit type
                </span>
                <span>Regular</span>

                <span style={{ fontWeight: "500", color: "#555" }}>Length</span>
                <span>Standard Length</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Neck style
                </span>
                <span>Collared Neck</span>

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
                  breathability, smooth texture, rich color retention, and
                  all-day wearing comfort.
                </li>

                <li>
                  <strong>COMFORT:</strong> Lightweight and skin-friendly
                  material that keeps you cool and comfortable throughout long
                  office hours or daily formal use.
                </li>

                {expanded && (
                  <>
                    <li>
                      <strong>FIT TYPE:</strong> Regular fit tailored to provide
                      a clean, structured look without feeling too tight or too
                      loose.
                    </li>

                    <li>
                      <strong>DESIGN:</strong> Solid pattern with a timeless
                      design that never goes out of style and pairs effortlessly
                      with trousers, chinos, or formal pants.
                    </li>

                    <li>
                      <strong>COLLAR STYLE:</strong> Classic collar that
                      enhances the formal appeal and maintains its shape even
                      after multiple washes.
                    </li>

                    <li>
                      <strong>SLEEVES:</strong> Full-length sleeves with neatly
                      stitched buttoned cuffs for a sharp and polished
                      appearance.
                    </li>

                    <li>
                      <strong>CRAFTSMANSHIP:</strong> Precisely stitched seams
                      and durable buttons ensure long-lasting performance and
                      premium finish.
                    </li>

                    <li>
                      <strong>VERSATILITY:</strong> Suitable for office wear,
                      business meetings, interviews, formal events, and smart
                      casual occasions.
                    </li>

                    <li>
                      <strong>EASY CARE:</strong> Machine washable fabric that
                      is easy to maintain, wrinkle-resistant, and retains its
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

        <MenProductReview1 />

        <div className="Related-Product">
          <h2 className="mpd-related-title" style={{ marginLeft: "15px" }}>
            Related Products
          </h2>
          <div className="men-products">
            <Swiper
              slidesPerView={6}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0:    { slidesPerView: 2.2, spaceBetween: 8 },
                480:  { slidesPerView: 3,   spaceBetween: 10 },
                768:  { slidesPerView: 4,   spaceBetween: 12 },
                1024: { slidesPerView: 5,   spaceBetween: 12 },
                1280: { slidesPerView: 6,   spaceBetween: 0 },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <MenProduct1 />
              </SwiperSlide>

              <SwiperSlide>
                <MenProduct2 />
              </SwiperSlide>

              <SwiperSlide>
                <MenProduct3 />
              </SwiperSlide>

              <SwiperSlide>
                <MenProduct4 />
              </SwiperSlide>

              <SwiperSlide>
                <MenProduct5 />
              </SwiperSlide>

              <SwiperSlide>
                <MenProduct6 />
              </SwiperSlide>

              <SwiperSlide>
                <MenProduct7 />
              </SwiperSlide>

              <SwiperSlide>
                <MenProduct8 />
              </SwiperSlide>
              <SwiperSlide>
                <MenProduct9 />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenProductDetails1;