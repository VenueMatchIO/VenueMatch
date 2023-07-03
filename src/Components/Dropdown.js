import React, { useEffect, useState } from 'react';
import Players from './Players.js';

const Dropdown = () => {
  // const [playersClick, setPlayersClick] = useState(false);
  // const [instrumentsClick, setInstrumentsClick] = useState(false);
  // const [gigsClick, setGigsClick] = useState(false);
  const [clickItem, setClickItem] = useState('');
  useEffect(() => {}, []);

  const getSpecificsOnClick = (val) => () => {
    setClickItem(val);
  };
  return (
    <div>
      <ul>
        {/* <li onclick={() => getSpecificsOnClick('players')}>Players</li>
        <li onclick={() => getSpecificsOnClick('instruments')}>Instruments</li>
        <li onclick={() => getSpecificsOnClick('gigs')}>Gigs</li> */}
        <li onClick={getSpecificsOnClick('players')}>Players</li>
        <li onClick={getSpecificsOnClick('instruments')}>Instruments</li>
        <li onClick={getSpecificsOnClick('gigs')}>Gigs</li>
      </ul>
      {clickItem === 'players' && <Players />}
    </div>
  );
};
export default Dropdown;
