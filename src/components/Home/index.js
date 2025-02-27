import { useState, useEffect } from 'react';

import { FaReact } from 'react-icons/fa';
import {IoMail} from 'react-icons/io5';
import {IoMdMenu} from 'react-icons/io';
import {GiCancel} from 'react-icons/gi';

import Footer from '../Footer'

import './index.css';

const images = [
    'https://res.cloudinary.com/dakmxu3dl/image/upload/v1740304241/React_Certification_qiawc0.jpg',
    'https://res.cloudinary.com/dakmxu3dl/image/upload/v1740304257/Dynamic_web_certification_qre1sg.jpg',
    'https://res.cloudinary.com/dakmxu3dl/image/upload/v1740304249/Responsive_Web_Certification_djrsbt.jpg',
    'https://res.cloudinary.com/dakmxu3dl/image/upload/v1740304216/Developer_Foundation_Certification_r8zn8g.jpg',
    'https://res.cloudinary.com/dakmxu3dl/image/upload/v1740304231/Identity_Certification_xhq1dm.jpg',
    'https://res.cloudinary.com/dakmxu3dl/image/upload/v1740304279/sql_certification_wqhveo.jpg',
    'https://res.cloudinary.com/dakmxu3dl/image/upload/v1740304285/static_web_certification_ljrehc.jpg'
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggleNav, setToggleNav] = useState(false)
    const [toggleProfile, setToggleProfile] = useState(true)
    const [activeSection, setActiveSection] = useState("about");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" }); // Remove error message on input
    };
  
    const validateForm = () => {
      let errors = {};
      if (!formData.name.trim()) errors.name = "*Name is required";
      if (!formData.email.trim()) {
        errors.email = "*Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "*Invalid email format";
      }
      if (!formData.message.trim()) errors.message = "*Message is required";
      return errors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      setIsSubmitted(true);
  
      // Submit the form
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, access_key: "90f97961-dc3c-41ea-8613-6e37688cd4fc" }),
      })
        .then((response) => response.json())
        .then(() => {
          alert("Message Sent Successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => alert("Something went wrong. Please try again."));
    };
  



  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "certifications", "projects", "contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClickProfile = () =>(
      setToggleProfile(!toggleProfile)
  );

  const profileClassName = toggleProfile
    ? 'profile-bg-div'
    : 'profile-bg-dis-div'

  const onClickNavMenu = () => {
    setToggleNav(!toggleNav);
    setIsMenuOpen(!isMenuOpen);
  }

  const navMbMenu = toggleNav
    ? 'nav-menu-list-mobile-dis'
    : 'nav-menu-list-mobile'

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const renderProfileView = () => (
      <div className={profileClassName}>
                <GiCancel className="cancel-logo" onClick={onClickProfile} />
                <button type="button" className="profile-btn">
                  <img
                    src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1728112767/Jagadeesh_Image_j9mbse.jpg"
                    alt="profile"
                    className="profile-img-view"
                  />
                </button>
                <p className="img-msg">Frontend Developer</p>
      </div>
    );

    const renderHeader = () => (
       <>
            <nav className="nav-header">
              <div className="nav-content">
      
                <div className="nav-bar-mobile-logo-container">
                    <button type="button" onClick={onClickProfile} className="profile-btn">
                      <img
                        src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1728112767/Jagadeesh_Image_j9mbse.jpg"
                        alt="profile"
                        className="profile-img"
                      />
                    </button>
                  <button
                    className="navbar-mobile-menu-btn"
                    type="button"
                    onClick={onClickNavMenu}
                  >
                    <IoMdMenu className="nav-bar-home-menu" />
                  </button>
                </div>
      
                <div className="nav-bar-large-container">
                    <button type="button"  onClick={onClickProfile} className="profile-btn">
                      <img
                        src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1728112767/Jagadeesh_Image_j9mbse.jpg"
                        alt="profile"
                        className="profile-img"
                      />
                    </button>
      
                  <ul className="nav-menu">
                  <li className="nav-menu-item">
                    <a href="#about" className={activeSection === "about" ? "active" : ""}>
                     About
                    </a>
                  </li>
                  <li className="nav-menu-item">
                    <a href="#certifications" className={activeSection === "certifications" ? "active" : ""}>
                    Certifications
                    </a>
                  </li>
                  <li className="nav-menu-item">
                    <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
                    Projects
                    </a>
                  </li>
                  <li className="nav-menu-item">
                    <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
                    Contact
                    </a>
                  </li>
                  </ul>
                </div>
              </div>
              
              <div className={navMbMenu}>
              <li className="nav-menu-item">
                <a href="#about" onClick={onClickNavMenu} className={activeSection === "about" ? "active" : ""}>
                About
              </a>
              </li>
              <li className="nav-menu-item">
                <a href="#certifications" onClick={onClickNavMenu} className={activeSection === "certifications" ? "active" : ""}>
                Certifications
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="#projects" onClick={onClickNavMenu} className={activeSection === "projects" ? "active" : ""}>
                Projects
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="#contact" onClick={onClickNavMenu} className={activeSection === "contact" ? "active" : ""}>
                Contact
                </a>
              </li>
            </div>
            </nav>
            </>
    );


    const renderHomeAbout = () => (
        <>
                <div className="about-main-div">
                    <div className="about-me-div">
                    <div>
                    <h1 className="name-h1">Hi, I am <span className="name">Jagadeesh Kumar</span> </h1>
                    <div className="mb-about-me-div">
                    <p className="mb-about-me">ABOUT ME</p>
                    <p className="about-p"> 
                    A passionate <strong className="highlight">Frontend Developer</strong> with expertise in 
                    <strong className="highlight">React.js</strong>, <strong className="highlight">JavaScript</strong>, HTML, and CSS. With a keen eye for design and a
                    <strong className="highlight">problem-solving</strong> mindset. 
                    From developing sleek UI components to integrating REST APIs, I focus on delivering high-quality, optimized, and accessible web solutions.</p>
                    </div>
                    <div className="resume-div">
                    <a href="https://drive.google.com/file/d/1sXVdbv7Oby_Ri3nkRrZAB426AMm9Tdlo/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link">
                    Resume
                    </a>
                    <a href="https://github.com/Jagadeesh-Kmr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resume-link">
                    Git Hub
                    </a>
                    <a href="https://www.linkedin.com/in/jagadeesh-kumar-553788213/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resume-link">
                    LinkedIn
                    </a>
                    </div>
                   </div>
                    <img 
                    src="https://esl5073call.wordpress.com/wp-content/uploads/2019/04/peachpuff-brush-stroke-photography-logo.png"
                    alt="about"
                    className="about-img" />
                    </div> 
                </div>
        </>
    );

    const renderCertificationsNote = () => (
      <div className="cert-note-div">
      <p>I have earned multiple certifications in Frontend Development, Web Design, 
        and Database Management, demonstrating my expertise in React.js, JavaScript,
        HTML, CSS, and SQL. These certifications validate my ability to build responsive, scalable,
        and optimized web applications while ensuring accessibility and performance.</p>
      </div>
    );

    const renderCertifications = () => (
      <>
        <div className="slider-container">
          <button className="slider-arrow left" onClick={handlePrev}>&#9665;</button>
          <img src={images[currentIndex]} alt="Certification" className="slider-image" />
          <button className="slider-arrow right" onClick={handleNext}>&#9655;</button>            
        </div>
        </>
    );

    const renderProjects = () => (
        <>
        <div className="prj-main-div">
            <h1 className="prj-h1">Frontend Projects</h1>
            <div className="prj-detail-div">
            <div className="prj-item-div">
                <FaReact className="react-icon" />
                <p className="prj-title">Online Doctor App</p>
                <a href="https://github.com/Jagadeesh-Kmr/OnlineDoctorBookingApp" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link">
                    Project 1
                </a>
            </div>
            <div className="prj-item-div">
                <FaReact className="react-icon" />
                <p className="prj-title">Wordle Clone App</p>
                <a href="https://github.com/Jagadeesh-Kmr/Wordle-Clone-Game" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link">
                    Project 2
                </a>
            </div>
           
            <div className="prj-item-div">
                <FaReact className="react-icon" />
                <p className="prj-title">Jobby App</p>
                <a href="https://github.com/Jagadeesh-Kmr/jobbyApp" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link">
                    Project 3
                </a>
            </div>
            <div className="prj-item-div">
                <FaReact className="react-icon" />
                <p className="prj-title">Online Shoping App</p>
                <a href="https://github.com/Jagadeesh-Kmr/online-shopping" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link">
                    Project 4
                </a>
            </div>
            </div>
        </div>
        </>
    );

    const renderContact = () => (
        <>
        <div className="contact-main-div">
      <h1 className="contact-h">
        <IoMail className="mail-logo" /> Message me anytime!
      </h1>
      <form onSubmit={handleSubmit} className="person-details-bg-div">
        <div className="email-div">
          <div>
          <input
            type="text"
            className="p-d-input"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-msg">{errors.name}</p>}
        </div>
         
          <div>
          <input
            type="text"
            name="email"
            className="p-d-input"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}
          </div>
          
        </div>

        <div className="msq-input-div">
          <textarea
            type="text"
            name="message"
            className="p-d-input msg"
            placeholder="Message...."
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error-msg">{errors.message}</p>}
        </div>

        <div className="contact-btn-div">
          <button type="submit" className="contact-btn">
            Contact
          </button>
        </div>
      </form>
    </div>
    </>
  );

    return (
        <>
            {renderProfileView()}
            {renderHeader()}
            <div className={`home-main-div ${isMenuOpen ? "blur" : ""}`}  id="about">
            {renderHomeAbout()}
            <h1 className="cer-h1">Certifications</h1>
            <div className="cert-div" id="certifications">
            {renderCertificationsNote()}
            {renderCertifications()}
            </div>
            <div  id="projects">
            {renderProjects()}
            </div>
            <div id="contact">
            {renderContact()}
            </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;