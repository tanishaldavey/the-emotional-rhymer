import { combineReducers } from 'redux';
import { rhymes } from './rhymes';
import { queriedWord } from './queriedWord';
import { wordDetails } from './wordDetails';

const rootReducer = combineReducers({
  rhymes,
  queriedWord,
  wordDetails
});

export default rootReducer;
