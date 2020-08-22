import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { fetchCharacterDetails } from '../../state/actions/character-details.actions';
import CharacterDetails from './CharacterDetails';

import './CharacterDetailsContainer.scss';

function CharacterDetailsContainer({ character, dispatch }) {
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchCharacterDetails(id));
  }, [dispatch, id]);

  return !character ? (
    <p>Loading...</p>
  ) : (
    <div className='character-details-container__wrapper'>
      <Link to='/' className='character-details-container__back-button'>
        <i className='fa fa-arrow-left'></i>{' '}
        All characters
      </Link>
      <CharacterDetails character={character} />
    </div>
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
