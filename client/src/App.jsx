import React from 'react';
import Navbar from './components/Navbar.jsx';
import {Routes, Route} from 'react-router';
import MainContainer from './components/MainContainer.jsx';

import './styles.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <Routes>
          <Route path='/' element={<MainContainer className='main' />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
