import React from 'react';
import { Link } from "react-router-dom";
import styles from './Nav.module.css'

const Nav = () => {
  return (
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
  );
};

export default Nav;
