import React, { useState } from "react";
import styles from '../assets/css/Career.module.css';
import { useNavigate } from "react-router-dom";

export default function Career() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    mobile: "",
    dob: "",
    gender: "",
    language: "",
    jobTitle: "",
    expectedSalary: "",
    jobLocation: "",
    family: Array.from({ length: 3 }, () => ({
      relation: "",
      name: "",
      education: "",
      working: ""
    })),

    academic: Array.from({ length: 3 }, () => ({
      qualification: "",
      stream: "",
      board: "",
      year: "",
      percentage: ""
    })),

    professional: Array.from({ length: 3 }, () => ({
      course: "",
      institute: "",
      duration: "",
      remark: ""
    })),

    experience: Array.from({ length: 3 }, () => ({
      company: "",
      post: "",
      type: "",
      from: "",
      to: "",
      salary: ""
    }))
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    // Required fields
    if (!form.name) newErrors.name = "Name is required";

    // Name validation (only letters and spaces)
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    if (form.name && !nameRegex.test(form.name)) {
      newErrors.name = "Enter valid full name";
    }

    if (!form.mobile) newErrors.mobile = "Mobile number is required";

    // Phone validation (10 digit)
    const phoneRegex = /^[0-9]{10}$/;
    if (form.mobile && !phoneRegex.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10-digit number";
    }

    // Indian phone validation (starts with 6-9 and 10 digits)
    const phoneRegex1 = /^[6-9]\d{9}$/;
    if (form.mobile && !phoneRegex1.test(form.mobile)) {
      newErrors.mobile = "Enter valid Indian mobile number";
    }

    // Percentage validation (0–100)
    form.academic.forEach((item, index) => {
      if (item.percentage) {
        const percent = Number(item.percentage);
        if (percent < 0 || percent > 100) {
          newErrors[`percentage_${index}`] = "Must be between 0-100";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTableChange = (section, index, field, value) => {
    const updated = [...form[section]];
    updated[index] = { ...updated[index], [field]: value };
    setForm({ ...form, [section]: updated });
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Error saving data");
    }
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fix errors");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/placement/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Response:", data);
      alert(data.message || "Form submitted successfully ");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error("ERROR:", err.message);
      alert(err.message);
    }

  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>DHANVII PLACEMENT FORM</h1>
      <form onSubmit={handleSubmit}>
        {/* Basic Details */}
        <div className={styles.formGrid}>
          <input name="name" placeholder="Name" onChange={handleChange} className={styles.formInput} />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
          <input name="mobile" placeholder="Mobile No" onChange={handleChange} className={styles.formInput} />
          {errors.mobile && <p className={styles.error}>{errors.mobile}</p>}
          <input name="address" placeholder="Address" onChange={handleChange} className={styles.formInput} />
          <input type="date" name="dob" onChange={handleChange} className={styles.formInput} />

          <select name="gender" onChange={handleChange} className={styles.formSelect}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input name="language" placeholder="Language" onChange={handleChange} className={styles.formInput} />
          <select name="jobTitle" onChange={handleChange} className={styles.formSelect}>
            <option value="">Job Title</option>
            <option>Front Office</option>
            <option>Computer</option>
            <option>Marketing</option>
            <option>Account's</option>
            <option>Telecaller</option>
            <option>Counseller</option>
          </select>
          <input name="expectedSalary" placeholder="Expected Salary" onChange={handleChange} className={styles.formInput} />
          <input name="jobLocation" placeholder="Job Location" onChange={handleChange} className={styles.formInput} />
        </div>

        {/* Family Details */}
        <h2 className={styles.sectionTitle}>Family Details</h2>
        <table className={styles.formTable}>
          <thead>
            <tr>
              <th>Relation</th>
              <th>Name</th>
              <th>Education</th>
              <th>Working</th>
            </tr>
          </thead>
          <tbody>
            {form.family.map((row, i) => (
              <tr key={i}>
                <td><input className={styles.tableInput} value={row.relation} onChange={(e) => handleTableChange("family", i, "relation", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.name} onChange={(e) => handleTableChange("family", i, "name", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.education} onChange={(e) => handleTableChange("family", i, "education", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.working} onChange={(e) => handleTableChange("family", i, "working", e.target.value)} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Academic */}
        <h2 className={styles.sectionTitle}>Academic Qualification</h2>
        <table className={styles.formTable}>
          <thead>
            <tr>
              <th>Qualification</th>
              <th>Stream</th>
              <th>Board</th>
              <th>Year</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {form.academic.map((row, i) => (
              <tr key={i}>
                <td><input className={styles.tableInput} value={row.qualification} onChange={(e) => handleTableChange("academic", i, "qualification", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.stream} onChange={(e) => handleTableChange("academic", i, "stream", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.board} onChange={(e) => handleTableChange("academic", i, "board", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.year} onChange={(e) => handleTableChange("academic", i, "year", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.percentage} onChange={(e) => handleTableChange("academic", i, "percentage", e.target.value)} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Professional */}
        <h2 className={styles.sectionTitle}>Professional Qualification</h2>
        <table className={styles.formTable}>
          <thead>
            <tr>
              <th>Professional Course Name</th>
              <th>Institute Name</th>
              <th>Duration</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {form.professional.map((row, i) => (
              <tr key={i}>
                <td><input className={styles.tableInput} value={row.course} onChange={(e) => handleTableChange("professional", i, "course", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.institute} onChange={(e) => handleTableChange("professional", i, "institute", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.duration} onChange={(e) => handleTableChange("professional", i, "duration", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.remark} onChange={(e) => handleTableChange("professional", i, "remark", e.target.value)} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Experience */}
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        <table className={styles.formTable}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Post</th>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {form.experience.map((row, i) => (
              <tr key={i}>
                <td><input className={styles.tableInput} value={row.company} onChange={(e) => handleTableChange("experience", i, "company", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.post} onChange={(e) => handleTableChange("experience", i, "post", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.type} onChange={(e) => handleTableChange("experience", i, "type", e.target.value)} /></td>
                <td><input type="date" className={styles.tableInput} value={row.from} onChange={(e) => handleTableChange("experience", i, "from", e.target.value)} /></td>
                <td><input type="date" className={styles.tableInput} value={row.to} onChange={(e) => handleTableChange("experience", i, "to", e.target.value)} /></td>
                <td><input className={styles.tableInput} value={row.salary} onChange={(e) => handleTableChange("experience", i, "salary", e.target.value)} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="submit" className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
}