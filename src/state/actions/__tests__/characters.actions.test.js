import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { charactersMock } from '../../../mocks/characters.mock';
import {
  fetchCharacters,
  fetchCharactersError,
  fetchCharactersStart,
  fetchCharactersSuccess
} from '../characters.actions';
import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR
} from '../types';
import { initialState } from '../../reducers/characters.reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Characters Actions', () => {
  const startAction = {
    type: FETCH_CHARACTERS_START
  };
  const successAction = {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: charactersMock
  };
  const error = { message: 'Error' };
  const errorAction = {
    type: FETCH_CHARACTERS_ERROR,
    error
  };

  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to start fetching characters', () => {
    expect(fetchCharactersStart()).toEqual(startAction);
  });

  it('should create an action to success fetching characters', () => {
    expect(fetchCharactersSuccess(charactersMock)).toEqual(successAction);
  });

  it('should create an action to error fetching characters', () => {
    expect(fetchCharactersError(error)).toEqual(errorAction);
  });

  it('should dispatch fetch success action when fetching done', () => {
    const store = mockStore(initialState);
    const expectedActions = [startAction, successAction];
    fetchMock.getOnce('../../data/characters.json', {
      body: {
        data: charactersMock
      }
    });
    return store.dispatch(fetchCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch fetch error action when fetching failed', () => {
    const store = mockStore(initialState);
    const expectedActions = [startAction, errorAction];
    fetchMock.getOnce('../../data/characters.json', Promise.reject(error));
    return store.dispatch(fetchCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
