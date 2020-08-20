import { SELECT_LIMIT, SELECT_PAGE, UPDATE_PAGINATION } from './types';

export function selectLimit(limit) {
  return {
    type: SELECT_LIMIT,
    payload: limit
  };
}

export function selectPage(page) {
  return {
    type: SELECT_PAGE,
    payload: page
  };
}

export function updatePagination(payload) {
  return {
    type: UPDATE_PAGINATION,
    payload
  };
}
