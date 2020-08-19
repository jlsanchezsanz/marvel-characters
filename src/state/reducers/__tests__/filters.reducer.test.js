import { UPDATE_FILTERS } from '../../actions/types';
import { filtersReducer, initialState } from '../filters.reducer';

describe('filtersReducer', () => {
  it('should return default state', () => {
    const state = filtersReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should set "orderBy" value', () => {
    const state = filtersReducer(undefined, {
      type: UPDATE_FILTERS,
      payload: { orderBy: '-name' }
    });
    expect(state).toEqual({ ...initialState, orderBy: '-name' });
  });
});
