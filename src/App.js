import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CharacterListContainer from './components/CharacterListContainer';
import CharacterDetailsContainer from './components/CharacterDetailsContainer';
import Header from './components/Header';

import './App.scss';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={CharacterListContainer} />
            <Route path='/:id' component={CharacterDetailsContainer} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
