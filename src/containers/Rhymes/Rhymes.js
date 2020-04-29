import React from 'react';
import { Link } from 'react-router-dom';
import { findWordDetails } from '../../apiCalls';
import { getWordDetails, updateError } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Rhymes.scss';

const Rhymes = ({ rhyme, getWordDetails, queriedWord, updateError }) => {
  const updateWordDetails = () => {
    findWordDetails(rhyme, process.env.REACT_APP_API_KEY)
      .then(details => {
        if (typeof details === 'string') {
          updateError(details)
        } else {
          const randomIndex = Math.floor(Math.random() * details.entries[0].lexemes[0].senses.length)
          const modifiedDetails = {
            word: details.entries[0].lexemes[0].lemma,
            partOfSpeech: details.entries[0].lexemes[0].partOfSpeech,
            definition: details.entries[0].lexemes[0].senses[randomIndex].definition,
            examples: details.entries[0].lexemes[0].senses[randomIndex].usageExamples
        }
        getWordDetails(modifiedDetails)
      }

      })
  }

  return(
    <Link to={`/${queriedWord}/rhymes/${rhyme}/word-details`}>
      <li className='rhyme-link' onClick={updateWordDetails}>{rhyme}</li>
    </Link>
  )
}

const mapStateToProps = state => ({
  queriedWord: state.queriedWord
})

const mapDispatchToProps = dispatch => ({
  getWordDetails: details => dispatch( getWordDetails(details) ),
  updateError: error => dispatch( updateError(error) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Rhymes);

Rhymes.propTypes = {
  rhyme: PropTypes.string,
  getWordDetails: PropTypes.func,
  queriedWord: PropTypes.string,
  updateError: PropTypes.func
}
