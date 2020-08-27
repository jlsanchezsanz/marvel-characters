import { mockStore } from '../../../jest-helpers';
import { initialState } from '../../reducers/filters.reducer';
import { changeFilters, updateFilters } from '../filters.actions';
import { UPDATE_FILTERS, SELECT_PAGE } from '../types';

describe('Filters Actions', () => {
  const payload = { orderBy: 'name' };
  const updateAction = {
    type: UPDATE_FILTERS,
    payload
  };
  const selectPageAction = {
    type: SELECT_PAGE,
    payload: 1
  };

  it('should create an action to update filters', () => {
    expect(updateFilters(payload)).toEqual(updateAction);
  });

  it('should reset to page 1 and update filters', () => {
    const store = mockStore(initialState);
    const expectedActions = [selectPageAction, updateAction];
    store.dispatch(changeFilters(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
