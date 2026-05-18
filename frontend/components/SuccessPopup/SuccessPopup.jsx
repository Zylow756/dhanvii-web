import styles from "./SuccessPopup.module.css";
import successImg from "../../assets/images/thanks you.jpg";

const SuccessPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <img
          src={successImg}
          alt="Success"
          className={styles.image}
        />

        <button
          className={styles.closeBtn}
          onClick={onClose}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;