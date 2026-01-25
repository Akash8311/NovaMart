import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";

const MenProduct2 = () => {
  const [wishlist, setWishlist] = useState(false);
  const [hover, setHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="productCard"
        style={{
          width: "220px",
          background: "#fff",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.08)",
          cursor: "pointer",
          transition: "0.3s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Button Container */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            zIndex: 1000,
          }}
        >
          {/* Wishlist Button */}
          {hover && (
            <button
              onClick={() => setWishlist(!wishlist)}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "1px solid #e6e6e6",
                backgroundColor: wishlist ? "#FFE5E5" : "white",
                color: wishlist ? "red" : "#444",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                cursor: "pointer",
                transition: "all .35s ease",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                opacity: hover ? 1 : 0,
                transform: "translateX(0)",
                animation: "fadeButtons .4s ease forwards",
              }}
              onMouseEnter={(e) => {
                if (!wishlist) {
                  e.target.style.backgroundColor = "#B3E5FC";
                  e.target.style.color = "#1976D2";
                }
                e.target.style.transform = "scale(1.12)";
              }}
              onMouseLeave={(e) => {
                if (!wishlist) {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "#444";
                } else {
                  e.target.style.backgroundColor = "#FFE5E5";
                  e.target.style.color = "red";
                }
                e.target.style.transform = "scale(1)";
              }}
            >
              {wishlist ? <FaHeart /> : <CiHeart />}
            </button>
          )}

          {/*  Compare Button */}
          {hover && (
            <button
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "1px solid #e6e6e6",
                backgroundColor: "white",
                color: "#444",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                cursor: "pointer",
                transition: "all .35s ease",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                opacity: hover ? 1 : 0,
                animation: "fadeButtons .55s ease forwards",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#B3E5FC";
                e.target.style.color = "#1976D2";
                e.target.style.transform = "scale(1.12)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#444";
                e.target.style.transform = "scale(1)";
              }}
            >
              <IoIosGitCompare />
            </button>
          )}

          {/*  Zoom Button */}
          {hover && (
            <button
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "1px solid #e6e6e6",
                backgroundColor: "white",
                color: "#444",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                cursor: "pointer",
                transition: "all .35s ease",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                opacity: hover ? 1 : 0,
                animation: "fadeButtons .7s ease forwards",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#B3E5FC";
                e.target.style.color = "#1976D2";
                e.target.style.transform = "scale(1.12)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#444";
                e.target.style.transform = "scale(1)";
              }}
            >
              <MdZoomOutMap />
            </button>
          )}
        </div>

        <Link to="/MenProductDetails2" style={{ textDecoration: "none", color: "#777" }}>
          <div
            style={{
              width: "100%",
              height: "200px",
              overflow: "hidden",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? "https://m.media-amazon.com/images/I/81v5iVPdONL._SY741_.jpg" : "https://m.media-amazon.com/images/I/81epRpV+jxL._SY741_.jpg"}
              alt="product"
              style={{
                width: "70%",
                height: "100%",
                objectFit: "cover",
                transition: "0.4s",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            />
          </div>

          {/* Product Name */}
          <h4
            style={{
              fontSize: "15px",
              fontWeight: "600",
              color: "#333",
              marginTop: "10px",
            }}
          >
          Highlander Men HLSH015266
          </h4>

          {/* Description */}
          <p
            style={{
              fontSize: "13px",
              color: "#777",
              height: "38px",
              overflow: "hidden",
              margin: "0",
            }}
          >
            55% COTTON 45% POLY
          </p>

          {/* Price Section */}
          <div
            style={{
              marginTop: "6px",
              display: "flex",
              justifyContent: "center",
              gap: "7px",
            }}
          >
            <span
              style={{ fontWeight: "700", fontSize: "16px", color: "#ff4b4b" }}
            >
              ₹599
            </span>
            <span
              style={{
                textDecoration: "line-through",
                color: "#999",
                fontSize: "13px",
              }}
            >
              ₹1949
            </span>
            <span
              style={{ color: "blue", fontSize: "14px", fontWeight: "600" }}
            >
              69% OFF
            </span>
          </div>

          {/* Rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              marginTop: "6px",
            }}
          >
            ⭐⭐⭐⭐⭐
            <span style={{ fontSize: "13px", color: "#555" }}>(3021)</span>
          </div>

          {/* Delivery */}
          <p
            style={{
              marginTop: "6px",
              fontSize: "13px",
              fontWeight: "600",
              color: "blue",
            }}
          >
            🚚 Free Delivery
          </p>
        </Link>
      </div>
    </>
  );
};

export default MenProduct2