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
import KidProduct10 from "./KidProduct10";
import KidProduct11 from "./KidProduct11";
import KidsProduct1 from "./KidsProduct1";

import ProductZoomKid12 from "../../../components/ProductZoom/KidsProductZoom/ProductZoomKid12";
import KidProducReview12 from "../ProductReaview/KidReview/KidProducReview12";

const KidProductDetails12 = () => {
  const [selectedSize, setSelectedSize] = useState("9-10 Y");
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
    id: "kids 12",
    name: " Indian Bollywood Style",
    price: 949,
    image: "https://m.media-amazon.com/images/I/71UDtIDpa2L._SY741_.jpg",
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
            <ProductZoomKid12 />
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
              AHHAAAA Kids Ethnic Silk Indian Bollywood
              <span style={{ color: "#555", fontWeight: "400" }}>
                {" "}
                Style Print Indo-Western Sherwani Set For Boys 521MF
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
              Ideal for playtime, travel, and home wear.
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
                |(252 reviews)
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
                ₹949
              </span>

              <span
                style={{
                  fontSize: "16px",
                  color: "#777",
                  textDecoration: "line-through",
                }}
              >
                ₹3,999
              </span>

              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#007185",
                }}
              >
                76% off
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
                  Material composition
                </span>
                <span>Silk Blend</span>

                <span style={{ fontWeight: "500", color: "#555" }}>Style</span>
                <span>Ethnic Wear</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Fit type
                </span>
                <span>Regular Fit</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Care instructions
                </span>
                <span>Dry Clean Only</span>

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
                  <strong>Premium Silk Blend Fabric:</strong> Crafted from
                  high-quality Art Silk with elegant mirror work for a rich and
                  traditional ethnic look.
                </li>

                <li>
                  <strong>Complete 3-Piece Set:</strong> Includes 1 Kurta, 1
                  Waistcoat, and 1 Matching Pant for a stylish festive outfit.
                </li>

                {expanded && (
                  <>
                    <li>
                      <strong>Comfortable Regular Fit:</strong> Designed to
                      provide a comfortable fit while allowing easy movement for
                      kids.
                    </li>

                    <li>
                      <strong>Perfect for Every Celebration:</strong> Ideal for
                      weddings, festivals, temple visits, birthdays, Diwali,
                      Holi, Navratri, Dussehra, Christmas, Onam, Pongal, Ugadi,
                      and other special occasions.
                    </li>

                    <li>
                      <strong>Traditional Ethnic Design:</strong> Features a
                      beautifully crafted waistcoat with mirror work, giving a
                      royal and elegant appearance.
                    </li>

                    <li>
                      <strong>Suitable Age Group:</strong> Available in sizes
                      suitable for children from 2 years to 11 years.
                    </li>

                    <li>
                      <strong>Easy Care:</strong> Dry clean recommended. For
                      light cleaning, use a gentle cold wash to preserve the
                      fabric and embroidery.
                    </li>

                    <li>
                      <strong>Color Disclaimer:</strong> Product color may vary
                      slightly due to screen brightness and display settings.
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
            Specially handcrafted clothing collection for the kid's boys; these
            ethnic wear are quite comfortable to wear and skin-friendly as well.
            It will give your rockstar a fabulous ethnic look!Kids Ethnic Silk
            Blend Sherwani Set for Children!This kids clothes have a soft
            texture and the fit is regular for boys clothing. These party wear
            for boys set featureing an eye-catching design!Kids Ethnic Silk
            Blend Sherwani Set for Children!hese ethnics wear are quite
            comfortable to wear and skin-friendly as well. It will give your
            rockstar a fabulous ethnic look!Kids Ethnic Silk Blend Sherwani Set
            for Children!Marriages; Weddings; Temple visit; all festive wear;
            Diwali; Navratri; Dussehra; pooja; Christmas; Onam; Pongal; Ganesha;
            Ugadi; birthday all spacial occasion!
          </p>
        </div>

        <KidProducReview12 />

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
                <KidProduct7 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct3 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct10 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct5 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct9 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct2 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct12 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct8 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct6 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct11 />
              </SwiperSlide>
              <SwiperSlide>
                <KidProduct4 />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default KidProductDetails12;
