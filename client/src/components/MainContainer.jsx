import React from 'react';
import ControlContainer from './ControlContainer';
import InformationDisplay from './InformationDisplay';
import DataContainer from './DataContainer';
import {players, venues, instruments} from '../../../server/dummyData';
import {Routes} from 'react-router';

function MainContainer() {
  // =========== DUMMY DATA ============
  const props = {};
  props['players'] = players;
  props['venues'] = venues;
  props['instruments'] = instruments;
  // ===================================
  return (
    <div className='main-container'>
        <ControlContainer />
        <InformationDisplay data={props} />
        <DataContainer data={props} />
    </div>
  );
}

export default MainContainer;
