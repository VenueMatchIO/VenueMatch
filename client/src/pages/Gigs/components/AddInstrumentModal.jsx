import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';

function AddInstrumentModal({closeModal, gigId}) {
  const [instruments, setInstruments] = useState([]);
  useEffect(() => {
    async function getInstruments() {
      try {
        const response = await axios.get('/api/instruments');
        setInstruments(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getInstruments();
  }, []);

  async function addInstrument(e) {
    e.preventDefault();
    const body = {
      instrumentId: e.target.selection.value,
      gigId: gigId,
    };
    try {
      const response = await axios.post('/api/gig/instrument', body);

      if (response.status === 201) closeModal();
    } catch (error) {
      console.error(error);
    }
  }

  const options = instruments.map((instrument) => {
    return (
      <option key={uuid()} value={instrument.id}>
        {instrument.name}
      </option>
    );
  });

  const instrumentForm = (
    <form className='fill-modal-form' onSubmit={addInstrument}>
      <select name='selection'>{options}</select>
      <button className='fill-modal-btn'>Add Instrument</button>
    </form>
  );
  return (
    <div className='modal-container'>
      <div className='modal-header'>
        <h1>Add Instrument</h1>
        <button onClick={closeModal}>X</button>
      </div>
      <div className='modal-inputs'>{instrumentForm}</div>
    </div>
  );
}

export default AddInstrumentModal;
