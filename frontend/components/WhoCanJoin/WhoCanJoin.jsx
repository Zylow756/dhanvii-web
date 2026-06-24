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
    icon: <FaGraduationCap />,
    title: "12th Pass Students",
    desc: "Commerce & Non-Commerce students can join and start a bright career in accounting.",
    bg: "#FFF4E5",
    iconColor: "#F59E0B",
    textColor: "#92400E",
  },
  {
    icon: <FaBookOpen />,
    title: "Graduation Students",
    desc: "Arts, Commerce & Science graduates can upgrade their skills and get better job opportunities.",
    bg: "#EEF2FF",
    iconColor: "#4F46E5",
    textColor: "#312E81",
  },
  {
    icon: <FaSearch />,
    title: <>Job<br />Seekers</>,
    desc: "Learn in-demand accounting skills and increase your chances of getting a good job.",
    bg: "#FEF2F2",
    iconColor: "#DC2626",
    textColor: "#991B1B",
  },
  {
    icon: <FaUserTie />,
    title: "Working Professionals",
    desc: "Enhance your knowledge, boost your career growth and get better promotions.",
    bg: "#ECFEFF",
    iconColor: "#0891B2",
    textColor: "#155E75",
  },
  {
    icon: <FaStore />,
    title: "Business Owners",
    desc: "Manage your business accounts, GST, and finance with confidence and accuracy.",
    bg: "#FDF4FF",
    iconColor: "#C026D3",
    textColor: "#86198F",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Career Switchers",
    desc: "Looking for a new career path? Accounting offers stability and great growth.",
    bg: "#fdeedc",
    iconColor: "#EA580C",
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
          <div className={styles.joinCard} key={item.id} style={{ backgroundColor: item.bg, }}>
            <div className={styles.icon} style={{ color: item.iconColor, }}>{item.icon}</div>

            <h3 style={{ color: item.textColor, }}>{item.title}</h3>

            <div className={styles.divider} style={{ backgroundColor: item.iconColor, }}></div>

            <p className={styles.textDesc} style={{ color: item.textColor, }}>{item.desc}</p>
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
          <div className={styles.bannerContainer}>
            <FaMedal />
            <span> 100% Practical Training</span>
          </div>
          <div className={styles.bannerContainer}>
            <FaBriefcase />
            <span> Placement Assistance</span>
          </div>
          <div className={styles.bannerContainer}>
            <FaCertificate />
            <span> Certificate of Completion</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoCanJoin;