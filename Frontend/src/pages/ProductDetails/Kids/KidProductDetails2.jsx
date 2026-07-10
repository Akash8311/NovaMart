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

import KidsProduct1 from "./KidsProduct1";
import KidProduct3 from "./KidProduct3";
import KidProduct4 from "./KidProduct4";
import KidProduct5 from "./KidProduct5";
import KidProduct6 from "./KidProduct6";
import KidProduct7 from "./KidProduct7";
import KidProduct8 from "./KidProduct8";
import KidProduct9 from "./KidProduct9";
import KidProduct10 from "./KidProduct10";
import KidProduct11 from "./KidProduct11";
import KidProduct12 from "./KidProduct12";

import ProductZoomKid2 from "../../../components/ProductZoom/KidsProductZoom/ProductZoomKid2";
import KidProducReview1 from "../ProductReaview/KidReview/KidProducReview1";

const KidProductDetails2 = () => {
  const [selectedSize, setSelectedSize] = useState("40");
  const [expanded, setExpanded] = useState(false);

  const sizes = ["S", "M", "L", "XL"];

  const product = {
    id: 5,
    name: "Bodycare Girls Solid Cotton Shorts",
    price: 325,
    image: "https://m.media-amazon.com/images/I/51vJ5XUz2HL._SX569_.jpg",
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
            <ProductZoomKid2 />
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
              DYCA by Bodycare Girls Solid Cotton Shorts
              <span style={{ color: "#555", fontWeight: "400" }}>
                {" "}
                Casual Regular Fit, Comfortable Shorts with Side Pockets for
                Kids
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
                (56 reviews)
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
                ₹325
              </span>

              <span
                style={{
                  fontSize: "16px",
                  color: "#777",
                  textDecoration: "line-through",
                }}
              >
                ₹349
              </span>

              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#007185",
                }}
              >
                7% off
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
                <span>Single Jersey</span>

                <span style={{ fontWeight: "500", color: "#555" }}>Style</span>
                <span>Regular Shorts</span>

                <span style={{ fontWeight: "500", color: "#555" }}>Length</span>
                <span>Knee Length</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Regular Fit
                </span>
                <span>Regular</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Material type
                </span>
                <span>Single Jersey Cotton</span>

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
                  <strong>Soft & Breathable Fabric:</strong>Soft Cotton Fabric-Crafted from cotton fabric, these girls' shorts provide a soft, breathable, and skin-friendly feel that keeps kids comfortable throughout the day. The lightweight material allows proper air circulation, making it perfect for warm weather, active playtime, and everyday wear
                </li>

                <li>
                  <strong></strong> Comfortable Regular Fit Design-These casual shorts are designed with a regular fit that offers the perfect balance of comfort and style. The relaxed structure allows easy movement, making them ideal for running, playing, or relaxing at home without feeling tight or restrictive.
                </li>

                {expanded && (
                  <>
                    <li>
                      <strong></strong> Stylish Solid Color Look-Featuring a simple yet trendy solid color design, these kids' shorts are easy to pair with t-shirts, tops, or casual wear. The versatile style makes them suitable for different occasions such as outings, vacations, school activities, or daily casual wear.
                    </li>

                    <li>
                      <strong></strong>Functional Side Pockets-Equipped with convenient side pockets, these shorts allow kids to carry small essentials like toys, hair clips, or little treasures. The pockets also add a practical and stylish element to the overall design.
                    </li>

                    <li>
                      <strong></strong> Perfect for Daily Wear-These comfortable cotton shorts are great for multiple activities including playtime, sports practice, travel, picnics, and home wear. The durable stitching and quality fabric ensure long-lasting use even with regular washing and active use.
                    </li>

                    <li>
                      <strong>Perfect for Multiple Occasions:</strong> Ideal for
                      school, playtime, sports, travel, and home wear.
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
                      <strong>EASY CARE:</strong> MMachine Wash
                    </li>

                    <li>
                      <strong>COUNTRY OF ORIGIN:</strong> Proudly made in India
                      with attention to quality and detail.
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

        <KidProducReview1 />

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
                <KidsProduct1 />
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
export default KidProductDetails2;
