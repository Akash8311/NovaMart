import React, { useState } from "react";
import "./Qtybox.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Qtybox = () => {
  const [qty, setQty] = useState(1);

  const increase = () => qty < 10 && setQty(qty + 1);
  const decrease = () => qty > 1 && setQty(qty - 1);

  return (
    <>
    <div className="qty-wrapper">
      <div className="qtybox">
        <button onClick={decrease} disabled={qty === 1}>
          −
        </button>

        <input type="text" value={qty} readOnly />

        <button onClick={increase} disabled={qty === 10}>
          +
        </button>
      </div>

      <button className="buy-btn">
        <MdOutlineShoppingCart style={{ fontSize: "30px" }} />
        Buy Now
      </button>
    
    </div>
      <div className="wishList">
  <button className="wishButton">
    <FaRegHeart className="wishIcon" />
    <span>Add to Wishlist</span>
  </button>
  
</div>

    </>
  );
};

export default Qtybox;
