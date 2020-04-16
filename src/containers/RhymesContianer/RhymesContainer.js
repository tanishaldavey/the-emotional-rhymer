import React from 'react';
import Rhymes from '../../components/Rhymes/Rhymes';
import './RhymesContainer.css';
import { connect } from 'react-redux';

const RhymesContainer = ({ rhymes, queriedWord }) => {
  const allRhymes = rhymes.map(rhyme => {
    return <Rhymes
      key={rhyme.score}
      rhyme={rhyme.word}
    />
  })

  return(
    <section>
      <h3>{ queriedWord }</h3>
      <ul>
        { allRhymes }
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  rhymes: state.rhymes,
  queriedWord: state.queriedWord
})

export default connect(mapStateToProps)(RhymesContainer);
