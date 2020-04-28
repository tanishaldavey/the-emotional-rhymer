import React from 'react';
import NotFound from '../../components/NotFound/NotFound'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './WordDetails.scss';

const WordDetails = ({ wordDetails, errorMessage }) => {
  return(
    <section>
    {errorMessage ? <NotFound /> :
      <section className='word-details-container'>
        <Link className='page-nav-link' id='word-details-nav' to={`/${wordDetails.word}/rhymes`}>
          <p>Back</p>
        </Link>
        <div className='word-details'>
          <h3>{wordDetails.word}</h3>
          <h4>{wordDetails.partOfSpeech}</h4>
          <p>{wordDetails.definition}</p>
          <h4>Example of usage:</h4>
          {!Array.isArray(wordDetails.examples) && <p>We didn't find a usage example for this particular definition of {wordDetails.word}. Try refreshing the page for an updated definition.</p>}
          <p>{wordDetails.examples}</p>
        </div>
      </section>
    }
    </section>
  )
}

const mapStateToProps = state => ({
  wordDetails: state.wordDetails,
  errorMessage: state.errorMessage
})

export default connect(mapStateToProps)(WordDetails)

WordDetails.propTypes = {
  wordDetails: PropTypes.object,
  errorMessage: PropTypes.string
}
