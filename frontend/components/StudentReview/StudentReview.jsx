import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import styles from "./StudentReview.module.css";
import studentImage from '../../assets/images/nophoto.png';
import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentReview = () => {
  const [reviews, setReviews] = useState([]);


  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/reviews");
      setReviews(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchReviews();
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
    loadData();
  }, []);


  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>What Our Students Says...</h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{ delay: 7000 }}
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
        {reviews.map((r) => (
          <SwiperSlide key={r.id} className={styles.slide}>
            
            <a href={r.path}>
              <div className={styles.card}>

                <div className={styles.topRow}>

                  {/* LEFT IMAGE */}
                  <img
                    src={
                      r.image
                        ? `http://localhost:5000/uploads/${r.image}`
                        : studentImage
                    }
                    alt={r.name}
                    className={styles.image}
                    onError={(e) => {
                      e.target.onerror = null; // prevent infinite loop
                      e.target.src = studentImage;
                    }}
                  />

                  {/* RIGHT SIDE TEXT */}
                  <div className={styles.textBlock}>
                    <div className={styles.name}>{r.name}</div>
                    <div className={styles.qualification}>{r.qualification}</div>
                  </div>

                </div>

                {/* MESSAGE */}
                <p className={styles.review}>
                  " {r.message} "
                </p>

              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentReview;