import styles from "./RandomAd.module.css";
import WelcomeAd from "../WelcomeModal/WelcomeAd";

const RandomAd = () => {
  return (
    <div className={styles.adBox}>

      {/* LEFT - YouTube */}
      <div className={styles.video}>
        <iframe
          src="https://www.youtube.com/embed/_EDjWCDtDt0"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>

      {/* RIGHT - Random Ad */}
      <div className={styles.ad}>
      <WelcomeAd />
      </div>
    </div>
  );
};

export default RandomAd;