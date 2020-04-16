import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import SearchForm from '../../containers/SearchForm/SearchForm'
import RhymesContainer from '../../containers/RhymesContianer/RhymesContainer';
import WordDetailsContainer from '../../containers/WordDetailsContainer/WordDetailsContainer';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main className="App">
      <Navigation />
      <Header />
      <SearchForm />
      <Route path='/:word/rhymes' render={() => <RhymesContainer />} />
      <Route path='/:word/rhymes/:otherWord/word-details' render={() => <WordDetailsContainer />} />
    </main>
  );
}

export default App;
