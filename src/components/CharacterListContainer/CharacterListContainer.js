import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CharacterList from './CharacterList';
import FiltersContainer from './FiltersContainer';
import LimitSelector from './LimitSelector';
import CharactersPagination from './CharactersPagination';
import Spinner from '../Spinner';
import { fetchCharacters } from '../../state/actions/characters.actions';
import {
  selectPage,
  selectLimit
} from '../../state/actions/pagination.actions';

import './CharacterListContainer.scss';

function CharacterListContainer({
  characters,
  isLoading,
  dispatch,
  filters,
  pagination
}) {
  const { orderBy, nameStartsWith } = filters;
  const { page, pages, limit } = pagination;

  useEffect(() => {
    dispatch(fetchCharacters(orderBy, nameStartsWith, page, limit));
  }, [dispatch, orderBy, nameStartsWith, page, limit]);

  function handleSelectPage(page) {
    dispatch(selectPage(page));
  }

  function handleSelectLimit(limit) {
    dispatch(selectLimit(limit));
  }

  return (
    <div className='container'>
      <FiltersContainer />
      <CharactersPagination
        page={page}
        pages={pages}
        onSelectPage={handleSelectPage}
      />
      {isLoading ? <Spinner /> : <CharacterList characters={characters} />}
      <div className='characters-list__row'>
        <LimitSelector limit={limit} onSelectLimit={handleSelectLimit} />
        <CharactersPagination
          page={page}
          pages={pages}
          onSelectPage={handleSelectPage}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  characters: state.characters.characters,
  isLoading: state.characters.isLoading,
  filters: state.filters,
  pagination: state.pagination
});

export default connect(mapStateToProps)(CharacterListContainer);
