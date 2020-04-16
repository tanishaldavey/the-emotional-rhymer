import React from 'react';
import { connect } from 'react-redux';
import './WordDetailsContainer.css';

const WordDetailsContainer = ({ wordDetails }) => {
  return(
    <section>
    <h3>{wordDetails.word}</h3>
    <p>{wordDetails.partOfSpeech}</p>
    <p>{wordDetails.definition}</p>
    <p>Example of usage:</p>
    {!Array.isArray(wordDetails.examples) && <p>We didn't find a usage example for this particular definition of {wordDetails.word}. Try refreshing the page for an updated definition.</p>}
    <p>{wordDetails.examples}</p>
    </section>
  )
}

const mapStateToProps = state => ({
  wordDetails: state.wordDetails
})

export default connect(mapStateToProps)(WordDetailsContainer)
