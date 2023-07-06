import React, {useEffect, useState} from 'react';
import Gig from './Gig';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {fetchGigs} from '../../../actions/actions';

function GigsDisplay({gigs}) {
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();

  async function deleteGig(gigId) {
    const response = window.confirm(
      'Are you sure you want to delete this gig?'
    );
    if (response) {
      const config = {
        data: {
          gigId: gigId,
        },
      };
      const response = await axios.delete('/api/gig', config);
      if (response.status === 201) {
        dispatch(fetchGigs());
      }
    }
  }

  const gigComponents = gigs.map((gig) => {
    return (
      <div className='gig-display-container' key={uuid()}>
        <Gig data={gig} />
        <button onClick={() => deleteGig(gig.id)} className='gig-delete-btn'>
          Delete
        </button>
      </div>
    );
  });

  return <div>{gigComponents}</div>;
}

export default GigsDisplay;
