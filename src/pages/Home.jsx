import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import StudentReview from '../components/StudentReview/StudentReview';
import styles from './Home.module.css'; 
import banner from '../assets/images/banner.jpg';

const Home = () => {
    return (
            <div className={styles['root']}>
                <Nav />
                <div className={styles['banner-container']}>
                    <img src={banner} alt="Banner" className={styles['banner-img']} />
                </div>
                <div className={styles['enquiry-form']}>
                    <div className={styles['contact-form-container']}>
                        <h2>Enquiry Form For Demo Classes</h2>
                        <form id="contactForm">
                            <div className={styles['form-group']}>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                                <span className={styles['error-message']} id="nameError"></span>
                            </div>
                            <div className={styles['form-group']}>
                                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
                                <span className={styles['error-message']} id="phoneError"></span>
                            </div>
                            <div className={styles['form-group']}>
                                <input type="text" id="qualification" name="qualification" placeholder="Your Qualification" required />
                                <span className={styles['error-message']} id="qualificationError"></span>
                            </div>
                            <button type="submit" className={styles['submit-button']}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <StudentReview />
                <Footer />
            </div>
        
    );
};

export default Home;