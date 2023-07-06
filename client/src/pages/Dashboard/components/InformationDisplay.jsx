import React from 'react';

function InformationDisplay({players, gigs, venues, instruments}) {
  return (
    <div className='information-display-container'>
      <h1>Data</h1>
      <h3>Total Players: {players.length}</h3>
      <h3>Total Venues: {venues.length} </h3>
      <h3>Total Instruments: {instruments.length}</h3>
      <h3>Total Gigs: {gigs.length}</h3>
    </div>
  );
}

export default InformationDisplay;
