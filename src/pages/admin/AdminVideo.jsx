import axios from "axios";
import { useState } from "react";
import AdminNav from '../../components/AdminNav/AdminNav';

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
      <div style={{ padding: "30px", background: "#f5f6fa", minHeight: "100vh" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Admin Enquiry Dashboard
        </h2>
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default AdminVideo;