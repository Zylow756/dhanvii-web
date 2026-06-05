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

  const shuffleArray = (array) => {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  const fetchReviews = useCallback(async () => {
    try {
      const res = await axios.get(`${API}/api/reviews`);

      setReviews(shuffleArray(res.data));

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
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={25}
        loop={reviews.length > 3}
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
        allowTouchMove={true}
      >
        {Array.isArray(reviews) && reviews.map((r) => (
          <SwiperSlide key={r._id} className={styles.slide}>
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
              <div className={styles.reviewContainer}>
                <p className={styles.review}>
                  "{r.message}"
                </p>

                {r.message?.length > 120 && (
                  <a
                    href={r.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewMore}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View More
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentReview;