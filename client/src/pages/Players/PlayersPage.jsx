import React, {useState} from 'react';
import AddPlayerModal from './components/AddPlayerModal';
import {useSelector} from 'react-redux';
import PlayersTable from './components/PlayersTable';

function PlayersPage() {
  const [showModal, setShowModal] = useState(false);

  const players = useSelector((state) => state.players);

  function addPlayer() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
  return (
    <div>
      {showModal && <AddPlayerModal closeModal={closeModal} />}
      <h1>Players</h1>
      <button onClick={addPlayer}>Add Player</button>
      <PlayersTable players={players} />
    </div>
  );
}

export default PlayersPage;
