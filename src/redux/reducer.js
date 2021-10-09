import {
    SET_IS_DARK_MODE,
  } from './actions';

// initial state is maintained, can add more items to it
const initialState = {
  isDark: false,
};

//checks between which action is made and adds value to state accordingly
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_DARK_MODE:
      return {
        ...state,
        isDark: action.payload,
      };
    default : 
    return {
        ...state
    }
  }
};

export default reducer;