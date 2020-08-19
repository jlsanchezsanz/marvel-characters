import { UPDATE_FILTERS } from '../actions/types';

export const initialState = {
  sortBy: 'name'
};

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
