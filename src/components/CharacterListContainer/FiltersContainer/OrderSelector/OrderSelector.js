import React from 'react';
import PropTypes from 'prop-types';

export default function OrderSelector({ value, onChange }) {
  return (
    <select
      name='orderBy'
      className='form-control'
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

OrderSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
