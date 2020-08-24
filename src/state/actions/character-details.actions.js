import {
  FETCH_CHARACTER_DETAILS_START,
  FETCH_CHARACTER_DETAILS_SUCCESS,
  FETCH_CHARACTER_DETAILS_ERROR
} from './types';
import {
  MARVEL_API_URL,
  CHARACTERS_ENDPOINT,
  API_KEY
} from '../../constants/config.constants';
import { CUSTOM_ERROR_MESSAGE } from '../../constants/error-messages.constants';

export function fetchCharacterDetailsStart() {
  return {
    type: FETCH_CHARACTER_DETAILS_START
  };
}

export function fetchCharacterDetailsSuccess(payload) {
  return {
    type: FETCH_CHARACTER_DETAILS_SUCCESS,
    payload
  };
}

export function fetchCharacterDetailsError(error) {
  return {
    type: FETCH_CHARACTER_DETAILS_ERROR,
    error
  };
}

export const fetchCharacterDetails = (id) => (dispatch) => {
  dispatch(fetchCharacterDetailsStart());
  return fetch(
    `${MARVEL_API_URL}${CHARACTERS_ENDPOINT}/${id}?apikey=${API_KEY}`
  )
    .then((response) => response.json())
    .then(({ data, code, status }) => {
      if (code >= 400 && code < 500) {
        throw status;
      }
      dispatch(fetchCharacterDetailsSuccess(data));
    })
    .catch((error) =>
      dispatch(
        fetchCharacterDetailsError({
          message:
            error && typeof error === 'string' ? error : CUSTOM_ERROR_MESSAGE
        })
      )
    );
};
