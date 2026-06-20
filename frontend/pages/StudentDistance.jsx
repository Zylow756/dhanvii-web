import styles from "../assets/css/StudentDistance.module.css";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import React, { useEffect, useState } from "react";
import axios from "axios";
import defaultStudent from '../assets/images/default.png';


const StudentDistance = () => {
  const [students, setStudents] = useState([]);
  const API = import.meta.env.VITE_API_URL;


  useEffect(() => {
    axios.get(`${API}/api/far-students`)
      .then(res => {
        console.log("API DATA :", res.data);
        setStudents(res.data);
      })
      .catch(err => console.error(err));
  }, [API]);

  if (students.length === 0) {
    return <h2>No Data Found !!!</h2>;
  }

  const sortedStudents = [...students].sort(
    (a, b) => Number(b.distance) - Number(a.distance)
  );

  return (
    <div className={styles.root}>
      <Nav />
      <div className={styles.content}>
        <h1>Distance doesn't Matter when Skill Speaks</h1>
              <h1 className={styles.heading}>Distance</h1>

        <div className={styles.container}>
          {Array.isArray(sortedStudents) && sortedStudents.map((student) => (
            <div
              key={student._id}
              className={styles.card}
            >
              <h2 className={styles.address}>{student.distance} km - {student.address}</h2>
              <h2 className={styles.city}>{student.city}</h2>

              <img
                src={
                  student.image
                    ? `${API}/uploads/${student.image}`
                    : defaultStudent
                }
                className={styles.photoCircle}
                alt={student.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultStudent;
                }}
              />

              <h2 className={styles.name}>{student.name}</h2>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentDistance;