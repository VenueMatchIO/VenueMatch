import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import FillModal from './FillModal';
import AddInstrumentModal from './AddInstrumentModal';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faTrashCan} from '@fortawesome/free-solid-svg-icons';

function GigTable({gigDetails, gigId, reload}) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [showInstModal, setShowInstModal] = useState(false);

  function showIModal() {
    setShowInstModal(true);
  }

  function closeIModal() {
    reload();
    setShowInstModal(false);
  }

  const showFillModal = (gig) => {
    const gigData = {
      ...gig,
      gigId,
    };
    setModalData(gigData);
    setShowModal(true);
  };

  function closeFillModal() {
    reload();
    setShowModal(false);
  }

  async function removeInstrument(joinId) {
    const config = {
      data: {
        joinId: joinId,
      },
    };
    try {
      const response = await axios.delete('/api/gig/instrument', config);
      if (response.status === 201) reload();
    } catch (error) {
      console.error(error);
    }
  }

  const tableRows = gigDetails
    .sort((a, b) => a.instrument.localeCompare(b.instrument))
    .map((gig, index) => {
      return (
        <tr key={uuid()}>
          <td>{gig.instrument}</td>
          <td>
            {gig.player ? (
              gig.player
            ) : (
              <p
                className='gig-table-fill-btn'
                onClick={() => showFillModal(gig)}
              >
                Fill
              </p>
            )}
          </td>
          <td>
            <button
              className='table-remove-btn'
              onClick={() => removeInstrument(gig.join_id)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </td>
        </tr>
      );
    });

  const gigTable = (
    <>
      <table>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Player</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </>
  );

  return (
    <div className='data-table'>
      {gigTable}
      {showModal && (
        <FillModal data={modalData} gigId={gigId} closeModal={closeFillModal} />
      )}
      <button className='data-table-btn' onClick={showIModal}>
        Add Instrument...
      </button>
      {showInstModal && (
        <AddInstrumentModal closeModal={closeIModal} gigId={gigId} />
      )}
    </div>
  );
}

export default GigTable;
