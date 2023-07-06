import * as types from '../constants/actionTypes';

export default function playersReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_PLAYER:
      return [...state, action.payload];
    case types.UPDATE_PLAYER:
      return state.map((player) =>
        player.id === action.payload.id ? action.payload : player
      );
    case types.DELETE_PLAYER:
      return state.filter((player) => player.id !== action.payload.id);
    case types.FETCH_PLAYERS: // need to return the entire payload of what's on the server for state
      return action.payload;
    case types.FETCH_DATA: // universal action that is in every reducer
      return action.payload.players;
    default:
      return state;
  }
}
