import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR
} from './types';
import {
  MARVEL_API_URL,
  CHARACTERS_ENDPOINT,
  API_KEY
} from '../../constants/config.constants';

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

export const fetchCharacters = (orderBy) => (dispatch) => {
  dispatch(fetchCharactersStart());
  return fetch(
    `${MARVEL_API_URL}${CHARACTERS_ENDPOINT}?apikey=${API_KEY}&orderBy=${orderBy}`
  )
    .then((response) => response.json())
    .then(({ data }) => dispatch(fetchCharactersSuccess(data)))
    .catch((error) => dispatch(fetchCharactersError(error)));
};
