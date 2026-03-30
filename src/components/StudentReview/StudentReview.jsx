import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import styles from "./StudentReview.module.css";

const reviews = [
  {
    name: "Aman Sharma",
    image: "/images/student1.jpg",
    review:
      "This coaching completely changed my life. Faculty support and doubt sessions are amazing!",
    company: "Selected in TCS",
  },
  {
    name: "Priya Verma",
    image: "/images/student2.jpg",
    review:
      "Best institute in Kota! Structured learning and regular tests helped me crack my exam.",
    company: "Selected in Infosys",
  },
  {
    name: "Rahul Meena",
    image: "/images/student3.jpg",
    review:
      "Highly recommended! The environment here motivates you to push your limits.",
    company: "Selected in Wipro",
  },
];

const StudentReview = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Student Success Stories</h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{ delay: 3000 }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={styles.swiper}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.card}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <p className={styles.review}>"{item.review}"</p>
              <h3 className={styles.name}>{item.name}</h3>
              <div className={styles.company}>{item.company}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentReview;