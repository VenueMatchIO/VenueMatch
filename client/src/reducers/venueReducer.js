import * as types from '../constants/actionTypes';

export default function venueReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_VENUE:
      return [...state, action.payload];
    case types.UPDATE_VENUE:
      return state.map((venue) =>
        venue.id === action.payload.id ? action.payload : venue
      );
    case types.DELETE_VENUE:
      return state.filter((venue) => venue.id !== action.payload.id);
    case types.FETCH_VENUES: // need to return the entire payload of what's on the server for state
      return action.payload;
    case types.FETCH_DATA: // universal action that is in every reducer
      return action.payload.venues;
    default:
      return state;
  }
}
