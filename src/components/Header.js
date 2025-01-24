import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
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
