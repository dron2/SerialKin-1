import { combineReducers } from 'redux';
import system from './system';
import serials from './serials';

export default combineReducers({
  system,
  serials
});