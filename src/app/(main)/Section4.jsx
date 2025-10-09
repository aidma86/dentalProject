"use client";

import styles from "./section4.module.css";

export default function Section4() {
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