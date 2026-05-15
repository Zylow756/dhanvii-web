import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../assets/css/StudentPlacement.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const StudentPlacement = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    console.log("USE EFFECT RUNNING");
    axios
      .get("${API}/api/placementGallery")
      .then((res) => {
        console.log("API RESPONSE:", res.data);

        if (Array.isArray(res.data)) {
          setStudents(res.data);
        } else if (Array.isArray(res.data.data)) {
          setStudents(res.data.data);
        } else {
          setStudents([]);
        }
      })
      .catch((err) => {
        console.error("API ERROR:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const sortedStudents = [...students].sort(
    (a, b) => Number(b.salary) - Number(a.salary)
  );

  const formatCompany = (text) => {
    if (!text) return "";

    let parts = text.split(/,|\n/).map((item) => item.trim());

    let result = parts.slice(0, 3).join(" ");

    if (result.length > 20) {
      return result.substring(0, 20) + "...";
    }

    return result;
  };

  return (
    <div className={styles.root}>
      <Nav />

      <div className={styles.content}>
        <h2 className="heading">
          Training Tuh Bahut Milti Hai...
          <br />
          Par Career Yaha Banta Hai.
        </h2>

        {loading ? (
          <h2>Loading...</h2>
        ) : students.length === 0 ? (
          <h2>No Data Found !!!</h2>
        ) : (
          <div className={styles.container}>
            {sortedStudents.map((student) => (
              <div className={styles.certificate} key={student._id}>
                <img
                  src={`${API}/${student.background}`}
                  alt={student.name}
                  className={styles.bgImage}
                />

                <div className={styles.card}>
                  <div className={styles.topContent}>
                    <h2 className={styles.name}>{student.name}</h2>

                    <p className={styles.qual}>
                      {student.qualification}
                    </p>

                    <p className={styles.middleContent}>
                      {formatCompany(student.company)}
                    </p>

                    <p className={styles.bottomContent}>
                      Salary Package:
                      <strong> {student.salary}</strong> lpa
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default StudentPlacement;