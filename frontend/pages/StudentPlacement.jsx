import styles from "../assets/css/StudentPlacement.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import StudentPlacementCard from "../components/StudentPlacementCard/StudentPlacementCard";
import { useStudents } from "../hooks/useStudents";
import SEO from '../components/SEO/SEO';

const API = import.meta.env.VITE_API_URL;

const StudentPlacement = () => {
  const students = useStudents();

  const sortedStudents = [...students].sort(
    (a, b) => Number(b.salary) - Number(a.salary)
  );

  return (
    <>
    <SEO
  title="100% Placement Assistance for Accounting Students"
  description="Dhanvii Accounting System offers placement assistance including resume building, interview preparation, personality development, career guidance, and accounting job opportunities."
  keywords="Accounting Placement, Finance Jobs, Placement Assistance, Accounting Career, Resume Preparation, Interview Training, Accounting Institute Placement"
  canonical="https://dhanvii.in/studentPlacement"
/>
    <div className={styles.root}>
      <Nav />

      <div className={styles.content}>
        <h2 className={styles.heading}>
          Training Tuh Bahut Milti Hai...
          <br />
          Par Career Yaha Banta Hai.
        </h2>
        <h2 className={styles.congHeading}>Congratulation</h2>
          <div className={styles.container}>
            {Array.isArray(sortedStudents) && sortedStudents.map((student) => (
                <StudentPlacementCard
                 key={student._id}
                  student={student}
                  apiUrl={API}
                />
            ))}
          </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default StudentPlacement;