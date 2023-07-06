import React, {useState} from 'react';
import GigsDisplay from './components/GigsDisplay';
import {useSelector} from 'react-redux';
import AddGigModal from './components/AddGigModal';

function GigsPage() {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);
  const gigs = useSelector((state) => state.gigs);
  function addGig() {
    setShowModal(true);
  }

  function closeModal() {
    setReload(!reload);
    setShowModal(false);
  }
  return (
    <div>
      {showModal && <AddGigModal closeModal={closeModal} />}
      <h1>Gigs</h1>
      <button onClick={addGig}>Add Gig</button>
      <GigsDisplay gigs={gigs} />
    </div>
  );
}

export default GigsPage;
