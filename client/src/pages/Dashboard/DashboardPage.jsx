import React from 'react';
import {players, venues, instruments, gigs} from '../../../../server/dummyData';
import ControlContainer from './components/ControlContainer';
import InformationDisplay from './components/InformationDisplay';
import DataContainer from './components/DataContainer';

function DashboardPage() {
  // =========== DUMMY DATA ============
  const props = {};
  props['players'] = players;
  props['venues'] = venues;
  props['instruments'] = instruments;
  props['gigs'] = gigs;
  // ===================================

  return (
    <div className='main-container'>
      {/* <ControlContainer /> */}
      <InformationDisplay data={props} />
      {/* <DataContainer data={props} /> */}
    </div>
  );
}

export default DashboardPage;
