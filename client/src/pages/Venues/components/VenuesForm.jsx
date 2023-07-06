import axios from 'axios';
import React from 'react';
import {useDispatch} from 'react-redux';
import {fetchVenues} from '../../../actions/actions';

function VenuesForm() {
  const dispatch = useDispatch();
  async function createVenue(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const location = e.target.location.value;

    const body = {
      name,
      location,
    };

    try {
      const response = await axios.post('/api/venue', body);
      if (response.status === 201) {
        e.target.name.value = '';
        e.target.location.value = '';
        dispatch(fetchVenues());
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='venue-form-container'>
      <form className='venue-form' onSubmit={createVenue}>
        <h2 className='add-venue-header'>Add a new Venue</h2>
        <input name='name' placeholder='Venue name' />
        <input name='location' placeholder='Location' />
        <button>Create</button>
      </form>
    </div>
  );
}

export default VenuesForm;
