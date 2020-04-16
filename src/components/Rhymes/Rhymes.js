import React from 'react';
import { Link } from 'react-router-dom';
import { getWordDetails } from '../../actions';
import { connect } from 'react-redux';
import './Rhymes.css';

const Rhymes = ({ rhyme }) => {
  return(
    <Link to='word-details'>
      <li>{rhyme}</li>
    </Link>
  )
}

const mapDispatchToProps = dispatch => ({
  getWordDetails: details => dispatch( getWordDetails(details) )
})

export default connect(null, mapDispatchToProps)(Rhymes);
