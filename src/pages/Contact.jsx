import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from '../assets/css/Contact.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";

const Contact = () => {
    return (
        <div className={styles.root}>
            <Nav />
            <div className={styles.container}>

                {/* LEFT - MAP */}
                <div className={styles.map}>
                    <h2>Find Us</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.60302724632!2d75.82996307443872!3d25.115295835014923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8500188792bb%3A0x6de6ad5ad41bd08c!2sDhanvii%20Accounting%20System!5e0!3m2!1sen!2sin!4v1775192841144!5m2!1sen!2sin"
                        width="800" height="350" style={{ border: 0 }}
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" title="location-map" />
                </div>

                {/* RIGHT - CONTACT */}
                <div className={styles.contact}>
                    <h2>Connect With Us!</h2>

                    <div className={styles.item}>
                        <FaPhoneAlt className={styles.icon} />
                        <div className={styles.text}><strong>Call Us At<br /></strong>
                        <p>+91 9414729662 [Grievance Call-Sanjay Nagar]<br /> +91 8824248824 [Counselor]<br/> +91 8955989444 [Placement]<br/>+91 8766166166 [WhatsApp]</p></div>
                    </div>

                    <div className={styles.item}>
                        <FaEnvelope className={styles.icon} />
                        <div className={styles.text}><strong>Mail Us At</strong>
                        <p>contact.dhanvi@gmail.com<br/>enquiry.dhanvi@gmail.com</p></div>
                    </div>

                    <div className={styles.item}>
                        <FaBuilding  className={styles.icon} />
                        <div className={styles.text}>
                            <strong>Address</strong><br/>
                            <p>267, Ganesh Nagar,<br />
                            Near Khade Ganesh Ji Temple,<br />
                            Kota [Rajasthan] - 324010</p>
                        </div>
                    </div>

                    {/* Get Directions Button */}
                    <a
                        href="https://www.google.com/maps?q=Dhanvii+Accounting+System+Kota"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaMapMarkerAlt className="btn-icon" /> Get Directions
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;