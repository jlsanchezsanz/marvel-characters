import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CharacterList from './CharacterList';
import FiltersContainer from './FiltersContainer';
import LimitSelector from './LimitSelector';
import CharactersPagination from './CharactersPagination';
import Error from '../Error';
import Spinner from '../Spinner';
import { fetchCharacters } from '../../state/actions/characters.actions';
import {
  selectPage,
  selectLimit
} from '../../state/actions/pagination.actions';
import useDebounce from '../../hooks/useDebounce';

import './CharacterListContainer.scss';

function CharacterListContainer({
  characters,
  error,
  isLoading,
  dispatch,
  filters,
  pagination
}) {
  const { orderBy, nameStartsWith } = filters;
  const { page, pages, limit } = pagination;

  const debouncedNameStartsWith = useDebounce(nameStartsWith, 500);

  useEffect(() => {
    dispatch(fetchCharacters(orderBy, debouncedNameStartsWith, page, limit));
  }, [dispatch, orderBy, debouncedNameStartsWith, page, limit]);

  function handleSelectPage(page) {
    dispatch(selectPage(page));
  }

  function handleSelectLimit(limit) {
    dispatch(selectLimit(limit));
  }

  return (
    <div className='container'>
      Helllooooooooo
      <h1>Marvel characters list</h1>
      <FiltersContainer />
      <div className='characters-list__row characters-list__row--space-between'>
        <div className='characters-list__total'>
          {!!characters.length && `Showing ${pagination.total} results`}
        </div>
        <CharactersPagination
          page={page}
          pages={pages}
          onSelectPage={handleSelectPage}
        />
      </div>
      {error && <Error message={error.message} />}
      {isLoading && <Spinner />}
      {!isLoading && !error && nameStartsWith && !characters.length ? (
        <p>
          <em>No results match your criteria.</em>
        </p>
      ) : (
        <CharacterList characters={characters} />
      )}
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
  error: state.characters.error,
  isLoading: state.characters.isLoading,
  filters: state.filters,
  pagination: state.pagination
});

export default connect(mapStateToProps)(CharacterListContainer);
