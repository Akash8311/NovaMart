import React, { useState } from "react";
import "./Sidebar.css";
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
    <aside className="sidebar">
      <div className="sidebar-box">
        {/* Category Header */}
        <div
          className="sidebar-header"
          onClick={() => setOpen(!open)}
        >
          <h3>Shop By Category</h3>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>

        {open && (
          <div className="sidebar-section">
            <CtegoryColleps />
          </div>
        )}

        {/* Price Filter */}
        <div className="sidebar-section">
          <h3>Filter By Price</h3>

          <div className="range-wrapper">
            <RangeSlider
              min={0}
              max={10000}
              step={100}
              value={price}
              onInput={setPrice}
            />
          </div>

          <div className="price-range">
            <span>₹{price[0]}</span>
            <span>₹{price[1]}</span>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="sidebar-section">
          <h3>Filter By Rating</h3>

          <Box className="rating-box">
            {[5, 4, 3, 2, 1].map((r) => (
              <Rating key={r} value={r} readOnly />
            ))}
          </Box>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
