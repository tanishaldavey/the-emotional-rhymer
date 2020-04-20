import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { findRhymingWords } from '../../apiCalls';
import { getRhymes, getQueriedWord, getRecentSearches, updateError } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    this.setState({ error: '' })
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
    this.updateRecentSearches()
    this.props.getQueriedWord(this.state.query)
    findRhymingWords(this.state.query)
      .then(data => {
        if (!Array.isArray(data)) {
          this.props.updateError({ data }.data)
        } else {
          this.props.getRhymes(data)
        }
      })
      .then(this.clearInput())
      .catch(error => console.log(error.message))
  }

  updateRecentSearches = () => {
    if (this.props.recentSearches.length === 10) {
      this.props.recentSearches.pop()
      const updatedRecentSearches = [
        this.state.query,
        ...this.props.recentSearches
      ]
      this.props.getRecentSearches(updatedRecentSearches)
    } else {
      const updatedRecentSearches = [
        this.state.query,
        ...this.props.recentSearches
      ]
      this.props.getRecentSearches(updatedRecentSearches)
    }
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
            id='submit'
            type='button'
            onClick={this.validateForm}
          >Submit
          </button>
        </Link>
        <Link to='/recentSearches'>
          <button
            id='recent-searches'
            type='button'
          >Recent Searches
          </button>
        </Link>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  recentSearches: state.recentSearches
})

const mapDispatchToProps = dispatch => ({
  getRhymes: allRhymes => dispatch( getRhymes(allRhymes) ),
  getQueriedWord: word => dispatch( getQueriedWord(word) ),
  getRecentSearches: recentSearchValue =>
    dispatch( getRecentSearches(recentSearchValue) ),
  updateError: error => dispatch( updateError(error) )
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

SearchForm.propTypes = {
  recentSearches: PropTypes.array,
  getRhymes: PropTypes.func,
  getQueriedWord: PropTypes.func,
  getRecentSearches: PropTypes.func,
  updateError: PropTypes.func
}
