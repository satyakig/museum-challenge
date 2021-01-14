import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStateType } from 'redux/rootReducer';
import { getObjectData, getObjectIds } from 'lib/GetData';

/**
 * This is a helper container that makes requests to the Museum API
 * @constructor
 */
function DataLoadContainer(): JSX.Element {
  const dispatch = useDispatch();
  const search = useSelector((state: GlobalStateType) => {
    return state.searchReducer.search;
  });
  const searchMap = useSelector((state: GlobalStateType) => {
    return state.resultsReducer.searchMap;
  });
  const objectDataMap = useSelector((state: GlobalStateType) => {
    return state.resultsReducer.objectsDataMap;
  });

  // Check whether the search string has already been loaded from the Museum api
  // This is checked against previously loaded search strings which is saved in `state.resultsReducer.searchMap`
  // Only try to load this search term, if it has not been requested already
  useEffect(() => {
    if (search.length > 0) {
      const searchData = searchMap.get(search);

      if (
        searchData === undefined ||
        (!searchData.requestStatus.completed && !searchData.requestStatus.executing)
      ) {
        getObjectIds(dispatch, search);
      }
    }
  }, [dispatch, search, searchMap]);

  // Gets a list of all the objectIds available for ANY search term
  // Checks each objectId against the `state.resultsReducer.objectDataMap` to verify whether its data exists
  // Only try to load the object data, if it does not exist
  useEffect(() => {
    const objectIds = Array.from(searchMap.values()).flatMap((entry) => {
      return entry.objectIds;
    });

    for (const objectId of objectIds) {
      const objectData = objectDataMap.get(objectId);
      if (
        objectData === undefined ||
        (!objectData.requestStatus.completed && !objectData.requestStatus.executing)
      ) {
        // TODO: Throttle this?
        getObjectData(dispatch, objectId);
      }
    }
  }, [dispatch, searchMap, objectDataMap]);

  return <div />;
}

export default DataLoadContainer;
