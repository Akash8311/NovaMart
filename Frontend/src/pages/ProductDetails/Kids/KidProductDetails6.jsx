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
import KidsProduct1 from "./KidsProduct1";
import KidProduct7 from "./KidProduct7";
import KidProduct8 from "./KidProduct8";
import KidProduct9 from "./KidProduct9";
import KidProduct10 from "./KidProduct10";
import KidProduct11 from "./KidProduct11";
import KidProduct12 from "./KidProduct12";

import ProductZoomKid6 from "../../../components/ProductZoom/KidsProductZoom/ProductZoomKid6";
import KidProducReview6 from "../ProductReaview/KidReview/KidProducReview6";

const KidProductDetails6 = () => {
  const [selectedSize, setSelectedSize] = useState("5-6 Y");
  const [expanded, setExpanded] = useState(false);

  const sizes = [
    "2-3 Y",
    "3-4 Y",
    "4-5 Y",
    "5-6 Y",
    "6-7 Y",
    "7-8 Y",
    "8-9 Y",
    "9-10 Y",
    "10-11 Y",
  ];

  const product = {
    id: "KIDS 6",
    name: "AJ DEZINES Boys Cotton ",
    price: 424,
    image: "https://m.media-amazon.com/images/I/61gZOmei98L._SY550_.jpg",
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
            <ProductZoomKid6 />
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
              AJ DEZINES Boys Cotton Full Sleeve Printed Kurta
              <span style={{ color: "#555", fontWeight: "400" }}>
                {" "}
                Pajama Set for Kids - Ethnic wear | Special Occasion &
                Traditional Outfit |Boys Kurta Pyjama Set - Regular Fit
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

            <p style={{ fontSize: "14px", color: "#777" }}></p>

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
                (36 reviews)
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
                ₹424
              </span>

              <span
                style={{
                  fontSize: "16px",
                  color: "#777",
                  textDecoration: "line-through",
                }}
              >
                ₹1,99
              </span>

              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#007185",
                }}
              >
                77% off
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
    <strong>Premium Cotton Fabric:</strong> Made from high-quality cotton that is soft, lightweight, breathable, and comfortable for all-day wear.
  </li>

  <li>
    <strong>Traditional Design:</strong> Features a stylish mandarin collar, front button closure, side slits, and a straight hem for a classic ethnic look.
  </li>

  {expanded && (
    <>
      <li>
        <strong>Comfortable Pajama:</strong> Straight-fit pajama with a partially elasticated waistband provides a secure and comfortable fit.
      </li>

      <li>
        <strong>Complete 2-Piece Set:</strong> Includes one kurta and one matching pajama for a coordinated traditional outfit.
      </li>

      <li>
        <strong>Perfect for Special Occasions:</strong> Ideal for weddings, festivals, family gatherings, religious ceremonies, cultural events, Diwali, Eid, and Independence Day celebrations.
      </li>

      <li>
        <strong>Versatile Style:</strong> Easily pairs with traditional footwear and accessories for a complete festive look.
      </li>

      <li>
        <strong>Ideal for Photoshoots:</strong> A stylish ethnic outfit that's perfect for memorable family and festive photos.
      </li>

      <li>
        <strong>Garment Care:</strong> Machine wash separately using a mild detergent. Avoid harsh detergents to preserve the fabric quality.
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

        <KidProducReview6 />

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
                <KidsProduct1 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct7 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct8 />
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

export default KidProductDetails6;
