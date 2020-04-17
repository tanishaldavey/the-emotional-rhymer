import React from 'react';
import Rhymes from '../Rhymes/Rhymes';
import { Link } from 'react-router-dom';
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
      <Link to='/'>
        <p>Home</p>
      </Link>
      <h3>{ queriedWord }</h3>
      {!rhymes.length && <p>There are no rhymes related to <span>emotion</span> for that word.</p>}
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
