import { useEffect, useState } from "react";
import AdminNav from '../../components/AdminNav/AdminNav';
import styles from '../../assets/css/Admin.module.css';

const Admin = () => {
  const [data, setData] = useState([]);
  const [editId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    qualification: "",
  });
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 10;
  
      const totalPages = Math.ceil(data.length / itemsPerPage);
  
  
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
      const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

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

  return (
    <div className={styles.root}>
            <AdminNav />
      <div className={styles.heading}>
        <h2>
          Admin Enquiry Dashboard
        </h2>

        {/* Card */}
        <div className={styles.card}>
          {/* Top Bar */}
          <div className={styles.enquiryContain}>
            <span
              onClick={() =>
                window.open("http://localhost:5000/api/enquiry/export")
              } className={styles.exportBtn}
            >
              📥 Export Excel
            </span>
          </div>
          <div className={styles.tableContainer}>
            {/* Table */}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              <thead className={styles.thead}>
                <tr>
                  <th className={styles.thStyle}>ID</th>
                  <th className={styles.thStyle}>Name</th>
                  <th className={styles.thStyle}>Phone</th>
                  <th className={styles.thStyle}>Qualification</th>
                  <th className={styles.thStyle}>Actions</th>
                </tr>
              </thead>

              <tbody>
               {currentData.map((item, index) => (
                            <tr key={item._id}>
                                <td>{indexOfFirstItem + index + 1}</td>

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

                      <>
                        <button
                          className={styles.deleteBtn}
                          onClick={() => handleDelete(item._id)}
                        >
                          🗑 Delete
                        </button>
                      </>

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
                        className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.active : ""}`}
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
      </div>
    </div>
  );
};

export default Admin;