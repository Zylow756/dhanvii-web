import { useState, useEffect } from "react";
import styles from "./EnquiryPopup.module.css";

const EnquiryPopup = ({ onClose }) => {
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

    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Enter valid full name";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter valid Indian mobile number";
    }

    if (
      formData.altPhone &&
      !phoneRegex.test(formData.altPhone)
    ) {
      newErrors.altPhone = "Enter valid alternate number";
    }

    if (formData.email) {
      const emailRegex =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter valid email";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" || name === "altPhone") {
      setFormData((prev) => ({
        ...prev,
        [name]: value.replace(/\D/g, "").slice(0, 10),
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

    if (!validateForm()) return;

    try {
      const API = import.meta.env.VITE_API_URL;

      const res = await fetch(`${API}/api/enquiry/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setShowSuccess(true);

      setFormData({
        name: "",
        phone: "",
        altPhone: "",
        email: "",
        qualification: "",
        referCode: "",
      });
    } catch (err) {
      alert(err.message);
    }
  };

 useEffect(() => {
  const originalStyle = window.getComputedStyle(document.body).overflow;

  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = originalStyle;
  };
}, []);

  return (
    <div className={styles.overlay}  onClick={onClose} >
      <div className={styles.popup} onClick={(e) => e.stopPropagation()} >
        <button
          className={styles.closeBtn}
          onClick={onClose}
        >
          ×
        </button>

        <h2>Enquiry Form</h2>

        {showSuccess && (
          <div className={styles.success}>
            Enquiry Submitted Successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}

          <input
            type="tel"
            name="altPhone"
            placeholder="Alternate Phone (Optional)"
            value={formData.altPhone}
            onChange={handleChange}
          />
          {errors.altPhone && <p>{errors.altPhone}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email (Optional)"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}

          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          >
            <option value="">Select Qualification</option>
            <option value="12th">12th Pass</option>
            <option value="Diploma">Diploma</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>

          <input
            type="text"
            name="referCode"
            placeholder="Refer Code (Optional)"
            value={formData.referCode}
            onChange={handleChange}
          />

          <button type="submit">
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryPopup;