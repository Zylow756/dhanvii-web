import React, { useEffect, useState } from "react";
import styles from "./WelcomeModal.module.css";
import { AnimatePresence, motion as Motion } from "framer-motion";
import WelcomeAd from "./WelcomeAd";

const WelcomeModal = () => {
    const [show, setShow] = useState(() => !localStorage.getItem("visited"));

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden"; // lock scroll
        } else {
            document.body.style.overflow = "auto";
        }
    }, [show]);

    const handleClose = () => {
        localStorage.setItem("visited", "true");
        setShow(false);
        document.body.style.overflow = "auto";
    };

    return (
        <AnimatePresence>
            {show && (
                <Motion.div
                    className={styles.overlay}
                    onClick={handleClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Background glow */}
                    <div className={styles.glow}></div>

                    <Motion.div
                        className={styles.modal}
                        initial={{ scale: 0.6, opacity: 0, y: 100 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.6, opacity: 0, y: 100 }}
                        transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    >
                        {/* Close Button */}
                        <button className={styles.closeBtn} onClick={handleClose}>
                            ✕
                        </button>

                        {/* Optional Banner */}
                        <div className={styles.banner}>
                            <p><strong>Join Kota's Top Professional Accounting Institute<br /> & Become Job-Ready with experts</strong></p>

                        </div>

                        {/* Content */}
                        <div className={styles.content}>
                            <WelcomeAd />
                        </div>
                    </Motion.div>
                </Motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeModal;