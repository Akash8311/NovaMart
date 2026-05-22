import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Link as RouterLink } from "react-router-dom";

import ProductZoom12 from "../../../../components/ProductZoom/GirlsProductZoom/ProductZoom12";
import { IoShirt } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useState } from "react";
import Qtybox from "../../../../components/QtyBox/Qtybox";
import "../../Product.css";
import GirlsProducReview4 from "../girlsProductReview/girlsProducReview4";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProductItems from "../../../../components/ProductItems/ProductItems";
import ProductItems2 from "../../../../components/ProductItems/ProductItems2";
import ProductItems3 from "../../../../components/ProductItems/ProductItems3";
import ProductItems4 from "../../../../components/ProductItems/ProductItems4";
import ProductItems6 from "../../../../components/ProductItems/ProductItems6";
import ProductItems5 from "../../../../components/ProductItems/ProductItems5";
import ProductItems7 from "../../../../components/ProductItems/ProductItems7";
import ProductItems8 from "../../../../components/ProductItems/ProductItems8";
import ProductItems9 from "../../../../components/ProductItems/ProductItems9";
import ProductItems10 from "../../../../components/ProductItems/ProductItems10";
import ProductItems11 from "../../../../components/ProductItems/ProductItems11";
import { useContext } from "react";
import { MyContext } from "../../../../App";

const productDetails12 = (props) => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [expanded, setExpanded] = useState(false);
  const { cartItems, setCartItems } = useContext(MyContext);

  const sizes = ["S", "M", "L", "XL", "XLL"];

  const product = {
    id: "Maxi Outfit Dress  1",
    name: "Maxi Outfit Dress ",
    price: 453,
    image: "https://m.media-amazon.com/images/I/81nIM0Aoa8L._SY741_.jpg",
  };

  const addToCart = () => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          qty: 7,
          size: selectedSize,
        },
      ]);
    }
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
            Maxi Outfit Dress
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
            <ProductZoom11 />
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
              Aahwan Black Floral Printed High Slit Ruched Bust Maxi Outfit
              Dress for Women's & Girl's{" "}
              <span style={{ color: "#555", fontWeight: "400" }}>
                {" "}
                |
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
              Aahwan Black Floral Printed High Slit Ruched Bust Maxi Outfit Dress
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
              ⭐⭐⭐⭐⭐
              <span style={{ fontSize: "13px", color: "#555" }}>
                (628 reviews)
              </span>
            </div>

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
                ₹453
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
                  Material composition
                </span>
                <span>Polyester</span>

                <span style={{ fontWeight: "500", color: "#555" }}>Length</span>
                <span>Maxi</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Sleeve type
                </span>
                <span>Sleeveless</span>
                <span style={{ fontWeight: "500", color: "#555" }}>Style</span>
                <span>A-Line</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Neck style
                </span>
                <span>Sweetheart Neck</span>

                <span style={{ fontWeight: "500", color: "#555" }}>
                  Care instructions
                </span>
                <span>ODry Clean Only</span>

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
                  <strong> </strong> PThe model (height 5'7") is wearing a size S
                </li>
                <li>
                  <strong></strong> 95% Polyester, 5% Elastane, Pattern: Solid,Pattern Type-Floral
                </li>
                <li>
                  <strong></strong> UNIQUE TIE-UP STRAPS: Designed with
                  adjustable tie-up straps, this dress offers a customizable fit
                  while enhancing its stylish and trendy design for comfortable
                  fashion.
                </li>{" "}
                <li>
                  <strong></strong> BRIGHT YELLOW A-LINE STYLE: The vibrant
                  yellow color and flattering A-line silhouette make this dress
                  a standout choice for casual wear, perfect for sunny days and
                  streetwear looks.
                </li>{" "}
                <li>
                  <strong></strong> EASY CARE INSTRUCTIONS: Machine washable for
                  hassle-free maintenance, this dress is designed to retain its
                  color and shape, ensuring long-lasting wear and convenience.
                </li>
                {expanded && (
                  <>
                    <li>
                      <strong>Packer </strong>The Souled Store Pvt. Ltd.,Survey
                      Nos. 68/2,69,70/1,70/2,70/3A,70/8B,71/1A,71/1B,K Square
                      Industrial Park, before Padgha Toll Naka,Nashik – Mumbai
                      Highway, after Pushkar Mela Hotel,Kurund Village –
                      Bhiwandi, Maharashtra – 421101
                    </li>

                    <li>
                      <strong>Importer</strong>The Souled Store Pvt. Ltd.,Survey
                      Nos. 68/2,69,70/1,70/2,70/3A,70/8B,71/1A,71/1B,K Square
                      Industrial Park, before Padgha Toll Naka,Nashik – Mumbai
                      Highway, after Pushkar Mela Hotel,Kurund Village –
                      Bhiwandi, Maharashtra – 421101
                    </li>

                    <li>
                      <strong></strong> 🎁 Coordinated pant completes the outfit
                      with a neat straight fit
                    </li>

                    <li>
                      <strong>Item Weight</strong> 250 g
                    </li>

                    <li>
                      <strong>Item Dimensions LxWxH</strong> 21 x 22 x 3
                      Centimeters
                    </li>

                    <li>
                      <strong>Disclaimer </strong> Colour Of The Actual Product
                      May Slightly Vary Due To Different Photographic Lighting
                      Sources Or Your Display Color Settings Or Screen Type.
                    </li>

                    <li>
                      <strong>EASY CARE </strong> Machine washable fabric that
                      is easy to maintain, wrinkle-resistant, and retains its
                      original shape and color over time.
                    </li>

                    <li>
                      <strong>Manufacturer </strong> The Souled Store, The
                      Souled Store Pvt. Ltd.,Survey Nos.
                      68/2,69,70/1,70/2,70/3A,70/8B,71/1A,71/1B,K Square
                      Industrial Park, before Padgha Toll Naka,Nashik – Mumbai
                      Highway, after Pushkar Mela Hotel,Kurund Village –
                      Bhiwandi, Maharashtra – 421101
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

        <GirlsProducReview4 />
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
                <ProductItems />
              </SwiperSlide>

              <SwiperSlide>
                <ProductItems2 />
              </SwiperSlide>

              <SwiperSlide>
                <ProductItems3 />
              </SwiperSlide>

              <SwiperSlide>
                <ProductItems4 />
              </SwiperSlide>

              <SwiperSlide>
                <ProductItems6 />
              </SwiperSlide>

              <SwiperSlide>
                <ProductItems5 />
              </SwiperSlide>

              <SwiperSlide>
                <ProductItems7 />
              </SwiperSlide>

              <SwiperSlide>
                <ProductItems8 />
              </SwiperSlide>

              <SwiperSlide>
                <ProductItems9 />
              </SwiperSlide>

              <SwiperSlide>
                <ProductItems12 />
              </SwiperSlide>

              <SwiperSlide>
                <ProductItems11 />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default productDetails12;
