import React from 'react';
import Rhymes from '../../components/Rhymes/Rhymes';
import './RhymesContainer.css';
import { connect } from 'react-redux';

const RhymesContainer = ({ rhymes }) => {
  const allRhymes = rhymes.map(rhyme => {
    return <Rhymes
      key={rhyme.score}
      rhyme={rhyme.word}
    />
  })

  return(
    <ul>
      { allRhymes }
    </ul>
  )
}

const mapStateToProps = state => ({
  rhymes: state.rhymes
})

export default connect(mapStateToProps)(RhymesContainer);
