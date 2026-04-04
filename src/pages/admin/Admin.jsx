import { useEffect, useState } from "react";
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import styles from '../../assets/css/Admin.module.css';
import { SiPantheon } from "react-icons/si";

const Admin = () => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    qualification: "",
  });

  //  Fetch data
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/enquiry");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    const fetchDataOnMount = async () => {
      const res = await fetch("http://localhost:5000/api/enquiry");
      const result = await res.json();
      setData(result);
    };

    fetchDataOnMount();
  }, []);

  //  Delete
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/enquiry/${id}`, {
      method: "DELETE",
    });
    fetchData();
  };

  //  Edit click
  const handleEdit = (item) => {
    setEditId(item._id);
    setForm(item);
  };

  //  Update
  const handleUpdate = async () => {
    await fetch(`http://localhost:5000/api/enquiry/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setEditId(null);
    setForm({ name: "", phone: "", qualification: "" });
    fetchData();
  };

  return (
    <div className={styles['root']}>
      <Nav />
      <div style={{ padding: "30px", background: "#f5f6fa", minHeight: "100vh" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Admin Dashboard For Enquiries
        </h2>

        {/* Card */}
        <div className="styles['card']">
          {/* Top Bar */}
          <div className={styles['enquiry-contain']}>
            <span
              onClick={() =>
                window.open("http://localhost:5000/api/enquiry/export")
              } className={styles.exportBtn}
            >
              📥 Export Excel
            </span>
          </div>

          {/* Table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <thead style={{ background: "#7b0000", color: "#fff" }}>
              <tr>
                <th className={styles.thStyle}>ID</th>
                <th className={styles.thStyle}>Name</th>
                <th className={styles.thStyle}>Phone</th>
                <th className={styles.thStyle}>Qualification</th>
                <th className={styles.thStyle}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item._id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td className={styles.tdStyle}>{index + 1}</td>

                  <td className={styles.tdStyle}>
                    {editId === item._id ? (
                      <input
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                      />
                    ) : (
                      item.name
                    )}
                  </td>

                  <td className={styles.tdStyle}>
                    {editId === item._id ? (
                      <input
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                      />
                    ) : (
                      item.phone
                    )}
                  </td>

                  <td className={styles.tdStyle}>
                    {editId === item._id ? (
                      <input
                        value={form.qualification}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            qualification: e.target.value,
                          })
                        }
                      />
                    ) : (
                      item.qualification
                    )}
                  </td>

                  <td className={styles.tdStyle}>
                    {editId === item._id ? (
                      <button className={styles.saveBtn} onClick={handleUpdate}>
                        💾 Save
                      </button>
                    ) : (
                      <>
                        <button
                          className={styles.editBtn}
                          onClick={() => handleEdit(item)}
                        >
                          ✏️ Edit
                        </button>

                        <button
                          className={styles.deleteBtn}
                          onClick={() => handleDelete(item._id)}
                        >
                          🗑 Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;