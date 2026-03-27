import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import styles from '../gallery/Gallery.module.css';
import image3 from '../../assets/images/image3.jpeg';

const FunctionGallery = () => {
    return (
        <div className={styles['root']}>
            <Nav />
            <div className="gallery">
                <div className="gallery-item">
                    <a target="_blank" href="image1.jpeg">
                        <img src={image3} alt="image1" width={600} height={400} />
                    </a>
                    <div className="desc">Function Celebration</div>
                </div>
                <div className="gallery-item">
                    <a target="_blank" href="image2.jpeg">
                        <img src={image3} alt="image2" width={600} height={400} />
                    </a>
                    <div className="desc">Function Celebration</div>
                </div>
                <div className="gallery-item">
                    <a target="_blank" href="image3.jpeg">
                        <img src={image3} alt="image3" width={600} height={400} />
                    </a>
                    <div className="desc">Function Celebration</div>
                </div>
                <div className="gallery-item">
                    <a target="_blank" href="image4.jpeg">
                        <img src={image3} alt="image4" width={600} height={400} />
                    </a>
                    <div className="desc">Function Celebration</div>
                </div>
                <div className="gallery-item">
                    <a target="_blank" href="image5.jpeg">
                        <img src={image3} alt="image5" width={600} height={400} />
                    </a>
                    <div className="desc">Function Celebration</div>
                </div>
                <div className="gallery-item">
                    <a target="_blank" href="image6.jpeg">
                        <img src={image3} alt="image6" width={600} height={400} />
                    </a>
                    <div className="desc">Function Celebration</div>
                </div>
                <div className="gallery-item">
                    <a target="_blank" href="image7.jpeg">
                        <img src={image3} alt="image7" width={600} height={400} />
                    </a>
                    <div className="desc">Function Celebration</div>
                </div>
                <div className="gallery-item">
                    <a target="_blank" href="image8.jpeg">
                        <img src={image3} alt="image8" width={600} height={400} />
                    </a>
                    <div className="desc">Function Celebration</div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FunctionGallery;