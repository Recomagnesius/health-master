import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <div className="logo">HealthMaster</div>
      </Link>
      <nav>
        <ul className="nav-links">
          <li><a href="/features">Features</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/login">Log In</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
