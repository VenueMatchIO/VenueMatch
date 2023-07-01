import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';

const Header = () => {
  const [wasClicked, setWasClicked] = useState(false);

  const getInfoClicker = () => {
    // setWasClicked(true);
    console.log('Hello');
  };
  return (
    <header className='header'>
      <h1 className='site-name'>
        <div className='logoParent'></div>
      </h1>
      <div className='pointer'>
        <button onClick={getInfoClicker} className={'bar_button'}>
          Get Info
          {wasClicked && <Dropdown />}
        </button>
        <button onClick={getInfoClicker}>hey</button>
      </div>
    </header>
  );
};

export default Header;
