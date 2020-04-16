import React, { Component } from 'react';
import { findRhymingWords } from '../../apiCalls';
import { getRhymes } from '../../actions';
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
        <button
          type='button'
          onClick={this.submit}
        >Submit
        </button>
        <button
          type='button'
        >Recent Searches
        </button>

      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getRhymes: allRhymes => dispatch( getRhymes(allRhymes) )
})

export default connect(null, mapDispatchToProps)(SearchForm);
