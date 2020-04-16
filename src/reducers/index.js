import { combineReducers } from 'redux';
import { rhymes } from './rhymes';
import { queriedWord } from './queriedWord';
import { wordDetails } from './wordDetails';
import { recentSearches } from './recentSearch';

const rootReducer = combineReducers({
  rhymes,
  queriedWord,
  wordDetails,
  recentSearches
});

export default rootReducer;
