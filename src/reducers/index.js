import { combineReducers } from 'redux';
import { rhymes } from './rhymes';
import { queriedWord } from './queriedWord';

const rootReducer = combineReducers({
  rhymes,
  queriedWord
});

export default rootReducer;
