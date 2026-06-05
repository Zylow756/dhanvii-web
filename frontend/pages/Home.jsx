import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import StudentReview from '../components/StudentReview/StudentReview';
import styles from '../assets/css/Home.module.css';
import RandomAd from '../components/RandomAd/RandomAd';
import WelcomeModal from "../components/WelcomeModal/WelcomeModal";
import FloatingShare from '../components/FloatingShare/FloatingShare';
import AboutUsContain from '../components/AboutUsContain/AboutUsContain';
import StudentPlacementCard from '../components/StudentPlacementCard/StudentPlacementCard';
import { useState } from "react";
import EnquiryPopup from "../components/EnquiryPopup/EnquiryPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useStudents } from "../hooks/useStudents";
import course1 from "../assets/images/courses1.jpg";
import course2 from "../assets/images/courses2.png";
import course3 from "../assets/images/courses3.jpg";
import course4 from "../assets/images/courses4.jpg";

const API = import.meta.env.VITE_API_URL;

const Home = () => {
  const students = useStudents();
  const [showEnquiry, setShowEnquiry] = useState(false);

  const courses = [
    {
      title: "Tally Prime",
      duration: "3 Months",
      image: course1,
      description: "."
    },
    {
      title: "Beginner Accounting",
      duration: "6 Months",
      image: course2,
      description: "Banking & Accounting in MS Excel."
    },
    {
      title: "Achiever's Accounting",
      duration: "8 Months",
      image: course3,
      description: "Banking & Accounting in MS Excel."
    },
    {
      title: "Advance Accounting",
      duration: "12 Months",
      image: course4,
      description: "Banking,MS Word & Excel & Online Application & Forms."
    },
  ];

  return (
    <div className={styles.root}>
      <Nav />
      <header className={styles.boxContain}>
        <h1>Best Accounting Institute in Kota</h1>
      </header>
      <WelcomeModal />
      <RandomAd onEnquiryClick={() => setShowEnquiry(true)} />
      <AboutUsContain showVideo={true} />
      {/* cources list */}
      <section className={styles.section}>
        <h2 className={styles.title}>Build a Successful Career with Our Professional Coursess</h2>

        <div className={styles.grid}>
          {courses.map((course, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={course.image} alt={course.title} />
                <span className={styles.duration}>
                  ⏱ {course.duration}
                </span>
              </div>

              <div className={styles.content}>
                <h3>{course.title}</h3>

                <p>{course.description}</p>

                <ul>
                  <li>Flexible Timings</li>
                  <li>Expert Trainers</li>
                </ul>

                <div className={styles.buttons}>
                  <button className={styles.outlineBtn} onClick={() => window.location.href = "/courses"}>
                    Know More
                  </button>

                  {/*<button className={styles.fillBtn}>
                  Download Brochure
                </button>*/}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.enquiryForm}>
        <div className={styles.premiumCard}>
          <h2>Who Should Join?</h2>
          <ul>
            <li>12th Commerce & Non-Commerce Students</li>
            <li>Graduation: Arts, Commerce,Science</li>
            <li>Job Seekers in Accounting & Finance</li>
            <li>Business Owners managing their accounts</li>
            <li>Anyone wanting to master Tally & GST</li>
            <li>Technical: ITI, B.Tech, others</li>
          </ul>
        </div>
        <div className={styles.premiumCard}>
          <h2>Job Opportunities</h2>
          <ul>
            <li>Accounting Clerks</li>
            <li>Book Keeping</li>
            <li>Bank Worker</li>
            <li>Payroll Clerks</li>
            <li>Financial Dealers</li>
            <li>Tax Manager</li>
            <li>Godown Operation</li>
            <li>Internal Auditors</li>
            <li>Management Accounting</li>
          </ul>
        </div>
      </div>
      {/* placements slider */}
      <section className={styles.sectionPlacement}>
        <p className={styles.subHeading}>A Decade of Excellence</p>
        <h2 className={styles.heading}>
          Our <span>Students</span>, Now Industry Professionals
        </h2>
        {students.length > 0 && (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={25}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={3000}
            allowTouchMove={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {students.map((student) => (
              <SwiperSlide key={student._id}>
                <StudentPlacementCard
                  student={student}
                apiUrl={API}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
      <StudentReview />
      <FloatingShare />
      <Footer />
      {showEnquiry && (
        <EnquiryPopup
          onClose={() => setShowEnquiry(false)}
        />
      )}
    </div>

  );
};

export default Home;