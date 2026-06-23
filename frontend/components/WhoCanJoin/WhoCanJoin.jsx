import styles from "./WhoCanJoin.module.css";
import {
  FaUser,
  FaGraduationCap,
  FaUserTie,
  FaStore,
  FaSearch,
  FaExchangeAlt,
  FaBookOpen,
  FaUsers,
  FaMedal,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";

const joinData = [
  {
    id: "01",
    icon: <FaGraduationCap />,
    title: "12th Pass Students",
    desc: "Commerce & Non-Commerce students can join and start a bright career in accounting.",
    bg: "#FFF4E5",
    iconColor: "#F59E0B",
    numberBg: "#F59E0B",
    textColor: "#92400E",
  },
  {
    id: "02",
    icon: <FaBookOpen />,
    title: "Graduation Students",
    desc: "Arts, Commerce & Science graduates can upgrade their skills and get better job opportunities.",
    bg: "#EEF2FF",
    iconColor: "#4F46E5",
    numberBg: "#4F46E5",
    textColor: "#312E81",
  },
  {
    id: "03",
    icon: <FaSearch />,
    title: <>Job<br />Seekers</>,
    desc: "Learn in-demand accounting skills and increase your chances of getting a good job.",
    bg: "#FEF2F2",
    iconColor: "#DC2626",
    numberBg: "#DC2626",
    textColor: "#991B1B",
  },
  {
    id: "04",
    icon: <FaUserTie />,
    title: "Working Professionals",
    desc: "Enhance your knowledge, boost your career growth and get better promotions.",
    bg: "#ECFEFF",
    iconColor: "#0891B2",
    numberBg: "#0891B2",
    textColor: "#155E75",
  },
  {
    id: "05",
    icon: <FaStore />,
    title: "Business Owners",
    desc: "Manage your business accounts, GST, and finance with confidence and accuracy.",
    bg: "#FDF4FF",
    iconColor: "#C026D3",
    numberBg: "#C026D3",
    textColor: "#86198F",
  },
  {
    id: "06",
    icon: <FaExchangeAlt />,
    title: "Career Switchers",
    desc: "Looking for a new career path? Accounting offers stability and great growth.",
    bg: "#fdeedc",
    iconColor: "#EA580C",
    numberBg: "#EA580C",
    textColor: "#9A3412",
  },
];

function WhoCanJoin() {
  return (
    <section className={styles.joinSection}>
      <span className={styles.sectionTag}>
        <FaUser /> WHO CAN JOIN US?
      </span>

      <h2>
        Anyone Can Learn. <span>Everyone Can Grow.</span>
      </h2>

      <p className={styles.subtitle}>
        Our Accounting Courses are designed for all backgrounds and career goals.
      </p>

      <div className={styles.joinGrid}>
        {joinData.map((item) => (
          <div className={styles.joinCard} key={item.id} style={{ backgroundColor: item.bg,}}>
            <span className={styles.cardNumber} style={{ backgroundColor: item.numberBg,}}>{item.id}</span>

            <div className={styles.icon} style={{ color: item.iconColor,}}>{item.icon}</div>

            <h3 style={{color: item.textColor,}}>{item.title}</h3>

            <div className={styles.divider} style={{ backgroundColor: item.iconColor,}}></div>

            <p className={styles.textDesc} style={{color: item.textColor,}}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className={styles.bottomBanner}>
        <div className={styles.bottomLeft}>
        <FaUsers className={styles.bottomIcon} />
        <div className={styles.bottomText}>
          <strong>No Prior Accounting Knowledge Required!</strong><br />
          <span> Learn Practical Skills. Get Certified. Get Placed.</span>
        </div>
        </div>

        <div className={styles.bannerItems}>
          <span><FaMedal /> 100% Practical Training</span>
          <span><FaBriefcase /> Placement Assistance</span>
          <span><FaCertificate /> Certificate of Completion</span>
        </div>
      </div>
    </section>
  );
}

export default WhoCanJoin;