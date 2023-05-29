import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Styles/Slider.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
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
            src="https://www.imageshine.in/uploads/gallery/PNG_Images_of_Narendra_Modi.png"
            style={{ width: "200px", objectFit: "cover" }}
          />
          <div className=" flex flex-col flex-1 flex-wrap">
            <h1 className=" text-white mt-5 mb-3 text-xl text-green-500">
              VisionX 2030
            </h1>
            <h1 className=" text-white text-start text-2xl">
              India has the potential to become the recycling hub of the world.
            </h1>
            <div className="flex flex-wrap ml-6 justify-between">
              <p className="text-gray-400 text-sm mt-2 text-start ml-1">
                - Prime Minister Modi
              </p>
              <PlayCircleFilledIcon
                style={{
                  color: "white",
                  width: "100px",
                  height: "50px",
                  justifyItems: "end",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=QEr0UPtbhes", "_blank")
          }
        >
          <img
            src="https://financialtribune.com/sites/default/files/field/image/17january/billgates.png"
            style={{ width: "200px", objectFit: "cover" }}
          />
          <div className=" flex flex-col flex-1 flex-wrap">
            <h1 className=" text-white mt-5 mb-3 text-xl text-green-500">
              VisionX 2030
            </h1>
            <h1 className=" text-white text-start text-2xl">
              Bill Gates-Backed Republic Services Turns Trash Into Big Cash.
            </h1>
            <div className="flex flex-wrap ml-6 justify-between">
              <p className="text-gray-400 text-sm mt-2 text-start ml-1">
                - Forbes
              </p>
              <PlayCircleFilledIcon
                style={{
                  color: "white",
                  width: "100px",
                  height: "50px",
                  justifyItems: "end",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=xLr0GStrnwQ", "_blank")
          }
        >
          <img
            src="https://www.pngmart.com/files/22/Elon-Musk-PNG.png"
            style={{ width: "200px", objectFit: "cover" }}
          />
          <div className=" flex flex-col flex-1 flex-wrap">
            <h1 className=" text-white mt-5 mb-3 text-xl text-green-500">
              VisionX 2030
            </h1>
            <h1 className=" text-white text-start text-2xl">
              Tesla Recycling Lithium solves EV's Biggest Problem
            </h1>
            <div className="flex flex-wrap ml-6 justify-between">
              <p className="text-gray-400 text-sm mt-2 text-start ml-1">
                - CNBC
              </p>
              <PlayCircleFilledIcon
                style={{
                  color: "white",
                  width: "100px",
                  height: "50px",
                  justifyItems: "end",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=rQ7zy3WYZ08", "_blank")
          }
        >
          <img
            src="https://indiapublickhabar.in/wp-content/uploads/2023/05/ratan-tata-removebg-preview.png"
            style={{ width: "200px", objectFit: "cover" }}
          />
          <div className=" flex flex-col flex-1 flex-wrap">
            <h1 className=" text-white mt-5 mb-3 text-xl text-green-500">
              VisionX 2030
            </h1>
            <h1 className=" text-white text-start text-2xl">
            Tata Steel to set up India’s first steel scrap recycling unit.
            </h1>
            <div className="flex flex-wrap ml-6 justify-between">
              <p className="text-gray-400 text-sm mt-2 text-start ml-1">
                - Money Control
              </p>
              <PlayCircleFilledIcon
                style={{
                  color: "white",
                  width: "100px",
                  height: "50px",
                  justifyItems: "end",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
