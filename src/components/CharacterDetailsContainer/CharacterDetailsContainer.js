import React from 'react';
import { connect } from 'react-redux';

import CharacterDetails from './CharacterDetails';

function CharacterDetailsContainer({ character, isLoading }) {
  return !character ? (
    <p>Loading...</p>
  ) : (
    <CharacterDetails character={character} />
  );
}

const mapStateToProps = (state, ownProps) => ({
  character: state.charactersReducer.characters.find(
    (character) => character.id.toString() === ownProps.match.params.id
  ),
  isLoading: state.charactersReducer.isLoading
});

export default connect(mapStateToProps)(CharacterDetailsContainer);
