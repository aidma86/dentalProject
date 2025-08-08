"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { Box } from "@mui/material";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

export default function Test() {
  return (
    <>
      <Box
        sx={{
          display:"flex",
          width: "100%",
          height: "100vh",
        }}
      >
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><Section1 /></SwiperSlide>
          <SwiperSlide><Section2 /></SwiperSlide>
          <SwiperSlide><Section3 /></SwiperSlide>
          <SwiperSlide><Section4 /></SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
