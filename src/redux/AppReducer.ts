import { ObjectData, RequestStatus, ResultModel, SearchData, SearchModel } from 'redux/AppModel';
import {
  UpdateObjectDataEndActionType,
  UpdateObjectDataStartActionType,
  UpdateSearchDataEndActionType,
  UpdateSearchDataStartActionType,
  UpdateSearchTermActionType,
} from 'redux/AppActionTypes';
import { ACTION_TYPES } from 'redux/AppActions';

export const SearchReducer = (
  state: SearchModel = new SearchModel(),
  action: UpdateSearchTermActionType,
): SearchModel => {
  if (action.type === ACTION_TYPES.UPDATE_SEARCH) {
    return new SearchModel(action.search);
  }

  return state;
};

export const ResultsReducer = (
  state: ResultModel = new ResultModel(),
  action: UpdateSearchDataStartActionType &
    UpdateSearchDataEndActionType &
    UpdateObjectDataStartActionType &
    UpdateObjectDataEndActionType,
): ResultModel => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_SEARCH_DATA_START:
      const searchMap = state.searchMap;
      searchMap.set(
        action.search,
        new SearchData(action.search, [], new RequestStatus(true, false)),
      );

      return new ResultModel(new Map(searchMap), state.objectsDataMap);

    case ACTION_TYPES.UPDATE_SEARCH_DATA_END:
      const searchMap2 = state.searchMap;

      if (action.success) {
        searchMap2.set(
          action.search,
          new SearchData(action.search, action.objectIds, new RequestStatus(false, true)),
        );

        return new ResultModel(new Map(searchMap2), state.objectsDataMap);
      } else {
        searchMap2.delete(action.search);

        return new ResultModel(new Map(searchMap2), state.objectsDataMap);
      }

    case ACTION_TYPES.UPDATE_OBJECT_DATA_START:
      const objectMap = state.objectsDataMap;
      objectMap.set(
        action.objectId,
        new ObjectData(action.objectId, null, new RequestStatus(true, false)),
      );

      return new ResultModel(state.searchMap, new Map(objectMap));

    case ACTION_TYPES.UPDATE_OBJECT_DATA_END:
      const objectMap2 = state.objectsDataMap;

      if (action.success) {
        objectMap2.set(
          action.objectId,
          new ObjectData(action.objectId, action.data, new RequestStatus(false, true)),
        );

        return new ResultModel(state.searchMap, new Map(objectMap2));
      } else {
        objectMap2.delete(action.objectId);

        return new ResultModel(state.searchMap, new Map(objectMap2));
      }

    default:
      return state;
  }
};
