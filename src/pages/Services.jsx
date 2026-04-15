import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from '../assets/css/Services.module.css'; 

const Contact = () => {
  return (
    <div className={styles.root}>
      <Nav />
      <div className={styles.content}>
      <h1 className={styles.heading}>WHAT WE DO?</h1>
      <div className={styles.grid}>
          <div className={styles.card}>
            {/* Card Top */}
            <div className={styles.cardHeader}>
                <h2>Book Keeping</h2>
              <ul>
                <li>Maintenance of Statutory Books & Records</li>
                <li>Accounts Payble & Receivable</li>
                <li>Bank & Account Reconciliations</li>
                <li>Preparation of Financial Statement</li>
                <li>Preparation of Net Worth</li>
              </ul>
            </div>

          </div>
          <div className={styles.card}>
            {/* Card Top */}
            <div className={styles.cardHeader}>
                <h2>Taxation</h2>
              <ul>
                <li>Preparation & Submission of GST Return</li>
                <li>Income Tax Return</li>
                <li>Tax & Other Audit</li>
                <li>ESI & EPF Return</li>
              </ul>
            </div>
          </div>
          <div className={styles.card}>
            {/* Card Top */}
            <div className={styles.cardHeader}>
                <h2>Finances</h2>
              <ul>
                <li>Home Loan</li>
                <li>Mortgage Loan</li>
                <li>Unsecured Loan</li>
                <li>CC &O/D Limit</li>
                <li>Term Loan</li>
              </ul>
            </div>
          </div>
          <div className={styles.card}>
            {/* Card Top */}
            <div className={styles.cardHeader}>
                <h2>Registration</h2>
              <ul>
                <li>Company Establishment</li>
                <li>GST Registration</li>
                <li>MSME / Udhyog Aadhar</li>
                <li>EPF & ESIC</li>
                <li>Digital Signature</li>
                <li>Trademark & Copyright</li>
                <li>ISO Certification</li>
              </ul>
            </div>
          </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;