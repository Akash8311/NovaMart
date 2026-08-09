import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../../App";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";

const MenProduct10 = () => {
  const [wishlist, setWishlist] = useState(false);
  const [hover, setHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { wishlistItems, setWishlistItems } = useContext(MyContext);

  const product = {
    id: "mens-10",
    name: "Casual Regular Fit Mandarin",
    price: 499,
    image: "https://m.media-amazon.com/images/I/71rAudDi6-L._SY741_.jpg",
  };

  // Wishlist toggle
  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (wishlist) {
      // Remove from wishlist
      setWishlistItems(
        wishlistItems.filter((item) => item.id !== product.id)
      );

      setWishlist(false);
    } else {
      // Add to wishlist
      setWishlistItems([...wishlistItems, product]);

      setWishlist(true);
    }
  };

  return (
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
      {/* Buttons */}
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
            onClick={handleWishlist}
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
              animation: "fadeButtons .4s ease forwards",
            }}
            onMouseEnter={(e) => {
              if (!wishlist) {
                e.currentTarget.style.backgroundColor = "#B3E5FC";
                e.currentTarget.style.color = "#1976D2";
              }

              e.currentTarget.style.transform = "scale(1.12)";
            }}
            onMouseLeave={(e) => {
              if (!wishlist) {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#444";
              } else {
                e.currentTarget.style.backgroundColor = "#FFE5E5";
                e.currentTarget.style.color = "red";
              }

              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {wishlist ? <FaHeart /> : <CiHeart />}
          </button>
        )}

        {/* Compare Button */}
        {hover && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
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
              animation: "fadeButtons .55s ease forwards",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#B3E5FC";
              e.currentTarget.style.color = "#1976D2";
              e.currentTarget.style.transform = "scale(1.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#444";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <IoIosGitCompare />
          </button>
        )}

        {/* Zoom Button */}
        {hover && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
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
              animation: "fadeButtons .7s ease forwards",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#B3E5FC";
              e.currentTarget.style.color = "#1976D2";
              e.currentTarget.style.transform = "scale(1.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#444";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <MdZoomOutMap />
          </button>
        )}
      </div>

      {/* Product Details Link */}
      <Link
        to="/MenProductDetails10"
        style={{
          textDecoration: "none",
          color: "#777",
          width: "100%",
        }}
      >
        {/* Product Image */}
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
            src={
              isHovered
                ? "https://m.media-amazon.com/images/I/61Pcr9GuziL._SY741_.jpg"
                : "https://m.media-amazon.com/images/I/71rAudDi6-L._SY741_.jpg"
            }
            alt="Casual Regular Fit Mandarin"
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
          Casual Regular Fit Mandarin
        </h4>

        {/* Description */}
        <p
          style={{
            fontSize: "13px",
            color: "#777",
            height: "32px",
            overflow: "hidden",
            margin: "0",
          }}
        >
          Chinese Collar Short Kurta for Men
        </p>

        {/* Price Section */}
        <div
          style={{
            marginTop: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <span
            style={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#ff4b4b",
            }}
          >
            ₹499
          </span>

          <span
            style={{
              textDecoration: "line-through",
              color: "#999",
              fontSize: "13px",
            }}
          >
            ₹1,699
          </span>

          <span
            style={{
              color: "blue",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            71% OFF
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
          <span
            style={{
              fontSize: "13px",
              color: "#555",
            }}
          >
            (209)
          </span>
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
  );
};

export default MenProduct10;