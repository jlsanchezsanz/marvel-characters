import { SELECT_LIMIT, SELECT_PAGE, UPDATE_PAGINATION } from '../actions/types';

export const initialState = {
  pages: 0,
  page: 1,
  limit: 20,
  total: 0
};

function generatePages(limit, total) {
  const pages = Math.ceil(total / limit);
  return pages;
}

export function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PAGINATION:
      const total = action.payload;
      return {
        ...state,
        pages: generatePages(state.limit, total),
        total
      };
    case SELECT_PAGE:
      return { ...state, page: action.payload };
    case SELECT_LIMIT:
      return { ...state, limit: action.payload };
    default:
      return state;
  }
}
