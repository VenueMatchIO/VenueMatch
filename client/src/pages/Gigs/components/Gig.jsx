import axios from 'axios';
import React, {useState} from 'react';

import {v4 as uuid} from 'uuid';
import GigTable from './GigTable';

function Gig({data}) {
  const [showInfo, setShowInfo] = useState(false);
  const [gigDetails, setGigDetails] = useState([]);

  async function getGigDetails() {
    const response = await axios.get(`/api/gig/${data.id}`);
    return response.data;
  }

  async function reload() {
    setGigDetails(await getGigDetails());
  }

  async function handleClick() {
    if (!showInfo && gigDetails.length == 0)
      setGigDetails(await getGigDetails());
    setShowInfo(!showInfo);
  }

  return (
    <div>
      <button className='gig-btn' onClick={handleClick}>
        <div className='gig-btn-contents'>
          <p>
            <b>Name: </b>
            {data.name}
          </p>
          <p>
            <b>Venue: </b>
            {data.venue_name}
          </p>
          <p>
            {new Date(data.date).toLocaleString('en-us', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
      </button>
      {showInfo && (
        <GigTable gigDetails={gigDetails} reload={reload} gigId={data.id} />
      )}
    </div>
  );
}

export default Gig;
