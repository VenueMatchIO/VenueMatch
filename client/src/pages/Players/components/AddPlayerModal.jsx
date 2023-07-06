import axios from 'axios';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPlayers} from '../../../actions/actions';
import {v4 as uuid} from 'uuid';

function AddPlayerModal({closeModal}) {
  const [error, setError] = useState('');
  const [checkedIds, setCheckedIds] = useState([]);

  // let checkedIds = [];

  const players = useSelector((state) => state.players);
  const instruments = useSelector((state) => state.instruments);
  const dispatch = useDispatch();

  const options = instruments.map((instrument) => {
    const isChecked = checkedIds.includes(instrument.id.toString());
    return (
      <div key={uuid()} className='add-player-inst-select'>
        <label htmlFor={instrument.name}>{instrument.name}</label>
        <input
          onChange={handleChange}
          type='checkbox'
          value={instrument.id}
          id={instrument.name}
          checked={isChecked}
        />
      </div>
    );
  });

  function handleChange(e) {
    const {value, checked} = e.target;
    setCheckedIds((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((id) => id !== value);
      }
    });
  }

  function showError() {
    setError('You need to fill in a name');
    setTimeout(() => {
      setError('');
    }, 3000);
  }

  async function addPlayer(e) {
    e.preventDefault();
    if (!e.target.name.value) return showError();

    const body = {
      name: e.target.name.value,
      instruments: checkedIds,
    };
    try {
      const response = await axios.post(`/api/player`, body);
      if (response.status === 201) {
        dispatch(fetchPlayers());
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='modal-container'>
      <div className='modal-header'>
        <h1>Add Player</h1>
        <button onClick={closeModal}>X</button>
      </div>
      <div className='modal-inputs'>
        <form onSubmit={addPlayer}>
          <input placeholder='Player Name' name='name' />

          <p>Instruments: </p>
          <div className='add-player-inst-select-container'>{options}</div>
          <button>Add Player</button>
        </form>
        {error && error}
      </div>
    </div>
  );
}

export default AddPlayerModal;
