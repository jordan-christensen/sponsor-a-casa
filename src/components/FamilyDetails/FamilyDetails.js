"use client";

import React from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
// Styles & Assets
import styles from "./FamilyDetails.module.css";

export default function FamilyDetails({
  family,
  handleNavigatePrevious,
  handleNavigateNext,
  handleSponsorFamily,
}) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h1 className={styles.heading}>{family?.last_name}</h1>
        <Link href={`/families`}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Link>
      </header>
      <section>
        
      </section>
      <div className={styles.buttonRow}>
        <button className={styles.shiftButton} onClick={handleNavigatePrevious}>
          <ArrowBackIosNewIcon fontSize="medium" />
          <span>Previous</span>
        </button>
        <button className={styles.button} onClick={handleSponsorFamily}>
          Sponsor This Family
        </button>
        <button className={styles.shiftButton} onClick={handleNavigateNext}>
          <span>Next</span>
          <ArrowForwardIosIcon fontSize="small" />
        </button>
      </div>
    </article>
  );
}
