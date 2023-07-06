import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchInstruments} from '../../../actions/actions';
import axios from 'axios';

function InstrumentModal({closeModal}) {
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  function showError() {
    setError('You need to fill in the name');
    setTimeout(() => {
      setError('');
    }, 3000);
  }

  async function addInstrument(e) {
    e.preventDefault();
    const name = e.target.name.value;
    if (!name) return showError();
    const body = {
      name,
    };
    try {
      const response = await axios.post('/api/instrument', body);
      if (response.status === 201) {
        dispatch(fetchInstruments());
        closeModal();
      }
    } catch (error) {}
  }
  return (
    <div className='modal-container'>
      <div className='modal-header'>
        <h1>Add Instrument</h1>
        <button onClick={closeModal}>X</button>
      </div>
      <div className='modal-inputs'>
        <form className='inst-form-modal' onSubmit={addInstrument}>
          <input placeholder='Instrument name' name='name' />
          <button>Add Instrument</button>
        </form>
        {error && error}
      </div>
    </div>
  );
}

export default InstrumentModal;
