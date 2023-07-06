import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {v4 as uuid} from 'uuid';
import {fetchVenues} from '../../../actions/actions';

function VenuesTable({venues}) {
  const [venueGigs, setVenueGigs] = useState({});
  const dispatch = useDispatch();

  async function handleGigs(venueId, isShown) {
    if (isShown) {
      const newState = {...venueGigs};
      delete newState[venueId];
      return setVenueGigs(newState);
    } else {
      try {
        const response = await axios.get(`/api/gigs/${venueId}`);
        const newGigData = {};
        newGigData[venueId] = response.data;
        setVenueGigs({...venueGigs, ...newGigData});
      } catch (error) {
        console.error(error);
      }
    }
  }

  function showGigs(venueId) {
    const gigArray = venueGigs[venueId].map((gig) => {
      return gig.name;
    });

    return <p>{gigArray.join(', ')}</p>;
  }

  async function deleteVenue(venueId) {
    const config = {
      data: {
        venueId,
      },
    };
    try {
      const response = await axios.delete('/api/venue', config);
      if (response.status === 201) dispatch(fetchVenues());
    } catch (error) {
      console.error(error);
    }
  }

  const venueRows = venues.map((venue) => {
    return (
      <tr key={uuid()}>
        <td>{venue.name}</td>
        <td>{venue.location}</td>
        <td>
          <button onClick={() => handleGigs(venue.id, venueGigs[venue.id])}>
            {venueGigs[venue.id] ? 'Hide Gigs' : 'Show Gigs'}
          </button>
          {venueGigs[venue.id] && (
            <div className='player-table-inst-array'>{showGigs(venue.id)}</div>
          )}
        </td>
        <td className='row-ends-holding-trash'>
          <button
            className='table-remove-btn'
            onClick={() => deleteVenue(venue.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </td>
      </tr>
    );
  });

  const venueTable = (
    <table>
      <thead>
        <tr className='table-header-row'>
          <th>Name</th>
          <th>Location</th>
          <th>Gigs</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{venueRows}</tbody>
    </table>
  );

  return <div className='data-table'>{venueTable}</div>;
}

export default VenuesTable;
