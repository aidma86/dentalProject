// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";

export default function MainPage() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}
