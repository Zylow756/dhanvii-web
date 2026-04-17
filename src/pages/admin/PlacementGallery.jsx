import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from '../../components/AdminNav/AdminNav';
import styles from '../../assets/css/AdminDistanceGallery.module.css';


const PlacementGallery = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    company: "",
    salary: "",
    background: null,
  });
  const [editId, setEditId] = useState(null);
  const [bgPreview, setBgPreview] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(students.length / itemsPerPage);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentData = students.slice(indexOfFirstItem, indexOfLastItem);

  const data = new FormData();

  for (let pair of data.entries()) {
    console.log(pair[0]);
  }
  //  FETCH DATA
  const fetchData = () => {
    axios.get("http://localhost:5000/api/placementGallery")
      .then(res => setStudents(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  //  HANDLE INPUT
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "background") {
      const file = files[0];
      setFormData(prev => ({ ...prev, background: file }));
      setBgPreview(URL.createObjectURL(file));
    }
    else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  //  SUBMIT (ADD / UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("qualification", formData.qualification);
    data.append("company", formData.company);
    data.append("salary", formData.salary);

    // ONLY append if it's FILE
    if (formData.background instanceof File) {
      data.append("background", formData.background);
    }

    try {
      if (editId) {
        //  UPDATE
        await axios.put(
          `http://localhost:5000/api/placementGallery/${editId}`,
          data
        );
        alert("Updated");
      } else {
        //  ADD
        await axios.post(
          "http://localhost:5000/api/placementGallery",
          data, {
          headers: { "Content-Type": "multipart/form-data" }
        }
        );
        alert("Added");
      }

      setEditId(null); // reset
      fetchData();

    } catch (err) {
      console.error(err);
    }
  };

  //  EDIT
  const handleEdit = (student) => {
    setFormData({
      name: student.name,
      qualification: student.qualification,
      company: student.company,
      salary: student.salary || "",
      background: null
    });
    setBgPreview(null);
    setEditId(student._id);
    setBgPreview(`http://localhost:5000/${student.background}`);
  };

  //  DELETE
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/placementGallery/${id}`);
    fetchData();
  };

  

  return (
    <div>
      <AdminNav />
      <h1>Admin Placement Gallery</h1>

      <div className={styles.card}>
        <h3>Add New Placement</h3>
        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className={styles.input} />
          <input name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Qualification" className={styles.input} />
          <textarea name="company" value={formData.company} onChange={handleChange} placeholder="Company name" className={styles.textarea} maxLength={75} />
          <p className={styles.p}>{formData.company.length}/75</p>
          <input name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary per year" className={styles.input} />
          
          <label>Background Image
            <input type="file" name="background" onChange={handleChange} />
          </label>

          {/*  IMAGE PREVIEW */}
          {bgPreview && <img src={bgPreview} width="100" />}

          <button type="submit" className={styles.button}>{editId ? "Update" : "Add"}</button>
        </form>
      </div>

      {/* TABLE CARD */}
      <div className={styles.card}>
        <h3>All Placement</h3>
        <table border="1"
          className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.thStyle}>S.No.</th>
              <th className={styles.thStyle}>Name</th>
              <th className={styles.thStyle}>Qualification</th>
              <th className={styles.thStyle}>Company</th>
              <th className={styles.thStyle}>Salary</th>
              <th className={styles.thStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((item, index) => (
              <tr key={item._id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td className={styles.tdStyle}>{item.name}</td>
                <td className={styles.tdStyle}>{item.qualification}</td>
                <td className={styles.tdStyle}>{item.company}</td>
                <td className={styles.tdStyle}>{item.salary}</td>
                <td className={styles.tdStyle}>
                  <button className={styles.editBtn} onClick={() => handleEdit(item)}>✏️ Edit</button>
                  <button className={styles.deleteBtn} onClick={() => handleDelete(item._id)}> 🗑 Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? styles.active : {}}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PlacementGallery;