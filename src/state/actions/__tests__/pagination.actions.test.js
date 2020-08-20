import {
  selectLimit,
  selectPage,
  updatePagination
} from '../pagination.actions';
import { SELECT_LIMIT, SELECT_PAGE, UPDATE_PAGINATION } from '../types';

describe('Pagination Actions', () => {
  const payload = { pages: 10, total: 100 };
  const updateAction = {
    type: UPDATE_PAGINATION,
    payload
  };
  const selectPageAction = {
    type: SELECT_PAGE,
    payload: 3
  };
  const selectLimitAction = {
    type: SELECT_LIMIT,
    payload: 20
  };

  it('should create an action to update pagination', () => {
    expect(updatePagination(payload)).toEqual(updateAction);
  });

  it('should create an action to select page', () => {
    expect(selectPage(3)).toEqual(selectPageAction);
  });

  it('should create an action to select limit', () => {
    expect(selectLimit(20)).toEqual(selectLimitAction);
  });
});
