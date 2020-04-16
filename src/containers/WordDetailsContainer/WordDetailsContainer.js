import React from 'react';
import { connect } from 'react-redux';
import './WordDetailsContainer.css';

const WordDetailsContainer = (props) => {
  console.log(props);
  return(
    <section>
    </section>
  )
}

const mapStateToProps = state => ({
  wordDetails: state.wordDetails
})

export default connect(mapStateToProps)(WordDetailsContainer)
