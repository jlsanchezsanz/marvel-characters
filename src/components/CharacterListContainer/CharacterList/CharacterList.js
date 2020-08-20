import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CharacterListItem from './CharacterListItem';

import './CharacterList.scss';

export default function CharacterList({ characters }) {
  return (
    <ul className='character-list'>
      {characters.map((character) => (
        <li key={character.id} className='character-list__item'>
          <Link to={`/${character.id}`}>
            <CharacterListItem character={character} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};
