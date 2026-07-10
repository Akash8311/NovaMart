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
import MenProduct7 from "../Men/MenProduct7";
import MenProduct8 from "../Men/MenProduct8";
import MenProduct9 from "../Men/MenProduct9";
import ProductZoomMen6 from "../../../components/ProductZoom/MenProductZoom/ProductZoomMen6";
import MenProductReview6 from "../ProductReaview/MenReview/MenProductReview6.JSX";

const MenProductDetails6 = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [expanded, setExpanded] = useState(false);

  const sizes = ["S", "M", "L"];

  const product = {
    id: "Cotton Checks Shirt1",
    name: "Men’s Cotton Checks Shirt ",
    price: 410,
    image: "https://m.media-amazon.com/images/I/A1i0ldOB-3L._SX679_.jpg",
  };
  return (
    <>
      {" "}
      <section style={{ padding: "10px", background: "#fafafa" }}>
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
            Cotton Checks Shirt
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
            <ProductZoomMen6 />
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
            <h1
              style={{
                fontSize: "29px",
                fontWeight: "600",
                color: "#1a1a1a",
                marginBottom: "6px",
              }}
            >
              Men’s Cotton Checks Shirt
              <span style={{ color: "#555", fontWeight: "400" }}>
                {" "}
              Men’s Cotton Checks Shirt with Full Sleeves, Soft Fabric Construction, Classic Collar for Everyday Casual Style Or Special Occasion{" "}
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

            {/* SUBTITLE */}
            <p style={{ fontSize: "14px", color: "#777" }}>
            
L
M is your recommended size based on millions of customer orders.

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
                (1,309 reviews)
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
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  color: "#B12704",
                }}
              >
                ₹410
              </span>

              <span
                style={{
                  fontSize: "16px",
                  color: "#777",
                  textDecoration: "line-through",
                }}
              >
                ₹820
              </span>

              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#007185",
                }}
              >
                50% off
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
                  Material type{" "}
                </span>
                <span>Cotton</span>
                <span style={{ fontWeight: "500", color: "#555" }}>
                  Fit type
                </span>
                <span>Classic Fit
</span>

                <span style={{ fontWeight: "500", color: "#555" }}>length</span>
                <span>Long Length</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Collar style
                </span>
                <span>Collared Neck</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                 Sleeve type
                </span>
                <span>Long Sleeve
</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Neck style
                </span>
                <span>Collared Neck</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Care instructions
                </span>
                <span>Machine Wash</span>

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
                  <strong></strong> Engineered With A Refined Blend Of Premium Cotton Fibers That Provide Exceptional Breathability, Natural Softness And A Smooth Skin-Friendly Feel, Ensuring Unmatched Comfort During Long Working Hours, Travel Days, Or Casual Weekend Outings.
                </li>

                <li>
                  <strong></strong> Designed With An Elegant Multi-Tone Check Pattern That Adds Depth, Visual Appeal, And Timeless Charm To Your Wardrobe, Making It Effortlessly Suitable For Office Meetings, Outdoor Gatherings, Festive Celebrations, Or Everyday Smart-Casual Styling.

                </li>

                {expanded && (
                  <>
                    <li>
                      <strong></strong> Features A Meticulously Structured Collar, Reinforced Button Placket, And Precision-Cut Panels That Maintain The Shirt’s Crisp Silhouette, Ensuring It Stays Neatly Fitting And Visually Sharp Even After Repeated Wear And Multiple Wash Cycles.
                    </li>

                    <li>
                      <strong></strong> Constructed Using Durable, Double Stitched Seams And Reinforced Stress Points That Enhance Longevity, Prevent Tearing, And Ensure The Shirt Withstands Daily Usage, Frequent Washing, And Regular Ironing Without Wear And Tear.
                    </li>

                    <li>
                      <strong></strong> Versatile Design Enables Seamless Pairing With Jeans, Chinos, Trousers, Or Jackets, Allowing You To Create Multiple Outfits With One Staple Piece While Maintaining A Stylish, Confident, And Well-Put-Together Look.
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
                      <strong>Manufacturer:</strong> SUNMEGH FASHION, SUNMEGH FASHION
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

        <MenProductReview6 />

        <div className="Related-Product">
          <h2
            style={{
              marginLeft: "15px",
              paddingTop: "25px",
              fontWeight: "400",
            }}
          >
            Related Products
          </h2>
          <div className="men-products">
            <Swiper
              slidesPerView={6}
              spaceBetween={0}
              pagination={{
                clickable: true,
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

export default MenProductDetails6;
