import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { fetchCharacterDetails } from '../../state/actions/character-details.actions';
import CharacterDetails from './CharacterDetails';
import Error from '../Error';
import Spinner from '../Spinner';

import './CharacterDetailsContainer.scss';

function CharacterDetailsContainer({ character, dispatch, isLoading, error }) {
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchCharacterDetails(id));
  }, [dispatch, id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='character-details-container__wrapper container'>
      <Link to='/' className='character-details-container__back-button'>
        <i className='fa fa-arrow-left'></i> All characters
      </Link>
      {error ? (
        <Error message={error.message} />
      ) : (
        <CharacterDetails character={character} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  character: state.characterDetails.characterDetails,
  isLoading: state.characterDetails.isLoading,
  error: state.characterDetails.error
});

export default connect(mapStateToProps)(CharacterDetailsContainer);
