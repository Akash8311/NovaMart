import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../../App"; // path thik kore nibe


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

const Qtybox = () => {
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

      {/* Row: qty + Buy Now */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

        {/* Qty box */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          border: "1.5px solid #1565C0",
          borderRadius: "10px",
          overflow: "hidden",
          height: "46px",
        }}>
      
          <div style={{
            width: "46px", height: "46px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "15px", fontWeight: "500",
            borderLeft: "1.5px solid #1565C0",
            borderRight: "1.5px solid #1565C0",
          }}>{qty}</div>

          <button
            onClick={increase}
            disabled={qty === 10}
            style={{
              width: "42px", height: "46px",
              background: qty === 10 ? "#f0f4ff" : "#EBF2FF",
              border: "none",
              fontSize: "20px",
              color: qty === 10 ? "#9ab4e0" : "#1565C0",
              cursor: qty === 10 ? "not-allowed" : "pointer",
              fontWeight: "500",
            }}
          >+</button>
        </div>

        {/* Buy Now */}
        <button
          style={{ ...btnBase, flex: 1, padding: "0 18px" }}
          onMouseEnter={hoverIn} onMouseLeave={hoverOut}
          onMouseDown={press} onMouseUp={release}
        >
          <MdOutlineShoppingCart style={{ fontSize: "18px" }} />
          Buy Now
        </button>
      </div>

      {/* Add to Cart */}
    <button
  style={{ ...btnBase, width: "100%", padding: "0 20px" }}
  onClick={() => {
    setCartItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "Product Name",
        qty: qty,
        price: 100
      }
    ]);
    setOpenCartPanel(true);
  }}
  onMouseEnter={hoverIn} onMouseLeave={hoverOut}
  onMouseDown={press} onMouseUp={release}
>
  <MdOutlineShoppingCart style={{ fontSize: "18px" }} />
  Add to Cart
</button>


      {/* Wishlist */}
      <button
        style={{
          display: "inline-flex", alignItems: "center",
          justifyContent: "center", gap: "8px",
          width: "100%", height: "44px", padding: "0 20px",
          background: "transparent",
          color: "#555",
          border: "1.5px solid #B5D4F4",
          borderRadius: "10px",
          fontSize: "14px", fontWeight: "500", cursor: "pointer",
          transition: "all 0.15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#EBF2FF";
          e.currentTarget.style.borderColor = "#1565C0";
          e.currentTarget.style.color = "#1565C0";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "#B5D4F4";
          e.currentTarget.style.color = "#555";
        }}
        onMouseDown={press} onMouseUp={release}
      >
        <FaRegHeart style={{ fontSize: "16px" }} />
        Add to Wishlist
      </button>

    </div>
  );
};

export default Qtybox;