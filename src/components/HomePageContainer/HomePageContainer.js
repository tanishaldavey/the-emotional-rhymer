import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../../containers/SearchForm/SearchForm';
import './HomePageContainer.scss';

const HomePageContainer = () => {
  return (
    <section className='home-page-container'>
      <Header />
      <SearchForm />
    </section>
  )
}

export default HomePageContainer;
