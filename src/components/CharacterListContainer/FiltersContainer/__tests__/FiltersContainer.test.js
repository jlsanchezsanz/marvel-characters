import React from 'react';
import { mount } from 'enzyme';

import { mockStore } from '../../../../state/__mocks__/store';
import { changeFilters } from '../../../../state/actions/filters.actions';
import FiltersContainer from '../FiltersContainer';

jest.mock('../../../../state/actions/filters.actions');

let store;

const setUpMount = (initialState) => {
  store = mockStore(initialState);
  store.dispatch = jest.fn();
  const component = mount(<FiltersContainer store={store} />);
  return component;
};

describe('FiltersContainer', () => {
  const state = { filters: { orderBy: 'name' } };

  it('should render component', () => {
    const component = setUpMount(state);
    expect(component).toMatchSnapshot();
  });

  it('should update filters on orderBy change', () => {
    const name = 'orderBy';
    const value = '-name';
    const component = setUpMount(state);
    const orderSelector = component.find('OrderBySelector');

    expect(store.dispatch).not.toHaveBeenCalled();
    orderSelector.props().onChange({ target: { value, name } });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      changeFilters({ orderBy: value })
    );
  });

  it('should update filters on search input change', () => {
    const name = 'nameStartsWith';
    const value = 'spider';
    const component = setUpMount(state);
    const searchInput = component.find('SearchByNameInput');

    expect(store.dispatch).not.toHaveBeenCalled();
    searchInput.props().onChange({ target: { value, name } });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      changeFilters({ nameStartsWith: value })
    );
  });
});
