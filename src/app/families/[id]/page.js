import React from "react";
import Link from "next/link";
// Hooks & Utils
import { getFamilyById } from "@/lib/families";
// Styles & Assets
import styles from "./page.module.css";

export default function Page({ params }) {
  const family = getFamilyById(params.id);
  return (
    <article className={styles.page}>
      <h1 className={styles.intro}>The {family?.last_name} Family</h1>
      <section className={styles.details}>
        <div className={styles.familyPhotoFrame}>
          <img src={family?.family_photo} alt="Family photo" />
        </div>
        <div>{family?.description}</div>
      </section>
      <section className={styles.gallery}>
        {family?.current_living_photos?.map((image, index) => (
          <div key={index} className={styles.galleryFrame}>
            <img
              className={styles.galleryImage}
              src={image}
              alt="Current living conditions"
            />
          </div>
        ))}
      </section>
      <section>
        <Link href={`/families/${params.id}/sponsor`}>
          <button className="button-main">Sponsor Family</button>
        </Link>
      </section>
    </article>
  );
}
