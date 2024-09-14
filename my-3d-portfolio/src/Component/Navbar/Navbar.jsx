import React from 'react';
import './Navbar.css';
import { links } from '../Constant';
import { NavLink } from 'react-router-dom';
import open_Menu from '../../assets/light_menu.png';
import close_Menu from '../../assets/light_close_menu.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
      ⭐Jayempire.
      </div>
      <div className="menu">
        <div className='big-screen-menu'>
        {
            links.map((link) => {
              return (
                <NavLink key={link.id} to={link.path} className="link">
                  {link.title}
                </NavLink>
              )
            })
          }
        </div>
        <div className='small-screen-menu'>
        {
            links.map((link) => {
              return (
                <NavLink key={link.id} to={link.path} className="link">
                  {link.title}
                </NavLink>
              )
            })
          }
        </div>
      </div>
      <div className="menu-icons">
        <img src="" alt="" srcset="" />
      </div>
    </div>
  )
}

export default Navbar
