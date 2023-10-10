'use client';

import Link from 'next/link';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
// Styles & Assets
import imageA from '../../public/images/compare-1.jpg';
import imageB from '../../public/images/compare-2.jpg';
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p>
          In Tijuana, Mexico, thousands of families live in extreme poverty.
          Lorem ipsum<strong> dolor sit amet consectetur</strong> adipisicing
          elit. Deserunt accusantium officiis.
        </p>
      </div>
      <div className={styles.subheading}>
        <p className={styles.sub}>
          You can make a difference by building a home for a family in need.
        </p>
        <p className={styles.sub}>
          Take a look at some families and see what you think.
        </p>
      </div>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={imageA.src} />}
        itemTwo={<ReactCompareSliderImage src={imageB.src} />}
      />
      <Link href="/families">
        <button className={styles.button}>Explore the possibilities</button>
      </Link>
    </section>
  );
}
