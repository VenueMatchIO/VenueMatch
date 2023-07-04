import React from 'react';

function ControlContainer() {
  return (
    <div className='control-container'>
      <div className='control-btn-container'>
        <button className='control-btn'>Add Venue</button>
        <button className='control-btn'>Add Instrument</button>
      </div>
      <div className='control-btn-container'>
        <button className='control-btn'>Add Player</button>
        <button className='control-btn'>Schedule</button>
      </div>
    </div>
  );
}

export default ControlContainer;
