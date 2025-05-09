import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 4L21 9V20H3V9Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Nestara</span>
        </div>
        <nav>
          <ul>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#ratings">Ratings</a></li>
            <li><a href="/#waitlist">Join Waitlist</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;