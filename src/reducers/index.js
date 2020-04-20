import { combineReducers } from 'redux';
import { rhymes } from './rhymes';
import { queriedWord } from './queriedWord';
import { wordDetails } from './wordDetails';
import { recentSearches } from './recentSearch';
import { rhymeError } from './rhymeError';
import { wordDetailsError } from './wordDetailsError';

const rootReducer = combineReducers({
  rhymes,
  queriedWord,
  wordDetails,
  recentSearches,
  rhymeError,
  wordDetailsError
});

export default rootReducer;
