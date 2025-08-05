import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slideHrefList = [
  "/image/mainSlide/slide1.webp",
  "/image/mainSlide/slide2.webp",
  "/image/mainSlide/slide3.webp",
];

export default function MainSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: 오른쪽, -1: 왼쪽
  
  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slideHrefList.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  // 페이드 효과 variants
  const fadeVariants = {
    enter: {
      opacity: 0,
      scale: 1.2
    },
    center: {
      opacity: 1,
      scale: 1.05,
      transition: {
        duration: 2.8,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <div style={{
      position: "absolute",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      backgroundColor: "#F9F9F9"
    }}>
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
          {/* 배경 이미지 */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotateZ: [0, 1, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              transformOrigin: "center"
            }}
          >
            <Image
              src={slideHrefList[currentIndex]}
              layout="fill"
              objectFit="cover"
              alt={`슬라이드 ${currentIndex}`}
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* 이미지 위 글로우 효과 */}
            <motion.div
              animate={{
                boxShadow: [
                  "inset 0 0 100px rgba(255,255,255,0.1)",
                  "inset 0 0 200px rgba(255,255,255,0.2)",
                  "inset 0 0 100px rgba(255,255,255,0.1)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none"
              }}
            />
          </motion.div>

          {/* 동적 그라데이션 오버레이 */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </AnimatePresence>


      {/* 인디케이터 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {slideHrefList.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            animate={{
              width: currentIndex === index ? "30px" : "12px",
              opacity: currentIndex === index ? 1 : 0.5,
              backgroundColor: currentIndex === index ? "#fff" : "rgba(255,255,255,0.3)"
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{
              height: "12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              outline: "none"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}