import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import StudentReview from '../components/StudentReview/StudentReview';
import styles from '../assets/css/Home.module.css';
import RandomAd from '../components/RandomAd/RandomAd';
import WelcomeModal from "../components/WelcomeModal/WelcomeModal";
import FloatingShare from '../components/FloatingShare/FloatingShare';
import AboutUsContain from '../components/AboutUsContain/AboutUsContain';
import StudentPlacementCard from '../components/StudentPlacementCard/StudentPlacementCard';
import { useState } from "react";
import EnquiryPopup from "../components/EnquiryPopup/EnquiryPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useStudents } from "../hooks/useStudents";
import WhoCanJoin from '../components/WhoCanJoin/WhoCanJoin';
import JobOpportunities from '../components/JobOpportunities/JobOpportunities';
import {
  FaCalculator,
  FaFileInvoiceDollar,
  FaBook,
  FaChartBar,
  FaUniversity,
  FaMoneyCheckAlt,
  FaClipboardList,
  FaBoxes,
  FaSearchDollar,
  FaBriefcase,
  FaGraduationCap,
  FaUserTie,
  FaCertificate,
  FaUsers,
  FaClock,
} from "react-icons/fa";

const API = import.meta.env.VITE_API_URL;

const Home = () => {
  const students = useStudents();
  const [showEnquiry, setShowEnquiry] = useState(false);

  const courses = [
    {
      id: "01",
      icon: <FaCalculator />,
      title: "Tally Prime",
      subtitle: "(Basic to Advanced)",
      desc: "Learn Tally Prime from basic to advanced with GST, invoicing, reports & inventory.",
      points: [
        "Company Creation",
        "Vouchers & Entries",
        "GST & E-Invoicing",
        "MIS Reports",
      ],
      bg: "#FFF4E5",
      iconColor: "#F59E0B",
      numberBg: "#F59E0B",
      textColor: "#92400E",
    },
    {
      id: "02",
      icon: <FaFileInvoiceDollar />,
      title: "GST",
      subtitle: "(Goods & Services Tax)",
      desc: "Master GST registration,returns, filing,e-way bill and compliance with practical training.",
      points: [
        "GST Registration",
        "Returns[GSTR-1,3B,9]",
        "E-Way Bill",
        "GST Reconciliation",
      ],
      bg: "#EEF2FF",
      iconColor: "#4F46E5",
      numberBg: "#4F46E5",
      textColor: "#312E81",
    },
    {
      id: "03",
      icon: <FaBook />,
      title: "Accounting",
      subtitle: "(Basic to Advanced)",
      desc: "Learn accounting concepts with journal entries, ledgers, trial, balance & finalization.",
      points: [
        "Journal Entries",
        "Ledger & Trial Balance",
        "Final Accounts",
        "Financial Statements",
      ],
      bg: "#FEF2F2",
      iconColor: "#DC2626",
      numberBg: "#DC2626",
      textColor: "#991B1B",
    },
    {
      id: "04",
      icon: <FaChartBar />,
      title: "Advanced Excel",
      subtitle: "(For Accounting)",
      desc: "Use Excel for accounting, data analysis, MIS, dashboards and automation.",
      points: [
        "Excel Formulas",
        "Pivot Tables",
        "MIS Reports",
        "Dashboards",
      ],
      bg: "#ECFEFF",
      iconColor: "#0891B2",
      numberBg: "#0891B2",
      textColor: "#155E75",
    },
    {
      id: "05",
      icon: <FaUniversity />,
      title: "TDS",
      subtitle: "(Tax Deducted at Source)",
      desc: "Learn TDS sections, rates, calculations, challan deposit & TDS return filing.",
      points: [
        "TDS Calculation",
        "TDS Challan",
        "TDS Return(26Q)",
        "TDS Certificates",
      ],
      bg: "#FDF4FF",
      iconColor: "#C026D3",
      numberBg: "#C026D3",
      textColor: "#86198F",
    },
    {
      id: "06",
      icon: <FaMoneyCheckAlt />,
      title: "Income Tax",
      subtitle: "(Basic to Advanced)",
      desc: "Learn ITR filing, tax planning, exemptions, deductions and assessment procedures.",
      points: [
        "ITR Filing(1 to 7)",
        "Tax Planning",
        "Exemptions & Deductions",
        "Advance Tax",
      ],
      bg: "#fdeedc",
      iconColor: "#EA580C",
      numberBg: "#EA580C",
      textColor: "#9A3412",
    },
    {
      id: "07",
      icon: <FaClipboardList />,
      title: "Payroll Management",
      subtitle: "",
      desc: "Learn salary processing, PF, ESI, PT, leave management and payroll reports.",
      points: [
        "Salary Processing",
        "PF & ESI",
        "PT & LWF",
        "Payroll Reports",
      ],
      bg: "#F0FDF4",
      iconColor: "#16A34A",
      numberBg: "#16A34A",
      textColor: "#14532D",
    },
    {
      id: "08",
      icon: <FaBoxes />,
      title: "Inventory & Stock Management",
      subtitle: "",
      desc: "Learn stock tracking, godown management, stock valuation & inventory reports.",
      points: [
        "Stock Entries",
        "Stock Valuation",
        "Godown Management",
        "Stock Reports",
      ],
      bg: "#EFF6FF",
      iconColor: "#2563EB",
      numberBg: "#2563EB",
      textColor: "#1E3A8A",
    },
    {
      id: "09",
      icon: <FaSearchDollar />,
      title: "Tally with Advanced Features",
      subtitle: "",
      desc: "Learn budgeting, cost centers, MIS, advanced reports and integrations in Tally Prime.",
      points: [
        "Cost Centers",
        "Budgeting",
        "MIS Reports",
        "Data Management",
      ],
      bg: "#FFF1F2",
      iconColor: "#E11D48",
      numberBg: "#E11D48",
      textColor: "#9F1239",
    },
    {
      id: "10",
      icon: <FaBriefcase />,
      title: "Business Accounting",
      subtitle: "",
      desc: "Learn practical business accounting, cash flow, funds flow and ratio analysis.",
      points: [
        "Cash Flow Statement",
        "Funds Flow Statement",
        "Ratio Analysis",
        "Business Reports",
      ],
      bg: "#F0F9FF",
      iconColor: "#0284C7",
      numberBg: "#0284C7",
      textColor: "#0C4A6E",
    },
  ];

  return (
    <div className={styles.root}>
      <Nav />
      <header className={styles.boxContain}>
        <h1>Best Accounting Institute in Kota</h1>
      </header>
      <WelcomeModal />
      <RandomAd onEnquiryClick={() => setShowEnquiry(true)} />
      <AboutUsContain showVideo={true} />

      {/* cources list */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.badge}>
            <FaGraduationCap />
            <span>OUR COURSES</span>
          </div>

          <h2 className={styles.title}>
            Learn. Practice. Grow Your Career.
          </h2>

          <p className={styles.subtitle}>
            Industry-Oriented Courses Designed For Your Bright Future
          </p>

          <div className={styles.grid}>
            {courses.map((course) => (
              <div className={styles.card} key={course.id} 
              style={{ backgroundColor: course.bg, color: course.textColor, borderBottom: `5px solid ${course.numberBg}`, }}>
                <div className={styles.number} style={{ backgroundColor: course.numberBg, color: "#fff", }}>{course.id}</div>

                <div className={styles.icon} style={{ color: course.iconColor, }}>
                  {course.icon}
                </div>

                <h3 style={{ color: course.textColor }}>{course.title}</h3>
                <p className={styles.courseSubtitle} style={{ color: course.textColor }}>{course.subtitle}</p>
                <p className={styles.courseDesc} style={{ color: course.textColor }}>{course.desc}</p>

                <ul style={{ color: course.textColor }}>
                  {course.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <button style={{ backgroundColor: course.numberBg, color: "#fff", }}>Learn More →</button>
              </div>
            ))}
          </div>

          <div className={styles.features}>
            <div>
              <FaGraduationCap />
              <span className={styles.featureItems}>100% Practical Training</span>
            </div>

            <div>
              <FaUserTie />
              <span className={styles.featureItems}>Learn From Industry Experts</span>
            </div>

            <div>
              <FaCertificate />
              <span className={styles.featureItems}>Certificate of Completion</span>
            </div>

            <div>
              <FaUsers />
              <span className={styles.featureItems}>Placement Assistance</span>
            </div>

            <div>
              <FaClock />
              <span className={styles.featureItems}>Flexible Batches Offline</span>
            </div>
          </div>
        </div>
      </section>

      <WhoCanJoin />
      <JobOpportunities />

      {/* placements slider */}
      <section className={styles.sectionPlacement}>
        <p className={styles.subHeading}>A Decade of Excellence</p>
        <h2 className={styles.heading}>
          Our <span>Students</span>, Now Industry Professionals
        </h2>
        {students.length > 0 && (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={25}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={3000}
            allowTouchMove={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4.5,
              },
            }}
          >
            {students.map((student) => (
              <SwiperSlide key={student._id}>
                <StudentPlacementCard
                  student={student}
                  apiUrl={API}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
      <StudentReview />
      <FloatingShare />
      <Footer />
      {showEnquiry && (
        <EnquiryPopup
          onClose={() => setShowEnquiry(false)}
        />
      )}
    </div>

  );
};

export default Home;