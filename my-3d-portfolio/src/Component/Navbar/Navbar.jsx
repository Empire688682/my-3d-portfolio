import React from 'react';
import './Navbar.css';
import { links } from '../Constant';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        Jayempire.
      </div>
      <div className="menu">
        <ul>
        {
            links.map((link) => {
              return (
                <NavLink key={link.id} to={link.path} className="link">
                  {link.title}
                </NavLink>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
