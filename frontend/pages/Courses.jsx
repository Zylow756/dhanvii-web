import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from '../assets/css/Courses.module.css';
import { useState } from "react";

const Courses = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const courses = [
    {
      title: "Free Course",
      duration: <strong>Duration: 1 Months</strong>,
      desc: <br />,
      content: [
        <span><strong>Module 1 :</strong> Microsoft Excel</span>,
        <span><strong>Module 2 :</strong> Microsoft word</span>,
        <span><strong>Module 3 :</strong> Basic Computer</span>,
      ],
    },
    {
      title: "Tally Prime",
      duration: <strong>Duration: 3 Months</strong>,
      desc: <br />,
      content: [
        <span><strong>Module 1 :</strong> Special Fundamental & Financial Accounting - Introduction</span>,
        <span><strong>Module 2 :</strong> Transactions Vouchers</span>,
        <span><strong>Module 3 :</strong> Inventory Information & Features</span>,
        <span><strong>Module 4 :</strong> Statuary & Taxations GST</span>,
        <span><strong>Module 5 :</strong> View Reports</span>,
      ],
    },
    {
      title: "Beginner Accounting",
      duration: <strong>Duration: 6 Months</strong>,
      desc: <strong>FREE: Banking & Accounting in MS Excel</strong>,
      content: [
        <strong>Part A : Financial Accounting [Manual Accounting]</strong>,
        <span><strong>Module A :</strong> Principles & Rules of Accounting</span>,
        <span><strong>Module B :</strong> Bookkeeping & Practice</span>,
        <span><strong>Module C :</strong> Stock & Inventory Maintain</span>,
        <span><strong>Module D :</strong> Goods & Service Tax [GST]</span>,
        <span><strong>Module E :</strong> Soft Skill Development</span>,
        <span><strong>Module F :</strong> Office Documentation & Record Management</span>,
        <span><strong>Module G :</strong> Banking Operation</span>,
        <strong>Part B : Computerized Accounting [Tally Prime]</strong>,
        <span><strong>Module 1 :</strong> Special Fundamental & Financial Accounting</span>,
        <span><strong>Module 2 :</strong> Transactions Vouchers</span>,
        <span><strong>Module 3 :</strong> Inventory Information & Features</span>,
        <span><strong>Module 4 :</strong> Statuary & Taxations GST</span>,
        <span><strong>Module 5 :</strong> View Reports</span>
      ],
    },
    {
      title: "Achiever's Accounting",
      duration: <strong>Duration: 8 Months[7 month course + 1 month job]</strong>,
      desc: <strong>FREE: Banking & Accounting in MS Excel</strong>,
      content: [
        <strong>Part A : Financial Accounting [Manual Accounting]</strong>,
        <span><strong>Module A :</strong> Principles & Rules of Accounting</span>,
        <span><strong>Module B :</strong> Bookkeeping & Practice</span>,
        <span><strong>Module C :</strong> Stock & Inventory Maintain</span>,
        <span><strong>Module D :</strong> Goods & Service Tax [GST]</span>,
        <span><strong>Module E :</strong> Soft Skill Development</span>,
        <span><strong>Module F :</strong> Office Documentation & Record Management</span>,
        <span><strong>Module G :</strong> Banking Operation</span>,
        <span><strong>Module H :</strong> Tax Deduction at Sources[TDS]</span>,
        <span><strong>Module I :</strong> Income Tax</span>,
        <strong>Part B : Computerized Accounting [Tally Prime]</strong>,
        <span><strong>Module 1 :</strong> Special Fundamental & Financial Accounting</span>,
        <span><strong>Module 2 :</strong> Transactions Vouchers</span>,
        <span><strong>Module 3 :</strong> Inventory Information & Features</span>,
        <span><strong>Module 4 :</strong> Statuary & Taxations GST</span>,
        <span><strong>Module 5 :</strong> View Reports</span>,
        <span><strong>Module 6 :</strong> Audit Trail Analysis & Reports</span>,
      ],
    },
    {
      title: "Advance Accounting",
      duration: <strong>Duration: 12 Months[9 month course + 3 month job]</strong>,
      desc: <strong>FREE: Banking,MS Word & Excel & Online Application & Forms</strong>,
      content: [
        <strong>Part A : Financial Accounting [Manual Accounting]</strong>,
        <span><strong>Module A :</strong> Principles & Rules of Accounting</span>,
        <span><strong>Module B :</strong> Bookkeeping & Practice</span>,
        <span><strong>Module C :</strong> Stock & Inventory Maintain</span>,
        <span><strong>Module D :</strong> Goods & Service Tax [GST]</span>,
        <span><strong>Module E :</strong> Soft Skill Development</span>,
        <span><strong>Module F :</strong> Office Documentation & Record Management</span>,
        <span><strong>Module G :</strong> Banking Operation</span>,
        <span><strong>Module H :</strong> Tax Deduction at Sources[TDS]</span>,
        <span><strong>Module I :</strong> Income Tax</span>,
        <span><strong>Module J :</strong> Preparation of Finalized Accounting & Checking method</span>,
        <span><strong>Module K :</strong> Payroll/Salary Managements</span>,
        <span><strong>Module L :</strong> Discussion on Fixed Assets</span>,
        <span><strong>Module M :</strong> Discussion on Project Reports,Documentations & Financial Data Analyses</span>,
        <strong>Part B : Computerized Accounting [Tally Prime]</strong>,
        <span><strong>Module 1 :</strong> Special Fundamental & Financial Accounting</span>,
        <span><strong>Module 2 :</strong> Transactions Vouchers</span>,
        <span><strong>Module 3 :</strong> Inventory Information & Features</span>,
        <span><strong>Module 4 :</strong> Statuary & Taxations GST</span>,
        <span><strong>Module 5 :</strong> View Reports</span>,
        <span><strong>Module 6 :</strong> Audit Trail Analysis & Reports</span>,
        <span><strong>Module 7 :</strong> Statuary & Taxations TDS</span>,
        <span><strong>Module 8 :</strong> Financial Data Analyses in Tally Prime & Adjustments of Entries</span>,
      ],
    },
    {
      title: "Online Certificate Course",
      duration: <strong>Duration: 6 to 12 months</strong>,
      desc: <br />,
      content: [
        "Advance Diploma in Accounting Management",
        "Certificate in Tally",
        "Course on Computer Concept",
        "Diploma in Fire & Safety Management",
        "Diploma in Solar Energy Technician",
        "Diploma in Panchayati Raj & Rural Management",
        "Diploma in Animal Husbandry",
        "PGDCA",
        "Yoga Teacher",
      ],
    },
  ];

  return (
    <div className={styles.root}>
      <Nav />
      <h1 className={styles.heading}>Our Courses / Training [Medium Hindi / English]</h1>

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
              {openIndex === index ? "Hide Model −" : "View Model +"}
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
              <ul className={styles.moduleList}>
                {course.content.map((item, i) => {

                  //  CASE 1: Part headings (strong tag)
                  if (item?.type === "strong") {
                    return (
                      <li key={i} className={styles.moduleItem}>
                        <span className={styles.label}>
                          {item.props.children.split(":")[0]} :
                        </span>

                        <span className={styles.textStrong}>
                          {item.props.children.split(":")[1]}
                        </span>
                      </li>
                    );
                  }

                  //  CASE 2: Module rows (span)
                  if (item?.type === "span") {
                    const children = item.props.children;

                    // children = [<strong>Module A :</strong>, " Text..."]
                    return (
                      <li key={i} className={styles.moduleItem}>
                        <span className={styles.label}>
                          {children[0]?.props?.children}
                        </span>

                        <span className={styles.text}>
                          {children[1]}
                        </span>
                      </li>
                    );
                  }

                  //  CASE 3: Plain text (last course list)
                  return (
                    <li key={i} className={styles.simpleItem}>
                      <span className={styles.bullet}>➤</span>
                      <span className={styles.simpleText}>
                        {item.replace("*", "").trim()}
                      </span>
                    </li>
                  );
                })}
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