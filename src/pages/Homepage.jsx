import React from 'react';
import HomePageLogo from '../assets/images/homepagelogo.webp';
import Login from '../components/Login';
import '../styles/Homepage.scss';

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="image-container">
        <h2>Book My Cab</h2>
        <p>Your Hassle-Free Office Travel Solution!</p>
        <img
          src={HomePageLogo}
          alt="Home page logo"
          className="homepage-logo"
        />
      </div>
      <Login />
    </div>
  );
}

export default Homepage;
