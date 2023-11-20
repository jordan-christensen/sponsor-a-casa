"use client";

import React from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
// import ImageGallery from "react-image-gallery";
// Styles & Assets
import styles from "./FamilyDetails.module.css";

export default function FamilyDetails({
  family,
  handleNavigatePrevious,
  handleNavigateNext,
  handleSponsorFamily,
}) {
  const getStatusColor = (status) => {
    switch (status) {
      case "AVAILABLE":
        return `green`;
      case "RESERVED":
        return `blue`;
      case "SCHEDULED":
        return `yellow`;
      case "IN PROGRESS":
        return `yellow`;
      case "COMPLETED":
        return `orange`;
    }
  };

  const statusColor = getStatusColor(family.status);

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Familia {family?.last_name}</h1>
        <Link href={`/families`}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Link>
      </header>

      <section className={styles.body}>
        <img className={styles.image} src={family.family_photo} alt="Family" />
        <div className={styles.details}>
          <div className={`${styles.status} ${statusColor}`}>
            {family.status}
          </div>
          <div className={styles.description}>{family.description}</div>
        </div>
      </section>

      <section className={styles.gallery}>
        {family?.current_living_photos?.map((photo) => (
          <img
            className={styles.galleryImage}
            src={photo}
            alt="Living conditions"
          />
        ))}
      </section>
      {/* <ImageGallery items={family?.photos}/> */}

      <footer className={styles.buttonRow}>
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
      </footer>
    </article>
  );
}
