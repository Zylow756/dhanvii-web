import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import StudentReview from '../components/StudentReview/StudentReview';
import styles from './Home.module.css';
import banner from '../assets/images/banner.jpg';
import { useState } from "react";

const Home = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    qualification: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    } catch (err) {
      console.error("ERROR:", err.message);
      alert(err.message);
    }
  };

  return (
    <div className={styles['root']}>
      <Nav />
      <div className={styles['banner-container']}>
        <img src={banner} alt="Banner" className={styles['banner-img']} />
      </div>
      <div className={styles['enquiry-form']}>
        <div className={styles['contact-form-container']}>
          <h2>Enquiry Form For Demo Classes</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
              <input type="text" id="name" name="name" placeholder="Your Name"
                onChange={handleChange} required />
              <span className={styles['error-message']} id="nameError"></span>
            </div>
            <div className={styles['form-group']}>
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number"
                onChange={handleChange} required />
              <span className={styles['error-message']} id="phoneError"></span>
            </div>
            <div className={styles['form-group']}>
              <select
                id="qualification"
                name="qualification"
                onChange={handleChange}
                required
                className={styles['select-input']}
              >
                <option value="">Select Qualification</option>
                <option value="12th">12th pass</option>
                <option value="Diploma">Diploma</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
              <span className={styles['error-message']} id="qualificationError"></span>
            </div>
            <button type="submit" className={styles['submit-button']}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <StudentReview />
      <Footer />
    </div>

  );
};

export default Home;