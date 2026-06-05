import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from '../assets/css/About.module.css';
import AboutUsContain from '../components/AboutUsContain/AboutUsContain';

const About = () => {
  return (
    <div className={styles.container}>
      <Nav />

      {/* About Section */}
      <section className={styles.section}>
        <h1>About Us</h1>
        <div className={styles.aboutUsContainer}>
          <div className={styles.aboutImage}>
            <h2>Legacy of Trust, Excellence in Finance</h2>

            <p>
              Established in <strong>2017</strong>, <strong>Dhanvii Accounting System</strong> is a  <strong>professional accounting institute</strong> committed to delivering <strong>high-quality finance and accounting education.</strong> With a <strong>legacy in professional accounting since 1996,</strong> with expertise in <strong>practical, industry-oriented training.</strong>

            </p>

            <p>
              We are <strong>ISO 9001:2015 certified</strong> and accredited by <strong>International Accreditation Forum</strong> [IAF], ensuring that our courses meet <strong>global quality standards.</strong> Our program are recognized for excellence in <strong>practical knowledge,professional skills, & career readiness.</strong>
              <br />
              <span>
                We are registered with <strong>MSME & NCS,</strong> offering professional courses and skill development programs to empower students and working professionals.
              </span>
            </p>
          </div>
          <div className={styles.overlay}></div>
        </div>
      </section>

      {/* Vision */}
      <section className={styles.visionSection}>
        <div className={styles.visionLeft}>
          <h2>Our Vision</h2>
          <p>From mastering accounting skills today to achieving a successful career worth ₹6 LPA+ tomorrow, our vision is to create confident, industry-ready finance professionals.</p>
        </div>
        <div className={styles.visionRight}>
          <p>
            We develop future-ready professionals
          </p>
            <ul>
              <li>Practical Accounting Skills</li>
              <li>GST, TDS & Taxation Expertise</li>
              <li>Personality Development</li>
              <li>Communication & Corporate Etiquette</li>
              <li>Interview & Resume Preparation</li>
              <li>Career Guidance & Placement Support</li>
            </ul>
          <p>
            Through hands-on training,expert mentorship, and real-world exposure, we empower students to succeed in the accounting and finance industry.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <AboutUsContain showVideo={false} />

      <Footer />
    </div>
  );
};

export default About;