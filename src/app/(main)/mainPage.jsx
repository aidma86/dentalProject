"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import BasicMenu from "./basicMenu";

export default function MainPage() {
  return (
    <>
      <BasicMenu />

      {/* <Section1 />
      <Section2 />
      <Section3 />
      <Section4 /> */}
    </>
  );
}
