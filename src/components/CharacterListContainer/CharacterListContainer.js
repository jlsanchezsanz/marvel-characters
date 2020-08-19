import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CharacterList from './CharacterList';
import FiltersContainer from './FiltersContainer';
import { fetchCharacters } from '../../state/actions/characters.actions';

function CharacterListContainer({
  characters,
  isLoading,
  dispatch,
  orderBy,
  nameStartsWith
}) {
  useEffect(() => {
    dispatch(fetchCharacters(orderBy, nameStartsWith));
  }, [dispatch, orderBy, nameStartsWith]);

  return (
    <div>
      <FiltersContainer />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CharacterList characters={characters} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  characters: state.charactersReducer.characters,
  isLoading: state.charactersReducer.isLoading,
  orderBy: state.filtersReducer.orderBy,
  nameStartsWith: state.filtersReducer.nameStartsWith
});

export default connect(mapStateToProps)(CharacterListContainer);
