import React from 'react';
import PropTypes from 'prop-types';

import './SearchByNameInput.scss';

export default function SearchByNameInput({ onChange }) {
  function handleOnKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  function handleOnChange(event) {
    const { length } = event.target.value;
    if (length === 0 || length >= 3) {
      onChange(event);
    }
  }

  return (
    <div className='input-group'>
      <input
        id='search-by-name'
        className='form-control border-right-0 border'
        type='text'
        name='nameStartsWith'
        aria-label='Search name'
        autoComplete='off'
        placeholder='Search name'
        onKeyPress={handleOnKeyPress}
        onChange={handleOnChange}
      />
      <span className='input-group-append'>
        <div className='input-group-text'>
          <img src={require('../../../../assets/search.svg')} alt='Search' />
        </div>
      </span>
    </div>
  );
}

SearchByNameInput.propTypes = {
  onChange: PropTypes.func.isRequired
};
