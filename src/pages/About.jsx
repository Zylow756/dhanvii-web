import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from '../assets/css/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Nav />

      {/* About Section */}
      <section className={styles.section}>
        <h1>About Us | हमारे बारे में</h1>

        <h3>Legacy of Trust, Excellence in Finance</h3>

        <p>
          Established in <strong>2017</strong>, <strong>Dhanvii Accounting System</strong> is a  <strong>professional accounting institute</strong> committed to delivering <strong>high-quality finance and accounting education.</strong>With a <strong>legacy in professional accounting since 1996,</strong> with expertise in <strong>practical, industry-oriented training.</strong>
          <br />
        </p>

        <p>
          We are <strong>ISO 9001:2015 certified</strong> and accredited by <strong>International Accreditation Forum</strong> [IAF], ensuring that our courses meet <strong>global quality standards.</strong>Our program are recognized for excellence in <strong>practical knowledge,professional skills, & career readiness</strong>
          <br />
          <span>
            We are registered with <strong>MSME & NCS,</strong> offering professional courses and skill development programs to empower students and working professionals. 
          </span>
        </p>
      </section>

      {/* Vision */}
      <section className={styles.section}>
        <h2>Our Vision | हमारा दृष्टिकोण</h2>

        <p>
          Our vision is to equip students and professionals with in-demand skills, fostering continuous improvement <strong>& contributing to the</strong> overall development of industries.
          <br />
          <span>
            We aim to nurture students abilities in:
          </span>
        </p>

        <ul>
          <li>
            <strong>Practical Technical Knowledge | <span>व्यावहारिक तकनीकी ज्ञान</span></strong>
          </li>
          <li>
            <strong>Personality Development | <span>व्यक्तित्व विकास</span></strong>
          </li>
          <li>
            <strong>Communication Skills | <span>संचार कौशल</span></strong>
          </li>
          <li>
            <strong>Professional Skills | <span>पेशेवर कौशल</span></strong>
          </li>
        </ul>
<p>Through <strong>hands-on practical training & real-world exposure,</strong>we ensure students gain experience that makes them <strong>industry-ready.</strong> Our program are designed to develop both <strong>knowledge & confidence,</strong> helping students excel in their careers.</p>
      </section>

      {/* Why Choose Us */}
      <section className={styles.section}>
        <h2>Why Students Choose Us | छात्र हमें क्यों चुनते हैं</h2>

        <h2>Our Key Advantages | हमारी खासियतें</h2>

        <ul>
          <li>
            <strong>30+ Years of Expertise | 30+ वर्षों का अनुभव</strong>
            <p>Decades of excellence in <strong>accounting,finannce & skill development.</strong></p>
          </li>
          <li>
            <strong>Global Standards | वैश्विक मानक</strong>
            <p>Courses are <strong>ISO & IAF certified,</strong>ensuring international quality standards.</p>
          </li>
          <li>
            <strong>Comprehensive Courses Offerings | व्यापक पाठ्यक्रम</strong>
            <p>From <strong>Bookkeeping to GST, Income Tax, TDS, H/R ,Payroll Management,</strong> we cover all essential accounting & finance topics.</p>
          </li>
          <li>
            <strong>Finance & Auditing | वित्त और ऑडिटिंग</strong>
            <p>Guidance on <strong>compliance, auditing, & professional financial practices.</strong></p>
          </li>
          <li>
            <strong>Business & Startup Support |  स्टार्टअप सहायता </strong>
            <p>Assistance for <strong>Startup registration,MSME registration, </strong>& legal formalities.</p>
          </li>
          <li>
            <strong>Career Support | करियर सहायता</strong>
            <p>Help with <strong>resume building, interview guidance, and job placement,</strong>ensuring students are <strong>job-ready</strong></p>
          </li>
          <li>
            <strong>100% Practical Training  | 100% व्यावहारिक प्रशिक्षण</strong>
            <p>We provide <strong>hands-on, real-world industry training</strong> bridging the gap between theory and practice</p>
          </li>
          <li>
            <strong>Industry Connections | उद्योग कनेक्शन</strong>
            <p>Collaborations with<strong> top companies</strong> provide students with <strong>internship and placement opportunities</strong></p>
          </li>
          <li>
            <strong>Personalized Mentorship | व्यक्तिगत मार्गदर्शन</strong>
            <p>Dedicated mentors guide students in <strong>career growth, skill enhancement, and professional success</strong></p>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default About;