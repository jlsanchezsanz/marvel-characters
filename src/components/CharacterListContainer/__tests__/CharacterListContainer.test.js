import React from 'react';
import { mount } from 'enzyme';

import CharacterListContainer from '../CharacterListContainer';
import { mockStore } from '../../../state/__mocks__/store';
import {
  selectLimit,
  selectPage
} from '../../../state/actions/pagination.actions';

jest.mock('../CharacterList', () => () => <></>);
jest.mock('../FiltersContainer', () => () => <></>);

let store;
const setUpMount = (initialState) => {
  store = mockStore(initialState);
  store.dispatch = jest.fn();
  const component = mount(<CharacterListContainer store={store} />);
  return component;
};

describe('CharacterListContainer', () => {
  let component;
  const pagination = { page: 1, pages: 2, limit: 20, total: 100 };

  it('should display loading message while loading', () => {
    component = setUpMount({
      characters: { isLoading: true, characters: [] },
      filters: { orderBy: 'name' },
      pagination
    });
    const loader = component.find('p');
    expect(loader).toBeDefined();
  });

  it('should display characters list', () => {
    component = setUpMount({
      characters: { characters: [{}, {}] },
      filters: { orderBy: 'name' },
      pagination
    });
    const characterList = component.find('CharacterList');
    expect(characterList).toBeDefined();
  });

  it('should display no results found message', () => {
    component = setUpMount({
      characters: { characters: [], isLoading: false },
      filters: { nameStartsWith: 'asd' },
      pagination
    });
    const text = component.find('p').at(0).find('em').text();
    expect(text).toBe('No results match your criteria.');
  });

  it('should display error message', () => {
    component = setUpMount({
      characters: {
        characters: [],
        isLoading: false,
        error: { message: 'Some error message' }
      },
      filters: {},
      pagination
    });
    const error = component.find('Error');
    expect(error).toMatchSnapshot();
  });

  it('should dispatch select page action on page change', () => {
    component = setUpMount({
      characters: { characters: [{}, {}] },
      filters: { orderBy: 'name' },
      pagination
    });
    const limitSelector = component.find('CharactersPagination').at(0);
    limitSelector.props().onSelectPage(2);
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith(selectPage(2));
  });

  it('should dispatch select limit action on limit change', () => {
    component = setUpMount({
      characters: { characters: [{}, {}] },
      filters: { orderBy: 'name' },
      pagination
    });
    const limitSelector = component.find('LimitSelector');
    limitSelector.props().onSelectLimit(50);
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith(selectLimit(50));
  });
});
