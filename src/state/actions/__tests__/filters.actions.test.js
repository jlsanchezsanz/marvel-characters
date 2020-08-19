import { updateFilters } from '../filters.actions';
import { UPDATE_FILTERS } from '../types';

describe('Filters Actions', () => {
  const payload = { orderBy: 'name' };
  const updateAction = {
    type: UPDATE_FILTERS,
    payload
  };

  it('should create an action to update filters', () => {
    expect(updateFilters(payload)).toEqual(updateAction);
  });
});
