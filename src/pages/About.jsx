import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from './Home.module.css'; 
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
                        <p>Dhanvii Accounting System has established in 2017. This is an ISO 9001:2015 certified company.
                            We are providing accounting services last 26 years[like book keeping, registration, taxation and
                            finance] as well as accounting courses also. Our courses prepare you for a career in the job of accountant.
                            They are designed to give you as in-depth understanding of the work that accountants and finance
                            managers do. You will discover how to balance risk and reward in unpredictable environments.
                        </p>
                    </div>
                </div>
            </div>
                <Footer />
        </div>
    );
};

export default Contact;