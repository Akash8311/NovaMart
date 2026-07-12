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
import KidsProduct1 from "./KidsProduct1";
import KidProduct12 from "./KidProduct12";

import ProductZoomKid11 from "../../../components/ProductZoom/KidsProductZoom/ProductZoomKid11";
import KidProducReview11 from "../ProductReaview/KidReview/KidProducReview11";

const KidProductDetails11 = () => {
  const [selectedSize, setSelectedSize] = useState("3-4 Y");

  const [expanded, setExpanded] = useState(false);
  const sizeData = {
  "2-3 Y": { price: 899, original: 1299, discount: 31 },
  "3-4 Y": { price: 999, original: 1299, discount: 23 },
  "4-5 Y": { price: 899, original: 1299, discount: 31 },
  "5-6 Y": { price: 899, original: 1299, discount: 31 },
  "6-7 Y": { price: 899, original: 1299, discount: 31 },
};
const sizes = Object.keys(sizeData);
const current = sizeData[selectedSize];


  const product = {
    id: "kids 11",
    name: "Boys Printed Denim Halfsleeve",
    price: current.price,
    image: "https://m.media-amazon.com/images/I/61GYuAjxm9L._SX679_.jpg",
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
            <ProductZoomKid11 />
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
              superminis Boys Printed Denim Halfsleeve Co-ord Set
              <span style={{ color: "#555", fontWeight: "400" }}>
                {" "}
                {/* || Unisex Hoodie ||Hoodie ||Available in Plus Size
                (SWEATSHIRT-11) */}
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
              Ideal for playtime, sports, travel, and home wear.
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
                (21 reviews)
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
  ₹{current.price}
</span>

<span
  style={{
    fontSize: "16px",
    color: "#777",
    textDecoration: "line-through",
  }}
>
  ₹{current.original}
</span>

<span
  style={{
    fontSize: "16px",
    fontWeight: "500",
    color: "#007185",
  }}
>
  {current.discount}% off
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
    gap: "12px",
    flexWrap: "wrap",
  }}
>
  {Object.entries(sizeData).map(([size, data]) => (
    <button
      key={size}
      onClick={() => setSelectedSize(size)}
      style={{
        width: "95px",
        minHeight: "85px",
        borderRadius: "8px",
        border:
          selectedSize === size
            ? "2px solid #007185"
            : "1px solid #d5d9d9",
        background: selectedSize === size ? "#e6f3f8" : "#fff",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.2s",
      }}
    >
      <span
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: "#111",
        }}
      >
        {size}
      </span>

      <span
        style={{
          fontSize: "15px",
          fontWeight: "600",
          color: "#B12704",
          marginTop: "6px",
        }}
      >
        ₹{data.price}
      </span>

      <span
        style={{
          fontSize: "11px",
          color: "#777",
          textDecoration: "line-through",
        }}
      >
        ₹{data.original}
      </span>
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
                <span>Denim</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Fit type
                </span>
                <span>Regular</span>

                <span style={{ fontWeight: "500", color: "#555" }}>Style</span>
                <span>Casual</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Closure type
                </span>
                <span>Pull On</span>

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
                  <strong>Premium Denim Fabric:</strong> Made from high-quality
                  denim fabric for superior durability, comfort, and a stylish
                  look.
                </li>

                <li>
                  <strong>Modern Solid Design:</strong> Features a solid pattern
                  that gives boys a smart, fashionable, and trendy appearance.
                </li>

                {expanded && (
                  <>
                    <li>
                      <strong>Stylish Shirt Design:</strong> Designed with a
                      classic collar neck and half sleeves for a modern casual
                      look.
                    </li>

                    <li>
                      <strong>Comfortable Fit:</strong> Soft and breathable
                      fabric ensures all-day comfort while allowing easy
                      movement.
                    </li>

                    <li>
                      <strong>Perfect for Special Occasions:</strong> Ideal for
                      weddings, birthday parties, festivals, family functions,
                      photoshoots, and other celebrations.
                    </li>

                    <li>
                      <strong>Versatile Wear:</strong> Suitable for both festive
                      occasions and casual outings, making it a great wardrobe
                      essential.
                    </li>

                    <li>
                      <strong>Easy Care:</strong> Gentle machine wash
                      recommended. Wash dark colors separately to maintain color
                      and fabric quality.
                    </li>

                    <li>
                      <strong>Long-Lasting Quality:</strong> Premium stitching
                      and durable denim fabric ensure excellent performance
                      after repeated use.
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
            Superminis Dress your little boy in style with the Clothing Set,
            designed for boys aged 2 to 10 years. Made from denim fabric, this
            stylish blue outfit offers both comfort and durability for all-day
            wear. Featuring a smart collar neck and trendy half sleeves, the
            solid-pattern design gives a classy and fashionable look Ideal for
            special occasions. Whether it’s a festive celebration, wedding
            function, or party event, this outfit ensures your child stands out
            with confidence and charm. The soft and breathable fabric provides
            ease of movement while maintaining a stylish appearance, making it
            an ideal addition to your kid’s wardrobe.
          </p>
        </div>

        <KidProducReview11 />

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
                <KidProduct8 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct9 />
              </SwiperSlide>

              <SwiperSlide>
                <KidProduct10 />
              </SwiperSlide>

              <SwiperSlide>
                <KidsProduct1 />
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

export default KidProductDetails11;
