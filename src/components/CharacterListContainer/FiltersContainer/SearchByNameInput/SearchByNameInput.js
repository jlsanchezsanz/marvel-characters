import React from 'react';
import PropTypes from 'prop-types';

import './SearchByNameInput.scss'

export default function SearchByNameInput({ onChange }) {
  function handleOnChange(event) {
    const { length } = event.target.value;
    if (length === 0 || length >= 3) {
      onChange(event);
    }
  }

  return (
    <div className='input-group'>
      <input
        className='form-control border-right-0 border'
        type='text'
        name='nameStartsWith'
        autoComplete='off'
        placeholder='Search name'
        onChange={(e) => handleOnChange(e)}
      />
      <span className='input-group-append'>
        <div className='input-group-text'>
          <i className='fa fa-search'></i>
        </div>
      </span>
    </div>
  );
}

SearchByNameInput.propTypes = {
  onChange: PropTypes.func.isRequired
};
