import React from 'react';
import './RatingSystem.css';

const RatingSystem = () => {
  const categories = [
    {
      title: 'Cleanliness',
      description: 'Property maintenance and cleanliness standards'
    },
    {
      title: 'Payment History',
      description: 'Consistency and timeliness of payments'
    },
    {
      title: 'Communication',
      description: 'Responsiveness and clarity in communications'
    }
  ];

  return (
    <section id="ratings">
      <div className="container">
        <div className="section-header">
          <h2>Comprehensive Rating System</h2>
          <p>Our detailed rating categories ensure fair evaluations</p>
        </div>
        <div className="rating-categories">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingSystem;