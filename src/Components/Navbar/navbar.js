import React from 'react';
import './navbar.css';

export const Navbar = ({ handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">MY LOGO</div>
      <ul className="nav-list">
        <li className="nav-item"><a href="/" className="link active">HOME</a></li>
        <li className="nav-item"><a href="#" className="link">ABOUT</a></li>
        <li className="nav-item dropdown">
          <a href="#" className="link dropdown-toggle">ACCOUNT</a>
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">DETAILS</a>
            <button onClick={handleLogout} className="dropdown-item">LOGOUT</button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

