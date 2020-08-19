import React from 'react';
import { mount } from 'enzyme';

import CharacterDetailsContainer from '../CharacterDetailsContainer';
import { mockStore } from '../../../state/__mocks__/store';
import { fetchCharacterDetails } from '../../../state/actions/character-details.actions';

jest.mock('../CharacterDetails', () => () => <></>);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 1011334 })
}));
jest.mock('../../../state/actions/character-details.actions', () => ({
  ...jest.requireActual('../../../state/actions/character-details.actions'),
  fetchCharacterDetails: jest.fn()
}));

let store;

const setUpMount = (initialState, match) => {
  store = mockStore(initialState);
  store.dispatch = jest.fn();
  const component = mount(
    <CharacterDetailsContainer store={store} match={match} />
  );
  return component;
};

describe('CharacterDetailsContainer', () => {
  let component;
  const id = 1011334;

  it('should display loading message while no character', () => {
    component = setUpMount(
      {
        charactersReducer: { characters: [] },
        characterDetailsReducer: {
          characterDetails: undefined,
          isLoading: true
        }
      },
      { params: {} }
    );
    expect(component).toMatchSnapshot();
  });

  it('should display character details', () => {
    component = setUpMount(
      {
        charactersReducer: { characters: [] },
        characterDetailsReducer: { characterDetails: [{ id }] }
      },
      { params: { id: id.toString() } }
    );
    expect(component).toMatchSnapshot();
  });

  it('should fetch character details with the id in the url', () => {
    component = setUpMount(
      {
        charactersReducer: { characters: [] },
        characterDetailsReducer: { characterDetails: undefined }
      },
      { params: { id: id.toString() } }
    );
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(fetchCharacterDetails(id));
  });

  it('should not fetch character details if already in the store', () => {
    component = setUpMount(
      {
        charactersReducer: { characters: [{ id }] },
        characterDetailsReducer: { characterDetails: undefined }
      },
      { params: { id: id.toString() } }
    );
    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
