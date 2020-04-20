import React from 'react';
import RecentSearches from '../RecentSearches/RecentSearches';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './RecentSearchesContainer.css';

const RecentSearchesContainer = ({ recentSearches }) => {
  let key = 0;
  const allRecentSearches = recentSearches.map(search => {
    return <RecentSearches
    key={key +=1}
    recentSearch={search}
    />
  })
  return(
    <section>
      <Link className='container-nav-link' to='/'>
        <p>Home</p>
      </Link>
      {!recentSearches.length ?
      <p>You haven't searched for anything yet.</p> :
      <div>
        <h3 className='recent-searches-h3'>You recently searched for:</h3>
        <ul>
          { allRecentSearches }
        </ul>
      </div>}
    </section>
  )
}

const mapStateToProps = state => ({
  recentSearches: state.recentSearches
})

export default connect(mapStateToProps)(RecentSearchesContainer);

RecentSearchesContainer.propTypes = {
  recentSearches: PropTypes.array
}
