import axios from "axios";
import { useState } from "react";

const AdminVideo = () => {

const [url, setUrl] = useState("");

const handleSubmit = async () => {
  await axios.post("http://localhost:5000/api/video", {
    youtubeUrl: url,
  });
  alert("Video Updated");
};

return (
  <>
    <input
      type="text"
      placeholder="Enter YouTube URL"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
    />
    <button onClick={handleSubmit}>Save</button>
  </>
  );
};

export default AdminVideo;