import {useState} from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLink,
  FaShareAlt,
  FaTelegramPlane,
  FaTwitter,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";
import styles from "./FloatingShare.module.css";

const FloatingShare = () => {
  const [open, setOpen] = useState(false);

  const pageUrl = window.location.href;
  const text = "Check this out!";

  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedText = encodeURIComponent(text);

  const whatsapp = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const telegram = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
  const twitter = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        text,
        url: pageUrl,
      });
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    alert("Link copied!");
  };

  return (
    <div className={`${styles.fabContainer} ${open ? styles.open : ""}`}>

      {/* Share Items */}
      <a href={whatsapp} target="_blank" className={`${styles.fabItem} ${styles.whatsapp}`}>
        <FaWhatsapp />
      </a>

      <a href={facebook} target="_blank" className={`${styles.fabItem} ${styles.facebook}`}>
        <FaFacebookF />
      </a>

      <a href={telegram} target="_blank" className={`${styles.fabItem} ${styles.telegram}`}>
        <FaTelegramPlane />
      </a>

      <a href={twitter} target="_blank" className={`${styles.fabItem} ${styles.twitter}`}>
        <FaTwitter />
      </a>

      <a href={linkedin} target="_blank" className={`${styles.fabItem} ${styles.linkedin}`}>
        <FaLinkedinIn />
      </a>

      <button onClick={copyLink} className={`${styles.fabItem} ${styles.link}`}>
        <FaLink />
      </button>

      {navigator.share && (
        <button onClick={handleNativeShare} className={`${styles.fabItem} ${styles.native}`}>
          <FaShareAlt />
        </button>
      )}

      {/* MAIN BUTTON */}
      <button
        className={styles.fabMain}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaShareAlt />}
      </button>
    </div>
  );
};

export default FloatingShare;