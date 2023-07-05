import axios from 'axios';
import React, {useState} from 'react';

import {v4 as uuid} from 'uuid';

function Gig({data}) {
  const [showInfo, setShowInfo] = useState(false);
  const [gigDetails, setGigDetails] = useState({});

  function handleClick() {
    async function getGigDetails() {
      const response = await axios.get(`/api/gig/${data.id}`);

      console.log(response.data);
    }

    getGigDetails();

    setShowInfo(!showInfo);
  }

  // const tableRows = props.data.map((item, index) => {
  //   <tr key={uuid()}>
  //     <td></td>
  //   </tr>;
  // });

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
      {showInfo && false}
    </div>
  );
}

export default Gig;
