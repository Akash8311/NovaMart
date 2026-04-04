import React, { useState, useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MyContext } from "../../App";

const btnBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  height: "46px",
  background: "#1565C0",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background 0.15s, transform 0.1s",
};

const Qtybox = ({ product }) => {
  const [qty, setQty] = useState(1);
  const { setCartItems, setOpenCartPanel } = useContext(MyContext);

  const increase = () => qty < 10 && setQty(qty + 1);
  const decrease = () => qty > 1 && setQty(qty - 1);

  const hoverIn = (e) => (e.currentTarget.style.background = "#0D47A1");
  const hoverOut = (e) => (e.currentTarget.style.background = "#1565C0");
  const press = (e) => (e.currentTarget.style.transform = "scale(0.97)");
  const release = (e) => (e.currentTarget.style.transform = "scale(1)");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

      {/* Qty + Buy Now */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

        {/* Qty Box */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          border: "1.5px solid #1565C0",
          borderRadius: "10px",
          overflow: "hidden",
          height: "46px",
        }}>
          <button
            onClick={decrease}
            disabled={qty === 1}
            style={{
              width: "42px",
              height: "46px",
              background: qty === 1 ? "#f0f4ff" : "#EBF2FF",
              border: "none",
              fontSize: "20px",
              color: qty === 1 ? "#9ab4e0" : "#1565C0",
              cursor: qty === 1 ? "not-allowed" : "pointer",
            }}
          >−</button>

          <div style={{
            width: "46px",
            textAlign: "center",
            fontWeight: "500"
          }}>
            {qty}
          </div>

          <button
            onClick={increase}
            disabled={qty === 10}
            style={{
              width: "42px",
              height: "46px",
              background: qty === 10 ? "#f0f4ff" : "#EBF2FF",
              border: "none",
              fontSize: "20px",
              color: qty === 10 ? "#9ab4e0" : "#1565C0",
              cursor: qty === 10 ? "not-allowed" : "pointer",
            }}
          >+</button>
        </div>

        {/* Buy Now */}
        <button
          style={{ ...btnBase, flex: 1, padding: "0 18px" }}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
          onMouseDown={press}
          onMouseUp={release}
        >
          <MdOutlineShoppingCart />
          Buy Now
        </button>
      </div>

      {/* ✅ ADD TO CART */}
      <button
        style={{ ...btnBase, width: "100%", padding: "0 20px" }}
        onClick={() => {
          setCartItems((prev) => [
            ...prev,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              qty: qty
            }
          ]);
          setOpenCartPanel(true);
        }}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
        onMouseDown={press}
        onMouseUp={release}
      >
        <MdOutlineShoppingCart />
        Add to Cart
      </button>

     
      <button
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
          height: "44px",
          background: "transparent",
          color: "#555",
          border: "1.5px solid #B5D4F4",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <FaRegHeart />
        Add to Wishlist
      </button>

    </div>
  );
};

export default Qtybox;