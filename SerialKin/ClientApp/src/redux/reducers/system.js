import { SWITCH_MENU } from '../actions/system';

const initialState = {
  test: false,
  isMenuOpen: false
};

function system(state = initialState, action) {
  switch(action.type) {
    case SWITCH_MENU: return {
      ...state,
      isMenuOpen: !state.isMenuOpen
    };
    default: return state;
  }
}

export default system;
