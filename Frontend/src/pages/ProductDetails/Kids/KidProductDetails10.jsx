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

import KidProduct2 from "./KidProduct2";
import KidProduct3 from "./KidProduct3";
import KidProduct4 from "./KidProduct4";
import KidProduct5 from "./KidProduct5";
import KidProduct6 from "./KidProduct6";
import KidProduct7 from "./KidProduct7";
import KidProduct8 from "./KidProduct8";
import KidProduct9 from "./KidProduct9";
import KidsProduct1 from "./KidsProduct1";
import KidProduct11 from "./KidProduct11";
import KidProduct12 from "./KidProduct12";

import ProductZoomKid10 from "../../../components/ProductZoom/KidsProductZoom/ProductZoomKid10";
import KidProducReview10 from "../ProductReaview/KidReview/KidProducReview10";

const KidProductDetails10 = () => {
  const [selectedSize, setSelectedSize] = useState("2-3 Y");
  const [expanded, setExpanded] = useState(false);
  const sizes = ["6-12 M", "1-2 Y", "2-3 Y", "3-4 Y", "4-5 Y", "5-6 Y"];
  const product = {
    id: "kids 10",
    name: "BODYCARE Girls Shorts Pack of 2",
    price: 764,
    image: "https://m.media-amazon.com/images/I/61BDty+ZweL._SY741_.jpg",
  };

  return (
    <>
      {" "}
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
            Kids
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
            <ProductZoomKid10 />
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
              AJ DEZINES Kids
              <span style={{ color: "#555", fontWeight: "400" }}>
                {" "}
                Clothing Shirt Short Set For Boys
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
              Ideal for school, playtime, sports, travel, and home wear.
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
                (5 reviews)
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
                ₹764
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
                75% off
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
                  Material type
                </span>
                <span>Cotton Blend</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Fit type
                </span>
                <span>Regular</span>

                <span style={{ fontWeight: "500", color: "#555" }}>Style</span>
                <span>Modern</span>

                <span style={{ fontWeight: "500", color: "#555" }}>Theme</span>
                <span>Cotton</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Closure type
                </span>
                <span>Button</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Care instructions
                </span>
                <span>
                  Machine Wash (Gentle Cycle), Tumble Dry Low, Do Not Iron,
                  Store in a Cool, Dry Place
                </span>

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
                  <strong>Premium Cotton Fabric:</strong> Made from 100% pure
                  cotton for the shirt, shorts, cap, and bow tie, ensuring
                  superior comfort, breathability, and durability.
                </li>

                <li>
                  <strong>Complete 5-Piece Set:</strong> Includes 1 Shirt, 1
                  Shorts, 1 Matching Suspender, 1 Bow Tie, and 1 Cap for a smart
                  and coordinated look.
                </li>

                {expanded && (
                  <>
                    <li>
                      <strong>Classic Design:</strong> Features a half-sleeve
                      shirt with front button closure, spread collar, matching
                      bow tie, and coordinating cap for a stylish appearance.
                    </li>

                    <li>
                      <strong>Comfortable Fit:</strong> Shorts feature a
                      partially elastic waistband with button and zipper closure
                      for a secure and comfortable fit.
                    </li>

                    <li>
                      <strong>Functional Details:</strong> Includes two side
                      pockets and adjustable elastic suspenders for added
                      convenience and style.
                    </li>

                    <li>
                      <strong>Perfect for Special Occasions:</strong> Ideal for
                      birthdays, weddings, parties, festivals, family functions,
                      photoshoots, and other celebrations.
                    </li>

                    <li>
                      <strong>Available in Multiple Sizes:</strong> Designed to
                      provide the perfect fit for boys across different age
                      groups.
                    </li>

                    <li>
                      <strong>Easy Care:</strong> Machine wash with a mild
                      detergent to maintain fabric softness and long-lasting
                      color.
                    </li>

                    <li>
                      <strong>Country of Origin:</strong> Made in India.
                    </li>
                  </>
                )}
              </ul>

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

        <div>
          <h2 style={{ marginTop: "10vh", paddingBottom: "0" }}>
            Product description
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#1f1e1e",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            AJ Dezines offers a range of clothing sets for baby boys & boys that
            is inspired by the children in our lives, whose stories and dreams
            make their way into these western style. Made from cool and
            breathable cotton & polyester fabric. shorts with shirt gives
            perfect look. shorts with partial elasticated waistband ensuring
            comfort fit and easy dressing. This sets is convenient in summers,
            spring and fall. Perfect for function wear, wedding, festive wear,
            party wear, birthday, school, outside wear etc. This clothings shirt
            short set for boys is available in different colors, black, navy
            blue, white, mustard, pink, brown, black-white, blue, peach-blue and
            white-blue.
          </p>
        </div>

        <KidProducReview10 />

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
                <KidProduct4 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct6 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct11 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct8 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct2 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct12 />
              </SwiperSlide>
              <SwiperSlide>
                <KidsProduct1 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct5 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct7 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct9 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct3 />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default KidProductDetails10;
