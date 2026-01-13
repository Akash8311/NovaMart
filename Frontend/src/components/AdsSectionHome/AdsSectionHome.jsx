import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "./AdsBanner.css";
import AdsBanner1 from "../../assets/AdsBanner1.png";
import AdsBanner2 from "../../assets/AdsBanner2.png";
import AdsBanner3 from "../../assets/AdsBanner3.png";
import AdsBannerR1 from "../../assets/AdsBannerR1.png";
import AdsBannerR2 from "../../assets/AdsBannerR2.png";

const AdsSectionHome = () => {
  return (
    <div className="ads-main">

      {/* LEFT SLIDER */}
      <div className="slider-area">
        <Swiper
          navigation
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="swiperBox"
        >
          <SwiperSlide>
            <div className="slide-box">
              <img src={AdsBanner1} className="slide-img" alt="banner" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-box">
              <img src={AdsBanner2} className="slide-img" alt="banner" />          
            </div>
          </SwiperSlide>

                    <SwiperSlide>
            <div className="slide-box">
              <img src={AdsBanner3} className="slide-img" alt="banner" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* RIGHT SIDE SMALL ADS */}
 <div className="right-ads">

  {/* RIGHT AD 1 */}
  <div className="right-box-container">
    <img src={AdsBannerR1} className="right-box-img" alt="" />
    <div className="right-text animate-text">
      <h3>Buy Women's Clothes</h3>
      <p>Low Price Only ₹999</p>
      <Link to="/">
        <button className="shop-btn-small">SHOP NOW</button>
      </Link>
    </div>
  </div>

  {/* RIGHT AD 2 */}
  <div className="right-box-container">
    <img src={AdsBannerR2} className="right-box-img" alt="" />
    <div className="right-text animate-text">
      <h3>Buy Men's Footwear</h3>
      <p>Low Price Only ₹149</p>
      <Link to="/">
        <button className="shop-btn-small">SHOP NOW</button>
      </Link>
    </div>
  </div>

</div>


    </div>
  );
};

export default AdsSectionHome;
