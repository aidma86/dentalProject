import * as React from "react";
import styles from "./basicMenu.module.css";

export default function BasicMenu() {
  return (
    <>
      {Array.from({ length: 10 }, (_, index) => (
        <div key={index} className={styles.menuContainer}>
          <button className={styles.title}>
            Basic Menu {index + 1}
          </button>
          <ul className={styles.menu}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      ))}
    </>
  );
}
