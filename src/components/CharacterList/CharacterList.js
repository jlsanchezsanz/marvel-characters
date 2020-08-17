import React from 'react';
import PropTypes from 'prop-types';
import CharacterListItem from './CharacterListItem/CharacterListItem';

export default function CharacterList({ characters }) {
  return (
    <div>
      <ul>
        {characters.map((character) => (
          <CharacterListItem character={character} key={character.id} />
        ))}
      </ul>
    </div>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};
