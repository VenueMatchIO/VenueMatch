import React from 'react';
import Navbar from './components/Navbar.jsx';
import {Routes, Route} from 'react-router';
import VenuesPage from '../src/pages/Venues/VenuesPage.jsx';
import DashboardPage from './pages/Dashboard/DashboardPage.jsx';
import GigsPage from './pages/Gigs/GigsPage.jsx';
import PlayersPage from './pages/Players/PlayersPage.jsx';
import InstrumentsPage from './pages/Instruments/InstrumentsPage.jsx';

import './styles.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className='main'>
        <Routes>
          <Route path='/' element={<DashboardPage className='main' />} />
          <Route path='/venues' element={<VenuesPage />} />
          <Route path='/gigs' element={<GigsPage />} />
          <Route path='/players' element={<PlayersPage />} />
          <Route path='/instruments' element={<InstrumentsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
