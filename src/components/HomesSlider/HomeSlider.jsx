import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "./slider.css";

const HomeSlider = () => {
  return (
    <div className="HomeSlider">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={true}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="sliderHome"
      >
        {[
          "https://m.media-amazon.com/images/G/31/img2020/fashion/Topbrand-C/11.jpeg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/Nov/UBS/updated/non_prime_22-1._CB780111954_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/img23/shrey/D328630419_PC_2_1x._CB797528247_.jpg",
          "https://m.media-amazon.com/images/G/31/img20/Wireless/ElectronicsStore/GW/New/1242x450.jpg",
          "https://serviceapi.spicezgold.com/download/1762393375689_34292.jpg",
          "https://couponswala.com/blog/wp-content/uploads/2022/09/combo-offers-for-women.jpg.webp",
          "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/META_RAYBANGLASS_NOV25/PC_Hero_3000X1200_Meta_1._CB779739080_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/GW_Hero/Nov2025/qwert/3000._CB779902781_.jpg",
          "https://m.media-amazon.com/images/G/31/img21/Fashion/June_WRS/Event/Ingress/AF_set/Spotlight/Deals._SY700_QL85_.jpg",
        ].map((src, i) => (
          <SwiperSlide key={i}>
            <div className="slide-container">
              <img src={src} alt={`slide${i + 1}`} className="slide-image" />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
