import React, { useState } from "react";

const categories = [
  "Fashion",
  "Electronics",
  "Bags",
  "Footwear",
  "Groceries",
  "Beauty",
  "Wellness",
  "Jewellery",
];

const CtegoryColleps = () => {
  const [selected, setSelected] = useState("");

  return (
    <div
      style={{
        background: "#fff",
        padding: "15px",
        borderRadius: "12px",
        border: "1px solid #eee",
      }}
    >
      <h3
        style={{
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        Categories
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => setSelected(cat)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "500",
              transition: "0.3s",
              border:
                selected === cat
                  ? "1px solid #1976d2"
                  : "1px solid #ddd",
              background:
                selected === cat ? "#1976d2" : "#f7f7f7",
              color: selected === cat ? "#fff" : "#333",
            }}
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CtegoryColleps;