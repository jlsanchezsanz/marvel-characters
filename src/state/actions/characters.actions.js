import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR
} from './types';
import { updatePagination } from './pagination.actions';
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

function generateUrl(orderBy, nameStartsWith, page, limit) {
  return (
    `${MARVEL_API_URL}${CHARACTERS_ENDPOINT}` +
    `?apikey=${API_KEY}` +
    `&orderBy=${orderBy}` +
    `&limit=${limit}` +
    `&offset=${page * limit - limit}` +
    `${nameStartsWith && `&nameStartsWith=${nameStartsWith}`}`
  );
}

export const fetchCharacters = (orderBy, nameStartsWith, page, limit) => (
  dispatch
) => {
  dispatch(fetchCharactersStart());
  return fetch(generateUrl(orderBy, nameStartsWith, page, limit))
    .then((response) => response.json())
    .then(({ data }) => {
      dispatch(fetchCharactersSuccess(data));
      dispatch(updatePagination(data.total));
    })
    .catch((error) => dispatch(fetchCharactersError(error)));
};
