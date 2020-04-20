import { combineReducers } from 'redux';
import { rhymes } from './rhymes';
import { queriedWord } from './queriedWord';
import { wordDetails } from './wordDetails';
import { recentSearches } from './recentSearch';
import { error } from './error';

const rootReducer = combineReducers({
  rhymes,
  queriedWord,
  wordDetails,
  recentSearches,
  error
});

export default rootReducer;
