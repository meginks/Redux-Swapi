import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  isLoading: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {

  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: 
    return {
      ...state, 
      characters: [],
      isLoading: true, 
      error: ''

    }
    case SUCCESS:
    return {
      ...state,
      isLoading: false,
      characters: action.payload,
      error: ''
    }

    case FAILURE: 
    return {
      ...state,
      characters: [],
      isLoading: false,
      error: action.payload

    }

    default:
      return state;
  }
};
