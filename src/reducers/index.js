import { combineReducers } from 'redux';
import { rhymes } from './rhymes';
import { queriedWord } from './queriedWord';
import { wordDetails } from './wordDetails';
import { recentSearches } from './recentSearch';
import { errorMessage } from './errorMessage';
import { isLoaded } from './isLoaded';


const rootReducer = combineReducers({
  rhymes,
  queriedWord,
  wordDetails,
  recentSearches,
  errorMessage,
  isLoaded
});

export default rootReducer;
