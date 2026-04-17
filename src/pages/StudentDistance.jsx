import styles from "../assets/css/StudentPlacement.module.css";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import React, { useEffect, useState } from "react";
import axios from "axios";


const StudentDistance = () => {
  const [students, setStudents] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:5000/api/far-students")
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
    (a, b) => Number(b.distance) - Number(a.distance)
  );



  return (
    <div className={styles.root}>
      <Nav />
      <div className={styles.content}>
        <h1 className="hindiHeading">Far Away Distance Students</h1>

        <div className={styles.container}>
          {sortedStudents.map((student) => (
            <div
              key={student._id}
              className={styles.card}
              style={{
                backgroundImage: `linear-gradient(135deg, #f4f79d, #81b2f7)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className={styles.heading}>Distance</h1>
              <h2 className={styles.address}>{student.city}</h2>
              <h2 className={styles.address}>{student.address} - {student.distance}km</h2>

              <img
                src={`http://localhost:5000/uploads/${student.image}`}
                className={styles.photoCircle}
                alt={student.name}
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