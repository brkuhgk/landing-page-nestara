import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">nestara.net - Revolutionizing Rental Relationships</div>
        <h1>Trust Through Transparency</h1>
        <p>Build better rental relationships with our comprehensive rating system for both tenants and property owners.</p>
        <div className="cta-buttons">
          <a href="#waitlist" className="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Join Early Access
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;