import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import banner from '../assets/images/banner.jpg';
import styles from './Home.module.css'; 

const Home = () => {
    return (
        <div>
            <div className={styles['main-container']}>
                <Header />
                <Nav />
                <div className={styles['banner-container']}>
                    <img src={banner} alt="Banner" className={styles['banner-img']} />
                </div>
                <div className={styles['enquiry-form']}>
                    <div className={styles['contact-form-container']}>
                        <h2>Enquiry Form</h2>
                        <form id="contactForm">
                            <div className={styles['form-group']}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                                <span className={styles['error-message']} id="nameError"></span>
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required />
                                <span className={styles['error-message']} id="emailError"></span>
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
                                <span className={styles['error-message']} id="phoneError"></span>
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Your Message" rows="5" required ></textarea>
                                <span className={styles['error-message']} id="messageError"></span>
                            </div>
                            <button type="submit" className={styles['submit-button']}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;