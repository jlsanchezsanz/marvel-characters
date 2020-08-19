import React from 'react';
import { connect } from 'react-redux';

import { updateFilters } from '../../../state/actions/filters.actions';

function FiltersContainer({ dispatch, orderBy }) {
  function handleFiltersChange(event) {
    dispatch(updateFilters({ orderBy: event.target.value }));
  }

  return (
    <form>
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
