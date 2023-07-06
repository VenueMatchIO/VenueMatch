import React from 'react';

function VenuesPage(props) {
  // TODO: need to map venue state to props
  return (
    <div className='venue-page'>
      <h1 className='venue-header'>Venues</h1>
      <div className='venue-creator'>
        <h2 className='add-venue-header'>Add a new Venue</h2>
        <div className='venue-name'>
          <input placeholder='venue name goes here' />
        </div>
        <div className='venue-location'>
          <input placeholder='venue location goes here' />
        </div>
        <div className='venue-create-btn-div'>
          <button>Create</button>
        </div>
      </div>
      <div className='venue-page-body'>
        <div className='venue-page-body-header'>
          <h2>Name</h2>
          <div className=''>
            <h2>Location</h2>
          </div>
        </div>
        <div>
          <ul>
            <li>Venue</li>
            <li>Names</li>
            <li>Would</li>
            <li>Go</li>
            <li>Here</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VenuesPage;
