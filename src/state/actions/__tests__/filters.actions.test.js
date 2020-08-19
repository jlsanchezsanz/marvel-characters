import { updateFilters } from '../filters.actions';
import { UPDATE_FILTERS } from '../types';

describe('Filters Actions', () => {
  const updateAction = {
    type: UPDATE_FILTERS
  };

  it('should create an action to update filters', () => {
    expect(updateFilters()).toEqual(updateAction);
  });
});
