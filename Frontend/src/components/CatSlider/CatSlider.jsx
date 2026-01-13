import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";

const categories = [
  { name: "Fashion", img: "https://serviceapi.spicezgold.com/download/1761905882455_file_1734525204708_fash.png" },
  { name: "Electronics", img: "https://serviceapi.spicezgold.com/download/1761905929738_file_1734525218436_ele.png" },
  { name: "Mobile", img: "https://media.wired.com/photos/68aea51ae01ba6cc5812ffcd/4:3/w_640%2Cc_limit/Google%2520Pixel%252010%2520Series%2520SOURCE%2520Julian%2520Chokkattu(1).png" },
  { name: "Grocery", img: "https://serviceapi.spicezgold.com/download/1761905996339_file_1734525248057_gro.png" },
  { name: "Shoes", img: "https://rukminim2.flixcart.com/image/480/580/xif0q/shoe/d/v/0/7-turbo-7-brainer-white-original-imah7y5w7cxdh2rs.jpeg?q=90" },
  { name: "Cosmetics", img: "https://serviceapi.spicezgold.com/download/1761906005923_file_1734525255799_beauty(1).png" },
  { name: "Jewellery", img: "https://serviceapi.spicezgold.com/download/1761906025549_file_1734525286186_jw.png" },
];

const CatSlider = () => {
  return (
    <div style={{ width: "100%", padding: "15px 0", background: "#e0e0e0" }}>
      <div style={{ width: "95%", margin: "auto" }}>

        <Swiper
          slidesPerView={7}
          spaceBetween={25}
          freeMode={true}
          autoplay={{ delay: 2000 }}
          modules={[FreeMode, Autoplay]}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  background: "#fff",
                  padding: "18px 10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0px 3px 10px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                  transition: "0.3s ease",
                }}
                className="catItem"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{
                    width: "55px",
                    height: "55px",
                    objectFit: "contain",
                    transition: "0.3s ease",
                  }}
                  className="catImg"
                />

                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    margin: 0,
                    color: "#222",
                    textAlign: "center",
                  }}
                >
                  {cat.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Extra Hover Styles */}
      <style>
        {`
          .catItem:hover {
            transform: translateY(-4px);
            box-shadow: 0px 6px 18px rgba(0,0,0,0.12);
          }

          .catItem:hover .catImg {
            transform: scale(1.20);
          }
        `}
      </style>
    </div>
  );
};

export default CatSlider;
