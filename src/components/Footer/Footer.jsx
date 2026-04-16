import styles from './Footer.module.css'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {

  return (
    <footer className={styles.footer}>
        
      <div className={styles['footer-area']}>
      <div className={styles['footer-bottom-area']}>
        <p>© Dhanvii Accounting System. All rights reserved.</p>
        <div className={styles['footer-social-media']}>
          <a href="https://www.facebook.com/profile.php?id=100063563501750" className={styles['social-icons']}><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/dhanvii-accounting-system-29092915b" className={styles['social-icons']}><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/accounting_institute_of_kota/" className={styles['social-icons']}><FaInstagram /></a>
          <a href="https://x.com/dhanvi_system" className={styles['social-icons']}><FaTwitter /></a>
          <a href="https://www.youtube.com/@dhanvikota1502" className={styles['social-icons']}><FaYoutube /></a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
