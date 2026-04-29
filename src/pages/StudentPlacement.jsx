import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../assets/css/StudentPlacement.module.css";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const StudentPlacement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/placementGallery")
      .then(res => {
        console.log("API DATA :", res.data);
        setStudents(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  if (students.length === 0) {
    return <h2>No Data Found !!!</h2>;
  }

  const sortedStudents = [...students].sort(
    (a, b) => Number(b.salary) - Number(a.salary)
  );

 const formatCompany = (text) => {
  if (!text) return "";

  // Split by comma, dash, or newline
  let parts = text.split(/,|\n/).map(item => item.trim());

  // Take first 3 parts
  let result = parts.slice(0, 3).join(" ");

  // Apply 20 character limit
  if (result.length > 20) {
    return result.substring(0, 20) + "...";
  }

  return result;
};

  return (
    <div className={styles.root}>
      <Nav />
      <div className={styles.content}>
        <h2 className="heading">Training Tuh Bahut Milti Hai...<br /> Par Career Yaha Banta Hai.</h2>
        <div className={styles.container}>
          {sortedStudents.map((student) => (
            <div className={styles.certificate} key={student._id}>
              <img
                src={`http://localhost:5000/${student.background}`}
                alt={student.name}
                className={styles.bgImage}
              />

              {/* OVERLAY CONTENT */}
              <div className={styles.card}>
                <div className={styles.topContent}>
                  <h2 className={styles.name}>{student.name}</h2>
                  <p className={styles.qual}>{student.qualification}</p>
                
                  <p className={styles.middleContent}>
                    {formatCompany(student.company)}
                  </p>
                  <p className={styles.bottomContent}>
                    Salary Package: <strong>{student.salary}</strong> lpa
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentPlacement;