import React, {useEffect, useState} from 'react';
import Dropdown from './Dropdown';

const Header = () => {
  const [wasClicked, setWasClicked] = useState(false);

  const getInfoClicker = () => {
    setWasClicked(true);
  };
  return (
    <header>
      <h1>
        <div>Test</div>
      </h1>
      <div>
        <button onClick={getInfoClicker} className={'bar_button'}>
          Get Info
        </button>
        {wasClicked && <Dropdown />}
      </div>
    </header>
  );
};

export default Header;
