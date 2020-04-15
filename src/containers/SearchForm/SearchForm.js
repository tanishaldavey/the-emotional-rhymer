import React, { Component } from 'react';
import { getRhymes } from '../../actions';
import { connect } from 'react-redux';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
  }
  updateValue = e => {
    this.setState({ [e.target.name]: e.target.value })
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
  getRhymes: allRhymes => ( getRhymes(allRhymes) )
})

export default connect(null, mapDispatchToProps)(SearchForm);
