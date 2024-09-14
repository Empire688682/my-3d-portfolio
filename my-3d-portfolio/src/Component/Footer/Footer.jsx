import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="link_icons">
        <a href="https://twitter.com">
        <FontAwesomeIcon icon={faTwitter} className='icon' size="2x" />
      </a>
      <a href="https://github.com">
        <FontAwesomeIcon icon={faGithub} className='icon' size="2x" />
      </a>
      <a href="https://github.com">
        <FontAwesomeIcon icon={faLinkedin} className='icon' size="2x" />
      </a>
      <a href="https://github.com">
        <FontAwesomeIcon icon={faInstagram} className='icon' size="2x" />
      </a>
      <a href="https://github.com">
        <FontAwesomeIcon icon={faFacebook} className='icon' size="2x" />
      </a>
      <a href="https://github.com">
        <FontAwesomeIcon icon={faYoutube} className='icon' size="2x" />
      </a>
        </div>
      <p>© 2023 Jayempire.</p>
    </div>
  )
}

export default Footer
