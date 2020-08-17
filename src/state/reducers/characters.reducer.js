import {
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_ERROR
} from '../actions/types';

export const initialState = {
  isLoading: false,
  characters: [],
  error: undefined
};

export function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return { ...state, isLoading: true };
    case FETCH_CHARACTERS_SUCCESS:
      return { ...state, characters: action.payload.results, isLoading: false };
    case FETCH_CHARACTERS_ERROR:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
}
