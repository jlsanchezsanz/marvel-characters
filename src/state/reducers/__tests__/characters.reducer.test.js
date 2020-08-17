import {
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_ERROR
} from '../../actions/types';
import { charactersReducer, initialState } from '../characters.reducer';
import { charactersMock } from '../../../mocks/characters.mock';

describe('charactersReducer', () => {
  it('should return default state', () => {
    const state = charactersReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should set "isLoading" if fetch start', () => {
    const state = charactersReducer(undefined, {
      type: FETCH_CHARACTERS_START
    });
    expect(state).toEqual({ ...initialState, isLoading: true });
  });

  it('should initialize characters if success', () => {
    const state = charactersReducer(undefined, {
      type: FETCH_CHARACTERS_SUCCESS,
      payload: charactersMock
    });
    expect(state).toEqual({ ...initialState, characters: charactersMock.data.results });
  });

  it('should set "error" if error', () => {
    const error = { message: 'Error' };
    const state = charactersReducer(undefined, {
      type: FETCH_CHARACTERS_ERROR,
      error
    });
    expect(state).toEqual({ ...initialState, error });
  });
});