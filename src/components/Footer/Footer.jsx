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
        
      <div className={styles.footerArea}>
      <div className={styles.footerBottomArea}>
        <p>© Dhanvii Accounting System. All rights reserved.</p>
        <div className={styles.footerSocialMedia}>
          <a href="https://www.facebook.com/profile.php?id=100063563501750" className={styles.socialIcons}><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/dhanvii-accounting-system-29092915b" className={styles.socialIcons}><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/accounting_institute_of_kota/" className={styles.socialIcons}><FaInstagram /></a>
          <a href="https://x.com/dhanvi_system" className={styles.socialIcons}><FaTwitter /></a>
          <a href="https://www.youtube.com/@dhanvikota1502" className={styles.socialIcons}><FaYoutube /></a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
