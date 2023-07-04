import * as types from '../constants/actionTypes';

export function gigReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_GIG:
      return [...state, action.payload];
    case types.UPDATE_GIG:
      return state.map((gig) =>
        gig.id === action.payload.id ? action.payload : gig
      );
    case types.DELETE_GIG:
      return state.filter((gig) => gig.id !== action.payload.id);
    case types.FETCH_GIGS: // need to return the entire payload of what's on the server for state
      return action.payload;
    case types.FETCH_DATA: // universal action that is in every reducer
      return action.payload.gigs;
    default:
      return state;
  }
}
