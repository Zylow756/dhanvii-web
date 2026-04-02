import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import logo from '../../assets/images/logo.jpeg';
import React, { useState } from "react";
import Login from "../../pages/Login";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
  <>
    <nav className={styles.navbar}>
      <div className={styles['nav-container']}>

        {/* Logo */}
        <div className={styles['logo']}>
          <img src={logo} alt="logo" />
        </div>

        {/* Hamburger Menu */}
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
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

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
<li>
        <span onClick={() => setShowLogin(true)}>Login</span></li>
        </ul>
      </div>
    </nav>

    {showLogin && <Login onClose={() => setShowLogin(false)} />}
  </>
);
};

export default Nav;