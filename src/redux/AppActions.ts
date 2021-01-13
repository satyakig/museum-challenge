import { UpdateSearchActionType } from 'redux/AppActionTypes';

export enum ACTION_TYPES {
  UPDATE_SEARCH = 'UPDATE_SEARCH',
  UPDATE_RESULTS = 'UPDATE_RESULTS',
}

export function updateSearchAction(search: string): UpdateSearchActionType {
  return {
    type: ACTION_TYPES.UPDATE_SEARCH,
    search,
  };
}
