import React, { useState } from 'react';
import './CallToAction.css';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Google Apps Script deployed URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwDhOfMS4fmsYbVuUIlV2H5WaBBjC2hdGR0YvKvuJPzDBesUpK3Nsr1OLiL3eiK88IJ/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Send data to Google Apps Script
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors' // This is required for Google Apps Script
      });
      
      // Since we're using no-cors, we won't get a proper response
      // So we'll just assume success if no error is thrown
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error submitting email:', error);
      setErrorMessage('Error saving your email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cta-section" id="waitlist">
      <div className="container">
        <h2>Ready to Transform Your Rental Experience?</h2>
        <p>Join our early access list</p>
        <div className="waitlist">
          <h3>Join the Waiting List</h3>
          <p>Be the first to access our platform when we launch.</p>
          
          {isSubmitted ? (
            <div className="success-message">
              <p>Thank you for joining our waitlist! We'll keep you updated.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="your@email.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Get Early Access'}
              </button>
            </form>
          )}
          
          {errorMessage && (
            <div className="error-message">
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;