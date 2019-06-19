import * as types from '../actions/actionTypes';

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};

export function charsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_CHARACTERS:
      return action.payload;
    case types.FETCHING:
      return {...state, fetching: action.payload }
    case types.SUCCESS_FETCH:
      return { ...state, characters: action.payload, fetching: false };
    case types.ERROR_FETCH:
      return { ...state, error: action.payload, fetching: false };
    default:
      return state;
  }
};
