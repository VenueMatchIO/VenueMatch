import React from 'react';

function InformationDisplay(props) {
  return (
    <div className='information-display-container'>
      <h1>Data</h1>
      <h3>Total Players: {props.data.players.length}</h3>
      <h3>Total Venues: {props.data.venues.length} </h3>
      <h3>Total Instruments: {props.data.instruments.length}</h3>
    </div>
  );
}

export default InformationDisplay;
