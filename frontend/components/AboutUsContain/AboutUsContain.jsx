import styles from './AboutUsContain.module.css';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from '../../assets/images/banner1.jpg';
import {
    FaHandshake,
    FaCalculator,
    FaChartLine,
    FaTrophy,
    FaBriefcase,
    FaUserTie,
} from "react-icons/fa";
import EnquiryPopup from '../EnquiryPopup/EnquiryPopup';

const AboutUsContain = ({ showVideo = false }) => {

    const playerRef = useRef(null);
    const playerInstance = useRef(null);
    const [videos, setVideos] = useState([]);
  const [showEnquiry, setShowEnquiry] = useState(false);


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
        if (!showVideo || !videos.length) return;

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
                        autoplay: 0,
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
    }, [videos, showVideo]);

    return (
        <section className={styles.whyChooseUs}>
            <div className={styles.contentWrapper}>
                <div className={styles.leftSection}>
                    <h2>
                        Why Choose <span>Dhanvii</span> – Trusted Accounting Institute in Kota
                    </h2>

                    <p className={styles.highlight}>
                        Earn ₹20,000–₹40,000/month after course completion.
                    </p>
                    <p className={styles.description}>
                        Since 2017,Dhanvii Accounting System has been providing practical,industry-oriented training in Accounting,
                        GST,Taxation,Payroll, HR,MIS Reporting, and real office accounting.Our goal is to develop job-ready professionals with the skills and confidence needed for successful accounting careers.
                    </p>
                </div>

                <div className={styles.rightSection}>
                    <div className={styles.videoWrapper}>
                        {showVideo ? (
                            <div ref={playerRef} />
                        ) : (
                            <img
                                src={Image}
                                alt="Dhanvii Accounting System"
                                className={styles.aboutImage}
                            />
                        )}
                    </div>

                    <div className={styles.ratings}>
                        ⭐ 5.0 Google Rating | 500+ Reviews
                    </div>
                </div>
            </div>

            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <FaHandshake className={styles.cardIcon} />
                        <h3>Industry Connections</h3>
                    </div>
                    <p>
                        Internships & career opportunities.
                    </p>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <FaCalculator className={styles.cardIcon} />
                        <h3>Accounting Courses</h3>
                    </div>
                    <p>
                        GST,Taxation,Payroll & Accounting Training.
                    </p>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <FaChartLine className={styles.cardIcon} />
                        <h3>Finance & Auditing</h3>
                    </div>
                    <p>
                        Practical auditing and finance skills.
                    </p>
                </div>

                <div className={styles.cardSuccess}>
                    <div className={styles.cardHeader}>
                        <FaTrophy className={styles.cardIcon} />
                        <h3>98% Placement Success</h3>
                    </div>
                    <p>
                        Proven results with industry-focused training.
                    </p>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <FaBriefcase className={styles.cardIcon} />
                        <h3>Career Support</h3>
                    </div>
                    <p>
                        Resume,interview and placement assistance.
                    </p>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <FaUserTie className={styles.cardIcon} />
                        <h3>Expert Mentorship</h3>
                    </div>
                    <p>
                        Personal guidance for career growth.
                    </p>
                </div>
            </div>
            <div className={styles.enquiryButtonContainer}>
                <button
                    className={styles.enquiryButton}
                    onClick= {() => setShowEnquiry(true)}
                >
                    Book Free Demo Class →
                </button>
            </div>
             {showEnquiry && (
        <EnquiryPopup
          onClose={() => setShowEnquiry(false)}
        />
      )}
        </section>
    );
};

export default AboutUsContain; 
