import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import SearchForm from '../../containers/SearchForm/SearchForm';
import './HomePageContainer.css';

const HomePageContainer = () => {
  return (
    <section>
      <Navigation />
      <Header />
      <SearchForm />
    </section>
  )
}

export default HomePageContainer;
