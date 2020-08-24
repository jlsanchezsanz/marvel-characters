import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterDetails({ character }) {
  return (
    <div className='card mb-3'>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            className='card-img'
            alt={character.name}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h1 className='card-title'>{character.name}</h1>
            <p className='card-text'>
              {character.description || 'No description available.'}
            </p>
            <p className='card-text'>
              <small className='text-muted'>
                Last updated {new Date(character.modified).toLocaleString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

CharacterDetails.propTypes = {
  character: PropTypes.object.isRequired
};
