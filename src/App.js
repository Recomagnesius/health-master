import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/features" element={<div>Features Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/signup" element={<div>Sign Up Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
