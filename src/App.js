import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Spinner from './components/Spinner';

import './App.scss';

const CharacterListContainer = React.lazy(() =>
  import('./components/CharacterListContainer')
);
const CharacterDetailsContainer = React.lazy(() =>
  import('./components/CharacterDetailsContainer')
);

export default function App() {
  return (
    <Router>
      <div className='app-container'>
        <header>
          <Header />
        </header>
        <main className='main'>
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={CharacterListContainer} />
              <Route path='/:id' component={CharacterDetailsContainer} />
            </Suspense>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
