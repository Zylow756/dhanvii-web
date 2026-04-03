import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from '../assets/css/Home.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
    return (
        <div className={styles['root']}>
            <Nav />
            <div className="contact-us">
                {/*<h1 style={{ textAlign: 'center', paddingTop: 50, paddingBottom: 50, color: 'rgb(128, 108, 108)' }}>Contact Us</h1>*/}
                <div className="contact-section">

                    <div className="map-container">
                        <h2 style={{ paddingBottom: 20, }}>Find Us</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.60302724632!2d75.82996307443872!3d25.115295835014923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8500188792bb%3A0x6de6ad5ad41bd08c!2sDhanvii%20Accounting%20System!5e0!3m2!1sen!2sin!4v1775192841144!5m2!1sen!2sin"
                            width="800" height="350" style={{ border: 0 }}
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" title="location-map" />


                        {/* Get Directions Button */}
                        <a
                            href="https://www.google.com/maps?q=Dhanvii+Accounting+System+Kota"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="direction-btn"
                        >
                            <FaMapMarkerAlt className="btn-icon" />Get Directions
                        </a>
                    </div>
                    <div className="contact-info">
                        <h2>Contact Us</h2>
                        <p><FaMapMarkerAlt className="icon" /> 267,Ganesh Nagar,Near Khade Ganesh Ji Temple,Kota[Rajasthan]</p>
                        <p><FaPhoneAlt className="icon" /> +91 9414729662</p>
                        <p><FaPhoneAlt className="icon" /> +91 8824248824, +91 8955989444</p>
                        <p><FaWhatsapp className="icon" /> +91 8766166166</p>
                        <p><FaEnvelope className="icon" /> contact.dhanvi@gmail.com</p>
                        <p><FaEnvelope className="icon" /> enquiry.dhanvii@gmail.com</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
