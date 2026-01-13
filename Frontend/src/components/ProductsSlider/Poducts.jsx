import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProductItems from "../ProductItems/ProductItems";
import ProductItems2 from "../ProductItems/ProductItems2";
import ProductItems3 from "../ProductItems/ProductItems3";
import ProductItems4 from "../ProductItems/ProductItems4";
import ProductItems5 from "../ProductItems/ProductItems5";
import ProductItems6 from "../ProductItems/ProductItems6";
import ProductItems7 from "../ProductItems/ProductItems7";

const Poducts = (props) => {
  return (
    <div className="Products">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>


        <SwiperSlide>
          <ProductItems2 />
        </SwiperSlide>


        <SwiperSlide>
          <ProductItems3 />
        </SwiperSlide>


        <SwiperSlide>
          <ProductItems4 />
        </SwiperSlide>


        <SwiperSlide>
          <ProductItems5 />
        </SwiperSlide>


        <SwiperSlide>
          <ProductItems6 />
        </SwiperSlide>

        
        <SwiperSlide>
          <ProductItems7 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Poducts;
