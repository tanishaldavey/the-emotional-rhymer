import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { findRhymingWords } from '../../apiCalls';
import { getRhymes, getQueriedWord } from '../../actions';
import { connect } from 'react-redux';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  updateValue = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit = () => {
    this.props.getQueriedWord(this.state.query)
    findRhymingWords(this.state.query)
      .then(rhymesFound => this.props.getRhymes(rhymesFound))
      .then(this.clearInput())
      .catch(error => console.log(error.message))
  }

  clearInput = () => {
    this.setState({ query: '' })
  }


  render() {
    return(
      <form>
        <input
          type='text'
          placeholder='What word rhymes with...'
          name='query'
          value={this.state.query}
          required
          onChange={this.updateValue}
        />
        <Link to='/rhymes'>
          <button
            type='button'
            onClick={this.submit}
          >Submit
          </button>
        </Link>
        <button
          type='button'
        >Recent Searches
        </button>

      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getRhymes: allRhymes => dispatch( getRhymes(allRhymes) ),
  getQueriedWord: word => dispatch( getQueriedWord(word) )
})

export default connect(null, mapDispatchToProps)(SearchForm);
