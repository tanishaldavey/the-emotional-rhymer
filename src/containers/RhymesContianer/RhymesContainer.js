import React from 'react';
import Rhymes from '../Rhymes/Rhymes';
import NotFound from '../../components/NotFound/NotFound';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './RhymesContainer.css';

const RhymesContainer = ({ rhymes, queriedWord, error }) => {
  const allRhymes = rhymes.map(rhyme => {
    return <Rhymes
      key={rhyme.score}
      rhyme={rhyme.word}
    />
  })

  return(
    <section>
    {error ? <NotFound /> :
      <section>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <h3>{ `${queriedWord}` }</h3>
        {!rhymes.length && <p data-testid='no-rhymes-message'>There are no rhymes related to <span>emotion</span> for that word.</p>}
        <ul>
          { allRhymes }
        </ul>
      </section>
    }
    </section>
  )
}

const mapStateToProps = state => ({
  rhymes: state.rhymes,
  queriedWord: state.queriedWord,
  error: state.error
})

export default connect(mapStateToProps)(RhymesContainer);

RhymesContainer.propTypes = {
  rhymes: PropTypes.array,
  queriedWord: PropTypes.string,
  error: PropTypes.string
}
