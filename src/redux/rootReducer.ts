import { combineReducers } from 'redux';
import { ResultsReducer, SearchReducer } from 'redux/AppReducer';
import { ResultMap, Search } from 'redux/AppModel';

export type GlobalStateType = {
  searchReducer: Search;
  resultsReducer: ResultMap;
};

const rootReducer = combineReducers({
  searchReducer: SearchReducer,
  resultsReducer: ResultsReducer,
});

export default rootReducer;
