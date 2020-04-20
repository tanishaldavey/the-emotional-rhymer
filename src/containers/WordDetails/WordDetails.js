import React from 'react';
import NotFound from '../../components/NotFound/NotFound'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './WordDetails.css';

const WordDetails = ({ wordDetails, wordDetailsError }) => {
  return(
    <section>
    {wordDetailsError ? <NotFound /> :
      <section>
        <Link to={`/${wordDetails.word}/rhymes`}>
          <p>Back</p>
        </Link>
        <h3>{wordDetails.word}</h3>
        <p>{wordDetails.partOfSpeech}</p>
        <p>{wordDetails.definition}</p>
        <p>Example of usage:</p>
        {!Array.isArray(wordDetails.examples) && <p>We didn't find a usage example for this particular definition of {wordDetails.word}. Try refreshing the page for an updated definition.</p>}
        <p>{wordDetails.examples}</p>
      </section>
    }
    </section>
  )
}

const mapStateToProps = state => ({
  wordDetails: state.wordDetails,
  wordDetailsError: state.wordDetailsError
})

export default connect(mapStateToProps)(WordDetails)

WordDetails.propTypes = {
  wordDetails: PropTypes.object,
  wordDetailsError: PropTypes.string
}
