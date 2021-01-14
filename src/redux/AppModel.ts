/**
 * Holds information about the status of a request
 * Whether it is executing, or is completed
 */
export class RequestStatus {
  executing;
  completed;

  constructor(executing: boolean, completed: boolean) {
    this.executing = executing;
    this.completed = completed;
  }
}

/**
 * The data associated with a search term
 * The data is what we receive from the museum API (aka just objectIds)
 * Also holds its request status
 */
export class SearchData {
  search: string;
  objectIds: number[]; // objectIds for this search term
  requestStatus: RequestStatus;

  constructor(search: string, objectIds: number[], requestStatus: RequestStatus) {
    this.search = search;
    this.objectIds = objectIds;
    this.requestStatus = requestStatus;
  }
}

/**
 * The data associated with a objectId
 * The data is the full object that is being returned from the museum API
 * Also holds its request status
 */
export class ObjectData {
  objectId: number;
  data: Record<string, unknown> | null; // the data for this objectId
  requestStatus: RequestStatus;

  constructor(
    objectId: number,
    data: Record<string, unknown> | null,
    requestStatus: RequestStatus,
  ) {
    this.objectId = objectId;
    this.requestStatus = requestStatus;
    this.data = data;
  }
}

export class SearchModel {
  search: string;
  selectedItem: number | null;

  constructor(search = '', selectedItem: number | null = null) {
    this.search = search;
    this.selectedItem = selectedItem;
  }
}

export class ResultModel {
  searchMap: Map<string, SearchData>; // map that holds a search term and its data
  objectsDataMap: Map<number, ObjectData>; // map that holds a objectId and its data

  constructor(
    searchMap: Map<string, SearchData> = new Map<string, SearchData>(),
    objectsDataMap: Map<number, ObjectData> = new Map<number, ObjectData>(),
  ) {
    this.searchMap = searchMap;
    this.objectsDataMap = objectsDataMap;
  }
}
