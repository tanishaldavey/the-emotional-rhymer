import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import SearchForm from '../../containers/SearchForm/SearchForm';
import './HomePageContainer.scss';

const HomePageContainer = () => {
  return (
    <section className='home-page-container'>
      <Navigation />
      <Header />
      <SearchForm />
    </section>
  )
}

export default HomePageContainer;
