"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./mainSlide.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const slideHrefList = [
  "/image/mainSlide/slide1.png",
  "/image/mainSlide/slide2.png",
  "/image/mainSlide/slide3.png"
];

export default function MainSlide() {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Autoplay]}
        className={styles.mySwiper}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {slideHrefList.map((item, index) => (
          <SwiperSlide>
            <Image
              src={item}
              width={500}
              height={400}
              alt={"메인 슬라이드" + index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
