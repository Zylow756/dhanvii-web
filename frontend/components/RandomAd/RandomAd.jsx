import styles from "./RandomAd.module.css";
import WelcomeAd from "../WelcomeModal/WelcomeAd";
import { useEffect, useState } from "react";
import axios from "axios";

const RandomAd = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const getEmbedUrl = (url) => {
    if (url.includes("shorts")) {
      return url.replace("shorts/", "embed/");
    }

    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
  let videos = [];

  const fetchVideos = async () => {
    const res = await axios.get("http://localhost:5000/api/video");
    videos = res.data;

    changeVideo();
  };

  const changeVideo = () => {
    if (videos.length > 0) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos[randomIndex];
      setVideoUrl(getEmbedUrl(randomVideo.youtubeUrl));
    }
  };

  fetchVideos();

  const interval = setInterval(changeVideo, 10000); // every 10 sec

  return () => clearInterval(interval);
}, []);

  return (
    <div className={styles.adBox}>

      {/* LEFT - SINGLE RANDOM VIDEO */}
      <div className={styles.video}>
        {videoUrl && (
          <iframe
            src={videoUrl}
            title="Random Video"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* RIGHT - AD */}
      <div className={styles.ad}>
        <WelcomeAd />
      </div>

    </div>
  );
};

export default RandomAd;