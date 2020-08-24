import React from 'react';
import PropTypes from 'prop-types';

import './OrderBySelector.scss'

export default function OrderBySelector({ value, onChange }) {
  return (
    <select
      name='orderBy'
      className='form-control order-by-selector'
      onChange={onChange}
      value={value}
    >
      <option value='name'>Name Asc</option>
      <option value='-name'>Name Desc</option>
      <option value='modified'>Modified Asc</option>
      <option value='-modified'>Modified Desc</option>
    </select>
  );
}

OrderBySelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
