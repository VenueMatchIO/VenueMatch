import React from 'react';
import LogoSVG from './LogoSVG';
import {useNavigate} from 'react-router';

import variables from '../variables.module.scss';
const {tertiaryColor} = variables;

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='navbar-container'>
      <div className='navbar-header'>
        <LogoSVG
          width={250}
          height={100}
          fill={tertiaryColor}
          className='navbar-logo'
          onClick={() => navigate('/')}
        />
        <h3 className='navbar-greeting'>Hello, Manager</h3>
      </div>
      <div className='navbar-routes'>
        <button onClick={() => navigate('/')}>Dashboard</button>
        <button onClick={() => navigate('/venues')}>Venues</button>
        <button onClick={() => navigate('/gigs')}>Gigs</button>
        <button onClick={() => navigate('/players')}>Players</button>
        <button onClick={() => navigate('/instruments')}>Instruments</button>
      </div>
    </div>
  );
}

export default Navbar;
