import styles from "./RandomAd.module.css";
import WelcomeAd from "../WelcomeModal/WelcomeAd";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RandomAd = ({ onEnquiryClick }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.adBox}>
      <div className={styles.ratingsContainer}>
        <p>
          Best Accounting Institute in Kota with 100% Job Placements. Build a High-Paying Career in Accounting, Finance, Taxation, Banking & Payroll — with Dhanvii
        </p>
        <div className={styles.buttonContainer}>
          <a href="https://www.google.com/maps?q=Dhanvii+Accounting+System+Kota"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ratingButton}
          >
            <FaStar className={styles.starIcon} />
            <span>5.0</span>
            <span>Google</span>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100063563501750"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ratingButton}
          >
            <FaStar className={styles.starIcon} />
            <span>4.8</span>
            <span>Facebook</span>
          </a>

          <a
            href="https://jsdl.in/DT-9966MAU2QQM"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ratingButton}
          >
            <FaStar className={styles.starIcon} />
            <span>4.7</span>
            <span>Just Dial</span>
          </a>
        </div>
        <div className={styles.buttonLink}>
          <button
            onClick={() => navigate("/courses")}
            className={styles.link}>
            View Courses <FaArrowRight className={styles.arrowIcon} />
          </button>
          <button
            className={styles.link}
            onClick={onEnquiryClick}
          >
            Enquiry Now <FaArrowRight className={styles.arrowIcon} />
          </button>
        </div>
      </div>
      <div className={styles.ad}>
        <WelcomeAd />
      </div>
    </div>
  );
};

export default RandomAd;