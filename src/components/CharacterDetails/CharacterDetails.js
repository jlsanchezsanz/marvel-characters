import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterDetails({ character }) {
  return (
    <>
      {character && (
        <div className='card'>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            className='card-img-top'
            alt={character.name}
          />
          <div className='card-body'>
            <h5 className='card-title'>{character.name}</h5>
          </div>
        </div>
      )}
    </>
  );
}

CharacterDetails.propTypes = {
  character: PropTypes.object.isRequired
};
