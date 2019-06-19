import axios from 'axios';
import * as types from '../actions/actionTypes';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchCharacters = () => async dispatch => {
  try {
    const response = await axios.get('https://swapi.co/api/people/');
    dispatch(setSuccess(response.data.results));
  } catch (error) {
    console.log(error);
    dispatch(setError(error.message));
  }
};

export const setFetching = boolean => {
  return {
    type: types.FETCHING,
    payload: boolean
  };
};

export const setSuccess = characters => {
  return {
    type: types.SUCCESS_FETCH,
    payload: characters
  };
};

export const setError = error => {
  return {
    type: types.ERROR_FETCH,
    payload: error
  };
};
