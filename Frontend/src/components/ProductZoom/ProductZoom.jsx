import React, { useRef, useState } from "react";
import "./ProductZoom.css";

const images = [
  "https://m.media-amazon.com/images/I/71pzB-Rhc9L._SX569_.jpg",
  "https://m.media-amazon.com/images/I/71RfHvqcLlL._SX569_.jpg",
  "https://m.media-amazon.com/images/I/71wJjHSED9L._SX569_.jpg",
  "https://m.media-amazon.com/images/I/812moQIIO7L._SX569_.jpg",
  "https://m.media-amazon.com/images/I/912P8BQhsPL._SX569_.jpg",
];

const ProductZoom = () => {
  const imgRef = useRef(null);
  const lensRef = useRef(null);
  const [activeImg, setActiveImg] = useState(images[0]);

  const lensSize = 160;

  const moveLens = (e) => {
    const img = imgRef.current;
    const lens = lensRef.current;
    const rect = img.getBoundingClientRect();

    let x = e.clientX - rect.left - lensSize / 2;
    let y = e.clientY - rect.top - lensSize / 2;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > rect.width - lensSize) x = rect.width - lensSize;
    if (y > rect.height - lensSize) y = rect.height - lensSize;

    const cx = img.naturalWidth / rect.width;
    const cy = img.naturalHeight / rect.height;

    lens.style.left = x + "px";
    lens.style.top = y + "px";
    lens.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
  };

  const handleEnter = () => {
    const img = imgRef.current;
    const lens = lensRef.current;
    lens.style.backgroundImage = `url(${activeImg})`;
    lens.style.backgroundSize = `${img.naturalWidth}px ${img.naturalHeight}px`;
    lens.style.opacity = 1;
  };

  return (
    <div className="zoom-container">
      
      {/* LEFT THUMBNAILS */}
      <div className="thumbnail-column">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`thumb ${activeImg === img ? "active" : ""}`}
            onClick={() => setActiveImg(img)}
          />
        ))}
      </div>

      {/* MAIN IMAGE */}
      <div
        className="zoom-wrapper"
        onMouseMove={moveLens}
        onMouseEnter={handleEnter}
        onMouseLeave={() => (lensRef.current.style.opacity = 0)}
      >
        <img ref={imgRef} src={activeImg} alt="Product" />
        <div ref={lensRef} className="zoom-lens" />
      </div>
    </div>
  );
};

export default ProductZoom;
