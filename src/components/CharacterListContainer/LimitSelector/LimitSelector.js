import React from 'react';
import PropTypes from 'prop-types';

import './LimitSelector.scss';

export default function LimitSelector({ limit, onSelectLimit }) {
  return (
    <form className='limit-selector__wrapper'>
      <label className='limit-selector__label'>Characters per page</label>
      <select
        name='limit-selector'
        className='form-control limit-selector'
        value={limit}
        onChange={(e) => onSelectLimit(parseInt(e.target.value, 10))}
      >
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
    </form>
  );
}

LimitSelector.propTypes = {
  limit: PropTypes.number.isRequired,
  onSelectLimit: PropTypes.func.isRequired
};
