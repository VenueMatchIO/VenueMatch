import React from 'react';

function Modal({closeModal}) {
  return (
    <div className='modal-container'>
      <div className='modal-header'>
        <button onClick={closeModal}>X</button>
      </div>
      <div className='modal-inputs'>
        <input placeholder='some data to type' />
        <input placeholder='some data to type' />
      </div>
    </div>
  );
}

export default Modal;
