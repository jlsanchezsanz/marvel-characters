import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import CharacterList from './components/CharacterList';
import { fetchCharacters } from './state/actions/characters.actions';

function App({ dispatch, characters }) {
  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <div className='App'>
      <CharacterList characters={characters} />
    </div>
  );
}

const mapStateToParams = (state) => ({
  characters: state.charactersReducer.characters,
  isLoading: state.charactersReducer.isLoading,
  error: state.charactersReducer.error
});

export default connect(mapStateToParams)(App);
