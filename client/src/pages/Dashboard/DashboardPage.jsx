import React from 'react';
import {players, venues, instruments, gigs} from '../../../../server/dummyData';
import ControlContainer from './components/ControlContainer';
import InformationDisplay from './components/InformationDisplay';
import DataContainer from './components/DataContainer';
import {useSelector} from 'react-redux';

function DashboardPage() {
  const players = useSelector((state) => state.players);
  const venues = useSelector((state) => state.venues);
  const gigs = useSelector((state) => state.gigs);
  const instruments = useSelector((state) => state.instruments);

  return (
    <div className='main-container'>
      {/* <ControlContainer /> */}
      <InformationDisplay
        players={players}
        instruments={instruments}
        venues={venues}
        gigs={gigs}
      />
      {/* <DataContainer data={props} /> */}
    </div>
  );
}

export default DashboardPage;
