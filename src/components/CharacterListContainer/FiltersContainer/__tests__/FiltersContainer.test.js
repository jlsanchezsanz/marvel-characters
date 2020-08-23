import React from 'react';
import { mount } from 'enzyme';

import { mockStore } from '../../../../state/__mocks__/store';
import { updateFilters } from '../../../../state/actions/filters.actions';
import FiltersContainer from '../FiltersContainer';

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
    const select = component.find('OrderSelector');

    expect(store.dispatch).not.toHaveBeenCalled();
    select.props().onChange({ target: { value, name } });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      updateFilters({ [name]: value })
    );
  });

  it('should update filters on nameStartsWith change', () => {
    const name = 'nameStartsWith';
    const value = 'spi';
    const component = setUpMount(state);
    const input = component.find('input');

    expect(store.dispatch).not.toHaveBeenCalled();
    input.simulate('change', { target: { value, name } });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      updateFilters({ [name]: value })
    );
  });

  it('should update filters on nameStartsWith change if length === 0', () => {
    const name = 'nameStartsWith';
    const value = '';
    const component = setUpMount(state);
    const input = component.find('input');

    expect(store.dispatch).not.toHaveBeenCalled();
    input.simulate('change', { target: { value, name } });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      updateFilters({ [name]: value })
    );
  });

  it('should not update filters on nameStartsWith change if 3 > length > 0', () => {
    const name = 'nameStartsWith';
    const value = 'sp';
    const component = setUpMount(state);
    const input = component.find('input');

    expect(store.dispatch).not.toHaveBeenCalled();
    input.simulate('change', { target: { value, name } });

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
