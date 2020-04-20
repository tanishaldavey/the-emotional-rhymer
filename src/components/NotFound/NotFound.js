import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {

  return(
    <section className='not-found'>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <p>We can't find the page you're looking for.</p>
    </section>
  )
}

export default NotFound;
