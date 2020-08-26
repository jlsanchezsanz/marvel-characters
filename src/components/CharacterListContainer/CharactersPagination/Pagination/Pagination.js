import React from 'react';

import PageItem, {
  First,
  Prev,
  Ellipsis,
  Next,
  Last
} from './PageItem/PageItem';

function Pagination({ children }) {
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>{children}</ul>
    </nav>
  );
}

Pagination.First = First;
Pagination.Prev = Prev;
Pagination.Ellipsis = Ellipsis;
Pagination.Item = PageItem;
Pagination.Next = Next;
Pagination.Last = Last;

export default Pagination;
