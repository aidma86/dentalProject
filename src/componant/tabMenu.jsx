import Image from "next/image";
import styles from "./tabMenu.module.css";
import Link from "next/link";

export default function TabMenu(props) {
  return (
    <div className={styles.main_box}>
      <Image
        className={styles.bgImg}
        src={props.img}
        layout="fill"
        alt="탭메뉴 이미지"
      />
      <ul className={styles.main_box_tab}>
        {props.tabList.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
