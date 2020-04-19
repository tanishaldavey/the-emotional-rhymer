import React from 'react';
import { Link } from 'react-router-dom';
import { findWordDetails } from '../../apiCalls';
import { getWordDetails } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Rhymes.css';

const Rhymes = ({ rhyme, getWordDetails, queriedWord }) => {
  const updateWordDetails = () => {
    findWordDetails(rhyme)
      .then(details => {
        const randomIndex = Math.floor(Math.random() * details.results.length)
        const modifiedDetails = {
          word: details.word,
          partOfSpeech: details.results[randomIndex].partOfSpeech,
          definition: details.results[randomIndex].definition,
          examples: details.results[randomIndex].examples
        }
        getWordDetails(modifiedDetails)
      })
  }
  return(
    <Link to={`/${queriedWord}/rhymes/${rhyme}/word-details`}>
      <li onClick={updateWordDetails}>{rhyme}</li>
    </Link>
  )
}

const mapStateToProps = state => ({
  queriedWord: state.queriedWord
})

const mapDispatchToProps = dispatch => ({
  getWordDetails: details => dispatch( getWordDetails(details) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Rhymes);

Rhymes.propTypes = {
  rhyme: PropTypes.string,
  getWordDetails: PropTypes.func,
  queriedWord: PropTypes.string
}
