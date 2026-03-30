import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import logo from '../../assets/images/logo.jpeg';
import { useEffect } from "react";
import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLogin]);

  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-container']}>

        {/* Logo */}
        <div className={styles['logo']}>
          <img src={logo} alt="logo" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div
          className={`${styles["menu-icon"]} ${menuOpen ? styles["open"] : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className={styles['overlay']}
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Navigation Links */}
        <ul className={`${styles["nav-links"]} ${menuOpen ? styles["active"] : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>

          {/* Dropdown */}
          <li className={styles.dropdown}>
            <span onClick={() => setOpen(!open)}>Gallery ▾</span>

            {open && (
              <ul className={styles["dropdown-menu"]}>
                <li><Link to="/func-gallery">Functions</Link></li>
                <li><Link to="/cong-gallery">Congratulations</Link></li>
                <li><Link to="/instit-gallery">Institute</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><span onClick={() => setShowLogin(true)} className={styles.loginBtn}>
            Login
          </span></li>
        </ul>{showLogin && (
          <div className={styles.loginOverlay} onClick={() => setShowLogin(false)}>

            <div
              className={styles.loginPopup}
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className={styles.closeBtn}
                onClick={() => setShowLogin(false)}
              >
                ✖
              </span>

              <h2>Login</h2>

              <input type="text" placeholder="Enter Email" />
              <input type="password" placeholder="Enter Password" />

              <button className={styles.loginSubmit}>Login</button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;