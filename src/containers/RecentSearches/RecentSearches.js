import React from 'react';
import { Link } from 'react-router-dom';
import { findRhymingWords } from '../../apiCalls';
import { getRhymes, getQueriedWord } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './RecentSearches.scss';

const RecentSearches = ({ recentSearch, getQueriedWord, getRhymes }) => {
  const findRhymes = () => {
    getQueriedWord(recentSearch)
    findRhymingWords(recentSearch)
      .then(rhymesFound => getRhymes(rhymesFound))
  }

  return(
    <Link to={`/${recentSearch}/rhymes`}>
      <li onClick={findRhymes}>{ recentSearch }</li>
    </Link>
  )
}

const mapDispatchToProps = dispatch => ({
  getRhymes: allRhymes => dispatch( getRhymes(allRhymes) ),
  getQueriedWord: word => dispatch( getQueriedWord(word) )
})

export default connect(null, mapDispatchToProps)(RecentSearches);

RecentSearches.propTypes = {
  recentSearch: PropTypes.string,
  getQueriedWord: PropTypes.func,
  getRhymes: PropTypes.func
};
