import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
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


export default SearchForm;
