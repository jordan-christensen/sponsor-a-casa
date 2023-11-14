"use client";

import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
// Components
import { AnimateOnScroll } from "@/components";
// Styles & Assets
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <AnimateOnScroll>
        <div className={styles.heading}>
          <p>
            In Tijuana, Mexico, thousands of families live in extreme poverty.
            These families have dirt floors, walls made from scrap lumber, leaky
            roofs and a five gallon bucket for a bathroom.
          </p>
          <p>
            You could build a new home for a family in need. You could change
            the trajectory of a family forever. Take a look at some families and
            see what you think.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <div className={styles.sliders}>
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={`https://res.cloudinary.com/dvfcvw2kk/image/upload/v1698957110/spark-of-hope/home/home_image3_a_fdrqmv.jpg`}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={`https://res.cloudinary.com/dvfcvw2kk/image/upload/v1698957110/spark-of-hope/home/home_image3_b_pdiajv.jpg`}
              />
            }
          />
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={`https://res.cloudinary.com/dvfcvw2kk/image/upload/v1698957052/spark-of-hope/home/home_image2_a_tzpzdt.jpg`}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={`https://res.cloudinary.com/dvfcvw2kk/image/upload/v1698957051/spark-of-hope/home/home_image2_b_vgqple.jpg`}
              />
            }
          />
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={`https://res.cloudinary.com/dvfcvw2kk/image/upload/v1698944001/spark-of-hope/home/home_image1_a_sissqz.jpg`}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={`https://res.cloudinary.com/dvfcvw2kk/image/upload/v1698944001/spark-of-hope/home/home_image1_b_cyqfr8.jpg`}
              />
            }
          />
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src={`https://res.cloudinary.com/dvfcvw2kk/image/upload/v1699930030/spark-of-hope/home/home_image4_a_byf2n2.jpg`}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={`https://res.cloudinary.com/dvfcvw2kk/image/upload/v1699930029/spark-of-hope/home/home_image4_b_kpt5jn.jpg`}
              />
            }
          />
        </div>
      </AnimateOnScroll>

      <Link href="/families">
        <button className={styles.button}>Explore the possibilities</button>
      </Link>
    </section>
  );
}
