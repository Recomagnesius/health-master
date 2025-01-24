import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/integrations">Integrations</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/docs">Documentation</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="social-media">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
