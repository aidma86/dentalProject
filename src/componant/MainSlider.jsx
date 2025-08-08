import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slideHrefList = [
  "/image/mainSlide/slide1.webp",
  "/image/mainSlide/slide2.webp",
  "/image/mainSlide/slide3.webp",
];

function useInView(ref, rootMargin = "0px") {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inView;
}

export default function MainSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, "-20% 0px -20% 0px");

  // 자동 슬라이드
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideHrefList.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [inView]);

  const fadeVariants = {
    enter: { opacity: 0, scale: 1.2 },
    center: {
      opacity: 1,
      scale: 1.05,
      transition: { duration: 1.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 1,
      transition: { duration: 1.4, ease: "easeIn" },
    },
  };

  const bgMotionAnimate = inView ? { scale: [1, 1.1, 1] } : { scale: 1 };
  const bgMotionTransition = inView
    ? { duration: 20, repeat: Infinity, ease: "easeInOut" }
    : { duration: 0 };

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F9F9F9",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <motion.div
            animate={bgMotionAnimate}
            transition={bgMotionTransition}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              transformOrigin: "center",
            }}
          >
            <Image
              src={slideHrefList[currentIndex]}
              alt={`메인 슬라이드 ${currentIndex + 1}`}
              fill
              sizes="100vw"
              quality={60}
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
