import React from 'react';
import { Link } from 'react-router-dom';
import { findWordDetails } from '../../apiCalls';
import { getWordDetails } from '../../actions';
import { connect } from 'react-redux';
import './Rhymes.css';

const Rhymes = ({ rhyme, getWordDetails }) => {
  const updateWordDetails = () => {
    findWordDetails(rhyme)
      .then(details => {
        const randomIndex = Math.floor(Math.random() * details.results.length)
        console.log(randomIndex)
        getWordDetails(details.results[randomIndex])
      })
  }
  return(
    <Link to='word-details'>
      <li onClick={updateWordDetails}>{rhyme}</li>
    </Link>
  )
}

const mapDispatchToProps = dispatch => ({
  getWordDetails: details => dispatch( getWordDetails(details) )
})

export default connect(null, mapDispatchToProps)(Rhymes);
