import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        Jayempire.
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Porfolio</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
