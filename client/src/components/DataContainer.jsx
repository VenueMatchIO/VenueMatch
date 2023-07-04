import React from 'react';
import Data from './Data';
import {v4 as uuid} from 'uuid';

function DataContainer(props) {
  // const dataComponents = props.props.data.map((prop) => (
  //   <Data key={uuid()} title={prop.name} />
  // ));

  return <div className='data-container'></div>;
}

export default DataContainer;
