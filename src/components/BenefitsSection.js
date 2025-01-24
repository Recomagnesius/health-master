import React from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '📊',
      title: 'Track Your Progress',
      description: 'Monitor your health metrics and see your improvements over time'
    },
    {
      icon: '🍎',
      title: 'Personalized Meal Plans',
      description: 'Get customized meal suggestions based on your dietary needs'
    },
    {
      icon: '⚖️',
      title: 'Weight Management',
      description: 'Set and achieve your weight goals with our smart tracking system'
    },
    {
      icon: '🏋️',
      title: 'Exercise Guidance',
      description: 'Access curated workout routines tailored to your fitness level'
    }
  ];

  return (
    <section className="benefits-section">
      <h2 className="benefits-title">Why Use Our App?</h2>
      <div className="benefits-container">
        <div className="benefits-image">
          <img src="/health.jpg" alt="Health benefits illustration" />
        </div>
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <span className="benefit-icon">{benefit.icon}</span>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
