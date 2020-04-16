import React from 'react';
import { connect } from 'react-redux';
import './WordDetailsContainer.css';

const WordDetailsContainer = (props) => {
  return(
    <section>
    <p>I am here.</p>
      <p>{props.wordDetails.partOfSpeech}</p>
      <p>{props.wordDetails.definition}</p>
      <p>Example of usage:</p>
      <p>{props.wordDetails.examples}</p>
    </section>
  )
}

const mapStateToProps = state => ({
  wordDetails: state.wordDetails
})

export default connect(mapStateToProps)(WordDetailsContainer)
