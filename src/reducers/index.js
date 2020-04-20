import { combineReducers } from 'redux';
import { rhymes } from './rhymes';
import { queriedWord } from './queriedWord';
import { wordDetails } from './wordDetails';
import { recentSearches } from './recentSearch';
import { errorMessage } from './errorMessage';


const rootReducer = combineReducers({
  rhymes,
  queriedWord,
  wordDetails,
  recentSearches,
  errorMessage
});

export default rootReducer;
