import {faArrowDown, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';

function Data({title}) {
  const [display, setDisplay] = useState(false);
  const rightArrow = <FontAwesomeIcon icon={faArrowRight} />;
  const downArrow = <FontAwesomeIcon icon={faArrowDown} />;

  function handleClick() {
    setDisplay(!display);
  }

  return (
    <button className='data-button' onClick={handleClick}>
      <p className='data-btn-label'>{title}</p>
      <div className='data-btn-icon'>{display ? downArrow : rightArrow}</div>
    </button>
  );
}

export default Data;
