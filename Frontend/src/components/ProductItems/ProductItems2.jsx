import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=DM+Sans:wght@300;400;500&display=swap');

  .pc-card {
    width: 230px;
    background: #FAFAF8;
    border-radius: 16px;
    padding: 14px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.07);
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
  }

  .pc-card:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.13);
    transform: translateY(-3px);
  }

  .pc-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    background: #E8F5E9;
    color: #2E7D32;
    font-size: 11px;
    font-weight: 600;
    padding: 3px 9px;
    border-radius: 20px;
    letter-spacing: 0.3px;
    z-index: 5;
  }

  .pc-actions {
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 10;
  }

  .pc-action-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid #EDEDED;
    background: #fff;
    color: #555;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    cursor: pointer;
    transition: background 0.25s, color 0.25s, transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    opacity: 0;
    transform: translateX(10px);
  }

  .pc-card:hover .pc-action-btn {
    opacity: 1;
    transform: translateX(0);
  }

  .pc-action-btn:nth-child(1) { transition-delay: 0s; }
  .pc-action-btn:nth-child(2) { transition-delay: 0.06s; }
  .pc-action-btn:nth-child(3) { transition-delay: 0.12s; }

  .pc-action-btn:hover {
    background: #FFF3E0;
    color: #E65100;
    transform: scale(1.1) !important;
    box-shadow: 0 4px 14px rgba(230,81,0,0.15);
  }

  .pc-action-btn.wishlist-active {
    background: #FFF0F0;
    color: #E53935;
    border-color: #FFCDD2;
    opacity: 1;
    transform: translateX(0);
  }

  .pc-img-wrap {
    width: 100%;
    height: 195px;
    overflow: hidden;
    border-radius: 10px;
    background: #F0EDE8;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .pc-img-wrap img {
    width: 72%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.45s cubic-bezier(.25,.8,.25,1);
    border-radius: 6px;
  }

  .pc-img-wrap:hover img {
    transform: scale(1.08);
  }

  .pc-body {
    margin-top: 12px;
    width: 100%;
    line-height: 1.45;
  }

  .pc-name {
    font-family: 'Playfair Display', serif;
    font-size: 15.5px;
    font-weight: 700;
    color: #1A1A1A;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pc-desc {
    font-size: 12.5px;
    color: #888;
    height: 36px;
    overflow: hidden;
    margin: 0 0 8px;
    line-height: 1.5;
  }

  .pc-divider {
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #FFAB40, #FF6F00);
    border-radius: 2px;
    margin: 0 auto 10px;
  }

  .pc-price-row {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 7px;
  }

  .pc-price {
    font-size: 17px;
    font-weight: 700;
    color: #D84315;
    font-family: 'DM Sans', sans-serif;
  }

  .pc-mrp {
    font-size: 12.5px;
    color: #BDBDBD;
    text-decoration: line-through;
  }

  .pc-off {
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    background: #43A047;
    border-radius: 4px;
    padding: 1px 6px;
  }

  .pc-stars {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    font-size: 13px;
    color: #FFA000;
    margin-bottom: 5px;
  }

  .pc-stars span {
    font-size: 12px;
    color: #999;
    font-family: 'DM Sans', sans-serif;
  }

  .pc-delivery {
    font-size: 12px;
    font-weight: 500;
    color: #1565C0;
    background: #E3F2FD;
    border-radius: 6px;
    padding: 4px 10px;
    display: inline-block;
    margin-top: 2px;
  }

  .pc-link {
    text-decoration: none;
    color: inherit;
    width: 100%;
  }

  .pc-add-btn {
    margin-top: 12px;
    width: 100%;
    padding: 9px 0;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #FF8F00, #E65100);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.4px;
    transition: opacity 0.2s, transform 0.2s;
    opacity: 0;
    transform: translateY(6px);
  }

  .pc-card:hover .pc-add-btn {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.25s 0.1s, transform 0.25s 0.1s, background 0.2s;
  }

  .pc-add-btn:hover {
    background: linear-gradient(135deg, #FFB300, #F4511E);
    transform: scale(1.02) !important;
  }
`;

const ProductItems2 = () => {
  const [wishlist, setWishlist] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{styles}</style>
      <div className="pc-card">
        {/* Sale Badge */}
        <div className="pc-badge">SALE</div>

        {/* Action Buttons */}
        <div className="pc-actions">
          <button
            className={`pc-action-btn ${wishlist ? "wishlist-active" : ""}`}
            onClick={() => setWishlist(!wishlist)}
            title="Wishlist"
          >
            {wishlist ? <FaHeart /> : <CiHeart />}
          </button>
          <button className="pc-action-btn" title="Compare">
            <IoIosGitCompare />
          </button>
          <button className="pc-action-btn" title="Quick View">
            <MdZoomOutMap />
          </button>
        </div>

        <Link to="/productDrtails2" className="pc-link">
          {/* Image */}
          <div
            className="pc-img-wrap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={
                isHovered
                  ? "https://m.media-amazon.com/images/I/71CA3N8eVKL._SY741_.jpg"
                  : "https://m.media-amazon.com/images/I/71u12JbdNVL._SY741_.jpg"
              }
              alt="Fancy Retro Women Dress"
            />
          </div>

          {/* Details */}
          <div className="pc-body">
            <h4 className="pc-name">Fancy Retro Women Dresses</h4>
            <p className="pc-desc">
              Stylish party wear bodycon dress · birthday special · retro collection
            </p>

            <div className="pc-divider" />

            <div className="pc-price-row">
              <span className="pc-price">₹297</span>
              <span className="pc-mrp">₹328</span>
              <span className="pc-off">9% OFF</span>
            </div>

            <div className="pc-stars">
              ★★★★★ <span>(1,010 reviews)</span>
            </div>

            <div className="pc-delivery">🚚 Free Delivery</div>
          </div>
        </Link>

        <button className="pc-add-btn">Add to Cart</button>
      </div>
    </>
  );
};

export default ProductItems2;