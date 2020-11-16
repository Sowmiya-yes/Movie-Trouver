import React from 'react';
import '../styles/Navigation-Styles.css';

const Navigation = ({ searchCLickHandle }) => (
  <nav className="nav-bar">
    <ul>
      <li>
        <a href="/results" className='nav-icon'><i className="fas fa-heart"></i></a>
      </li>
      <li>
        <a href="/" className='nav-icon'><i className="fas fa-home"></i></a>
      </li>
      <li>
        <a href="/search" className='nav-icon'><i className="fas fa-search" onClick={searchCLickHandle}></i></a>
      </li>
    </ul>
  </nav>
)

export default Navigation;