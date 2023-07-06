import axios from 'axios';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function AddPlayerModal({closeModal}) {
  const [error, setError] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);

  const players = useSelector((state) => state.players);
  const instruments = useSelector((state) => state.instruments);
  const dispatch = useDispatch;

  const options = instruments.map((instrument) => {
    return (
      <div className='add-player-inst-select'>
        <label htmlFor={instrument.name}>{instrument.name}</label>
        <input
          onChange={handleChange}
          type='checkbox'
          value={instrument.id}
          id={instrument.name}
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

  async function addPlayer(e) {
    const body = {
      name: e.target.name.value,
      instruments: checkedIds,
    };
    try {
      const response = axios.post(`/api/player`, body);
      console.log(response.data);
      if (response.status === 201) {
        dispatch();
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
        {error && 'You need to fill in all the fields'}
      </div>
    </div>
  );
}

export default AddPlayerModal;
