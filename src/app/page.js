"use client";

import { useRouter } from "next/navigation";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Styles & Assets
import styles from "./page.module.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: false,
  swipe: false,
  arrows: true,
};

export default function Home() {
  const router = useRouter();

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p>
          In Tijuana, Mexico, thousands of families live in extreme poverty.
          These families have dirt floors, walls made from scrap lumber, leaky
          roofs and a five gallon bucket for a bathroom.
        </p>
        <p>
          You could build a new home for a family in need. You could change the
          trajectory of a family forever. Take a look at some families and see
          what you think.
        </p>
      </div>
      <div className={styles.sliders}>
        <div className={styles.sliderSection}>
          <Slider {...settings}>
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
                  src={`https://res.cloudinary.com/dvfcvw2kk/image/upload/v1700622278/spark-of-hope/home/home_image1_a_mqug2k.jpg`}
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={`https://res.cloudinary.com/dvfcvw2kk/image/upload/v1700622277/spark-of-hope/home/home_image1_b_sdsqmu.jpg`}
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
          </Slider>
        </div>
      </div>
      <button
        className={styles.button}
        onClick={() => router.push("/families")}
      >
        Explore the possibilities
      </button>
    </section>
  );
}
