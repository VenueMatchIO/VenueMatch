import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuid} from 'uuid';
import {fetchGigs} from '../../../actions/actions';

function AddGigModal({closeModal}) {
  const [error, setError] = useState(false);
  const venues = useSelector((state) => state.venues);
  const dispatch = useDispatch();

  async function addGig(e) {
    e.preventDefault();
    if (!e.target.name.value || !e.target.date.value) {
      return showError();
    }
    const body = {
      name: e.target.name.value,
      venue: e.target.venue.value,
      date: e.target.date.value,
      instruments: [],
    };
    const response = await axios.post('/api/gig', body);

    if (response.status === 201) {
      dispatch(fetchGigs());
      closeModal();
    }
  }

  function showError() {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  }
  const options = venues.map((venue) => {
    return (
      <option key={uuid()} value={venue.id}>
        {venue.name}
      </option>
    );
  });
  return (
    <div className='modal-container'>
      <div className='modal-header'>
        <h1>Add Gig</h1>
        <button onClick={closeModal}>X</button>
      </div>

      <form className='modal-form' onSubmit={addGig}>
        <div className='modal-inputs'>
          <input className='modal-input' placeholder='Gig Name' name='name' />
          <input
            className='modal-input'
            placeholder='Date'
            type='date'
            name='date'
          />
        </div>
        <div className='add-gig-venue-select'>
          <p>Venue: </p>
          <select className='add-gig-select-box' name='venue'>
            {options}
          </select>
        </div>
        <button>Add Gig</button>
      </form>
      {error && 'You need to fill in all the fields'}
    </div>
  );
}

export default AddGigModal;
