import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturesSlider.css';

const FeaturesSlider = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      image: '/health.jpg',
      title: 'Meal Planning',
      description: 'Create personalized meal plans'
    },
    {
      image: '/health.jpg',
      title: 'Exercise Tracking',
      description: 'Log and monitor your workouts'
    },
    {
      image: '/health.jpg',
      title: 'Progress Charts',
      description: 'Visualize your health journey'
    },
    {
      image: '/health.jpg',
      title: 'Community Support',
      description: 'Connect with others'
    },
    {
      image: '/health.jpg',
      title: 'Expert Advice',
      description: 'Get tips from professionals'
    },
    {
      image: '/health.jpg',
      title: 'Goal Setting',
      description: 'Set and achieve your targets'
    },
    {
      image: '/health.jpg',
      title: 'Water Intake',
      description: 'Track your daily water consumption'
    },
    {
      image: '/health.jpg',
      title: 'Sleep Analysis',
      description: 'Monitor and improve your sleep patterns'
    }
  ];

  return (
    <section className="features-slider">
      <h2 className="features-title">What You Can Do Using Our App</h2>
      
      <div className="slider-container">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="slide"
            onClick={() => navigate('/signup')}
          >
            <div className="image-container">
              <img src={feature.image} alt={feature.title} />
            </div>
            <div className="slide-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="signup-button"
        onClick={() => navigate('/signup')}
      >
        Sign Up
      </button>
    </section>
  );
};

export default FeaturesSlider;
