import styles from "./WhoCanJoin.module.css";
import {
    FaSchool,
  FaGraduationCap,
  FaUser,
  FaBriefcase,
  FaUniversity,
  FaUserTie ,
  FaUsers,
} from "react-icons/fa";

const candidates = [
  {
    icon: <FaSchool />,
    title: "A 12th passed Commerce & Non-Commerce Student",
    color: "#4c0803",
  },
  {
    icon: <FaUserTie />,
    title: "Anyone wanting to master Tally & GST",
    color: "#4c0803",
  },
  {
    icon: <FaGraduationCap />,
    title: "Graduation: Arts, Commerce,Science",
    color: "#4c0803",
  },
  {
    icon: <FaUniversity />,
    title: "College Dropout",
    color: "#4c0803",
  },
  {
    icon: <FaBriefcase />,
    title: "Working Professional",
    color: "#4c0803",
  },
  {
    icon: <FaUser />,
    title: "Job Seeker",
    color: "#4c0803",
  },
];

const WhoCanJoin = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        <FaUsers className={styles.headingIcon} />
        Who Can Join <span>Accounting Courses</span>?
      </h2>

      <div className={styles.cards}>
        {candidates.map((item, index) => (
          <div className={styles.card} key={index}>
            <div
              className={styles.iconCircle}
              style={{
                backgroundColor: "#f7f2eca5",
                color: item.color,
              }}
            >
              {item.icon}
            </div>

            <div className={styles.line}></div>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoCanJoin;