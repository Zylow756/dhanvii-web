import styles from "./RandomAd.module.css";
import WelcomeAd from "../WelcomeModal/WelcomeAd";
import { useEffect, useState } from "react";
import axios from "axios";

const RandomAd = () => {
  const [videos, setVideos] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");

  const getEmbedUrl = (url) => {
    if (!url) return "";

    if (url.includes("shorts")) {
      return url.replace("shorts/", "embed/");
    }

    const videoId = url.split("v=")?.[1]?.split("&")?.[0];

    if (!videoId) return "";

    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const API = import.meta.env.VITE_API_URL;

        const res = await axios.get(`${API}/api/video`);

        const validVideos = Array.isArray(res.data)
          ? res.data.filter((v) => v?.youtubeUrl)
          : [];

        setVideos(validVideos);

        if (validVideos.length > 0) {
          const randomVideo =
            validVideos[
              Math.floor(Math.random() * validVideos.length)
            ];

          setVideoUrl(getEmbedUrl(randomVideo.youtubeUrl));
        }
      } catch (err) {
        console.error("Video fetch error:", err);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos.length === 0) return;

    const interval = setInterval(() => {
      const randomVideo =
        videos[Math.floor(Math.random() * videos.length)];

      if (randomVideo?.youtubeUrl) {
        setVideoUrl(getEmbedUrl(randomVideo.youtubeUrl));
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [videos]);

  return (
    <div className={styles.adBox}>
      <div className={styles.video}>
        {videoUrl && (
          <iframe
            src={videoUrl}
            title="Random Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      <div className={styles.ad}>
        <WelcomeAd />
      </div>
    </div>
  );
};

export default RandomAd;