import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CharacterList from './CharacterList';
import { fetchCharacters } from '../../state/actions/characters.actions';

function CharacterListContainer({ characters, isLoading, dispatch, orderBy }) {
  useEffect(() => {
    dispatch(fetchCharacters(orderBy));
  }, [dispatch, orderBy]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <CharacterList characters={characters} />
  );
}

const mapStateToProps = (state) => ({
  characters: state.charactersReducer.characters,
  isLoading: state.charactersReducer.isLoading,
  orderBy: state.filtersReducer.orderBy
});

export default connect(mapStateToProps)(CharacterListContainer);
