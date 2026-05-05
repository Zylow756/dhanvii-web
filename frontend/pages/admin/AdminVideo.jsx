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
    alert("Video Added");
    setUrl("");
  };

  return (
    <div>
      <AdminNav />
      <div className={styles.contain}>
        <h2>Add YouTube Video / Shorts</h2>

        <input
          type="text"
          placeholder="Paste YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button className={styles.exportBtn} onClick={handleSubmit}>Add Video</button>
      </div>
    </div>
  );
};

export default AdminVideo;