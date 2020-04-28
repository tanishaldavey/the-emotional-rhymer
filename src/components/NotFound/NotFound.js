import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error.svg';
import './NotFound.scss';

const NotFound = () => {

  return(
    <section className='not-found'>
      <Link className='page-nav-link' to='/'>
        <p>Home</p>
      </Link>
      <div>
        <img src={error} alt='error icon'/>
        <p>We can't find the page you're looking for.</p>
      </div>
    </section>
  )
}

export default NotFound;
