import { UPDATE_FILTERS } from '../../actions/types';
import { filtersReducer, initialState } from '../filters.reducer';

describe('filtersReducer', () => {
  it('should return default state', () => {
    const state = filtersReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should set "sortBy" value', () => {
    const state = filtersReducer(undefined, {
      type: UPDATE_FILTERS,
      payload: { sortBy: '-name' }
    });
    expect(state).toEqual({ ...initialState, sortBy: '-name' });
  });
});
