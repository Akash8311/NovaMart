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
import KidsProduct1 from "./KidsProduct1";
import KidProduct9 from "./KidProduct9";
import KidProduct10 from "./KidProduct10";
import KidProduct11 from "./KidProduct11";
import KidProduct12 from "./KidProduct12";

import ProductZoomKid8 from "../../../components/ProductZoom/KidsProductZoom/ProductZoomKid8";
import KidProducReview8 from "../ProductReaview/KidReview/KidProducReview8";

const KidProductDetails8 = () => {
  const [selectedSize, setSelectedSize] = useState("9-10 Y");
  const [expanded, setExpanded] = useState(false);

  const sizes = [
    "18-24 M",
    "2-3 Y",
    "3-4 Y",
    "4-5 Y",
    "6-7 Y",
    "7-8 Y",
    "8-9 Y",
    "9-10 Y",
  ];

  const product = {
    id: "kids 8",
    name: "Coords Set for Girls",
    price: 719,
    image: "https://m.media-amazon.com/images/I/61KBpp-GttL._SY741_.jpg",
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
            <ProductZoomKid8 />
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
              AJ DEZINES Kids Cotton Sleeveless Co-ords Set for Girls - Casual
              Outfit
              <span style={{ color: "#555", fontWeight: "400" }}>
                {" "}
                | Vacation Wear |Beach Dress |Tropical Printed Top Pant for
                girls | Sleeveless, for Girls, Vacation Wear, Beach Dress
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
                (16 reviews)
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
                ₹719
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
                71% off
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
                  Material type
                </span>
                <span>Cotton</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Fit type
                </span>
                <span>Regular</span>

                <span style={{ fontWeight: "500", color: "#555" }}>Style</span>
                <span>Modern</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Closure type
                </span>
                <span>Button</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Care instructions
                </span>
                <span>Machine Wash</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Age range description
                </span>
                <span>Kid</span>

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
                  <strong>Premium Cotton Fabric:</strong> Made from soft,
                  breathable cotton that provides maximum comfort and durability
                  for all-day wear.
                </li>

                <li>
                  <strong>Stylish Tropical Design:</strong> Features a
                  sleeveless tropical print top with matching pants for a trendy
                  summer look.
                </li>

                {expanded && (
                  <>
                    <li>
                      <strong>Comfortable Fit:</strong> Elasticated waistband on
                      the pants ensures a secure, flexible, and comfortable fit.
                    </li>

                    <li>
                      <strong>2-Piece Co-Ord Set:</strong> Includes one stylish
                      top and one matching pant for a complete coordinated
                      outfit.
                    </li>

                    <li>
                      <strong>Perfect for Summer:</strong> Lightweight,
                      breathable fabric keeps your child cool and comfortable
                      during warm weather.
                    </li>

                    <li>
                      <strong>Ideal for Many Occasions:</strong> Perfect for
                      summer outings, casual wear, beach trips, playdates,
                      family gatherings, and vacations.
                    </li>

                    <li>
                      <strong>Easy Care:</strong> Machine wash gently with mild
                      detergent. Air dry to preserve the vibrant tropical print
                      and fabric quality.
                    </li>

                    <li>
                      <strong>Long-Lasting Quality:</strong> Premium stitching
                      and durable fabric ensure lasting comfort and everyday
                      use.
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

        <KidProducReview8 />

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
                <KidProduct2 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct3 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct4 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct5 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct6 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct7 />
              </SwiperSlide>

              <SwiperSlide>
                <KidsProduct1 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct9 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct10 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct11 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct12 />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default KidProductDetails8;
