import React from 'react';
// Components
import { FamilyCard } from '@/components';
// Hooks & Utils
import { getFamilies } from '@/lib/families';
// Styles & Assets
import styles from './page.module.css';

export default function Page() {
  const families = getFamilies();
  return (
    <>
      <div className={styles.description}>
        <h1 className={styles.heading}> Families in Need of a Proper Home</h1>
        <p>
          The families below are in need of a safe, dry, and functional home.
        </p>
        <p>Browse through them and find one that you would like to help.</p>
      </div>
      <section className={styles.families}>
        {families.map((family) => (
          <FamilyCard
            key={family.candidate_ID}
            family={family}
          />
        ))}
      </section>
    </>
  );
}
