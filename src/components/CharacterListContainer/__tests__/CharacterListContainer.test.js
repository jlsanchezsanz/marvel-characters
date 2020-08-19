import React from 'react';
import { mount } from 'enzyme';

import CharacterListContainer from '../CharacterListContainer';
import { mockStore } from '../../../state/__mocks__/store';
import { charactersMock } from '../../../mocks/characters.mock';

jest.mock('../CharacterList', () => () => <></>);
jest.mock('../FiltersContainer', () => () => <></>);

const setUpMount = (initialState) => {
  const store = mockStore(initialState);
  const component = mount(<CharacterListContainer store={store} />);
  return component;
};

describe('CharacterListContainer', () => {
  let component;

  it('should display loading message while loading', () => {
    component = setUpMount({
      charactersReducer: { isLoading: true },
      filtersReducer: { orderBy: 'name' }
    });
    expect(component).toMatchSnapshot();
  });

  it('should display characters list', () => {
    component = setUpMount({
      charactersReducer: { characters: [{}, {}] },
      filtersReducer: { orderBy: 'name' }
    });
    expect(component).toMatchSnapshot();
  });
});
