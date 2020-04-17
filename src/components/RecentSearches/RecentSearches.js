import React from 'react';
import { Link } from 'react-router-dom';
import './RecentSearches.css';

const RecentSearches = ({ recentSearch }) => {
  return(
    <Link to={`/${recentSearch}/rhymes`}>
    <li>{ recentSearch }</li>
    </Link>
  )
}

export default RecentSearches;
