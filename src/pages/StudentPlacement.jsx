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

  return (
    <div className={styles.root}>
      <Nav />
      <div className={styles.content}>
<h1 className="hindiHeading">हम सिर्फ ट्रेनिंग नहीं, करियर बनाते हैं</h1>
      <div className={styles.container}>
        {sortedStudents.map((student, index) => (
          <div className={styles.certificate} key={index}
            style={{
              backgroundImage: student.background
                ? `url(http://localhost:5000/${student.background})`
                : `linear-gradient(135deg, #f4f79d, #81b2f7)`, // default design
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <h1 className={styles.heading}>Congratulations</h1>

            {/* FIXED IMAGE */}
            <img
              src={`http://localhost:5000/${student.photo.replace(/\\/g, "/")}`}
              className={styles.photo}
              alt={student.name}
            />

            <h2 className={styles.name}>{student.name}</h2>
            <p className={styles.qual}>{student.qualification}</p>

            <p className={styles.companyCard}>
              {student.company}
            </p>
            <p className={styles.salary}>Salary Package: <strong>{student.salary}</strong> lpa</p>
          </div>

        ))}
      </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default StudentPlacement;