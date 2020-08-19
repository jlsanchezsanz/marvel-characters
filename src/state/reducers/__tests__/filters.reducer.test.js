import { UPDATE_FILTERS } from '../../actions/types';
import { filtersReducer, initialState } from '../filters.reducer';

describe('filtersReducer', () => {
  it('should return default state', () => {
    const state = filtersReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should update filters', () => {
    const payload = { orderBy: '-name', nameStartsWith: 'spi' };
    const state = filtersReducer(undefined, {
      type: UPDATE_FILTERS,
      payload
    });
    expect(state).toEqual({ ...initialState, ...payload });
  });
});
