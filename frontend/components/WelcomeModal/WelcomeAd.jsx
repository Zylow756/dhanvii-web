import { useState, useEffect } from "react";
import { jacketAds } from "../../pages/adsData";
import styles from "../RandomAd/RandomAd.module.css";

const WelcomeAd = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // change image sequentially every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === jacketAds.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ad = jacketAds[currentIndex];

  if (!ad) return null;

  return (
    <div className={styles.adBox}>
      <div className={styles.ad}>
        <img
          src={ad.image}
          alt={ad.title}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default WelcomeAd;