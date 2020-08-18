import React from 'react';
import { connect } from 'react-redux';

import CharacterList from './CharacterList';

function CharacterListContainer({ characters, isLoading }) {
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <CharacterList characters={characters} />
  );
}

const mapStateToProps = (state) => ({
  characters: state.charactersReducer.characters,
  isLoading: state.charactersReducer.isLoading
});

export default connect(mapStateToProps)(CharacterListContainer);
