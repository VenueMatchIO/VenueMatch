import React from 'react';
import LogoSVG from './LogoSVG';

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-header'>
        <LogoSVG
          width={150}
          height={50}
          fill='#f5f3e8'
          className='navbar-logo'
        />
        <h3 className='navbar-greeting'>Hello, Manager</h3>
      </div>
      <div className='navbar-routes'>
        <button>Venues</button>
        <button>Gigs</button>
        <button>Players</button>
        <button>Instruments</button>
      </div>
    </div>
  );
}

export default Navbar;
