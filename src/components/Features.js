import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Transparent Ratings',
      description: 'Access detailed ratings for both tenants and property owners'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 8H19C20.1046 8 21 8.89543 21 10V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V10C3 8.89543 3.89543 8 5 8H7M12 15V3M12 3L8 7M12 3L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Time Blocking',
      description: 'Schedule and reserve common areas with roommates'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 3C16.5228 3 21 7.47715 21 13C21 18.5228 16.5228 23 11 23C5.47715 23 1 18.5228 1 13C1 7.47715 5.47715 3 11 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 13H17M17 13C17 15.2091 15.2091 17 13 17C10.7909 17 9 15.2091 9 13C9 10.7909 10.7909 9 13 9C15.2091 9 17 10.7909 17 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Dispute Resolution',
      description: 'Resolve conflicts with our built-in reporting system'
    }
  ];

  return (
    <section id="features">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Nestara</h2>
          <p>Discover how our features benefit both tenants and property owners</p>
        </div>
        <div className="features">
          {features.map((feature, index) => (
            <div className="feature" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;