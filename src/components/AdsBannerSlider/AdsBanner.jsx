import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import banner5 from "../../assets/banner5.png";
import banner6 from "../../assets/banner6.png";


// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import BannerBox from "../BannerBox/BannerBox";
const AdsBanner = (props) => {
  return (
    <>
      <div style={{ background: "#fff" , marginTop:"40px",marginBottom:"50px"}}>
        <div style={{ padding: "4", width: "full", }}>
          <Swiper
            slidesPerView={props.items}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            style={{height:"25vh",width:"full"}}
          >
            <SwiperSlide>
            <BannerBox img={banner1} link='/'/>
            </SwiperSlide>

             <SwiperSlide>
            <BannerBox img={banner2}/>
            </SwiperSlide>

             <SwiperSlide>
            <BannerBox img={banner3}/>
            </SwiperSlide>

             <SwiperSlide>
            <BannerBox img={banner4}/>
            </SwiperSlide>

             <SwiperSlide>
            <BannerBox img={banner5}/>
            </SwiperSlide>

             <SwiperSlide>
            <BannerBox img={banner6}/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AdsBanner;
