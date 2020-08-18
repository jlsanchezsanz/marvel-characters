import React from 'react';
import { mount } from 'enzyme';

import CharacterDetailsContainer from '../CharacterDetailsContainer';
import { mockStore } from '../../../state/__mocks__/store';

jest.mock('../CharacterDetails', () => () => <></>);

const setUpMount = (initialState, match) => {
  const store = mockStore(initialState);
  const component = mount(
    <CharacterDetailsContainer store={store} match={match} />
  );
  return component;
};

describe('CharacterDetailsContainer', () => {
  let component;

  it('should display loading message while no character', () => {
    component = setUpMount(
      { charactersReducer: { characters: [], isLoading: true } },
      { params: {} }
    );
    expect(component).toMatchSnapshot();
  });

  it('should display character details', () => {
    component = setUpMount(
      { charactersReducer: { characters: [{ id: '1011334' }] } },
      { params: { id: '1011334' } }
    );
    expect(component).toMatchSnapshot();
  });
});
