import React, {useState} from 'react';
import LogoSVG from './LogoSVG';
import {useNavigate} from 'react-router';

import variables from '../variables.module.scss';
const {tertiaryColor} = variables;

function Navbar() {
  const [activeLink, setActiveLink] = useState('dashboard');
  const navigate = useNavigate();

  function linkCheck(link) {
    if (link === activeLink) return 'active';
  }

  function handleClick(link, path) {
    setActiveLink(link);
    navigate(path);
  }

  return (
    <div className='navbar-container'>
      <div className='navbar-header'>
        <LogoSVG
          width={250}
          height={100}
          fill={tertiaryColor}
          className='navbar-logo'
          onClick={() => handleClick('dashboard', '/')}
        />
        <h3 className='navbar-greeting'>Hello, Manager</h3>
      </div>
      <div className='navbar-routes'>
        <button
          className={linkCheck('dashboard')}
          onClick={() => handleClick('dashboard', '/')}
        >
          Dashboard
        </button>
        <button
          className={linkCheck('venues')}
          onClick={() => handleClick('venues', '/venues')}
        >
          Venues
        </button>
        <button
          className={linkCheck('gigs')}
          onClick={() => handleClick('gigs', '/gigs')}
        >
          Gigs
        </button>
        <button
          className={linkCheck('players')}
          onClick={() => handleClick('players', '/players')}
        >
          Players
        </button>
        <button
          className={linkCheck('instruments')}
          onClick={() => handleClick('instruments', '/instruments')}
        >
          Instruments
        </button>
      </div>
    </div>
  );
}

export default Navbar;
