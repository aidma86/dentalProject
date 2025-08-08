import ContentExplain from "@/ui/ContentExplain";
import styles from "./ClinicalGuide.module.css";

const textColorStyle = "늦은 시간에도 걱정 NO! <br><span style='color: #1483C4;'>매주 화/수/목 야간진료</span>(오후 9시까지)";

export default function ClinicalGuide() {
  return (
    <>
      <div className={styles.guide_title}>
        <ContentExplain title="진료안내" content={textColorStyle} />
      </div>
      <div className={styles.guide}>
        <div className={styles.guide_explain}>
          <div className={styles.guide_days}>
            <div>월 / 금</div>
            <div>화 / 수 / 목 </div>
            <div>토 요 일</div>
            <div>점 심 시 간</div>
          </div>
          <div className={styles.guide_time}>
            <div>오전 10:00 ~ 오후 07:00</div>
            <div>오전 10:00 ~ 오후 09:00(야간진료)</div>
            <div>오전 10:00 ~ 오후 02:00</div>
            <div>오후 01:00 ~ 오후 02:30</div>
          </div>
        </div>
        <div className={styles.holiday}>
          <div className={styles.guide_holiday}> * 일요일, 공휴일은 쉽니다</div>
        </div>
      </div>
    </>
  );
}
