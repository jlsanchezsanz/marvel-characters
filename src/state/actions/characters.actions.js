import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR
} from './types';

const CHARACTERS_ENDPOINT = '../../data/characters.json';

export function fetchCharactersStart() {
  return {
    type: FETCH_CHARACTERS_START
  };
}

export function fetchCharactersSuccess(payload) {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload
  };
}

export function fetchCharactersError(error) {
  return {
    type: FETCH_CHARACTERS_ERROR,
    error
  };
}

export const fetchCharacters = () => (dispatch) => {
  dispatch(fetchCharactersStart());
  return fetch(CHARACTERS_ENDPOINT)
    .then((response) => response.json())
    .then(({ data }) => dispatch(fetchCharactersSuccess(data)))
    .catch((error) => dispatch(fetchCharactersError(error)));
};
