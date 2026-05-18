import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import styles from "../../assets/css/Gallery.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const CertiGallery = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const API = import.meta.env.VITE_API_URL;

  const getYear = (desc) => {
    const match = desc?.match(/\d{4}/);
    return match ? parseInt(match[0]) : 0;
  };

  const getName = (desc) => {
    return desc
      ? desc.replace(/\d{4}/, "").replace("-", "").trim()
      : "";
  };

  useEffect(() => {
  const fetchImages = async () => {
    try {
      const res = await axios.get(
        `${API}/api/gallery?category=certification`
      );

      // First sort
      const sorted = [...res.data].sort((a, b) => {
        const yearA = getYear(a.description);
        const yearB = getYear(b.description);

        if (yearA !== yearB) {
          return yearB - yearA;
        }

        const nameA = getName(a.description);
        const nameB = getName(b.description);

        return nameA.localeCompare(nameB);
      });

      // Then shuffle
      const shuffled = [...sorted].sort(() => Math.random() - 0.5);

      setImages(shuffled);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  fetchImages();
}, [API]);

  const openPopup = (index) => setCurrentIndex(index);
  const closePopup = () => setCurrentIndex(null);

  const nextImage = () => {
  setCurrentIndex((prev) => (prev + 1) % images.length);
};

const prevImage = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );
};

  return (
    <div className={styles.root}>
      <Nav />

      <div className={styles.galleryContainer}>
        <div className={styles.grid}>
          {Array.isArray(images) &&
            images.map((img, index) => (
              <div
                key={img._id}
                className={styles.card}
                onClick={() => openPopup(index)}
              >
                <img
                  src={`${API}/uploads/${img.image}`}
                  alt="gallery"
                />

                <div className={styles.overlay}>
                  <p className={styles.desc}>{img.description}</p>
                </div>
              </div>
            ))}
        </div>

        {currentIndex !== null && (
          <div className={styles.modal}>
            <span className={styles.close} onClick={closePopup}>✖</span>

            <button className={styles.prev} onClick={prevImage}><FaChevronLeft /></button>

            <img
              src={`${API}/uploads/${images[currentIndex].image}`}
              className={styles.modalImage}
              alt="preview"
            />

            <button className={styles.next} onClick={nextImage}>
              <FaChevronRight /></button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CertiGallery;