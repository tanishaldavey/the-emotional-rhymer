import React from 'react';
import RecentSearches from '../../components/RecentSearches/RecentSearches';
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
      <ul>
        { allRecentSearches }
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  recentSearches: state.recentSearches
})

export default connect(mapStateToProps)(RecentSearchesContainer);
