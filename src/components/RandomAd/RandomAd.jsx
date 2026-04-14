import styles from "./RandomAd.module.css";
import WelcomeAd from "../WelcomeModal/WelcomeAd";
import { useEffect, useState } from "react";
import axios from "axios";

const RandomAd = () => {

  const [videoUrl, setVideoUrl] = useState("");

  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get("http://localhost:5000/api/video");
      if (res.data?.youtubeUrl) {
        setVideoUrl(getEmbedUrl(res.data.youtubeUrl));
      }
    };
    fetchVideo();
}, []);

return (
    <div className={styles.adBox}>

      {/* LEFT - YouTube */}
      <div className={styles.video}>
        {videoUrl && (
        <iframe
          src={videoUrl}
          title="YouTube video"
          allowFullScreen
        ></iframe>
      )}
      </div>

      {/* RIGHT - Random Ad */}
      <div className={styles.ad}>
      <WelcomeAd />
      </div>
    </div>
  );
};

export default RandomAd;