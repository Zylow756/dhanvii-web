import React, { useState } from "react";
import styles from "../assets/css/Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = ({ onClose }) => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // Handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.message);
        } else {
          alert("Login successful...");// optional: store login state
          localStorage.setItem("token", data.token);

          // redirect to home/dashboard
          navigate("/admin"); 
          

          onClose();
        }

      } catch (err) {
        console.error(err);
        alert("Server error");
      }
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;