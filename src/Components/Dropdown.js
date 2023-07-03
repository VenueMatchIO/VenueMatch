import React, { useEffect, useState } from 'react';

const Dropdown = () => {
  const [playersClick, setPlayersClick] = useState(false);
  const [instrumentsClick, setInstrumentsClick] = useState(false);
  const [gigsClick, setGigsClick] = useState(false);

  useEffect(() => {}, []);

  const getSpecificsOnClick = (val) => () => {
    if (val === 'players') {
      setPlayersClick(true);
    } else if (val === 'instruments') {
      setInstrumentsClick(true);
    } else {
      setGigsClick(true);
    }

    console.log('what up');
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
    </div>
  );
};

export default Dropdown;
