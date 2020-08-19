import {
  FETCH_CHARACTER_DETAILS_SUCCESS,
  FETCH_CHARACTER_DETAILS_START,
  FETCH_CHARACTER_DETAILS_ERROR
} from '../actions/types';

export const initialState = {
  isLoading: false,
  characterDetails: undefined,
  error: undefined
};

export function characterDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTER_DETAILS_START:
      return { ...state, isLoading: true };
    case FETCH_CHARACTER_DETAILS_SUCCESS:
      return { ...state, characterDetails: action.payload.results[0], isLoading: false };
    case FETCH_CHARACTER_DETAILS_ERROR:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
}
