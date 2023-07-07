import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {v4 as uuid} from 'uuid';

function InstrumentsTable({instruments}) {
  async function deleteInstrument(instrumentId) {
    const body = {
      instrumentId,
    };
  }

  const instrumentRows = instruments
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((instrument) => {
      return (
        <tr key={uuid()}>
          <td>{instrument.name}</td>
          <td className='row-ends-holding-trash'>
            <button className='table-remove-btn'>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </td>
        </tr>
      );
    });

  const instrumentsTable = (
    <table>
      <thead>
        <tr>
          <th>Instruments</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{instrumentRows}</tbody>
    </table>
  );
  return <div className='data-table'>{instrumentsTable}</div>;
}

export default InstrumentsTable;
