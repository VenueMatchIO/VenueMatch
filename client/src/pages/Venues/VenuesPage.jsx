import React from 'react';
import VenuesForm from './components/VenuesForm';
import {useSelector} from 'react-redux';
import VenuesTable from './components/VenuesTable';

function VenuesPage(props) {
  const venues = useSelector((state) => state.venues);
  function createVenue(e) {
    e.preventDefault();
  }
  return (
    <div className='venue-page'>
      <h1 className='venue-header'>Venues</h1>
      <div className='venue-creator'>
        <VenuesForm />
      </div>
      <VenuesTable venues={venues} />
    </div>
  );
}

export default VenuesPage;
