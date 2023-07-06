import React, {useEffect} from 'react';
import Gig from './Gig';
import {v4 as uuid} from 'uuid';

function GigsDisplay({gigs}) {
  console.log(gigs);

  const gigComponents = gigs.map((gig) => {
    return (
      <div key={uuid()}>
        <Gig data={gig} />
      </div>
    );
  });

  return <div>{gigComponents}</div>;
}

export default GigsDisplay;
