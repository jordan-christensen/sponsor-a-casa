"use client";

import React, { useState } from "react";
import SponsorInfo from "./componenets/SponsorInfo";
import CoSponsorInfo from "./componenets/CoSponsorInfo";
import CreateEmail from "./componenets/CreateEmail";
import Payment from "./componenets/Payment";
import styles from "./page.module.css";

const FormViews = {
  0: SponsorInfo,
  1: CoSponsorInfo,
  2: Payment,
  3: CreateEmail,
};

export default function SponsorPage({}) {
  const [view, setView] = useState(0);
  console.log(view)
  const CurrentView = FormViews[view];

  const handleChangeView = (direction) => {
    if (direction === "increment") {
      setView((prevState) => {
        if (prevState < 3) {
          return prevState + 1;
        } else {
          return prevState;
        }
      });
    }

    if (direction === "decrement") {
      setView((prevState) => {
        if (prevState > 0) {
          return prevState - 1;
        } else {
          return prevState;
        }
      });
    }
  };

  return (
    <article className={styles.page}>
      <div className={styles.tools}>
        <p>FOR DEV PURPOSES ONLY***</p>
        <button onClick={() => handleChangeView("increment")}>+</button>
        <button onClick={() => handleChangeView("decrement")}>-</button>
      </div>
      <CurrentView />
    </article>
  );
}
