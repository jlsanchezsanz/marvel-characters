import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { fetchCharacterDetails } from '../../state/actions/character-details.actions';
import CharacterDetails from './CharacterDetails';
import Error from '../Error';
import Spinner from '../Spinner';

import './CharacterDetailsContainer.scss';

function CharacterDetailsContainer({
  character,
  characterFromList,
  dispatch,
  isLoading,
  error
}) {
  let { id } = useParams();

  useEffect(() => {
    if (!characterFromList) {
      dispatch(fetchCharacterDetails(id));
    }
  }, [dispatch, id, characterFromList]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='character-details-container__wrapper container'>
      <Link to='/' className='character-details-container__back-button'>
        <img
          width='30'
          height='auto'
          src={require('../../assets/arrow-left-short.svg')}
          alt='Back'
        />{' '}
        All characters
      </Link>
      {error ? (
        <Error message={error.message} />
      ) : (
        character && <CharacterDetails character={character} />
      )}
    </div>
  );
}

function getCharacterFromList(state, id) {
  return state.characters.characters.find(
    (character) => character.id.toString() === id
  );
}

const mapStateToProps = (state, ownProps) => {
  const characterFromList = getCharacterFromList(
    state,
    ownProps.match.params.id
  );
  return {
    character: characterFromList || state.characterDetails.characterDetails,
    characterFromList,
    isLoading: state.characterDetails.isLoading,
    error: state.characterDetails.error
  };
};

export default connect(mapStateToProps)(CharacterDetailsContainer);
