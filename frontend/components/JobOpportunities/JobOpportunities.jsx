import styles from "./JobOpportunities.module.css";
import {
    FaBriefcase,
    FaFileInvoiceDollar,
    FaBook,
    FaUniversity,
    FaUsers,
    FaChartLine,
    FaFileInvoice,
    FaWarehouse,
    FaSearchDollar,
    FaChartBar,
    FaRocket,
} from "react-icons/fa";
import EnquiryPopup from '../EnquiryPopup/EnquiryPopup';
import { useState } from 'react';

const careers = [
    {
        icon: <FaFileInvoiceDollar />,
        title: "Accounting Clerks",
        desc: "Maintain financial records, process invoices, manage ledgers and day-to-day accounting entries.",
        bg: "#FFF4E5",
        iconColor: "#F59E0B",
        textColor: "#92400E",
    },
    {
        icon: <FaBook />,
        title: "Book Keeping",
        desc: "Record daily transactions, manage cash books, ledgers and ensure accurate financial data.",
        bg: "#EEF2FF",
        iconColor: "#4F46E5",
        textColor: "#312E81",
    },
    {
        icon: <FaUniversity />,
        title: "Bank Worker",
        desc: "Work in various banking roles including operations, customer service and account management.",
        bg: "#FEF2F2",
        iconColor: "#DC2626",
        textColor: "#991B1B",
    },
    {
        icon: <FaUsers />,
        title: "Payroll Clerks",
        desc: "Manage employee salaries, PF, ESI, leave records and payroll processing.",
        bg: "#ECFEFF",
        iconColor: "#0891B2",
        textColor: "#155E75",
    },
    {
        icon: <FaChartLine />,
        title: "Financial Dealers",
        desc: "Deal in investments, shares, bonds and provide financial advisory services.",
        bg: "#FDF4FF",
        iconColor: "#C026D3",
        textColor: "#86198F",
    },
    {
        icon: <FaFileInvoice />,
        title: "Tax Manager",
        desc: "Handle tax planning, GST, TDS, Income Tax returns and ensure tax compliance.",
        bg: "#fdeedc",
        iconColor: "#EA580C",
        textColor: "#9A3412",
    },
    {
        icon: <FaWarehouse />,
        title: "Godown Operation",
        desc: "Manage inventory, stock records, materials handling and godown activities.",
        bg: "#F0FDF4",
        iconColor: "#16A34A",
        textColor: "#14532D",
    },
    {
        icon: <FaSearchDollar />,
        title: "Internal Auditors",
        desc: "Examine financial records, evaluate internal controls and ensure compliance.",
        bg: "#EFF6FF",
        iconColor: "#2563EB",
        textColor: "#1E3A8A",
    },
    {
        icon: <FaChartBar />,
        title: "Management Accounting",
        desc: "Prepare budgets, analyze costs, create financial strategies and support business decisions.",
        bg: "#FFF1F2",
        iconColor: "#E11D48",
        textColor: "#9F1239",
    },
];

const JobOpportunities = () => {
    const [showEnquiry, setShowEnquiry] = useState(false);

    return (
        <section className={styles.careerSection}>
            <div className={styles.heading}>
                <FaBriefcase />
                <span className={styles.smallHeading}>JOB OPPORTUNITIES</span>
            </div>
            <h2>Build Your Career in Accounting & Finance</h2>

            <p className={styles.subtitle}>
                Wide range of job roles available after completing our course
            </p>

            <div className={styles.careerGrid}>
                {careers.map((item) => (
                    <div className={styles.careerCard} key={item.id}
                        style={{ backgroundColor: item.bg, color: item.textColor, borderBottom: `3px solid ${item.textColor}`, }}>
                        <div className={styles.icon} style={{ color: item.iconColor, }}>
                            {item.icon}
                        </div>

                        <h3 style={{ color: item.textColor }}>
                            {item.title}
                        </h3>

                        <div className={styles.divider} style={{ backgroundColor: item.iconColor, }}></div>

                        <p style={{ color: item.textColor }}>
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className={styles.ctaBanner}>
                <div className={styles.bannerFirst}>
                 <FaRocket />
                <span>
                    Learn Today, Get Skilled, Get Placed.
                </span>
                </div>
                <p>
                    Start your journey towards a successful career in Accounting & Finance!
                </p>
                <button onClick={() => setShowEnquiry(true)}>ENROLL NOW</button>
            </div>
            {showEnquiry && (
                <EnquiryPopup
                    onClose={() => setShowEnquiry(false)}
                />
            )}
        </section>
    );
}

export default JobOpportunities;