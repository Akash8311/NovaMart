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
          "https://t3.ftcdn.net/jpg/06/08/19/10/360_F_608191088_ATXwUHQnOIe67Dnt7JDkzKWHDpgCfuCA.jpg",
          "https://haniffa.com.sg/wp-content/uploads/2021/01/Main_Banner_KidsWear-1024x397.jpg",
           "https://static.vecteezy.com/system/resources/thumbnails/028/714/271/small/fashion-week-male-model-isolated-on-gradient-background-with-a-place-for-text-photo.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKM4PacGJWYdsZFj_gIvS_Xv3a6PVJ7DEaWnd2Pstx7ch-1pvSq2Fqpt4&s=10",
          "https://www.shutterstock.com/image-photo/banner-group-emotional-elementary-school-260nw-2411943543.jpg",
          "https://img.magnific.com/free-vector/fashion-sale-landing-page-template_52683-40480.jpg?semt=ais_hybrid&w=740&q=80",
          "https://t3.ftcdn.net/jpg/07/02/38/18/360_F_702381809_k0Jj93x9uwdtgqjja3mWDfWWj9ryHj7N.jpg",
          "https://cdn.dribbble.com/userupload/35878077/file/original-9319da951c6e21470ad5b9e534db0245.jpg?resize=752x&vertical=center",
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
