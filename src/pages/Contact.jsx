import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from './Home.module.css';

const Contact = () => {
    return (
        <div className={styles['root']}>
            <Nav />
            <div className="contact-us">
                <h1 style={{ textAlign: 'center', paddingTop: 50, paddingBottom: 50, color: 'rgb(128, 108, 108)' }}>Contact Us</h1>
                <div className="contact-section">
                    <div className="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.603027246322!2d75.82996307450176!3d25.115295835014848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8500188792bb%3A0x6de6ad5ad41bd08c!2sDhanvii%20Accounting%20System!5e0!3m2!1sen!2sin!4v1773663951674!5m2!1sen!2sin" width={400} height={300} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    <div className="contact-info">
                        <p><strong>Address:</strong> 267,Ganesh Nagar,Near Khade Ganesh Ji Temple,Kota[Rajasthan]</p>
                        <p><strong>Phone:</strong> +91 9414729662</p>
                        <p><strong>Email:</strong> contact.dhanvi@gmail.com</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
