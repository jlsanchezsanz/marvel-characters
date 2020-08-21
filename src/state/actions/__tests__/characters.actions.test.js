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
  FETCH_CHARACTERS_ERROR,
  UPDATE_PAGINATION
} from '../types';
import { initialState } from '../../reducers/characters.reducer';
import {
  MARVEL_API_URL,
  CHARACTERS_ENDPOINT,
  API_KEY
} from '../../../constants/config.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Characters Actions', () => {
  const startAction = {
    type: FETCH_CHARACTERS_START
  };
  const successAction = {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: charactersMock.data
  };
  const { total } = charactersMock.data;
  const updatePaginationAction = {
    type: UPDATE_PAGINATION,
    payload: total
  };
  const error = { message: 'Error' };
  const errorAction = {
    type: FETCH_CHARACTERS_ERROR,
    error
  };
  const endpoint = `${MARVEL_API_URL}${CHARACTERS_ENDPOINT}?apikey=${API_KEY}&orderBy=name&limit=20&offset=40&nameStartsWith=spi`;

  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to start fetching characters', () => {
    expect(fetchCharactersStart()).toEqual(startAction);
  });

  it('should create an action to success fetching characters', () => {
    expect(fetchCharactersSuccess(charactersMock.data)).toEqual(successAction);
  });

  it('should create an action to error fetching characters', () => {
    expect(fetchCharactersError(error)).toEqual(errorAction);
  });

  it('should dispatch fetch success and update pagination actions when fetching done', () => {
    const store = mockStore(initialState);
    const expectedActions = [
      startAction,
      successAction,
      updatePaginationAction
    ];
    fetchMock.getOnce(endpoint, { body: charactersMock });
    return store.dispatch(fetchCharacters('name', 'spi', 3, 20)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch fetch error action when fetching failed', () => {
    const store = mockStore(initialState);
    const expectedActions = [startAction, errorAction];
    fetchMock.getOnce(endpoint, Promise.reject(error));
    return store.dispatch(fetchCharacters('name', 'spi', 3, 20)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
