import React from 'react';
import bgImage from '../../../public/images/sky.jpg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <div className={styles.bar} />
      <header
        className={styles.header}
        style={{ '--background-url': `url(${bgImage.src})` }}
      >
        <div className={styles.heroText}>
          <div className={styles.heroTextTop}>Sponsor</div>
          <div className={styles.heroTextBottom}>A Casa</div>
        </div>
        <h2 className={styles.subHeading}>Improve the trajectory of a family forever</h2>
      </header>
    </>
  );
}
