import axios from "axios";
import { useState } from "react";
import AdminNav from '../../components/AdminNav/AdminNav';
import styles from '../../assets/css/Admin.module.css'

const AdminVideo = () => {

  const [url, setUrl] = useState("");

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/video", {
      youtubeUrl: url,
    });
    alert("Video Updated");
  };

  return (
    <div>
      <AdminNav />
      <div className={styles.contain}>
        <h2>
          Admin Enquiry Dashboard
        </h2>
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className={styles.saveBtn} onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default AdminVideo;