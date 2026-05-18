import styles from "./RandomAd.module.css";
import WelcomeAd from "../WelcomeModal/WelcomeAd";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const RandomAd = () => {
  const [videos, setVideos] = useState([]);

  const playerRef = useRef(null);
  const playerInstance = useRef(null);

  // Track current video index
  const currentIndexRef = useRef(0);

  // Extract YouTube Video ID
  const getVideoId = (url) => {
    if (!url) return "";

    // Shorts
    if (url.includes("shorts/")) {
      return url.split("shorts/")[1]?.split("?")[0];
    }

    // Normal videos
    if (url.includes("v=")) {
      return url.split("v=")[1]?.split("&")[0];
    }

    return "";
  };

  // Fetch videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const API = import.meta.env.VITE_API_URL;

        const res = await axios.get(`${API}/api/video`);

        const validVideos = Array.isArray(res.data)
          ? res.data.filter((v) => v?.youtubeUrl)
          : [];

        setVideos(validVideos);
      } catch (err) {
        console.error("Video fetch error:", err);
      }
    };

    fetchVideos();
  }, []);

  // Initialize YouTube Player
  useEffect(() => {
    if (!videos.length) return;

    const initializePlayer = () => {
      // Prevent duplicate player
      if (playerInstance.current) return;

      const firstVideoId = getVideoId(
        videos[0]?.youtubeUrl
      );

      playerInstance.current = new window.YT.Player(
        playerRef.current,
        {
          videoId: firstVideoId,

          playerVars: {
            autoplay: 1,
            rel: 0,
          },

          events: {
            onStateChange: (event) => {
              // Video ended
              if (
                event.data ===
                window.YT.PlayerState.ENDED
              ) {
                let nextIndex =
                  currentIndexRef.current + 1;

                // Loop back to first video
                if (nextIndex >= videos.length) {
                  nextIndex = 0;
                }

                currentIndexRef.current = nextIndex;

                const nextVideoId = getVideoId(
                  videos[nextIndex]?.youtubeUrl
                );

                playerInstance.current.loadVideoById(
                  nextVideoId
                );
              }
            },
          },
        }
      );
    };

    // Load YouTube API
    if (!window.YT) {
      const tag = document.createElement("script");

      tag.src = "https://www.youtube.com/iframe_api";

      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    } else {
      initializePlayer();
    }
  }, [videos]);

  return (
    <div className={styles.adBox}>
      <div className={styles.video}>
        <div
          ref={playerRef}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className={styles.ad}>
        <WelcomeAd />
      </div>
    </div>
  );
};

export default RandomAd;