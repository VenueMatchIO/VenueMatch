import React from 'react';
import GigsDisplay from './components/GigsDisplay';
import {useSelector} from 'react-redux';

function GigsPage() {
  const gigs = useSelector((state) => state.gigs);
  return (
    <div>
      <h1>Gigs</h1>
      <GigsDisplay gigs={gigs} />
    </div>
  );
}

export default GigsPage;
