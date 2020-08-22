import {
  SELECT_LIMIT,
  SELECT_PAGE,
  UPDATE_PAGINATION
} from '../../actions/types';
import { paginationReducer, initialState } from '../pagination.reducer';

describe('paginationReducer', () => {
  it('should return default state', () => {
    const state = paginationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should update pagination info', () => {
    const state = paginationReducer(
      { ...initialState, limit: 3 },
      {
        type: UPDATE_PAGINATION,
        payload: 10
      }
    );
    expect(state).toEqual({
      ...initialState,
      pages: 4,
      total: 10,
      limit: 3
    });
  });

  it('should update selected page', () => {
    const payload = 3;
    const state = paginationReducer(initialState, {
      type: SELECT_PAGE,
      payload
    });
    expect(state).toEqual({ ...initialState, page: 3 });
  });

  it('should reset to initial state and update limit', () => {
    const payload = 50;
    const state = paginationReducer(
      { ...initialState, page: 2, pages: 10 },
      {
        type: SELECT_LIMIT,
        payload
      }
    );
    expect(state).toEqual({ ...initialState, limit: 50 });
  });
});
