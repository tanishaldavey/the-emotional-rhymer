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
        const randomIndex = Math.floor(Math.random() * details.entries[0].lexemes[0].senses.length)
        console.log(randomIndex);
        const modifiedDetails = {
          word: details.entries[0].lexemes[0].lemma,
          partOfSpeech: details.entries[0].lexemes[0].partOfSpeech,
          definition: details.entries[0].lexemes[0].senses[randomIndex].definition,
          examples: details.entries[0].lexemes[0].senses[randomIndex].usageExamples
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
