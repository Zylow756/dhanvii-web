import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import styles from "../../assets/css/Gallery.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const CertiGallery = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  const fetchImages = async () => {
    const res = await axios.get("http://localhost:5000/api/gallery?category=certification");
    setImages(res.data);

  };

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchImages();
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    loadData();
  }, []);

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

  const getYear = (desc) => {
  const match = desc?.match(/\d{4}/);
  return match ? parseInt(match[0]) : 0;
};

const getName = (desc) => {
  return desc
    ? desc.replace(/\d{4}/, "").replace("-", "").trim()
    : "";
};

const sortedImages = [...images].sort((a, b) => {
  const yearA = getYear(a.description);
  const yearB = getYear(b.description);

  // 1. Year DESC (2025 → 2000)
  if (yearA !== yearB) {
    return yearB - yearA;
  }

  // 2. Name ASC (A → Z)
  const nameA = getName(a.description);
  const nameB = getName(b.description);

  return nameA.localeCompare(nameB);
});

  return (
    <div className={styles.root}>
      <Nav />

      <div className={styles.galleryContainer}>
        <div className={styles.grid}>
          {sortedImages.map((img, index) => (
            <div
              key={img._id}
              className={styles.card}
              onClick={() => openPopup(index)}
            >
              <img
                src={`http://localhost:5000/uploads/${img.image}`}
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
              src={`http://localhost:5000/uploads/${images[currentIndex].image}`}
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