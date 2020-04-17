import React from 'react';
import RecentSearches from '../../components/RecentSearches/RecentSearches';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
      <Link to='/'>
        <p>Home</p>
      </Link>
      {!recentSearches.length ?
      <p>You haven't searched for anything yet.</p> :
      <div>
        <h3>You recently searched for:</h3>
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
