import React from 'react';

function Modal({data, closeModal}) {
  let {title} = data;
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <div className='modal-container'>
      <div className='modal-header'>
        <h1>{title}</h1>
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
