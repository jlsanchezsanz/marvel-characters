import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

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
    <Router>
      <CharacterDetailsContainer store={store} match={match} />
    </Router>
  );
  return component;
};

describe('CharacterDetailsContainer', () => {
  let component;
  const id = 1011334;

  it('should display loading message while no character', () => {
    component = setUpMount(
      {
        characters: { characters: [] },
        characterDetails: {
          characterDetails: undefined,
          isLoading: true
        }
      },
      { params: {} }
    );
    const loader = component.find('p');
    expect(loader).toBeDefined();
  });

  it('should display character details', () => {
    component = setUpMount(
      {
        characters: { characters: [] },
        characterDetails: { characterDetails: [{ id }] }
      },
      { params: { id: id.toString() } }
    );
    const characterDetails = component.find('CharacterDetails');
    expect(characterDetails).toBeDefined();
  });

  it('should fetch character details with the id in the url', () => {
    component = setUpMount(
      {
        characters: { characters: [] },
        characterDetails: { characterDetails: undefined }
      },
      { params: { id: id.toString() } }
    );
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(fetchCharacterDetails(id));
  });

  it('should display error message', () => {
    component = setUpMount(
      {
        characters: { characters: [] },
        characterDetails: {
          characterDetails: undefined,
          isLoading: false,
          error: { message: 'Some error message' }
        }
      },
      { params: {} }
    );
    const error = component.find('Error');
    expect(error).toMatchSnapshot();
  });
});
