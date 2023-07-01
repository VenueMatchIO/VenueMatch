import React, { useState } from 'react';

const Header = () => {
  const [header, setHeader] = useState(null);

  return (
    <header className='header'>
      <h1 className='site-name'>
        <div className='logoParent'></div>
      </h1>
      <div className='pointer'>
        <button className='bar_button'>SUP</button>
      </div>
    </header>
  );
};

export default Header;
