import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Health, Simplified</h1>
        <p className="description">
          Take control of your health with our easy-to-use platform. 
          Get started today and experience the difference.
        </p>
        <div className="email-form">
          <input 
            type="email" 
            placeholder="Enter your email address"
          />
          <button className="signup-btn">Sign Up for Free</button>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="/health.jpg" 
          alt="Health illustration"
        />
      </div>
    </section>
  );
};

export default HeroSection;
