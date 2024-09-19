import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles'
import { navLinks } from '../constants/constant';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-cnter max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => { setActive(''); window.scrollTo(0, 0) }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white gap-1 text-[18px] flex font-normal cursor-pointer'>Juwon <span className='sm:block hidden font-bold'> | JayEmpire</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => { setActive(link.title) }}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={`${toggle ? close : menu}`} alt="menu" className='w-[28px] object-contain cursor-pointer absolute' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 w-[100%] absolute top-20 left-0 black-gradient p-6`}>
            <ul className='list-none flex flex-col gap-4 justify-end pl-[10px]'>
              {
                navLinks.map((link) => (
                  <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => {{setActive(link.title); setToggle(!toggle)}}}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar