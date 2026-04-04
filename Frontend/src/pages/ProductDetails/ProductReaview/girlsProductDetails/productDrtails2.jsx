import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Link as RouterLink } from "react-router-dom";

import ProductZoom2 from "../../../../components/ProductZoom/GirlsProductZoom/ProductZoom2";
import { IoShirt } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useState } from "react";
import Qtybox from "../../../../components/QtyBox/Qtybox";
import "../../Product.css";
import GirlsProducReview2 from "../girlsProductReview/girlsProducReview2";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import ProductItems from "../../../../components/ProductItems/ProductItems";
import ProductItems3 from "../../../../components/ProductItems/ProductItems3";
import ProductItems4 from "../../../../components/ProductItems/ProductItems4";
import ProductItems5 from "../../../../components/ProductItems/ProductItems5";
import ProductItems6 from "../../../../components/ProductItems/ProductItems6";
import ProductItems7 from "../../../../components/ProductItems/ProductItems7";
import ProductItems8 from "../../../../components/ProductItems/ProductItems8";
import ProductItems9 from "../../../../components/ProductItems/ProductItems9";
import ProductItems10 from "../../../../components/ProductItems/ProductItems10";
import ProductItems11 from "../../../../components/ProductItems/ProductItems11";
import ProductItems12 from "../../../../components/ProductItems/ProductItems12";


const productDrtails2 = (props) => {
  const [selectedSize, setSelectedSize] = useState("L");
  const [expanded, setExpanded] = useState(false);

  const sizes = ["S", "M", "L"];


  
  const product = {
  id: 2,
  name: "GRECIILOOKS Women's V-Neck Slit Maxi",
  price: 529
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
            <ProductZoom2 />
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
            GRECIILOOKS Women's V-Neck Slit Maxi || Dress Printed Boho Style, Short Sleeve, Tie Waist, Summer Casual Outfit
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
              Premium cotton fabric • Comfortable for party wear
            </p>

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
                (51 reviews)
              </span>
            </div>

            {/* PRICE SECTION */}
            {/* <button
              style={{
                background: "blue",
                color: "#fff",
                border: "none,",
                width: "20vh",
                height: "4vh",
                borderRadius: "5px",
              }}
            >
              
            </button> */}

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
                ₹529
              </span>

              <span
                style={{
                  fontSize: "16px",
                  color: "#777",
                  textDecoration: "line-through",
                }}
              >
                ₹1,999
              </span>

              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#007185",
                }}
              >
                74% off
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
                  Material composition
                </span>
                <span>100% Cotton</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  colour
                </span>
                <span>Blue</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Waist Style
                </span>
                <span>Fitted</span>

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
                  <strong>Polly Rayon Blend:</strong> This one-piece dress for women is crafted from a polly rayon blend material, featuring a stylish floral print that makes it an ideal beach dress for women.
                </li>

                <li>
                  <strong>Style & Length:</strong> This birthday dress for women in a western wear style has a chic midi length with a front open collar and button-down design, making it a sophisticated dress for women stylish enough for any occasion.
                </li>

                {expanded && (
                  <>
                    <li>
                      <strong>Versatile Occasions:</strong> Whether you're looking for a party wear dress for women , an office-ready outfit, or a relaxed look for beach wear, this one piece dress for women is perfect for western wear , summer outings, picnics, vacations, and more. It’s a must-have midi dress for women summer adventures or a standout birthday dress for women .
                    </li>

                    <li>
                      <strong>Summer Beach Wear:</strong>Stay cool and fashionable in our summer collection with this beach party wear one piece dress —the perfect long dress for women to embrace the season in style.
                    </li>

                    <li>
                      <strong>COLLAR STYLE:</strong> Classic collar that
                      enhances the formal appeal and maintains its shape even
                      after multiple washes.
                    </li>

                    <li>
                      <strong>Size recommendation:</strong> please use the infographic size chart guidance to determine your perfect size; a size large is recommended stylish dress for women.
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

               <GirlsProducReview2/>
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
          <ProductItems/>
        </SwiperSlide>


        <SwiperSlide>
          <ProductItems3/>
        </SwiperSlide>


        <SwiperSlide>
          <ProductItems4/>
        </SwiperSlide>

        <SwiperSlide>
        <ProductItems5/>
        </SwiperSlide>

        <SwiperSlide>
          <ProductItems6/>
        </SwiperSlide>

        <SwiperSlide>
          <ProductItems7/>
        </SwiperSlide>

        <SwiperSlide>
          <ProductItems8/>
          </SwiperSlide>


        <SwiperSlide>
          <ProductItems9/>
        </SwiperSlide>

        <SwiperSlide>
          <ProductItems10/>
        </SwiperSlide>

        <SwiperSlide>
          <ProductItems12/>
        </SwiperSlide>

        <SwiperSlide>
          <ProductItems11/>
        </SwiperSlide>
      </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default productDrtails2