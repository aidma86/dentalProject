import styles from "./doctorSection.module.css";
import Image from "next/image";

export default function DoctorSection(props) {
  return (
    <div className={styles.card_box}>
      <div className={styles.doctor}>
        <Image
        className={styles.doctor_img}
        src={props.img}
        width={430}
        height={550}
        alt="의사소개"
        />
      </div>
      <div className={styles.doctor_explain}>
        <h2>{props.title}</h2>
        <div>
          {props.content.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
