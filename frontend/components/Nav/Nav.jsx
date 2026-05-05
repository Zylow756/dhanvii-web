import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import logo from '../../assets/images/logo.jpg';
import React, { useState } from "react";
import Login from "../../pages/Login";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  return (
    <>
      <nav className={styles.navbar}>{/* Logo */}
        <div className={styles.navContainer}>

          <div className={styles.logo}>
            <img src={logo} alt="logo"  loading="lazy"/>
          </div>
          

          {/* Hamburger Menu */}
          <div
            className={`${styles.menuIcon} ${menuOpen ? styles["open"] : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Overlay */}
          {menuOpen && (
            <div
              className={styles.overlay}
              onClick={() => setMenuOpen(false)}
            ></div>
          )}

          {/* Navigation Links */}
          <ul className={`${styles.navLinks} ${menuOpen ? styles["active"] : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/studentPlacement">Placement</Link></li>
            <li><Link to="/studentDistance">Students</Link></li>

            {/* Dropdown */}
            <li className={styles.dropdown}
              onMouseEnter={() => {
                if (timeoutId) clearTimeout(timeoutId);
                setOpen(true);
              }}
              onMouseLeave={() => {
                const id = setTimeout(() => setOpen(false), 200);
                setTimeoutId(id);
              }}>
              <span>Gallery ▾</span>

              {open && (
                <ul className={styles.dropdownMenu}>
                  <li><Link to="/func-gallery">Functions</Link></li>
                  <li><Link to="/instit-gallery">Institute</Link></li>
                  <li><Link to="/certi-gallery">Certification</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>
              <span onClick={() => setShowLogin(true)} className={styles.loginBtn}>
                Login
              </span>
            </li>
          </ul>
        </div>
      </nav>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Nav;