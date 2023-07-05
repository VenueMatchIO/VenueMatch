import React from 'react';
import LogoSVG from './LogoSVG';
import {useNavigate} from 'react-router';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='navbar-container'>
      <div className='navbar-header'>
        <LogoSVG
          width={150}
          height={50}
          fill='#f5f3e8'
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
