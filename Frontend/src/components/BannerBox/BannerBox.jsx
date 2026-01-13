    import React from "react";
    import { Link } from "react-router-dom";
    import "./Bannerox.css";

    const BannerBox = ({ img }) => {
    return (
         
    <div
      style={{
        width: "100%",
        height: "180px",
        marginTop: "15px",
        cursor: "pointer",
        borderRadius: "12px",
        background: "#fff",
        border: "1px solid #ddd",
        transition: "0.35s ease",
        overflow: "hidden", // keeps border shape
      }}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector("img").style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector("img").style.transform = "scale(1)";
      }}
    >
      <Link to="/">
        <img
          src={img}
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "0.35s ease",
            borderRadius: "12px",
            clipPath: "inset(0 round 12px)",
          }}
        />
      </Link>
    </div>
    );
    };

    export default BannerBox;
