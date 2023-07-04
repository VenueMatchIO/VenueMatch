import {useState, useEffect} from 'react';
import React from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import {Routes, Route} from 'react-router';
import MainContainer from './components/MainContainer.jsx';

import './styles.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <Routes>
          <Route path='/' element={<MainContainer className='main' />} />
          <Route
            path='/add/player'
            element={<MainContainer className='main' />}
          />
          <Route
            path='/add/instrument'
            element={<MainContainer className='main' />}
          />
          <Route
            path='/add/venue'
            element={<MainContainer className='main' />}
          />
          <Route
            path='/schedule'
            element={<MainContainer className='main' />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
