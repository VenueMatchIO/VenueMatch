import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';

function FillModal({closeModal, data, gigId}) {
  const [players, setPlayers] = useState([]);

  async function choosePlayer(e) {
    e.preventDefault();
    await axios.patch('/api/gig/player', {
      gigId: gigId,
      playerId: e.target.selection.value,
      instrumentId: data.instrument_id,
    });
    closeModal();
  }
  useEffect(() => {
    async function getPlayerByInstrumentID() {
      const response = await axios.get(`/api/player/${data.instrument_id}`);
      setPlayers(response.data);
    }

    if (players.length === 0) getPlayerByInstrumentID();
  }, []);

  const options = players
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((player) => (
      <option key={uuid()} value={player.player_id}>
        {player.name}
      </option>
    ));
  const playerForm = (
    <form className='fill-modal-form' onSubmit={choosePlayer}>
      <select name='selection'>{options}</select>
      <button className='fill-modal-btn'>Choose player for role</button>
    </form>
  );

  return (
    <div className='modal-container'>
      <div className='modal-header'>
        <h1>Player for {data.instrument}</h1>
        <button onClick={closeModal}>X</button>
      </div>
      <div className='modal-inputs'>{playerForm}</div>
    </div>
  );
}

export default FillModal;
