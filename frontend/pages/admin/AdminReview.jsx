import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from '../../components/AdminNav/AdminNav';
import  styles from '../../assets/css/AdminReview.module.css'

const AdminReview = () => {
    const [reviews, setReviews] = useState([]);
    const [editId, setEditId] = useState(null);
    const [form, setForm] = useState({
        name: "",
        message: "",
        path: "",
        qualification: "",
        image: null,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(reviews.length / itemsPerPage);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentData = reviews.slice(indexOfFirstItem, indexOfLastItem);
    const API = import.meta.env.VITE_API_URL;

    const fetchReviews = async () => {
        try {
            const res = await axios.get(`${API}/api/reviews`);
            setReviews(res.data);
        } catch (err) {
            console.error("Error fetching reviews:", err);
        }
    };

    useEffect(() => {
        let mounted = true;
        const getReviews = async () => {
            try {
                const res = await axios.get(`${API}/api/reviews`);
                if (mounted) setReviews(res.data);
            } catch (err) {
                console.error("Error fetching reviews:", err);
            }
        };
        getReviews();
        return () => {
            mounted = false;
        };
    }, [API]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("message", form.message);
        formData.append("path", form.path);
        formData.append("qualification", form.qualification);

        // only add image if selected
        if (form.image) {
            formData.append("image", form.image);
        }

        try {
            if (editId) {
                await axios.put(
                    `${API}/api/reviews/${editId}`,
                    formData
                );
                setEditId(null);
            } else {
                await axios.post(
                    `${API}/api/reviews`,
                    formData
                );
            }

            setForm({ name: "", message: "", path: "", qualification: "", image: null });
            fetchReviews();

        } catch (err) {
            console.error("Error:", err);
        }
    };

    const handleEdit = (review) => {
        setForm({
            name: review.name,
            message: review.message,
            path: review.path,
            qualification: review.qualification,
            image: null,
        });
        setEditId(review._id);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await axios.delete(
                `${API}/api/reviews/${id}`
            );
            fetchReviews();
        }
    };

    return (
        <div className={styles.container}>
            <AdminNav />
            <h2 className={styles.title}>Admin Review Panel</h2>

            {/* FORM CARD */}
            <div className={styles.card}>
                <h3>Add New Review</h3>

                <form id="studentForm" onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        placeholder="Student Name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        className={styles.input}
                    />

                    <textarea
                        placeholder="Write review message..."
                        value={form.message}
                        onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                        }
                        className={styles.textarea}
                    />

                    <input
                        type="text"
                        placeholder="Write review path in google map"
                        value={form.path}
                        onChange={(e) =>
                            setForm({ ...form, path: e.target.value })
                        }
                        className={styles.input}
                    />

                    <input
                        type="text"
                        placeholder="Student Qualifications"
                        value={form.qualification}
                        onChange={(e) =>
                            setForm({ ...form, qualification: e.target.value })
                        }
                        className={styles.input}
                    />

                    <input
                        type="file"
                        onChange={(e) =>
                            setForm({ ...form, image: e.target.files[0] })
                        }
                    />
                </form>
                    <button form="studentForm" type="submit" className={styles.button}>
                        {editId ? "Update Review" : "Upload Review"}
                    </button>
            </div>

            {/* TABLE CARD */}
            <div className={styles.card}>
                <h3>All Reviews</h3>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>S.No.</th>
                            <th className={styles.th}>Image</th>
                            <th className={styles.th}>Name</th>
                            <th className={styles.th}>Message</th>
                            <th className={styles.th}>Qualification</th>
                            <th className={styles.th}>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.isArray(currentData) && currentData.map((item, index) => (
                            <tr key={item._id}>
                                <td>{indexOfFirstItem + index + 1}</td>
                                <td className={styles.td}>
                                    <img
                                        src={`${API}/uploads/${item.image}`}
                                        alt=""
                                        className={styles.image}
                                    />
                                </td>

                                <td className={styles.td}>{item.name}</td>
                                <td className={styles.td}>{item.message}</td>
                                <td className={styles.td}>{item.qualification}</td>
                                <td className={styles.td}>
                                    <button
                                        onClick={() => handleEdit(item)}
                                        className={styles.editBtn}
                                    >
                                        ✏️ Edit
                                    </button>

                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className={styles.deleteBtn}
                                    >
                                        🗑 Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.pagination}>
                <button
                className={styles.button}
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
                className={styles.button}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AdminReview;