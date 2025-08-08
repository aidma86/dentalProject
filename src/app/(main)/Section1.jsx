"use client";

import { motion } from "framer-motion";
import styles from "./Section1.module.css";
import MainSlider from "@/componant/MainSlider";
import { Suspense } from "react";

export default function Section1() {
    return (
      <section className={`${styles.section} ${styles.section1}`}>
        <Suspense fallback={<div>로딩중...</div>}>
          <MainSlider />
        </Suspense>
        <div className={styles.sectionContent}>
          {/* 제목 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.8,
              rotateX: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              transition: {
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                damping: 12,
              },
            }}
            viewport={{ amount: 0.3 }}
          >
            <p className={styles.subtitle}>건강을 되찾아 드리는 온가족치과</p>
          </motion.div>
  
          {/* 설명 */}
          <motion.p
            className={styles.description}
            initial={{
              opacity: 0,
              y: 60,
              x: -50,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.9,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            viewport={{ amount: 0.3 }}
          >
            환자분들이 부담되지 않도록
            <br />
            최선의 치료 계획만을 진행합니다
          </motion.p>
  
          {/* 버튼 그룹 */}
          <motion.div
            className={styles.ctaButtons}
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.4,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            viewport={{ amount: 0.3 }}
          >
            <motion.button
              className={styles.primaryButton}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 25px rgba(162, 199, 66, 0.4)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ rotateY: -90, opacity: 0 }}
              whileInView={{
                rotateY: 0,
                opacity: 1,
                transition: { duration: 0.6, delay: 0.6 },
              }}
              viewport={{ amount: 0.3 }}
            >
              예약하기
            </motion.button>
            <motion.button
              className={styles.secondaryButton}
              whileHover={{
                scale: 1.1,
                y: -5,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{
                rotateY: 0,
                opacity: 1,
                transition: { duration: 0.6, delay: 0.8 },
              }}
              viewport={{ amount: 0.3 }}
            >
              상담문의
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }