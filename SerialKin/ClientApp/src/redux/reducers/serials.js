import { ADD_SERIALS } from '../actions/serials';

const initialState = null;

function serials(state = initialState, action) {
  switch(action.type) {
    case ADD_SERIALS:
      return [...action.serials];
    default: return state;
  }
}

export default serials;
