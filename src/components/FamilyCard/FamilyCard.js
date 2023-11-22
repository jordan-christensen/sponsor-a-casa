import React from "react";
import Link from "next/link";
import { capitalize } from "@/lib/utils";
import styles from "./FamilyCard.module.css";

export default function FamilyCard({ family }) {
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
    <Link
      id={`${family.candidate_ID}`}
      className={styles.link}
      href={`/families/?showModal=true&familyId=${family.candidate_ID}`}
    >
      <article className={styles.card}>
        <div className={`${styles.statusBar} ${statusColor}`}>
          {capitalize(family.status)}
        </div>
        <div className={styles.heading}>
          <div className={styles.prefix}>Familia</div>
          <div className={styles.familyName}>
            {capitalize(family.last_name)}
          </div>
        </div>
        <div className={styles.frame}>
          <img
            className={styles.photo}
            alt="Photo of family"
            src={`${family.family_photo}`}
          />
        </div>
        <div className={styles.body}>
          <ul>
            <li>
              <span className={styles.label}>{`Date Found: `}</span>
              <span>{`${family.date_found}`}</span>
            </li>
            <li>
              <span className={styles.label}>{`Number of Kids: `}</span>
              <span>{`${family.number_children}`}</span>
            </li>
            <li>
              <span className={styles.label}>{`Married: `}</span>
              <span>{`${family.married ? "Yes" : "No"}`}</span>
            </li>
            <li>
              <span className={styles.label}>{`Hardship Scale: `}</span>
              <span>{`${family.lcr}`}</span>
            </li>
          </ul>
        </div>
      </article>
    </Link>
  );
}