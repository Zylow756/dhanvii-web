import { useState, useEffect } from "react";
import { jacketAds } from "../../pages/adsData";
import styles from "../RandomAd/RandomAd.module.css";


const WelcomeAd = () => {
  const [ad, setAd] = useState(null);

  useEffect(() => {
    // function to pick random ad
    const getRandomAd = () => {
      const randomIndex = Math.floor(Math.random() * jacketAds.length);
      setAd(jacketAds[randomIndex]);
    };

    // show first ad immediately
    getRandomAd();

    // change ad every 5 seconds
    const interval = setInterval(getRandomAd, 5000);

    // cleanup (VERY IMPORTANT)
    return () => clearInterval(interval);
  }, []);

  if (!ad) return null;

  return (
  <div className={styles.adBox}>
    {/* RIGHT - Random Ad */}
    <div className={styles.ad}>
      <img src={ad.image} alt={ad.title}  loading="lazy"/>
    </div>

  </div>
  );
};

export default WelcomeAd;