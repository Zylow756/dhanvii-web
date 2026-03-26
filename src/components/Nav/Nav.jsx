import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import logo from '../../assets/images/logo.jpeg';
/*import { useState } from "react";*/

const Nav = () => {
  return (
    <Nav className={styles.navbar}>
      <div>
        <img src={logo} alt="Logo"   width="200px" height="100px" />
      </div>
    <div className={styles['topnav']} id="myTopnav">
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/courses">Courses</Link>
      <div className={styles['dropdown']}>
        <button className={styles['dropbtn']}>Gallery</button>
        <div className={styles['dropdown-content']}>
          <Link to="/func-gallery">Functions</Link>
          <Link to="/cong-gallery">Congratulations</Link>
          <Link to="/instit-gallery">Institute</Link>
        </div>
      </div>
  <Link to="/login">Login</Link>
</div>
</Nav>
  );
};

export default Nav;