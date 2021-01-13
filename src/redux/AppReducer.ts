import { AnyAction } from 'redux';
import { ResultMap, Search } from 'redux/AppModel';
import { UpdateSearchActionType } from 'redux/AppActionTypes';
import { ACTION_TYPES } from 'redux/AppActions';

export const SearchReducer = (
  state: Search = new Search(''),
  action: UpdateSearchActionType,
): Search => {
  if (action.type === ACTION_TYPES.UPDATE_SEARCH) {
    return new Search(action.search);
  }

  return state;
};

export const ResultsReducer = (
  state: ResultMap = new ResultMap(),
  action: AnyAction,
): ResultMap => {
  return state;
};
