import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socials } from '../Constant';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="link_icons">
        {
            socials.map((social) => {
                return (
                    <a key={social.id} href={social.url} className="icon" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={social.icon} size='2x' />
                    </a>
                )
            })
        }
        </div>
      <p>© 2023 Jayempire.</p>
    </div>
  )
}

export default Footer
