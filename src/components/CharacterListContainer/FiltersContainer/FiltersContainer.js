import React from 'react';
import { connect } from 'react-redux';

import { updateFilters } from '../../../state/actions/filters.actions';

function FiltersContainer({ dispatch, orderBy }) {
  function handleNameStartsWithChange(event) {
    if (event.target.value.length >= 3) {
      handleFiltersChange(event);
    }
  }

  function handleFiltersChange(event) {
    const { name, value } = event.target;
    dispatch(updateFilters({ [name]: value }));
  }

  return (
    <form>
      <div className='input-group'>
        <input
          className='form-control border-right-0 border'
          type='text'
          name='nameStartsWith'
          autoComplete='off'
          placeholder='Search name'
          onChange={handleNameStartsWithChange}
        />
        <span className='input-group-append'>
          <div className='input-group-text'>
            <i className='fa fa-search'></i>
          </div>
        </span>
      </div>
      <select
        name='orderBy'
        className='form-control'
        onChange={handleFiltersChange}
        value={orderBy}
      >
        <option value='name'>A-Z</option>
        <option value='-name'>Z-A</option>
      </select>
    </form>
  );
}

const mapStateToProps = (state) => ({
  orderBy: state.filtersReducer.orderBy
});

export default connect(mapStateToProps)(FiltersContainer);