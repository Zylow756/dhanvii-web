import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import StudentReview from '../components/StudentReview/StudentReview';
import styles from '../assets/css/Home.module.css';
import { useState } from "react";
import RandomAd from '../components/RandomAd/RandomAd';
import WelcomeModal from "../components/WelcomeModal/WelcomeModal";
import FloatingShare from '../components/FloatingShare/FloatingShare';
import SuccessPopup from "../components/SuccessPopup/SuccessPopup";

const Home = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    altPhone: "",
    email: "",
    qualification: "",
    referCode: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

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
    const phoneRegex = /^[6-9]\d{9}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter valid Indian mobile number";
    }

    // Indian phone validation (starts with 6-9 and 10 digits)
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter valid Indian mobile number";
    }

    if (formData.altPhone) {
      const altPhoneRegex = /^[6-9]\d{9}$/;

      if (!altPhoneRegex.test(formData.altPhone)) {
        newErrors.altPhone = "Enter valid 10-digit alternate number";
      }
    }

    // Email validation
    if (formData.email) {
      const emailRegex =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter valid email address";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" || name === "altPhone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fix errors");
      return;
    }

    try {
      const API = import.meta.env.VITE_API_URL;
      console.log("API:", API);
      console.log("formData:", formData);

      const res = await fetch(`${API}/api/enquiry/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          altPhone: formData.altPhone || "",
          email: formData.email || "",
          qualification: formData.qualification,
          referCode: formData.referCode || "",
        }),
      });

      const text = await res.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        console.error("Invalid JSON response:", text);
        throw new Error("Server returned invalid response");
      }

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setShowSuccess(true);

    } catch (err) {
      console.error("ERROR:", err);
      alert(err.message);
    }
  };

  const handlePopupClose = () => {
    setShowSuccess(false);

    window.location.href = "/courses";
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
            <li>12th Commerce & Non-Commerce Students</li>
            <li>Graduation: Arts, Commerce,Science</li>
            <li>Job Seekers in Accounting & Finance</li>
            <li>Business Owners managing their accounts</li>
            <li>Anyone wanting to master Tally & GST</li>
            <li>Technical: ITI, B.Tech, others</li>
          </ul>
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
                value={formData.phone}
                onChange={handleChange}
                maxLength={10} required />
              {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </div>
            <div className={styles.formGroup}>
              <input type="tel" id="altPhone" name="altPhone" placeholder="Your Alternate Phone Number"
                value={formData.altPhone || ""}
                onChange={handleChange}
                maxLength={10} />
              {errors.altPhone && <p className={styles.error}>{errors.altPhone}</p>}
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <p className={styles.error}>{errors.email}</p>
              )}
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
            </div><div className={styles.formGroup}>
              <input
                type="text"
                id="referCode"
                name="referCode"
                placeholder="Refer Code (Optional)"
                value={formData.referCode}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <StudentReview />
      <FloatingShare />
      <Footer />
      <SuccessPopup
        isOpen={showSuccess}
        onClose={handlePopupClose}
      />
    </div>

  );
};

export default Home;