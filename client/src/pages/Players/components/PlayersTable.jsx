import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuid} from 'uuid';
import {fetchPlayers} from '../../../actions/actions';
import axios from 'axios';

function PlayersTable(props) {
  const [showInstId, setShowInstId] = useState([]);
  const [playerInstruments, setPlayerInstruments] = useState({});
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  async function deletePlayer(e, playerId) {
    const config = {
      data: {
        playerId: playerId,
      },
    };
    try {
      const response = await axios.delete('/api/player', config);
      if (response.status === 201) dispatch(fetchPlayers());
    } catch (error) {
      console.error(error);
    }
  }
  console.log('playerInstruments', playerInstruments);
  async function handleInstrument(e, playerId, isShown) {
    if (isShown) {
      const newState = {...playerInstruments};
      delete newState[playerId];
      return setPlayerInstruments(newState);
    } else {
      try {
        const response = await axios.get(`/api/instruments/${playerId}`);
        const newPlayerData = {};
        newPlayerData[playerId] = response.data;
        setPlayerInstruments({...playerInstruments, ...newPlayerData});
      } catch (error) {
        console.error(error);
      }
    }
  }

  function showInstruments(playerId) {
    const instrumentArray = playerInstruments[playerId].map((instrument) => {
      return instrument.name;
    });

    return <p>{instrumentArray.join(', ')}</p>;
  }

  const playerTableRows = players
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((player) => {
      return (
        <tr key={uuid()}>
          <td>{player.name}</td>
          <td>
            <button
              onClick={(e) =>
                handleInstrument(e, player.id, playerInstruments[player.id])
              }
            >
              {playerInstruments[player.id]
                ? 'Hide Instruments'
                : 'Show Instruments'}
            </button>
            {playerInstruments[player.id] && (
              <div className='player-table-inst-array'>
                {showInstruments(player.id)}
              </div>
            )}
          </td>
          <td>
            <button
              onClick={(e) => deletePlayer(e, player.id)}
              className='table-remove-btn'
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </td>
        </tr>
      );
    });

  const playerTable = (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Instruments</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{playerTableRows}</tbody>
    </table>
  );
  return <div className='data-table'>{playerTable}</div>;
}

export default PlayersTable;
