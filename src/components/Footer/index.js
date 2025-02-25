import './index.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => (
    <>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p className="footer-quote">Let's Connect and Collaborate!</p>
                    <p>
                    <FaEnvelope className="contact-icon"/> Email: jagadeesh.1724@gmail.com
                    </p>
                    <p>
                    <FaPhone className="contact-icon"/> Contact: 8125008885
                    </p>
                </div>
                <div className="footer-right">
                    <p className="footer-quote">Developed & Engineered with React.js </p>
                    <div className="footer-links">
                        <a href="https://github.com/Jagadeesh-Kmr" target="_blank" rel="noopener noreferrer" className="footer-icon">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/jagadeesh-kumar-553788213/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </div>
                <p className="rights-p">&copy; 2025 Jagadeesh Kumar. All Rights Reserved.</p>
            </div>
            <p className="rights-p-lg">&copy; 2025 Jagadeesh Kumar. All Rights Reserved.</p>
        </footer>
    </>
);

export default Footer;