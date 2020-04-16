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
      query: '',
      error: ''
    }
  }

  updateValue = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  validateForm = e => {
    if (this.state.query === '') {
      e.preventDefault();
      this.setState({ error: 'Form must be filled out to begin a search.' })
    } else {
      this.setState({ error: '' })
      this.submit();
    }
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
      {this.state.error && <p>{this.state.error}</p>}
        <input
          type='text'
          placeholder='What word rhymes with...'
          name='query'
          value={this.state.query}
          required
          onChange={this.updateValue}
        />
        <Link to={`/${this.state.query}/rhymes`}>
          <button
            type='button'
            onClick={this.validateForm}
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
