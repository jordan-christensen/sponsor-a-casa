import React from "react";
import logo from "@/images/spark-of-hope-logo.png";
import bgImage from "../../../public/images/sky.jpg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header
        className={styles.header}
        style={{ "--background-url": `url(${bgImage.src})` }}
      >
        <a
          href="https://www.sparkofhopefoundation.org"
          className={styles.logoAnchor}
        >
          <img
            className={styles.logo}
            src={logo.src}
            alt="Spark of Hope Foundation"
          />
        </a>
        <div className={styles.heroText}>
          <div className={styles.heroTextTop}>Sponsor</div>
          <div className={styles.heroTextBottom}>A Casa</div>
        </div>
      </header>
    </>
  );
}
