import styles from './Footer.module.css';
import React, { useState } from "react";
import Login from "../../pages/Login";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import EnquiryPopup from '../EnquiryPopup/EnquiryPopup';

const Footer = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Left Section */}
        <div className={styles.left}>
          <h3>Contact Us</h3>
          <div className={styles.info}>

            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <div className={styles.contactText}>
                <strong>Address</strong>
                <p>
                  267, Ganesh Nagar,<br />
                  Near Khade Ganesh Ji Temple,<br />
                  Kota [Rajasthan] - 324010
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <div className={styles.contactText}>
                <strong>Call Us</strong>
                <p>+91 9414729662</p>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <div className={styles.linkList}>
            <div className={styles.linkSeparatorLeft}>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/services">Services</Link>
            </div>
            <div className={styles.linkSeparatorRight}>
              <Link to="/studentPlacement">Placement</Link>
              <Link to="/studentDistance">Students</Link>
              <Link to="/career">Career</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
        <section className={styles.footerCTA}>
          <h2>Ready to Build Your Accounting Career?</h2>
          <button onClick={() => setShowEnquiry(true)}>Enroll Now</button>
        </section>

        {/* Social */}
        <div className={styles.social}>
          <h3>Get in Touch</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/profile.php?id=100063563501750" ><FaFacebookF /></a>
            <a href="https://x.com/dhanvi_system" ><FaTwitter /></a>
            <a href="https://www.instagram.com/accounting_institute_of_kota/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/dhanvii-accounting-system-29092915b"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/@dhanvikota1502"><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p onClick={() => setShowLogin(true)}>© 2026 Dhanvii Accounting System. All rights reserved.</p>

        {/*<div className={styles.bottomLinks}>
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
          </div>*/}
      </div>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showEnquiry && (
        <EnquiryPopup
          onClose={() => setShowEnquiry(false)}
        />
      )}
    </footer>
  );
};

export default Footer;
