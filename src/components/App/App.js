import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import SearchForm from '../../containers/SearchForm/SearchForm'
import './App.css';

function App() {
  return (
    <main className="App">
      <Navigation />
      <Header />
      <SearchForm />
    </main>
  );
}

export default App;
