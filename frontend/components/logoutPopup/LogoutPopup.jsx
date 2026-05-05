import styles from "../../components/logoutPopup/LogoutPopup.module.css";

const LogoutPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h3>Are you sure you want to logout?</h3>
        <div className={styles.actions}>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPopup;