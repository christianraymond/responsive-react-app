import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>   
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SWIPEiX
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>chrisitangubana©2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
