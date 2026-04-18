import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import styles from "../../assets/css/AdminGallery.module.css";
import AdminNav from '../../components/AdminNav/AdminNav';

const AdminGallery = () => {

  const [images, setImages] = useState([]);
  const [file, setFile] = useState([]);
  const [category, setCategory] = useState("function");
  const [activeTab, setActiveTab] = useState("all");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [editDescription, setEditDescription] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editFile, setEditFile] = useState(null);

  const fetchImages = useCallback(async (category = "all") => {
    let url = "http://localhost:5000/api/gallery";

    if (category !== "all") {
      url += `?category=${category}`;
    }

    const res = await axios.get(url);
    setImages(res.data);
  }, []);


  useEffect(() => {
    const loadData = async () => {
      try {

        if (category) {
          await fetchImages("all");
        }
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    };
    loadData();
  }, [category, fetchImages]);

  // Upload
  const handleUpload = async () => {
    if (!file || file.length === 0) {
      return alert("Select images");
    }

    const formData = new FormData();

    for (let i = 0; i < file.length; i++) {
      formData.append("images", file[i]);
    }

    formData.append("category", category);
    formData.append("description", description);

    await axios.post(
      "http://localhost:5000/api/gallery/upload",
      formData
    );

    setDescription("");
    fetchImages();
  };

  // Edit
  const handleUpdate = async () => {
    try {
      const formData = new FormData();

      formData.append("description", editDescription);
      formData.append("category", editCategory);

      if (editFile) {
        formData.append("image", editFile);
      }

      await axios.put(
        `http://localhost:5000/api/gallery/${editId}`,
        formData
      );

      alert("Updated successfully");

      setEditId(null);
      setEditDescription("");
      setEditCategory("");
      setEditFile(null);

      fetchImages();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Update failed");
    }
  };

  // Delete
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/gallery/${id}`);
    alert("Image deleted successfully");
    fetchImages();
  };

  return (
    <div className={styles['root']}>
      <AdminNav />
      <div className={styles.container}>
        <h2>Admin Gallery</h2>

        {/* Upload Section */}

        <div className={styles.uploadBox}>
          {/* Upload Image */}
          {!editId && (
            <input
              type="file"
              multiple
              onChange={(e) => setFile(e.target.files)}
            />
          )}

          {/* Edit Image */}
          {editId && (
            <input
              type="file"
              onChange={(e) => setEditFile(e.target.files[0])}
            />
          )}

          <input
            type="text"
            placeholder="Enter image description"
            value={editId ? editDescription : description}
            onChange={(e) =>
              editId
                ? setEditDescription(e.target.value)
                : setDescription(e.target.value)
            }
          />
          <select
            value={editId ? editCategory : category}
            onChange={(e) =>
              editId
                ? setEditCategory(e.target.value)
                : setCategory(e.target.value)
            }
            className={styles['select-input']}
          >
            <option value="function">Function</option>
            <option value="institute">Institute</option>
            <option value="certification">Certification</option>
          </select>
          <button onClick={editId ? handleUpdate : handleUpload}>
            {editId ? "Update" : "Upload"}
          </button>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === "all" ? styles.active : ""}`}
            onClick={() => {
              setActiveTab("all");
              fetchImages("all");
            }}
          >
            All
          </button>

          <button
            className={`${styles.tab} ${activeTab === "function" ? styles.active : ""}`}
            onClick={() => {
              setActiveTab("function");
              fetchImages("function");
            }}
          >
            Function
          </button>

          <button
            className={`${styles.tab} ${activeTab === "institute" ? styles.active : ""}`}
            onClick={() => {
              setActiveTab("institute");
              fetchImages("institute");
            }}
          >
            Institute
          </button>
          <button
            className={`${styles.tab} ${activeTab === "certification" ? styles.active : ""}`}
            onClick={() => {
              setActiveTab("certification");
              fetchImages("certification");
            }}
          >
            Certification
          </button>
        </div>

        {/* Image List */}
        <div className={styles.grid}>
          {Array.isArray(images) &&
            images.map((img) => (



              <div key={img._id} className={styles.card}>
                <img
                  src={`http://localhost:5000/uploads/${img.image}`}
                  alt=""
                />

                <span className={styles.badge}>{img.category}</span>
                <p className={styles.desc}>{img.description}</p>
                <button
                  className={styles.editBtn}
                  onClick={() => {
                    setEditId(img._id);
                    setEditDescription(img.description || "");
                    setEditCategory(img.category || "function");
                  }}
                >
                  ✏️ Edit
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(img._id)}
                >
                  🗑️ Delete
                </button>
              </div>

            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;