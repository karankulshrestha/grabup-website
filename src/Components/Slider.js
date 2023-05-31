import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useMediaQuery } from 'react-responsive';
import modi from "../assets/profiles/modi.svg";
import bill from "../assets/profiles/bill.svg";
import elon from "../assets/profiles/elon.svg";
import sirtata from "../assets/profiles/sirtata.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Styles/Slider.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 1050px)` });
  return (
    <>
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        freeMode={true}
        centeredSlides={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=wozK8_QAFKE", "_blank")
          }
        >
          <img
            src={modi}
            style={{ width: "500px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=QEr0UPtbhes", "_blank")
          }
        >
          <img
            src={bill}
            style={{ width: "500px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{ cursor: "pointer"}}
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=xLr0GStrnwQ", "_blank")
          }
        >
          <img
            src={elon}
            style={{ width: "500px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=rQ7zy3WYZ08", "_blank")
          }
        >
          <img
            src={sirtata}
            style={{ width: "500px", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
