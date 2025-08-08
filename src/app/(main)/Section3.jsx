"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Section3.module.css";
import Image from "next/image";

const doctorList = [
  {
    img: "/image/doctor/kim.png",
    title: "김한나",
    grade: "대표원장",
    content: [
      "부산교육대학교 초등교육학과 졸업",
      "A대학 치의학전문대학원 졸업",
      "A대학 치과대학 치의학 석사",
      "통합치의학 전문의",
      "C병원 치과과장",
      "D병원 치과진료원장",
    ],
  },
  {
    img: "/image/doctor/song.png",
    title: "송보가",
    grade: "원장",
    content: [
      "아주대학교 경제학과 졸업",
      "A대학교 치의학전문대학원 졸업",
      "구강악안면외과 전문의",
      "대한구강악안면외과학회 정회원",
      "대한구강악안면 임플란트학회 정회원",
    ],
  },
  {
    img: "/image/doctor/lim.webp",
    title: "임현웅",
    grade: "원장",
    content: [
      "C대학교 컴퓨터공학과 졸업",
      "A대학교 치의학전문대학원 졸업",
      "A대학교 치과병원 종합진료실 근무",
      "D치과 보철 연구회 수료",
      "University of P대학 근관치료 수료",
    ],
  },
];

export default function Section3() {
  const [selectedDoctor, setSelectedDoctor] = useState(doctorList[0]);

  return (
    <div className={`${styles.section} ${styles.section3}`}>
      <div className={styles.sectionContent}>
        {/* 섹션 헤더 */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <div className={styles.sectionTitleContainer}>
            <h2 className={styles.sectionTitle}>MEDICAL</h2>
            <h3 className={styles.sectionSubTitle}>TEAM</h3>
          </div>

          <div className={styles.sectionDescription}>
            <h4 className={styles.descriptionTitle}>
              신뢰할 수 있는
              <br />
              전문 의료진
            </h4>
            <p className={styles.descriptionText}>
              환자분과 성심으로 진료하며
              <br />
              최고의 치료 결과를 약속드립니다
            </p>
          </div>
        </motion.div>

        {/* 선택된 의사 프로필 */}
        <motion.div
          className={styles.doctorProfile}
          key={selectedDoctor.title}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className={styles.doctorCard}>
            <div className={styles.doctorImageContainer}>
              <Image
                src={selectedDoctor.img}
                alt={selectedDoctor.title}
                width={400}
                height={400}
                className={styles.doctorImage}
              />
            </div>

            <div className={styles.doctorInfo}>
              <div className={styles.doctorHeader}>
                <h3 className={styles.doctorName}>{selectedDoctor.title}</h3>
                <span className={styles.doctorGrade}>
                  {selectedDoctor.grade}
                </span>
              </div>

              <div className={styles.doctorCareer}>
                <h4 className={styles.careerTitle}>경력 및 전문분야</h4>
                <ul className={styles.careerList}>
                  {selectedDoctor.content.map((item, index) => (
                    <li key={index} className={styles.careerItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.profileBackImg}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <Image src="/blob/Stacked_blob.png" width={400} height={400} alt="blob"/>
        </motion.div>

        {/* 의사 선택 탭 */}
        <motion.div
          className={styles.doctorTabs}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          {doctorList.map((doctor, index) => (
            <motion.button
              key={index}
              className={`${styles.doctorTab} ${
                selectedDoctor.title === doctor.title ? styles.active : ""
              }`}
              onClick={() => setSelectedDoctor(doctor)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.tabContent}>
                <span className={styles.tabName}>{doctor.title}</span>
                <span className={styles.tabGrade}>{doctor.grade}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
