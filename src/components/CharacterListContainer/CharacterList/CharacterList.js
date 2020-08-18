import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CharacterListItem from './CharacterListItem';

export default function CharacterList({ characters }) {
  return (
    <div>
      <ul>
        {characters.map((character) => (
          <Link to={`/${character.id}`} key={`link-${character.id}`}>
            <CharacterListItem character={character} key={character.id} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};
