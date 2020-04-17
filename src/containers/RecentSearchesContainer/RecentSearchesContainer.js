import React from 'react';
import { connect } from 'react-redux';
import './RecentSearchesContainer.css';

const RecentSearchesContainer = () => {
  return(
    <section>
      <ul>
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  recentSearches: state.recentSearches
})

export default connect(mapStateToProps)(RecentSearchesContainer);
