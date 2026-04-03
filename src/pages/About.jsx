import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from '../assets/css/Home.module.css';
import image4 from '../assets/images/image4.jpeg';

const Contact = () => {
    return (
                <div className={styles['root']}>
                    <Nav />
            <div className="contact-us">
                <h1 style={{ textAlign: 'center', paddingTop: 50, paddingBottom: 50, color: 'rgb(128, 108, 108)' }}>About Us</h1>
                <div className="contact-section">
                    <div className="map-container">
                        <img src={image4} alt="Map" width="400px" height="300px" />
                    </div>
                    <div className="contact-info">
                        <h4>Legacy of Trust</h4>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
                <Footer />
        </div>
    );
};

export default Contact;