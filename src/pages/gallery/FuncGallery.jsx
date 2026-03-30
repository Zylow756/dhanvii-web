import { useState } from "react";
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import styles from "./Gallery.module.css";
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/image4.jpeg';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
    image4,
    image3,
    image2,
    image4,
    image2,
    image3,
];

const FuncGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const openPopup = (index) => {
        setCurrentIndex(index);
    };

    const closePopup = () => {
        setCurrentIndex(null);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
            <div className={styles['root']}>
                <Nav />
        <div className={styles.galleryContainer}>

            {/* Grid */}
            <div className={styles.grid}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        onClick={() => openPopup(index)}
                    >
                        <img src={img} alt="gallery" />
                        <div className={styles.overlay}>View</div>
                    </div>
                ))}
            </div>

            {/* Popup */}
            {currentIndex !== null && (
                <div className={styles.modal}>

                    <span className={styles.close} onClick={closePopup}>
                        ✖
                    </span>

                    <button className={styles.prev} onClick={prevImage}>
                        <FaChevronLeft />
                    </button>

                    <img
                        src={images[currentIndex]}
                        className={styles.modalImage}
                        alt="preview"
                    />

                    <button className={styles.next} onClick={nextImage}>
                        <FaChevronRight />
                    </button>

                </div>
            )}
        </div>
            <Footer />
        </div>
    );
};

export default FuncGallery;