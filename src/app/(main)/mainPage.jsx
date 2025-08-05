"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import styles from "./MainPage.module.css";
import MainSlide from "@/componant/mainSlide";

const doctorList = [
  {
    img: "/image/doctor/kim.png",
    title: "김한나 대표원장",
    content: [
      "- 부산교육대학교 초등교육학과 졸업",
      "- A대학 치의학전문대학원 졸업",
      "- A대학 치과대학 치의학 석사",
      "- 통합치의학 전문의",
      "- C병원 치과과장",
      "- D병원 치과진료원장",
    ],
  },
  {
    img: "/image/doctor/song.png",
    title: "송보가 원장",
    content: [
      "- 아주대학교 경제학과 졸업",
      "- A대학교 치의학전문대학원 졸업",
      "- 구강악안면외과 전문의",
      "- 대한구강악안면외과학회 정회원",
      "- 대한구강악안면 임플란트학회 정회원",
    ],
  },
  {
    img: "/image/introduce/totalTreatment.png",
    title: "임현웅 원장",
    content: [
      "- C대학교 컴퓨터공학과 졸업",
      "- A대학교 치의학전문대학원 졸업",
      "- A대학교 치과병원 종합진료실 근무",
      "- D치과 보철 연구회 수료",
      "- University of P대학 근관치료 수료",
    ],
  },
];

export default function PageScroll() {
  const sections = [
    <Section1 key="s1" />,
    <Section2 key="s2" />,
    <Section3 key="s3" doctorList={doctorList} />,
    <Section4 key="s4" />,
  ];

  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleWheel = useCallback(
    (e) => {
      if (animating) return;
      if (e.deltaY > 0 && page < sections.length - 1) {
        setAnimating(true);
        setPage((p) => p + 1);
        setTimeout(() => setAnimating(false), 900);
      } else if (e.deltaY < 0 && page > 0) {
        setAnimating(true);
        setPage((p) => p - 1);
        setTimeout(() => setAnimating(false), 900);
      }
    },
    [page, sections.length, animating]
  );

  return (
    <div
      onWheel={handleWheel}
      style={{
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      {/* 페이지 컨텐츠 */}
      <motion.div
        animate={{ y: `-${page * 100}vh` }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{ height: "100%", width: "100%" }}
      >
        {sections.map((section, i) => (
          <div key={i} style={{ height: "100vh" }}>
            {section}
          </div>
        ))}
      </motion.div>

      {/* 인디케이터 */}
      <div
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 100,
        }}
      >
        {sections.map((_, i) => (
          <motion.div
          key={i}
          onClick={() => setPage(i)}
          whileHover={{ scale: 1.2 }}
          style={{
            width: "12px",
            height: i === page ? "25px" : "12px", // 현재 페이지는 길게
            borderRadius: i === page ? "6px" : "50%", // 길게일 땐 둥근 사각형, 나머지는 원
            backgroundColor: i === page ? "#333" : "#ccc",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        />
        ))}
      </div>
    </div>
  );
}

/* -------------------- 개별 섹션 -------------------- */

function Section1() {
  return (
    <section className={`${styles.section} ${styles.section1}`}>
      {/* <MainSlide /> */}
      <div className={styles.sectionContent}>
        {/* 제목 */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.95,
            filter: "blur(4px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
          }}
        >
          <p className={styles.subtitle}>건강을 되찾아 드리는 온가족치과</p>
        </motion.div>

        {/* 설명 */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.3 },
          }}
        >
          환자분들이 부담되지 않도록
          <br />
          최선의 치료 계획만을 진행합니다
        </motion.p>

        {/* 버튼 그룹 */}
        <motion.div
          className={styles.ctaButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.6 },
          }}
        >
          <motion.button
            className={styles.primaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            예약하기
          </motion.button>
          <motion.button
            className={styles.secondaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            상담문의
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <div className={`${styles.section} ${styles.section2}`}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>진료과목</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>임플란트</h3>
            <p>
              네비게이션, 디지털, 고난도, 당일식립
              <br />
              디앤유만의 특별한 임플란트 클리닉
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>치아교정</h3>
            <p>
              증상별·장치별 치아교정, 교정 사후관리
              <br />
              그리고 디앤유만의 특별한 치아교정
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>심미치료</h3>
            <p>
              올세라믹, 라미네이트, 지르코니아크라운
              <br />
              기능은 물론 심미성까지 고려한 보철치료
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>통합치료</h3>
            <p>
              충치치료, 사랑니 발치, 전신질환, 수면치료
              <br />
              통증을 줄이기 위한 디앤유의 노력
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section3({ doctorList }) {
  return (
    <div className={`${styles.section} ${styles.section3}`}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>의료진 소개</h2>
        <div className={styles.doctorGrid}>
          {doctorList.map((item, index) => (
            <div className={styles.doctorCard} key={index}>
              <h3>{item.title}</h3>
              <p>
                연세대학교 대학원 치의학과 (통합치의학과)
                <br />
                연세대학교 치과대학병원 통합치의학과 레지던트
                <br />
                보건복지부 인증 통합치의학과 전문의
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className={`${styles.section} ${styles.section4}`}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>오시는 길</h2>
        <div className={styles.contactInfo}>
          <div className={styles.address}>
            <h3>주소</h3>
            <p>
              인천 부평구 경원대로 1395 제2층
              <br />
              제203, 204, 205, 206호(부평동, 부평일번가)
            </p>
          </div>
          <div className={styles.hours}>
            <h3>진료시간</h3>
            <p>
              월 - 목 : 10:00 - 20:30
              <br />
              금요일 : 10:00 - 19:00
              <br />
              토요일 : 10:00 - 14:00
              <br />
              일요일 : 14:00 - 18:00
            </p>
          </div>
          <div className={styles.phone}>
            <h3>전화번호</h3>
            <p className={styles.phoneNumber}>032-274-2875</p>
          </div>
        </div>
      </div>
    </div>
  );
}
