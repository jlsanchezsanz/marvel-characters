import {
  FETCH_CHARACTER_DETAILS_SUCCESS,
  FETCH_CHARACTER_DETAILS_START,
  FETCH_CHARACTER_DETAILS_ERROR
} from '../../actions/types';
import {
  characterDetailsReducer,
  initialState
} from '../character-details.reducer';
import { charactersMock } from '../../../mocks/characters.mock';

describe('characterDetailsReducer', () => {
  it('should return default state', () => {
    const state = characterDetailsReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should set "isLoading" if fetch start', () => {
    const state = characterDetailsReducer(undefined, {
      type: FETCH_CHARACTER_DETAILS_START
    });
    expect(state).toEqual({ ...initialState, isLoading: true });
  });

  it('should initialize characterDetails if success', () => {
    const state = characterDetailsReducer(undefined, {
      type: FETCH_CHARACTER_DETAILS_SUCCESS,
      payload: charactersMock.data
    });
    expect(state).toEqual({
      ...initialState,
      characterDetails: charactersMock.data.results[0]
    });
  });

  it('should set "error" if error', () => {
    const error = { message: 'Error' };
    const state = characterDetailsReducer(undefined, {
      type: FETCH_CHARACTER_DETAILS_ERROR,
      error
    });
    expect(state).toEqual({ ...initialState, error });
  });
});
