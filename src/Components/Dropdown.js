import React, { useEffect, useState } from 'react';

const Dropdown = () => {
  const [dropdown, setDropDown] = useState(false);

  useEffect(() => {}, []);

  const getSpecificsOnClick = () => {
    setDropDown = true;
  };
  return (
    <div>
      <ul>
        <li onclick={getSpecificsOnClick}>Players</li>
        <li onclick={getSpecificsOnClick}>Instruments</li>
        <li onclick={getSpecificsOnClick}>Gigs</li>
      </ul>
    </div>
  );
};

export default Dropdown;
