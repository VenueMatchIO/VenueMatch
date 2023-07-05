import React, {useState} from 'react';
import Modal from '../../../components/Modal';

function ControlContainer() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    data: [],
  });

  const venueData = [
    {
      name: 'MSG',
      id: 1,
    },
  ];
  const playerData = [
    {
      name: 'Eric',
      id: 1,
    },
  ];
  const gigData = [];
  const instrumentData = [];

  function handleClick(e) {
    const type = e.target.name;
    let data;
    if (type === 'venue') data = venueData;
    if (type === 'player') data = playerData;
    if (type === 'gig') data = gigData;
    if (type === 'instrument') data = instrumentData;
    setModalData({title: type, data: data});
    setShowModal(!showModal);
  }

  return (
    <div className='control-container'>
      <div className='control-btn-container'>
        <button onClick={handleClick} name='venue' className='control-btn'>
          Add Venue
        </button>
        <button onClick={handleClick} name='instrument' className='control-btn'>
          Add Instrument
        </button>
      </div>
      <div className='control-btn-container'>
        <button onClick={handleClick} name='player' className='control-btn'>
          Add Player
        </button>
        <button onClick={handleClick} name='gig' className='control-btn'>
          Add Gig
        </button>
      </div>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)} data={modalData} />
      )}
    </div>
  );
}

export default ControlContainer;
