import { combineReducers } from 'redux';
import { ResultsReducer, SearchReducer } from 'redux/AppReducer';
import { ResultModel, SearchModel } from 'redux/AppModel';

export type GlobalStateType = {
  searchReducer: SearchModel;
  resultsReducer: ResultModel;
};

const rootReducer = combineReducers({
  searchReducer: SearchReducer,
  resultsReducer: ResultsReducer,
});

export default rootReducer;
