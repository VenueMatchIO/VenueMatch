import React from 'react';
import Data from './Data';

function DataContainer() {
  const dataArr = ['Venues', 'Players', 'Instruments'];
  
  const dataComponents = dataArr.map((title) => <Data title={title} />);

  return <div className='data-container'>{dataComponents}</div>;
}

export default DataContainer;
