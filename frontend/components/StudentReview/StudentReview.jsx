import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import styles from "./StudentReview.module.css";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const StudentReview = () => {
  const [reviews, setReviews] = useState([]);
  const API = import.meta.env.VITE_API_URL;
  const [imageError, setImageError] = useState({});

  const getInitials = (name) => {
    return name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const fetchReviews = useCallback(async () => {
    try {
      const res = await axios.get(`${API}/api/reviews`);

      const shuffled = [...res.data];

      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      setReviews(shuffled);

    } catch (err) {
      console.error(err);
    }
  }, [API]);

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchReviews();
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
    loadData();
  }, [fetchReviews]);


  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>What Our Students Says...</h2>

      <Swiper
        key={JSON.stringify(reviews)}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={reviews.length > 3}
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
        {Array.isArray(reviews) && reviews.map((r) => (
          <SwiperSlide key={r._id} className={styles.slide}>

            <a href={r.path}>
              <div className={styles.card}>

                <div className={styles.topRow}>

                  {/* LEFT IMAGE */}
                  {r.image && !imageError[r._id] ? (
                    <img
                      src={`${API}/uploads/${r.image}`}
                      alt={r.name}
                      className={styles.image}
                      onError={() =>
                        setImageError((prev) => ({
                          ...prev,
                          [r._id]: true,
                        }))
                      }
                    />
                  ) : (
                    <div className={styles.initialAvatar}>
                      {getInitials(r.name)}
                    </div>
                  )}

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