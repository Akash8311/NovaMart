import React, { useState } from "react";
import CtegoryColleps from "../CtegoryColleps/CtegoryColleps";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [price, setPrice] = useState([100, 5000]);

  return (
    <aside
      style={{
        width: "270px",
        position: "sticky",
        top: "15px",
        background: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        border: "1px solid #eee",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        height: "fit-content",
      }}
    >
      {/* CATEGORY HEADER */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          padding: "8px",
          borderRadius: "8px",
    background: "#f5f5f5",
          color: "black",
        }}
      >
        <h3 style={{ fontWeight: "500", fontSize: "17px" }}>
          Shop By Category
        </h3>

        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>

      {/* CATEGORY LIST */}
      {open && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "#fafafa",
            borderRadius: "8px",
          }}
        >
          <CtegoryColleps />
        </div>
      )}

      {/* PRICE FILTER */}
      <div
        style={{
          marginTop: "25px",
          padding: "15px",
          borderRadius: "10px",
          background: "#f9f9f9",
          border: "1px solid #eee",
        }}
      >
        <h3
          style={{
            fontSize: "16px",
            marginBottom: "12px",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Filter By Price
        </h3>

        <RangeSlider
          min={0}
          max={10000}
          step={100}
          value={price}
          onInput={setPrice}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            fontWeight: "500",
            fontSize: "14px",
            color: "#555",
          }}
        >
          <span
            style={{
              background: "#fff",
              padding: "4px 8px",
              borderRadius: "6px",
              border: "1px solid #ddd",
            }}
          >
            ₹{price[0]}
          </span>

          <span
            style={{
              background: "#fff",
              padding: "4px 8px",
              borderRadius: "6px",
              border: "1px solid #ddd",
            }}
          >
            ₹{price[1]}
          </span>
        </div>
      </div>

      {/* RATING FILTER */}
      <div
        style={{
          marginTop: "25px",
          padding: "15px",
          borderRadius: "10px",
          background: "#f9f9f9",
          border: "1px solid #eee",
        }}
      >
        <h3
          style={{
            fontSize: "16px",
            marginBottom: "12px",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Filter By Rating
        </h3>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {[5, 4, 3, 2, 1].map((r) => (
            <div
              key={r}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "6px",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              <Rating value={r} readOnly />
              <span style={{ fontSize: "13px", color: "#666" }}>
                & Up
              </span>
            </div>
          ))}
        </Box>
      </div>
    </aside>
  );
};

export default Sidebar;