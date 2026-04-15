import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from '../Nav/Nav.module.css';
import logo from '../../assets/images/logo.jpeg';
import React, { useState } from "react";
import LogoutPopup from "../logoutPopup/LogoutPopup";

const AdminNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/");
};

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
          <li className={styles.navItem}><Link to="/Admin">Admin Home</Link></li>

                <li className={styles.navItem}><Link to="/placementGallery">Placement Gallery</Link></li>
          {/* Dropdown */}
          <li className={styles.navItem}><Link to= "/adminFuncGallery">Gallery</Link></li>

          <li className={styles.navItem}><Link to="/adminReview">Review</Link></li>
          <li className={styles.navItem}><Link to="/adminPlacement">Career</Link></li>
          <li className={styles.navItem}><Link to="/adminVideo">Youtube Video</Link></li>
<li className={styles.navItem}>
        <span onClick={() => setShowLogoutPopup(true)}>Logout</span></li>
        </ul>
      </div>
    </nav>

    {showLogoutPopup && (
  <LogoutPopup
    onConfirm={handleLogout}
    onCancel={() => setShowLogoutPopup(false)}
  />
)}
  </>
);
};

export default AdminNav;