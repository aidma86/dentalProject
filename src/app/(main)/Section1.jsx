"use client";

import { motion } from "framer-motion";
import styles from "./section1.module.css";
import MainSlider from "@/componant/mainSlider";
import { Suspense } from "react";

export default function Section1() {
    return (
      <section className={`${styles.section} ${styles.section1}`}>
        <Suspense fallback={<div>로딩중...</div>}>
          <MainSlider />
        </Suspense>
        <div className={styles.sectionContent}>
          {/* 제목 */}
          {/* 
            <motion.div> 태그의 각 속성 및 값 설명

            initial: 컴포넌트가 처음 렌더링될 때의 상태(애니메이션 시작점)
              - opacity: 0         // 완전히 투명하게 시작
              - y: 80              // 아래로 80px 이동된 위치에서 시작
              - scale: 0.8         // 80% 크기로 축소된 상태에서 시작
              - rotateX: 45        // X축 기준 45도 기울어진 상태에서 시작

            whileInView: 뷰포트(화면)에 해당 요소가 들어왔을 때 적용될 상태(애니메이션 종료점)
              - opacity: 1         // 완전히 불투명하게(보이게) 변경
              - y: 0               // y축 이동값 0, 원래 위치로 이동
              - scale: 1           // 원래 크기(100%)로 확대
              - rotateX: 0         // X축 회전 0도, 평평하게
              - transition:        // 애니메이션 전환 효과
                  - duration: 1.2  // 애니메이션 지속시간 1.2초
                  - ease: [0.25, 0.46, 0.45, 0.94] // 커스텀 이징(가속도 곡선)
                  - type: "spring" // 스프링(탄성) 효과 적용
                  - damping: 12    // 스프링 감쇠(진동 정도), 값이 클수록 덜 튐

            viewport: 뷰포트 진입 감지 옵션
              - amount: 0.3        // 요소의 30%가 뷰포트에 들어오면 애니메이션 실행
          */}
          <motion.div
            initial={{
              opacity: 0,      // 처음엔 투명
              y: 80,           // 아래로 80px 이동
              scale: 0.8,      // 80% 크기
              rotateX: 45,     // X축 45도 회전
            }}
            whileInView={{
              opacity: 1,      // 완전히 보이게
              y: 0,            // 원래 위치로
              scale: 1,        // 100% 크기
              rotateX: 0,      // 평평하게
              transition: {
                duration: 1.2, // 1.2초 동안
                ease: [0.25, 0.46, 0.45, 0.94], // 부드러운 가속도
                type: "spring", // 스프링 효과
                damping: 12,    // 감쇠값
              },
            }}
            viewport={{ amount: 0.3 }} // 30% 보이면 실행
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