import React from 'react';
import { connect } from 'react-redux';

import { updateFilters } from '../../../state/actions/filters.actions';
import OrderSelector from './OrderSelector/OrderSelector';

import './FiltersContainer.scss';

function FiltersContainer({ dispatch, orderBy }) {
  function handleNameStartsWithChange(event) {
    const { length } = event.target.value;
    if (length === 0 || length >= 3) {
      handleFiltersChange(event);
    }
  }

  function handleFiltersChange(event) {
    const { name, value } = event.target;
    dispatch(updateFilters({ [name]: value }));
  }

  return (
    <form className='filters'>
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
      <div className='filters__order-by'>
        <OrderSelector value={orderBy} onChange={handleFiltersChange} />
      </div>
    </form>
  );
}

const mapStateToProps = (state) => ({
  orderBy: state.filters.orderBy
});

export default connect(mapStateToProps)(FiltersContainer);
