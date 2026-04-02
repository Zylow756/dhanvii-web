import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from './Courses.module.css';
import { useState } from "react";

const Courses = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const courses = [
    {
      title: "Free Course",
      duration: "Duration: 1 Months",
      desc: "Microsoft Excel.",
      content: [
        "Microsoft word",
        "Basic Computer",
      ],
    },
    {
      title: "Tally Prime",
      duration: "Duration: 3 Months",
      desc: "Special Fundamental & Financial Accounting - Introduction.",
      content: [
        "Transactions Vouchers",
        "Inventory Information & Features",
        "Statuary & Taxations GST",
        "View Reports",
      ],
    },
    {
      title: "Beginner Accounting",
      duration: "Duration: 6 Months",
      desc: "Banking & Accounting in MS Excel",
      content: [
        "3 months course +",
        "Principles & Rules of Accounting.",
        "Bookkeeping & Practice",
        "Stock & Inventory Maintain",
        "Goods & Service Tax [GST]",
        "Soft Skill Development",
        "Office Documentation & Record Management",
        "Banking Operation",
      ],
    },
    {
      title: "Achiever's Accounting",
      duration: "Duration: 8 Months",
      desc: "Banking & Accounting in MS Excel",
      content: [
        "6 months courses +",
        "Tax Deduction at Sources [TDS]",
        "Income Tax",
        "Audit Trail Analysis & Reports",
      ],
    },
    {
      title: "Advance Accounting",
      duration: "Duration: 12 Months",
      desc: "Online Application & Forms",
      content: [
        "8 months courses +",
        "Banking & Microsoft [MS Word & MS Excel]",
        "Preparation of Finalized Accounting & Checking method",
        "Payroll/Salary Managements",
        "Discussion on Fixed Assets",
        "Discussion on Project Reports,Documentations & Financial Data Analyses",
        "Statuary & Taxations TDS",
        "Financial Data Analyses in Tally Prime & Adjustments of Entries",
      ],
    },
  ];

  return (
    <div className={styles.root}>
      <Nav />
      <h1 className={styles.heading}>Our Courses</h1>

      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div key={index} className={styles.card}>

            {/* Card Top */}
            <div className={styles.cardHeader}>
              <h2>{course.title}</h2>
              <p>{course.duration}</p>
            </div>

            {/* Short Description */}
            <p className={styles.desc}>{course.desc}</p>

            {/* Button */}
            <button
              className={styles.btn}
              onClick={() => toggle(index)}
            >
              {openIndex === index ? "Hide Details −" : "View Details +"}
            </button>

            {/* Expand Content */}
            <div
              className={
                openIndex === index
                  ? `${styles.content} ${styles.show}`
                  : styles.content
              }
            >
            </div>
            {/* Dynamic Content  */}
            <div className={openIndex === index ? `${styles.content} ${styles.show}` : styles.content}>
              <ul>
                {course.content.map((item, i) => (
                  <li key={i}> {item}</li>
                ))}
              </ul>
            </div>


          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Courses;