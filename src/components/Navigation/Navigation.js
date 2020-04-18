import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return(
    <nav>
      <ul>
      <Link to='/'>
        <li>About</li>
      </Link>
      <Link to='/'>
        <li>Contact</li>
      </Link>
      </ul>
    </nav>
  )
}

export default Navigation;
