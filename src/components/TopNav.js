import React from 'react';
import './TopNav.css';

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/search">Provider Search</a></li>
      </ul>
    </div>
  );
};

export default TopNav;