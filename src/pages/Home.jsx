import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import StudentReview from '../components/StudentReview/StudentReview';
import styles from '../assets/css/Home.module.css';
import { useState } from "react";
import RandomAd from '../components/RandomAd/RandomAd';
import WelcomeModal from "../components/WelcomeModal/WelcomeModal";
import FloatingShare from '../components/FloatingShare/FloatingShare';

const Home = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    qualification: ""
  });
   const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      let newErrors = {};
  
      // Required fields
      if (!formData.name) newErrors.name = "Name is required";
  
      // Name validation (only letters and spaces)
      const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
      if (formData.name && !nameRegex.test(formData.name)) {
        newErrors.name = "Enter valid full name";
      }
  
      if (!formData.phone) newErrors.phone = "Phone number is required";
  
      // Phone validation (10 digit)
      const phoneRegex = /^[0-9]{10}$/;
      if (formData.phone && !phoneRegex.test(formData.phone)) {
        newErrors.phone = "Enter valid 10-digit number";
      }
  
      // Indian phone validation (starts with 6-9 and 10 digits)
      const phoneRegex1 = /^[6-9]\d{9}$/;
      if (formData.phone && !phoneRegex1.test(formData.phone)) {
        newErrors.phone = "Enter valid Indian mobile number";
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fix errors");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/enquiry/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      alert("Message sent successfully");

      // Redirect to courses
      window.location.href = "/courses";
    } catch (err) {
      console.error("ERROR:", err.message);
      alert(err.message);
    }
  };

  return (
    <div className={styles.root}>
      <Nav />
      <header className={styles.boxContain}>
        <h1>Best Accounting Institute in Kota</h1>
      </header>
      <WelcomeModal />
      <RandomAd />
      <div className={styles.enquiryForm}>
        <div className={styles.premiumCard}>
          <h2>Who Should Join?</h2>
          <ul>
            <li>12th Commerse & Non-Commerse Students</li>
            <li>Graduation: Arts, Commerse,Science</li>
            <li>Job Seekers in Accounting & Finance</li>
            <li>Business Owners managing their accounts</li>
            <li>Anyone wanting to master Tally & GST</li>
            <li>Technical: ITI, B.Tech, others</li>
          </ul>
        </div>
        <div className={styles.contactFormContainer}>
          <h2>Enquiry Form For Demo Classes</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input type="text" id="name" name="name" placeholder="Your Name"
                onChange={handleChange} required />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.formGroup}>
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number"
                onChange={handleChange} required />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </div>
            <div className={styles.formGroup}>
              <select
                id="qualification"
                name="qualification"
                onChange={handleChange}
                required
                className={styles.selectInput}
              >
                <option value="">Select Qualification</option>
                <option value="12th">12th pass</option>
                <option value="Diploma">Diploma</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
              <span className={styles.errorMessage} id="qualificationError"></span>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
        <div className={styles.premiumCard}>
          <h2>Job Opportunities</h2>
          <ul>
            <li>Accounting Clerks</li>
            <li>Book Keeping</li>
            <li>Bank Worker</li>
            <li>Payroll Clerks</li>
            <li>Financial Dealers</li>
            <li>Tax Manager</li>
            <li>Godown Operation</li>
            <li>Internal Auditors</li>
            <li>Management Accounting</li>
          </ul>
        </div>
      </div>
      <StudentReview />
      <FloatingShare />
      <Footer />
    </div>

  );
};

export default Home;