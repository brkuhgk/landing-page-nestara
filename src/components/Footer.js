import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 4L21 9V20H3V9Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Nestara</span>
          </div>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="mailto:contact@nestara.net">Contact Us</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <p>Have questions? Email us at <a href="mailto:contact@nestara.net">contact@nestara.net</a></p>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Nestara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;