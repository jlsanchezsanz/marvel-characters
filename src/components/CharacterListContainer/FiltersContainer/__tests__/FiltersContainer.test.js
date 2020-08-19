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
  it('should render component', () => {
    const component = setUpMount({ filtersReducer: { orderBy: 'name' } });
    expect(component).toMatchSnapshot();
  });

  it('should update filters on orderBy change', () => {
    const payload = { orderBy: '-name' };
    const component = setUpMount({ filtersReducer: payload });
    const select = component.find('select');

    expect(store.dispatch).not.toHaveBeenCalled();
    select.simulate('change', { target: { value: '-name' } });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(updateFilters(payload));
  });
});
