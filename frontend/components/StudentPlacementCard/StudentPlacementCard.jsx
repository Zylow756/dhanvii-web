import styles from "./StudentPlacementCard.module.css";

const StudentPlacementCard = ({ student, apiUrl  }) => {
     if (!student) return null;
     
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
    <div className={styles.cardContainer}>
      <img
         src={`${apiUrl}/${student.background}`}
        alt={student.name}
        className={styles.image}
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
            <strong> {student.salary}</strong> LPA
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentPlacementCard;