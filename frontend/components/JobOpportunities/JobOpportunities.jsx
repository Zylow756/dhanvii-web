import styles from './JobOpportunities.module.css';
import {
    FaCalculator,
    FaBook,
    FaUniversity,
    FaMoneyCheckAlt,
    FaChartLine,
    FaFileInvoiceDollar,
    FaWarehouse,
    FaSearchDollar,
    FaBriefcase,
} from "react-icons/fa";

const jobs = [
    {
        icon: <FaCalculator />,
        title: "Accounting Clerks",
        color: "#2563eb",
        bg: "#eef4ff",
    },
    {
        icon: <FaBook />,
        title: "Book Keeping",
        color: "#16a34a",
        bg: "#eefcf3",
    },
    {
        icon: <FaUniversity />,
        title: "Bank Worker",
        color: "#9333ea",
        bg: "#f6efff",
    },
    {
        icon: <FaMoneyCheckAlt />,
        title: "Payroll Clerks",
        color: "#f97316",
        bg: "#fff4eb",
    },
    {
        icon: <FaChartLine />,
        title: "Financial Dealers",
        color: "#2563eb",
        bg: "#eef4ff",
    },
    {
        icon: <FaFileInvoiceDollar />,
        title: "Tax Manager",
        color: "#dc2626",
        bg: "#fef2f2",
    },
    {
        icon: <FaWarehouse />,
        title: "Godown Operation",
        color: "#0891b2",
        bg: "#ecfeff",
    },
    {
        icon: <FaSearchDollar />,
        title: "Internal Auditors",
        color: "#7c3aed",
        bg: "#f5f3ff",
    },
    {
        icon: <FaBriefcase />,
        title: "Management Accounting",
        color: "#059669",
        bg: "#ecfdf5",
    },
];

const JobOpportunities = () => {
    return (
        <div className={styles.premiumCard}>
            <h2>Job Opportunities</h2>

            <div className={styles.jobCards}>
                {jobs.map((job, index) => (
                    <div className={styles.jobCard} key={index}>
                        <div
                            className={styles.iconCircle}
                            style={{
                                backgroundColor: job.bg,
                                color: job.color,
                            }}
                        >
                            {job.icon}
                        </div>

                        <div className={styles.line}></div>

                        <h4>{job.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JobOpportunities;