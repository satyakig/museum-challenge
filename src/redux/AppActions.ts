import {
  UpdateObjectDataEndActionType,
  UpdateObjectDataStartActionType,
  UpdateSearchDataEndActionType,
  UpdateSearchDataStartActionType,
  UpdateSearchTermActionType,
  UpdateSelectedItemActionType,
} from 'redux/AppActionTypes';

export enum ACTION_TYPES {
  UPDATE_SELECTED_ITEM = 'UPDATE_SELECTED_ITEM',
  UPDATE_SEARCH = 'UPDATE_SEARCH',

  UPDATE_SEARCH_DATA_START = 'UPDATE_SEARCH_DATA_START',
  UPDATE_SEARCH_DATA_END = 'UPDATE_SEARCH_DATA_END',

  UPDATE_OBJECT_DATA_START = 'UPDATE_OBJECT_DATA_START',
  UPDATE_OBJECT_DATA_END = 'UPDATE_OBJECT_DATA_END',
}

export function updateSelectedItemAction(
  selectedItem: number | null,
): UpdateSelectedItemActionType {
  return {
    type: ACTION_TYPES.UPDATE_SELECTED_ITEM,
    selectedItem,
  };
}

export function updateSearchTermAction(search: string): UpdateSearchTermActionType {
  return {
    type: ACTION_TYPES.UPDATE_SEARCH,
    search,
  };
}

export function updateSearchDataStartAction(search: string): UpdateSearchDataStartActionType {
  return {
    type: ACTION_TYPES.UPDATE_SEARCH_DATA_START,
    search,
  };
}

export function updateSearchDataEndAction(
  search: string,
  success: boolean,
  objectIds: number[],
): UpdateSearchDataEndActionType {
  return {
    type: ACTION_TYPES.UPDATE_SEARCH_DATA_END,
    search,
    success,
    objectIds,
  };
}

export function updateObjectDataStartAction(objectId: number): UpdateObjectDataStartActionType {
  return {
    type: ACTION_TYPES.UPDATE_OBJECT_DATA_START,
    objectId,
  };
}

export function updateObjectDataEndAction(
  objectId: number,
  success: boolean,
  data: Record<string, unknown> | null,
): UpdateObjectDataEndActionType {
  return {
    type: ACTION_TYPES.UPDATE_OBJECT_DATA_END,
    objectId,
    success,
    data,
  };
}
