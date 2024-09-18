import React, { useState } from 'react';
import './Navbar.css';
import { links } from '../Constant';
import { NavLink } from 'react-router-dom';
import menu_Open from '../../../src/assets/light_menu.png';
import menu_Close from '../../../src/assets/light_close_menu.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
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
        <div className={isOpen ? "small-screen-menu open" : "small-screen-menu"}>
          <div onClick={closeMenu} className='link-container'>
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
      </div>
      <div className="menu-icons">
        <img onClick={toggleMenu} src={isOpen ? menu_Close : menu_Open} alt="" />
      </div>
    </div>
  )
}

export default Navbar
