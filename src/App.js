import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CharacterListContainer from './components/CharacterListContainer';
import CharacterDetailsContainer from './components/CharacterDetailsContainer';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';

export default function App() {
  return (
    <Router>
      <div className='app-container'>
        <header>
          <Header />
        </header>
        <main className='main'>
          <Switch>
            <Route exact path='/' component={CharacterListContainer} />
            <Route path='/:id' component={CharacterDetailsContainer} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
