import React, { useEffect, useState } from 'react';

const Header = () => {
  const [wasClicked, setWasClicked] = useState(false);

  useEffect(() => {}, []);

  const getInfoClicker = () => {
    setWasClicked(true);
  };

  return (
    <header className='header'>
      <h1 className='site-name'>
        <div className='logoParent'></div>
      </h1>
      <div className='pointer'>
        <button onClick={getInfoClicker} className='bar_button'>
          Get Info
        </button>
      </div>
    </header>
  );
};

export default Header;
