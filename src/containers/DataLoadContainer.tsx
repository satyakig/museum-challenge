import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStateType } from 'redux/rootReducer';
import { getObjectData, getObjectIds } from 'lib/GetData';

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
        getObjectData(dispatch, objectId);
      }
    }
  }, [dispatch, searchMap, objectDataMap]);

  return <div />;
}

export default DataLoadContainer;
