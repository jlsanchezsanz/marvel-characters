import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CharacterList from './CharacterList';
import FiltersContainer from './FiltersContainer';
import CharactersPagination from './CharactersPagination';
import { fetchCharacters } from '../../state/actions/characters.actions';
import { selectPage } from '../../state/actions/pagination.actions';

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

  return (
    <div className='container'>
      <FiltersContainer />
      <CharactersPagination
        page={page}
        pages={pages}
        onSelectPage={handleSelectPage}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CharacterList characters={characters} />
      )}
      <CharactersPagination
        page={page}
        pages={pages}
        onSelectPage={handleSelectPage}
      />
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
