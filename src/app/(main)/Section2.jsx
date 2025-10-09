"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./section2.module.css";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const servicesData = [
  {
    id: 1,
    title: "임플란트",
    subtitle:
      "네비게이션, 디지털, 고난도, 당일식립\n온가족만의 특별한 임플란트 클리닉",
    image: "/image/section2_image/임플란트.webp",
    description: "자연치아와 가장 유사한 기능을 제공하는 최신 임플란트 시술",
    features: [
      "네비게이션 임플란트로 정밀한 식립",
      "디지털 기술을 활용한 정확한 진단",
      "고난도 케이스도 안전하게 시술",
      "당일 식립으로 내원 횟수 최소화",
      "오스템, 스트라우만 등 검증된 임플란트 사용",
      "10년 보증 시스템",
    ],
    process: [
      "정밀 진단 및 치료 계획 수립",
      "네비게이션을 통한 정확한 식립 위치 결정",
      "임플란트 식립 수술",
      "치유 기간 (2-6개월)",
      "최종 보철물 제작 및 장착",
    ],
  },
  {
    id: 2,
    title: "치아교정",
    subtitle:
      "증상별·장치별 치아교정, 교정 사후관리\n그리고 온가족만의 특별한 치아교정",
    image: "/image/section2_image/치아교정.webp",
    description:
      "개인 맞춤형 치아교정으로 아름답고 건강한 치열을 만들어드립니다",
    features: [
      "투명교정 (인비절라인, 클리어어라이너)",
      "메탈 브라켓 교정",
      "세라믹 브라켓 교정",
      "설측교정 (혀쪽 교정)",
      "부분교정",
      "교정 후 유지관리 프로그램",
    ],
    process: [
      "정밀 검사 및 3D 분석",
      "개인별 맞춤 치료계획 수립",
      "교정장치 장착",
      "정기적인 조절 및 관리",
      "교정 완료 및 유지장치 착용",
    ],
  },
  {
    id: 3,
    title: "심미치료",
    subtitle:
      "올세라믹, 라미네이트, 지르코니아크라운\n기능은 물론 심미성까지 고려한 보철치료",
    image: "/image/section2_image/심미치료.webp",
    description: "자연스럽고 아름다운 미소를 위한 최고급 심미치료",
    features: [
      "올세라믹 크라운 (메탈프리)",
      "포세린 라미네이트",
      "지르코니아 크라운",
      "치아미백 (오피스, 홈 미백)",
      "잇몸 성형술",
      "스마일 디자인",
    ],
    process: [
      "구강 검사 및 상담",
      "치아 삭제 및 임시치아 제작",
      "정밀 인상채득",
      "최종 보철물 제작",
      "장착 및 교합 조정",
    ],
  },
  {
    id: 4,
    title: "통합치료",
    subtitle:
      "충치치료, 사랑니 발치, 전신질환, 수면치료\n통증을 줄이기 위한 온가족의 노력",
    image: "/image/section2_image/통합치료.webp",
    description: "종합적인 구강 건강 관리를 통한 평생 치아 건강",
    features: [
      "충치치료 (레진, 인레이, 크라운)",
      "신경치료 (근관치료)",
      "사랑니 발치",
      "잇몸치료 (스케일링, 치주치료)",
      "수면치료 (무통치료)",
      "전신질환자 치료",
    ],
    process: [
      "종합 구강 검진",
      "개별 치료계획 수립",
      "단계별 치료 진행",
      "치료 후 관리",
      "정기 검진 및 유지관리",
    ],
  },
];

export default function Section2() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  return (
    <div className={`${styles.section} ${styles.section2}`}>
      <div className={styles.sectionContent}>
        {/* 헤더 섹션 */}
        <div className={styles.sectionHeader}>
          <motion.div
            className={styles.sectionTitleContainer}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className={styles.sectionMainTitle}>DENTAL</h2>
            <h3 className={styles.sectionSubTitle}>SERVICES</h3>
          </motion.div>

          <motion.div
            className={styles.sectionDescription}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            <h4 className={styles.descriptionTitle}>
              가족 모두가 신뢰하는
              <br />
              온가족치과의원
            </h4>
            <p className={styles.descriptionText}>
              정확한 진단과 안전한 치료로
              <br />
              평생 건강한 치아를 지켜드립니다
            </p>
          </motion.div>
        </div>
        <div className={styles.serviceGrid}>
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.1,
                ease: "easeOut",
              }}
              viewport={{ amount: 0.3 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              onClick={() => openModal(service)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.serviceImageContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className={styles.serviceImage}
                />
              </div>
              <h3>{service.title}</h3>
              <p>
                {service.subtitle.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < service.subtitle.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
              <div className={styles.cardOverlay}>
                <span className={styles.viewMore}>자세히 보기</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Portal로 모달 렌더링 */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isModalOpen && selectedService && (
              <motion.div
                className={styles.modalOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              >
                <motion.div
                  className={styles.modalContent}
                  initial={{ scale: 0.7, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.7, opacity: 0, y: 50 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className={styles.closeButton} onClick={closeModal}>
                    ×
                  </button>

                  <div className={styles.modalHeader}>
                    <div className={styles.modalImageContainer}>
                      <Image
                        src={selectedService.image}
                        alt={selectedService.title}
                        width={400}
                        height={300}
                        className={styles.modalImage}
                      />
                    </div>
                    <div className={styles.modalHeaderContent}>
                      <h2 className={styles.modalTitle}>
                        {selectedService.title}
                      </h2>
                      <p className={styles.modalDescription}>
                        {selectedService.description}
                      </p>
                    </div>
                  </div>

                  <div className={styles.modalBody}>
                    <div className={styles.modalSection}>
                      <h3>치료 특징</h3>
                      <ul className={styles.featureList}>
                        {selectedService.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.modalSection}>
                      <h3>치료 과정</h3>
                      <ol className={styles.processList}>
                        {selectedService.process.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className={styles.modalFooter}>
                    <button className={styles.consultButton}>
                      상담 예약하기
                    </button>
                    <button className={styles.phoneButton}>
                      📞 032-274-2875
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
