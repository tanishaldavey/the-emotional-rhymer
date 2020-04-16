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
    <p>{wordDetails.examples}</p>
    </section>
  )
}

const mapStateToProps = state => ({
  wordDetails: state.wordDetails
})

export default connect(mapStateToProps)(WordDetailsContainer)
