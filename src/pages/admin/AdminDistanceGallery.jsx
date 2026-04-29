import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from '../../components/AdminNav/AdminNav';
import styles from '../../assets/css/AdminDistanceGallery.module.css';
import { SiNushell } from "react-icons/si";

const AdminDistanceGallery = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    distance: "",
    city: "",
    image: "",
    isTop: false,
  });

  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 10;
  
      const totalPages = Math.ceil(data.length / itemsPerPage);
  
  
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
      const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/far-students");
    
    const result = await res.data;
    setData(result);
  };

      useEffect(() => {
          const loadData = async () => {
              try {
                  await fetchStudents();
              } catch (err) {
                  console.error("Error fetching reviews:", err);
              }
          };
  
          loadData();
      }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ADD or UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("address", form.address);
    data.append("distance", form.distance);
    data.append("city", form.city);
    data.append("isTop", form.isTop);

    if (imageFile) {
      data.append("image", imageFile);
    }

    if (editId) {
      await axios.put(
        `http://localhost:5000/api/far-students/${editId}`,
        data
      );
    } else {
      await axios.post(
        "http://localhost:5000/api/far-students/add",
        data
      );
    }

    fetchStudents();
  };

  // DELETE
  const handleDelete = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/far-students/${id}`
    );
    fetchStudents();
  };

  // EDIT
  const handleEdit = (student) => {
    setForm(student);
    setEditId(student._id);
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div className={styles.root}>
      <AdminNav />
      <h2>Far Students Panel</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className={styles.input}  required />
        <input name="address" placeholder="Area" value={form.address} onChange={handleChange} className={styles.input}  required />
        <input name="distance" placeholder="Distance (e.g. 80)" value={form.distance} onChange={handleChange} className={styles.input}  />
        <input name="city" placeholder="City (e.g. Kota, Bundi)" value={form.city} onChange={handleChange} className={styles.input}  />
        <input type="file" name="image" onChange={handleFileChange} />

        <button type="submit" className={styles.button}>
          {editId ? "Update" : "Add"} Student
        </button>
      </form>

      {/* LIST */}
      <table className={styles.tableContainer}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.thStyle}>S.No.</th>
            <th className={styles.thStyle}>Name</th>
            <th className={styles.thStyle}>City</th>
            <th className={styles.thStyle}>Distance[km]</th>
            <th className={styles.thStyle}>Area</th>
            <th className={styles.thStyle}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentData.map((s, index) => (
            <tr key={s._id}>
              <td className={styles.tdStyle}>{indexOfFirstItem + index + 1}</td>
              <td className={styles.tdStyle}>{s.name}</td>
              <td className={styles.tdStyle}>{s.city}</td>
              <td className={styles.tdStyle}>{s.distance}</td>
              <td className={styles.tdStyle}>{s.address}</td>

              <td className={styles.tdStyle}>
                <button className={styles.editBtn} onClick={() => handleEdit(s)}>✏️ Edit</button>
                <button className={styles.deleteBtn} onClick={() => handleDelete(s._id)}> 🗑 Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
            style={currentPage === i + 1 ? styles.active : null}
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

export default AdminDistanceGallery;