import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from '../../components/AdminNav/AdminNav';
import styles from '../../assets/css/AdminDistanceGallery.module.css';

const AdminDistanceGallery = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    address: "",
    distance: "",
    city: "",
    image: "",
    isTop: false,
  });

  const [editId, setEditId] = useState(null);
  const [filterCity] = useState("");
  const [imageFile, setImageFile] = useState(null);

const filteredStudents = filterCity
  ? students.filter((s) => s.city === filterCity)
  : students;


  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get("http://localhost:5000/api/far-students");
      setStudents(res.data);
    };
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/far-students");
    setStudents(res.data);
  };

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
    <div className={styles['root']}>
      <AdminNav />
      <h2>Far Students Panel</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="address" placeholder="Area" value={form.address} onChange={handleChange} required />
        <input name="distance" placeholder="Distance (e.g. 80 KM)" value={form.distance} onChange={handleChange} />
        <input name="city" placeholder="City (e.g. Kota, Bundi)" value={form.city} onChange={handleChange} />
        <input type="file" name="image" onChange={handleFileChange} />

        <button type="submit">
          {editId ? "Update" : "Add"} Student
        </button>
      </form>

      {/* LIST */}
      <table border="1" cellPadding="10">
        <thead className={styles.thead}>
          <tr>
            <th className={styles.thStyle}>Name</th>
            <th className={styles.thStyle}>City</th>
            <th className={styles.thStyle}>Distance</th>
            <th className={styles.thStyle}>Area</th>
            <th className={styles.thStyle}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((s) => (
            <tr key={s._id}>
              <td className={styles.tdStyle}>{s.name}</td>
              <td className={styles.tdStyle}>{s.city}</td>
              <td className={styles.tdStyle}>{s.distance}</td>
              <td className={styles.tdStyle}>{s.address}</td>

              <td className={styles.tdStyle}>
                <button className={styles.editBtn} onClick={() => handleEdit(s)}>Edit</button>
                <button className={styles.deleteBtn} onClick={() => handleDelete(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDistanceGallery;