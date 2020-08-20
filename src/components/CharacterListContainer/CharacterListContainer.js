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
    <div className='container'>
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
  characters: state.characters.characters,
  isLoading: state.characters.isLoading,
  orderBy: state.filters.orderBy,
  nameStartsWith: state.filters.nameStartsWith
});

export default connect(mapStateToProps)(CharacterListContainer);
