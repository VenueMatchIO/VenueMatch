import {combineReducers} from 'redux';
import playersReducer from './playersReducer';
import gigReducer from './gigReducer';
import instrumentReducer from './instrumentReducer';
import venueReducer from './venueReducer';

export default combineReducers({
  players: playersReducer,
  gigs: gigReducer,
  instruments: instrumentReducer,
  venues: venueReducer,
});
