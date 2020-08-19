import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import CharacterListContainer from './components/CharacterListContainer';
import CharacterDetailsContainer from './components/CharacterDetailsContainer';

export default function App() {
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
