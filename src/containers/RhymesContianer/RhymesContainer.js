import React from 'react';
import './RhymesContainer.css';
import { connect } from 'react-redux';

const RhymesContainer = () => {

  return(
    <ul>
    </ul>
  )
}

const mapStateToProps = state =({
  rhymes: state.rhymes
})

export default connect(mapStateToProps)(RhymesContainer);
