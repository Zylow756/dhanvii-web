import styles from "./StudentPlacementCard.module.css";

const StudentPlacementCard = ({ student, apiUrl }) => {
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

 const getHeadingText = () => {
  switch (student.workingAs?.toLowerCase()) {
    case "accountant":
      return (
        <>
          Placed As Accountant
        </>
      );

    case "businessman":
      return (
        <>
          Managing Own Business
        </>
      );

    default:
      return student.workingAs;
  }
};

 return (
  <div
     className={`${styles.cardContainer} ${
      styles[student.workingAs?.toLowerCase()]
    }`}
  >
    <p className={styles.headingType}>
      {getHeadingText()}
    </p>

    <img
      src={`${apiUrl}/${student.photo}`}
      alt={student.name}
      className={styles.photo}
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