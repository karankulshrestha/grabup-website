import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Styles/CaseSlider.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

const CaseSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://www.unilever.com/planet-and-society/waste-free-world/rethinking-plastic-packaging/",
              "_blank"
            )
          }
        >
          <img src="https://pbs.twimg.com/media/C2H5S-NXAAAxhPu.jpg" />
        </SwiperSlide>
        <SwiperSlide
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://www.tata.com/newsroom/business/tata-steel-scrap-recycling",
              "_blank"
            )
          }
        >
          <img src="https://img.etimg.com/thumb/msid-85437172,width-1070,height-580,imgsize-668972,overlay-economictimes/photo.jpg" />
        </SwiperSlide>
        <SwiperSlide
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://www.worldhighways.com/wh10/wh6/news/india-requiring-recycled-materials-road-building",
              "_blank"
            )
          }
        >
          <img src="https://imagevars.gulfnews.com/2017/11/12/1_16a0843f24a.2122752_4142077372_16a0843f24a_large.jpg" />
        </SwiperSlide>
        <SwiperSlide
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://www.technologyreview.com/2023/01/17/1066915/tesla-former-cto-battery-recycling/",
              "_blank"
            )
          }
        >
          <img src="https://i.ytimg.com/vi/xLr0GStrnwQ/maxresdefault.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CaseSlider;
