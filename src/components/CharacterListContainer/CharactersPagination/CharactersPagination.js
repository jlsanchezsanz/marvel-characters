import React from 'react';
import PropTypes from 'prop-types';

import Pagination from './Pagination';

import './CharactersPagination.scss';

export default function CharactersPagination({ page, pages, onSelectPage }) {
  return (
    <div className='pagination__wrapper'>
      <Pagination>
        <Pagination.Prev
          disabled={page === 1}
          onClick={() => onSelectPage(page - 1)}
        />
        {page !== 1 && (
          <Pagination.Item onClick={() => onSelectPage(1)}>1</Pagination.Item>
        )}
        {page > 3 && <Pagination.Ellipsis disabled />}
        {page > 2 && (
          <Pagination.Item onClick={() => onSelectPage(page - 1)}>
            {page - 1}
          </Pagination.Item>
        )}
        <Pagination.Item active>{page}</Pagination.Item>
        {page > 2 && page < pages && page + 1 !== pages && (
          <Pagination.Item onClick={() => onSelectPage(page + 1)}>
            {page + 1}
          </Pagination.Item>
        )}
        {page < pages - 1 && page + 1 !== pages - 1 && (
          <Pagination.Ellipsis disabled />
        )}
        {page < pages && (
          <Pagination.Item onClick={() => onSelectPage(pages)}>
            {pages}
          </Pagination.Item>
        )}
        <Pagination.Next
          disabled={page === pages}
          onClick={() => onSelectPage(page + 1)}
        />
      </Pagination>
    </div>
  );
}

CharactersPagination.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  onSelectPage: PropTypes.func.isRequired
};
