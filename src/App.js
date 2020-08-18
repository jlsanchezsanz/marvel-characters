import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { fetchCharacters } from './state/actions/characters.actions';
import CharacterListContainer from './components/CharacterListContainer';
import CharacterDetailsContainer from './components/CharacterDetailsContainer';

function App({ dispatch, characters }) {
  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={CharacterListContainer} />
          <Route path='/:id' component={CharacterDetailsContainer} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToParams = (state) => ({
  characters: state.charactersReducer.characters,
  isLoading: state.charactersReducer.isLoading,
  error: state.charactersReducer.error
});

export default connect(mapStateToParams)(App);
