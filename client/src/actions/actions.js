/*
Action Creators
*/

import axios from 'axios';
import * as types from '../constants/actionTypes';

/*
==================
  Fetch All Data
==================
Note: On load action
*/
export const fetchData = () => {
  return async (dispatch) => {
    try {
      // get every player, gig, venue and instrument at once
      // const [players, gigs, venues, instruments] = await Promise.all([
      //   axios.get('/api/players'),
      //   axios.get('/api/gigs'),
      //   axios.get('/api/venues'),
      //   axios.get('/api/instruments'),
      // ]);

      // temp test stuff
      const gigs = await axios.get('/api/gigs');
      const players = {data: []};
      const venues = {data: []};
      const instruments = {data: []};
      console.log(gigs.data);
      // update state with what the database returns
      dispatch({
        type: types.FETCH_DATA,
        payload: {
          players: players.data,
          gigs: gigs.data,
          venues: venues.data,
          instruments: instruments.data,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
/*
==================
Instrument Actions
==================
*/
export const addInstrument = (instrument) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/instruments', instrument);
      dispatch({type: types.ADD_INSTRUMENT, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateInstrument = (id, updatedInstrument) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `/api/instruments/${id}`,
        updatedInstrument
      );
      dispatch({type: types.UPDATE_INSTRUMENT, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteInstrument = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/instruments/${id}`);
      dispatch({type: types.DELETE_INSTRUMENT, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchInstruments = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/instruments');
      dispatch({type: types.FETCH_INSTRUMENTS, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

/*
==================
  Player Actions
==================
*/
export const addPlayer = (player) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/players', player);
      dispatch({type: types.ADD_PLAYER, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const updatePlayer = (id, updatedPlayer) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/players/${id}`, updatedPlayer);
      dispatch({type: types.UPDATE_PLAYER, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const deletePlayer = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/players/${id}`);
      dispatch({type: types.DELETE_PLAYER, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchPlayers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/players');
      dispatch({type: types.FETCH_PLAYERS, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

/*
==================
   Gig Actions
==================
*/

export const addGig = (gig) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/gigs', gig);
      dispatch({type: types.ADD_GIG, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateGig = (id, updatedGig) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/gigs/${id}`, updatedGig);
      dispatch({type: types.UPDATE_GIG, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteGig = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/gigs/${id}`);
      dispatch({type: types.DELETE_GIG, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchGigs = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/gigs');
      dispatch({type: types.FETCH_GIGS, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

/*
==================
   Venue Actions
==================
*/

export const addVenue = (venue) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/venues', venue);
      dispatch({type: types.ADD_VENUE, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateVenue = (id, updatedVenue) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/venues/${id}`, updatedVenue);
      dispatch({type: types.UPDATE_VENUE, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteVenue = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/venues/${id}`);
      dispatch({type: types.DELETE_VENUE, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchVenues = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/venues');
      dispatch({type: types.FETCH_VENUES, payload: response.data});
    } catch (error) {
      console.error(error);
    }
  };
};
