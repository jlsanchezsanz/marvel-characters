import React from 'react';
import { connect } from 'react-redux';

import { updateFilters } from '../../../state/actions/filters.actions';
import SearchByNameInput from './SearchByNameInput';
import OrderBySelector from './OrderBySelector';

import './FiltersContainer.scss';

function FiltersContainer({ dispatch, orderBy }) {
  function handleFiltersChange(event) {
    const { name, value } = event.target;
    dispatch(updateFilters({ [name]: value }));
  }

  return (
    <form className='filters'>
      <SearchByNameInput onChange={handleFiltersChange} />
      <OrderBySelector value={orderBy} onChange={handleFiltersChange} />
    </form>
  );
}

const mapStateToProps = (state) => ({
  orderBy: state.filters.orderBy
});

export default connect(mapStateToProps)(FiltersContainer);
