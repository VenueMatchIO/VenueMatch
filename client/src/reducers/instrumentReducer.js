import * as types from '../constants/actionTypes';

export function instrumentsReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_INSTRUMENT:
      return [...state, action.payload];
    case types.UPDATE_INSTRUMENT:
      return state.map((instrument) =>
        instrument.id === action.payload.id ? action.payload : instrument
      );
    case types.DELETE_INSTRUMENT:
      return state.filter((instrument) => instrument.id !== action.payload.id);
    case types.FETCH_INSTRUMENTS: // need to return the entire payload of what's on the server for state
      return action.payload;
    case types.FETCH_DATA: // universal action that is in every reducer
      return action.payload.instruments;
    default:
      return state;
  }
}
