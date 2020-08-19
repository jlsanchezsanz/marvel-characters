import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { charactersMock } from '../../../mocks/characters.mock';
import {
  fetchCharacterDetails,
  fetchCharacterDetailsError,
  fetchCharacterDetailsStart,
  fetchCharacterDetailsSuccess
} from '../character-details.actions';
import {
  FETCH_CHARACTER_DETAILS_START,
  FETCH_CHARACTER_DETAILS_SUCCESS,
  FETCH_CHARACTER_DETAILS_ERROR
} from '../types';
import { initialState } from '../../reducers/characters.reducer';
import {
  MARVEL_API_URL,
  CHARACTERS_ENDPOINT,
  API_KEY
} from '../../../constants/config.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Character Details Actions', () => {
  const id = 1011334;
  const startAction = {
    type: FETCH_CHARACTER_DETAILS_START
  };
  const successAction = {
    type: FETCH_CHARACTER_DETAILS_SUCCESS,
    payload: charactersMock
  };
  const error = { message: 'Error' };
  const errorAction = {
    type: FETCH_CHARACTER_DETAILS_ERROR,
    error
  };
  const endpoint = `${MARVEL_API_URL}${CHARACTERS_ENDPOINT}/${id}?apikey=${API_KEY}`;

  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to start fetching character details', () => {
    expect(fetchCharacterDetailsStart()).toEqual(startAction);
  });

  it('should create an action to success fetching character details', () => {
    expect(fetchCharacterDetailsSuccess(charactersMock)).toEqual(successAction);
  });

  it('should create an action to error fetching character details', () => {
    expect(fetchCharacterDetailsError(error)).toEqual(errorAction);
  });

  it('should dispatch fetch success action when fetching done', () => {
    const store = mockStore(initialState);
    const expectedActions = [startAction, successAction];
    fetchMock.getOnce(endpoint, {
      body: {
        data: charactersMock
      }
    });
    return store.dispatch(fetchCharacterDetails(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch fetch error action when fetching failed', () => {
    const store = mockStore(initialState);
    const expectedActions = [startAction, errorAction];
    fetchMock.getOnce(endpoint, Promise.reject(error));
    return store.dispatch(fetchCharacterDetails(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
