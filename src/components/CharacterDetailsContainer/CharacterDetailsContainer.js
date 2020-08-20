import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchCharacterDetails } from '../../state/actions/character-details.actions';
import CharacterDetails from './CharacterDetails';

function CharacterDetailsContainer({ character, dispatch }) {
  let { id } = useParams();

  useEffect(() => {
    if (!character) {
      dispatch(fetchCharacterDetails(id));
    }
  }, [dispatch, id, character]);

  return !character ? (
    <p>Loading...</p>
  ) : (
    <CharacterDetails character={character} />
  );
}

function getCharacterFromDetails(state) {
  return state.characterDetails.characterDetails;
}

function getCharacterFromList(state, id) {
  return state.characters.characters.find(
    (character) => character.id.toString() === id
  );
}

const mapStateToProps = (state, ownProps) => ({
  character:
    getCharacterFromDetails(state) ||
    getCharacterFromList(state, ownProps.match.params.id),
  isLoading: state.characterDetails.isLoading
});

export default connect(mapStateToProps)(CharacterDetailsContainer);
