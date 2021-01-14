import axios from 'axios';
import { Dispatch } from 'redux';
import {
  updateObjectDataEndAction,
  updateObjectDataStartAction,
  updateSearchDataEndAction,
  updateSearchDataStartAction,
} from 'redux/AppActions';

enum MUSEUM_URLS {
  BASE = 'https://collectionapi.metmuseum.org',
  SEARCH_PATH = '/public/collection/v1/search?q=',
  OBJECT_PATH = '/public/collection/v1/objects/',
}

function generateSearchUrl(search: string): string {
  return `${MUSEUM_URLS.BASE}${MUSEUM_URLS.SEARCH_PATH}${search}`;
}

function generateObjectUrl(objectId: number): string {
  return `${MUSEUM_URLS.BASE}${MUSEUM_URLS.OBJECT_PATH}${objectId}`;
}

export function getObjectIds(dispatch: Dispatch, search: string): void {
  // url encode the search term
  const url = generateSearchUrl(encodeURIComponent(search));

  dispatch(updateSearchDataStartAction(search));

  axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        const objectIds = response.data.total > 0 ? response.data.objectIDs : [];

        dispatch(updateSearchDataEndAction(search, true, objectIds));
      } else {
        dispatch(updateSearchDataEndAction(search, false, []));
      }
    })
    .catch((error) => {
      console.error(error);
      dispatch(updateSearchDataEndAction(search, false, []));
    });
}

export function getObjectData(dispatch: Dispatch, objectId: number): void {
  const url = generateObjectUrl(objectId);
  dispatch(updateObjectDataStartAction(objectId));

  axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        dispatch(updateObjectDataEndAction(objectId, true, response.data));
      } else {
        dispatch(updateObjectDataEndAction(objectId, false, null));
      }
    })
    .catch((error) => {
      console.error(error);
      dispatch(updateObjectDataEndAction(objectId, false, null));
    });
}
