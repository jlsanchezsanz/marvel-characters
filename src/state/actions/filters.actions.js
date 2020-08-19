import { UPDATE_FILTERS } from './types';

export function updateFilters(payload) {
  return {
    type: UPDATE_FILTERS,
    payload
  };
}
