import React from 'react';
import PropTypes from 'prop-types';

import './CharacterListItem.scss'

export default function CharacterListItem({ character }) {
  return (
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
  );
}

CharacterListItem.propTypes = {
  character: PropTypes.object.isRequired
};
