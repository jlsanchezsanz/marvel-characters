import { UPDATE_FILTERS } from './types';
import { selectPage } from './pagination.actions';

export function updateFilters(payload) {
  return {
    type: UPDATE_FILTERS,
    payload
  };
}

export const changeFilters = (payload) => (dispatch) => {
  dispatch(selectPage(1));
  dispatch(updateFilters(payload));
};
