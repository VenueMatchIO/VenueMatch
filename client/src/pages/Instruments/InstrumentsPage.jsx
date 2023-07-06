import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import InstrumentModal from './components/InstrumentModal';
import InstrumentsTable from './components/InstrumentsTable';

function InstrumentsPage() {
  const [showModal, setShowModal] = useState(false);

  const instruments = useSelector((state) => state.instruments);

  return (
    <div>
      <h1>Instruments</h1>
      <button onClick={() => setShowModal(true)}>Add Instrument</button>
      {showModal && <InstrumentModal closeModal={() => setShowModal(false)} />}
      <InstrumentsTable instruments={instruments} />
    </div>
  );
}

export default InstrumentsPage;
