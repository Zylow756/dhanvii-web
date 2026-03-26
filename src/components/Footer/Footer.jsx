import React from 'react';
import styles from './Footer.module.css'
import facebookIcon from '../../assets/images/facebook.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import instagramIcon from '../../assets/images/instagram.jfif';
import twitterIcon from '../../assets/images/twitter.png';
import youtubeIcon from '../../assets/images/youtube.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-top-area']}>
        <div className={styles['footer-widget-1']}>
          <h3>About Us</h3>
          <p>Dhanvii Web Portal is a leading platform for connecting businesses and customers. We provide
            a
            wide range of services to help businesses grow and succeed in the digital world.</p>
        </div>
        <div className={styles['footer-widget-2']}>
          <h3>Our Services</h3>
          <ul className={styles['footer-services']}>
            <li>Book Keeping</li>
            <li>Registration</li>
            <li>Taxation</li>
            <li>Advisory</li>
            <li>Finance</li>
          </ul>
        </div>
      </div>
      <div className={styles['footer-area']}>
      <div className={styles['footer-bottom-area']}>
        <p>© 2026 Dhanvii Web Portal. All rights reserved.</p>
        <div className={styles['footer-social-media']}>
          <a href="https://www.facebook.com/profile.php?id=100063563501750"><img src={facebookIcon} alt="Facebook" width="30px" height="30px" /></a>
          <a href="https://www.linkedin.com/in/dhanvii-accounting-system-29092915b"><img src={linkedinIcon} alt="LinkedIn" width="30px" height="30px" /></a>
          <a href="https://www.instagram.com/accounting_institute_of_kota/"><img src={instagramIcon} alt="Instagram" width="30px" height="30px" /></a>
          <a href="https://x.com/dhanvi_system"><img src={twitterIcon} alt="Twitter" width="30px" height="30px" /></a>
          <a href="https://www.youtube.com/@dhanvikota1502"><img src={youtubeIcon} alt="YouTube" width="30px" height="30px" /></a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
